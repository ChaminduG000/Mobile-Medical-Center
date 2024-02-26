import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageOne from '../components/ImageOne';
import './SetupPage.css';
import Background from '../components/Background';

import { collection, setDoc, doc } from 'firebase/firestore';
import { auth, db,onAuthStateChanged} from '../firebase';

const SetupPage = () => {
    const navigate = useNavigate();  

    const [user, setUser] = useState(null); 

    const [profileData, setProfileData] = useState({
      emailAddress: '',
      firstName: '',
      lastName: '',
      password: '',
      nicNumber: '',
      dob: '',
      address: '',
      city: '',
      postalCode: ''
    });  
  

    useEffect(() => {
      // Assuming you have a way to retrieve user information after authentication
      // For example, if using Firebase authentication:
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        }
      });
  
      // Clean up the subscription on unmount or if needed
      return () => unsubscribe();
    }, []);



    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setProfileData({
        ...profileData,
        [name]: value
      });
    };

    const handleSaveToFirestore = async () => {
      try {
        const colRef = collection(db, 'profile_data');
        const docRef = doc(colRef, user.uid); // Use user ID as document ID
        await setDoc(docRef, profileData);
        console.log('Data saved to Firestore');
      } catch (error) {
        console.error('Error saving data to Firestore:', error);
      }

      navigate('/packages');
    };

    return (
      <div className="setup-page">
        <Header/>
        <Background/>
        <div className="main-content">
          <h1 className="page-heading">Set up your profile</h1>
 
          <p className="sub-text">
            Please provide the following information as shown on your passport or ID.
          </p>

          <input 
          type="text" 
          className="input-box email" 
          placeholder="Email Address"
          name="emailAddress"
          onChange={handleInputChange}
          />
  
          <div className="name-row">
            <input 
            type="text" 
            className="input-box first-name" 
            placeholder="First Name"
            name="firstName"
            onChange={handleInputChange}
            />

            <input 
            type="text" 
            className="input-box last-name" 
            placeholder="Last Name" 
            name="lastName"
            onChange={handleInputChange}
            />
          </div>
          

          <input 
          type="password" 
          className="input-box create-password" 
          placeholder="Create Password" 
          name="password"
          onChange={handleInputChange}
          />

          <div className="password-info">
            <ul className='password-info-text'>
              <li>8 or more characters</li>
              <li>Use 2 of the following: letters, numbers, or symbols</li>
            </ul>
          </div>

          <input type="text" 
          className="input-box nic-number" 
          placeholder="NIC Number"
          name="nicNumber"
          onChange={handleInputChange}
          />

          <input type="text" 
          className="input-box dob" 
          placeholder="Date of Birth" 
          name="dob"
          onChange={handleInputChange}
          />

          <input 
          type="text" 
          className="input-box address" 
          placeholder="Address Line" 
          name="address"
          onChange={handleInputChange}
          />

          <div className="city-postal-row">
            <input 
            type="text" 
            className="input-box city" 
            placeholder="City" 
            name="city"
            onChange={handleInputChange}
            />

            <input 
            type="text" 
            className="input-box postal-code" 
            placeholder="Postal Code" 
            name="postalCode"
            onChange={handleInputChange}
            />
          </div>

          <div className='setup-privacy-statement-text'>
              <div className='setup-box'></div>
              <p>By clicking the button below, I agree to bound by 
                  Health Hub’s User Agreement and the Privacy Statement.</p>
          </div>
        </div>
        <button className='create-account-button' onClick={handleSaveToFirestore}>Agree and Create Account</button>
        <ImageOne/>
        <Footer/>
      </div>
    );
  };
  

export default SetupPage;