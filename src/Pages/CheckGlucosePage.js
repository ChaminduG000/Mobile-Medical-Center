import React from 'react';
import { Link } from 'react-router-dom';
import './CheckGlucosePage.css';
import Header from '../components/Header';
import Background from '../components/Background';

const CheckGlucosePage = () => {
    return (
        <div className="glucose-page">
            <Header />
            <Background/>
        <div className="glucose-page-container">
            <div className="glucose-heading-bg">
                <h1>Test your glucose level</h1>
            </div>
            
            <div className="glucose-page-content">
                <div className="glucose-page-left-section">
                    
                    <img src={`/images/glucose_test_step.png`} alt="First" className="glucose-test-first-image"/>
                    <img src={`/images/glucose_check.png`} alt="Second" className="glucose-test-second-image"/>
                    <p>Checking Blood Glucose Level | How to Use a Glucose Meter</p>
                </div>
                
                <div className="glucose-page-right-section">
                <div className="glucose-page-textbox">
                    <img src={`/images/testing_complete_tick.png`} alt="Testing Completed Tick" className="glucose-page-tick-image"/>
                    <h2>Testing Completed</h2>
                    <p className="glucose-info">Your Glucose level is</p>
                    <p className="glucose-level">99mg/dL</p>
                    <button className="glucose-page-test-now-btn">Test Now</button>
                </div>
                <Link to="/home" className="glucose-page-back-btn">
                <img src={`/images/back-icon.png`} alt="Back Arrow" className="glucose-page-back-arrow"/>
                Back
                </Link>

                </div>
            </div>
        </div>
    </div>    
    );
}

export default CheckGlucosePage;
