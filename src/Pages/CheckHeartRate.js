import React from 'react';
import { Link } from 'react-router-dom';
import './CheckHeartRate.css';
import Header from '../components/Header';
import Background from '../components/Background';

const CheckHeartRate = () => {
    return (
        <div className="heart-rate-page">
            <Header />
            <Background/>
            <div className="heart-rate-page-container">
                <div className="heart-rate-heading">
                    <h1>Test Your Heart Rate </h1>
                </div>
                
                <div className="heart-rate-page-content">
                    <div className="heart-rate-page-left-section">
                        <div className="heart-rate-steps-textbox">
                            <img src={`/images/heart-rate-image.png`} alt="Steps" className="heart-rate-step-image"/>
                            <div className="heart-rate-step-texts">
                                <p>1 - Rest for 5 minutes before measuring your blood pressure.</p>
                                <p>2 - Sit in a chair.</p>
                                <p>3 - Connect the 3 electrodes chest or limb to detect heart rate.</p>
                                <p>4 - Stay still and do not talk as your blood pressure machine operates.</p>
                            </div>
                        </div>
                        <img src={`/images/heart-rate-video.png`} alt="Second" className="heart-rate-second-image"/>
                        <h2>ECG  Test | How to check you Heart Rate</h2>
                    </div>

                    <div className="heart-rate-page-right-section">
                        <div className="heart-rate-page-textbox">
                            <img src={`/images/testing_complete_tick.png`} alt="Testing Completed Tick" className="heart-rate-tick-image"/>
                            <h2>Testing Completed</h2>
                            <p className="heart-rate-info">Your Heart Rate is</p>
                            <p className="heart-rate-level">104 bpm</p>
                            <button className="heart-rate-test-now-btn">Test Now</button>
                        </div>
                        <Link to="/home" className="heart-rate-back-btn">
                            <img src={`/images/back-icon.png`} alt="Back Arrow" className="heart-rate-back-arrow"/>
                            Back
                        </Link>
                    </div>
                </div>
            </div>
        </div>   
        // </div> 
    );
}

export default CheckHeartRate;
