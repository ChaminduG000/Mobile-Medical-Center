import React from 'react';
import { Link } from 'react-router-dom';
import './CheckBloodPressure.css';
import Header from '../components/Header';
import Background from '../components/Background';

const CheckBloodPressure = () => {
    return (
        <div className="bp-page">
            <Header />
            <Background/>
            <div className="bp-page-container">
                <div className="bp-heading-bg">
                    <h1>Test Your Blood Pressure</h1>
                </div>
                
                <div className="bp-page-content">
                    <div className="bp-page-left-section">
                        <div className="bp-steps-textbox">
                            <img src={`/images/blood_pressure_step.png`} alt="Steps" className="bp-step-image"/>
                            <div className="bp-step-texts">
                                <p>1 - Rest for 5 minutes before measuring your blood pressure.</p>
                                <p>2 - Sit in a chair with both feet flat on the ground and back straight.</p>
                                <p>3 - Place your arm at the level of your heart or chest.</p>
                                <p>4 - Stay still and do not talk as your blood pressure machine operates.</p>
                            </div>
                        </div>
                        <img src={`/images/blood_pressure_check.png`} alt="Second" className="bp-second-image"/>
                        <h2>Measure Blood Pressure | How to Use a Blood Pressure Monitor</h2>
                    </div>

                    <div className="bp-page-right-section">
                        <div className="bp-page-textbox">
                            <img src={`/images/testing_complete_tick.png`} alt="Testing Completed Tick" className="bp-tick-image"/>
                            <h2>Testing Completed</h2>
                            <p className="bp-info">Your Blood Pressure is</p>
                            <p className="bp-level">120 mg Hg</p>
                            <button className="bp-test-now-btn">Test Now</button>
                        </div>
                        <Link to="/home" className="bp-back-btn">
                            <img src={`/images/back-icon.png`} alt="Back Arrow" className="bp-back-arrow"/>
                            Back
                        </Link>
                    </div>
                </div>
            </div>
        </div>   
        // </div> 
    );
}

export default CheckBloodPressure;
