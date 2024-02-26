import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
// import { getDatabase, ref,push, set } from "firebase/database";


import { db } from "../firebase"; 
import { setDoc, doc, collection } from 'firebase/firestore';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageOne from '../components/ImageOne';
import Background from '../components/Background';
import './Signup.css'

const Signup= () => {
  const navigate = useNavigate();  

  const navigateToLoginPage = () => {
    navigate('/login');  
  };

  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth, "recaptcha-container", 
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          }, 
          "expired-callback": () => {},
        });

    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
        
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);


        try {
         // Save phone number to 'contact' collection
         const contactColRef = collection(db, 'contact');
         const contactDocRef = doc(contactColRef, res.user.uid); // Use user ID as document ID
         await setDoc(contactDocRef, {
           phoneNumber: ph,
         });
         console.log('Phone number saved to Firestore in the contact collection');
         
         // Save user profile data to 'profile_data' collection
         const profileColRef = collection(db, 'profile_data');
         const profileDocRef = doc(profileColRef, res.user.uid); // Use user ID as document ID
         await setDoc(profileDocRef, {
            emailAddress: '', 
            firstName: '',
            lastName: '',
            password: '',
            nicNumber: '',
            dob: '',
            address: '',
            city: '',
            postalCode: '',
            phoneNumber: ph,
          });

          // Save package selection data to 'package' collection
        const packageColRef = collection(db, 'package');
        const packageDocRef = doc(packageColRef, res.user.uid);
        await setDoc(packageDocRef, {
          
          // Add the package selection data here
          packageType: '', // Add the actual package type here
        });

          console.log('User data saved to Firestore');

          // Redirect to package selection after phone verification
        navigate('/package-selection', { state: { userId: res.user.uid } });

        } catch (error) {
          console.error('Error saving user data to Firestore:', error);
        }


        setUser(res.user);
        setLoading(false);

        navigate('/setup');
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <div className="signup-page">
      <Header/>
      <Background/>   
      <button className="signup-login-button" onClick={navigateToLoginPage}>Login</button>  
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <></>
          // <h2 className="text-center text-white font-medium text-2xl">
          //   👍Login Success
          // </h2>
        ) : (
          <div className="signup-container">
            <h1 className="title">Sign In for HEALTH HUB</h1>
            {showOTP ? (
              <>
                <div className="signup-page-icons">
                  <BsFillShieldLockFill size={30} />
                </div>
                <label
                  htmlFor="otp"
                  className="verify-text"
                >
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container "
                ></OtpInput>
                <button
                  onClick={onOTPVerify}
                  className="send-code-button"
                >
                  {loading && (
                    <CgSpinner size={20} className="button-animation" />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <div className="signup-page-icons">
                  <BsTelephoneFill size={30} />
                </div>
                <label
                  htmlFor=""
                  className="verify-text"
                >
                  Verify your phone number
                </label>
                <PhoneInput country={"in"} value={ph} onChange={setPh} className = "phone-input-container" />
                <button
                  onClick={onSignup}
                  className="send-code-button"
                >
                  {loading && (
                    <CgSpinner size={20} className="button-animation" />
                  )}
                  <span>Send code via SMS</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
      <ImageOne />
      <Footer />
    </div>
  );
};

export default Signup;





