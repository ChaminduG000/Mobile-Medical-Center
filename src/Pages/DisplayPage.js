
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import DetailLine from '../components/DetailLine';
import Background from '../components/Background';
import './DisplayPage.css';
import { collection, getDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase';

const DisplayPage = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
        try {
        const user = auth.currentUser;
            if (user) {
             // Fetch user data from 'profile_data'
            const colRef = collection(db, 'profile_data');
            const docRef = doc(colRef, user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setUserData(docSnap.data());
            } else {
                console.log('No such document!');
            }
        }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    fetchUserData();
    }, []);

    return (
        <div className="display-page">
            <Header />
            <Background/>
            <Navbar />
            <DetailLine />

            <div className="display-main-content">
            {auth.currentUser && userData && (
                <div className="display-left-section">
                    <div className="display-textbox profile">
                        <div className='display-profile-row'>
                        <img src="/images/profile.png" alt="Profile" className='display-image-profile'/>
                        <h2>Profile</h2>
                        </div>
                        <p>Name: {userData.firstName} {userData.lastName}</p>
                        <p>NIC Number: {userData.nicNumber}</p>
                        <p>Date of Birth: {userData.dob}</p>
                        <p>Address: {userData.address}</p>
                        <p>City: {userData.city}</p>
                        <p>Phone Number: {userData.phoneNumber}</p>
                        <p>Email: {userData.emailAddress}</p>
                    </div>
                    <div className="display-textbox work">
                        <h2>Today's Work</h2>
                        <p>Basic Plan activated</p>
                        <p>$3.99</p>
                        <hr />
                        <p>Completed Payment</p>
                    </div>
                </div>
            )}
                <div className="display-right-section">
                    <div className='display-first-row'>
                    <div className="display-textbox heart-rate">
                       
                        <img src="/images/heart_rate.png" alt="Heart Rate" className='display-image-heart-rate' />
                        <p>104 bpm</p>
                        
                        <h3>Heart Rate</h3>
                    </div>
                    <div className="display-textbox cholesterol">
                        <img src="/images/cholesterol.png" alt="Cholesterol" className='display-image-cholesterol' />
                        <p>170 mg/dL</p>
                        <h3>Cholesterol Level</h3>
                    </div>
                    <div className="display-textbox blood-pressure">
                        <img src="/images/blood-pressure.png" alt="Blood Pressure" className='display-image-blood-pressure'/>
                        <p>120 mm Hg</p>
                        <h3>Blood Pressure</h3>
                    </div>
                    </div>
                    <div className='display-second-row'>
        
                    <div className="display-textbox temperature">
                        <img src="/images/glucose-level.png" alt="Glucose Level" className='display-image-glucose-level' />
                        <p>99 mg/dL</p>
                        <h3>Temperature</h3>
                    </div>
                    <div className="display-textbox weight">
                        <img src="/images/Weight1.png" alt="Weight" className='display-image-weight'/>
                        <p>65 kg</p>
                        <h3>Weight</h3>
                    </div>
                    <div className="display-textbox height">
                        <img src="/images/height.png" alt="Weight" className='display-image-height'/>
                        <p>150 cm</p>
                        <h3>Height</h3>
                    </div>
                   
                    
                    </div>
                </div>
            </div>

            {/* <div className="dispplay-activity-box">
                <div className='dispplay-activity-box-row'>
                <img src="/images/bar-chart.png" alt="chart" className='display-image-bar-chart'/>
                <h3>Last 7 days activity</h3>
                    <p style={{ textDecoration: 'underline' }}>Click to see all</p> 
                    </div>
                    <div className="display-activity-content">
                        <p>ID</p>
                        <p>Date</p>
                        <p>Activity</p>
                        <p>Health Condition</p>
                    </div>
            </div> */}

        </div>
    );
}

export default DisplayPage;

