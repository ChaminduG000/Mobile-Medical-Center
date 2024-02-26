import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageOne from '../components/ImageOne';
import Background from '../components/Background';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'

import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../firebase";

const LoginPage= (props) => {
  const navigate = useNavigate();  

  const navigateToSignup = () => {
    navigate('/signup');  
  };

  const navigateToPackageSelection = () => {
    navigate('/packages');  
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
            onLogin();
          }, 
          "expired-callback": () => {},
        });

    }
  }

  function onLogin() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  async function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        // Check if the user's phone number exists in the 'contact' collection
        const contactQuery = query(collection(db, 'contact'), where('phoneNumber', '==', ph));
        const contactSnapshot = await getDocs(contactQuery);

        if (contactSnapshot.empty) {

          // If the user doesn't exist in the 'contact' collection, display a message
          toast.error("First Sign In to the System");
          setLoading(false);
        } else {

          // If the user exists, proceed to package selection
          setUser(res.user); 
          navigateToPackageSelection();
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <div className="login-page">
      <Header/>
      <Background/>    
      <button className="login-signup-button" onClick={navigateToSignup}>Sign Up</button>  
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <></>
        ) : (
          <div className="login-container">
            <h1 className="title"> Login to HEALTH HUB</h1>
            {showOTP ? (
              <>
                <div className="login-page-icons">
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
                  className="verify-code-button"
                >
                  {loading && (
                    <CgSpinner size={20} className="button-animation" />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <div className="login-page-icons">
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
                  onClick={onLogin}
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

export default LoginPage;

