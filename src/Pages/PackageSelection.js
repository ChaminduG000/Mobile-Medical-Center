import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './PackageSelection.css';
import Background from '../components/Background';

import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

const PackageSelection= () => {
    const navigate = useNavigate();  
  
    // State to store the selected package type
  const [selectedPackage, setSelectedPackage] = useState('');

  // Function to handle package selection
  const handleSelect = async (packageType) => {
    setSelectedPackage(packageType); // Using selectedPackage

    // Get the current user
    const user = auth.currentUser;

    // Check if the user is signed in
    if (user) {
      try {
        // Save the selected package under the user's ID
        const packageDocRef = doc(db, 'package', user.uid);
        await setDoc(packageDocRef, {
          packageType: packageType,
        });

        // Navigate to the payment page
        navigate('/payment');
      } catch (error) {
        console.error('Error saving package selection to Firestore:', error);
      }
    }
  };

  // Using selectedPackage in a simple console log statement
  console.log('Selected Package:', selectedPackage);

  
  return (

    <div className="package-page">
      <Header/>
      <Background/>
      
      <main>
      <div className="package-selection-container">
                <div className="package-heading">
                    <h1>Package Selection </h1>
                </div>
      <div className="package-selection-content">
        <h1 className="choose-your-plan">Choose your plan</h1>
        <div className="package-boxes">
          <div className="package-box-premium">
            <h2 className="package-title preminum">Premium Package</h2>
            <p className="package-price">$5.99</p>
            <ul className="package-features">
              <li><span className="tick-mark"></span>Recommendations / Health Plans</li>
              <li><span className="tick-mark"></span>Stress Detection</li>
              <li><span className="tick-mark"></span>Access to share the medical report with Healthcare Professionals</li>
              <li><span className="tick-mark"></span>Access to download the medical report</li>
            </ul>
            {/* <button className="select-button">Select</button> */}
            <button className="package-select-button" onClick={() => handleSelect('Premium')}>Select</button>
          </div>
          <div className="package-box-basic">
            <h2 className="package-title basic">Basic Package</h2>
            <p className="package-price">$3.99</p>
            <ul className="package-features">
              <li><span className="tick-mark"></span>Access to download the medical report</li>
              <li><span className="cross-mark"></span>Stress Detection</li>
              <li><span className="cross-mark"></span>Recommendations / Health Plans</li>
              <li><span className="cross-mark"></span>Access to share the medical report with Healthcare Professionals</li>
            </ul>
            <button className="package-select-button" onClick={() => handleSelect('Basic')}>Select</button>
          </div>
          </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
    
    );
}

export default PackageSelection;