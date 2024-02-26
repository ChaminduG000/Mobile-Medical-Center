import React from 'react';
import { Link } from 'react-router-dom';
import './CheckHeight.css';
import Header from '../components/Header';
import Background from '../components/Background';

const CheckHeight= () => {
    return (
        <div className="height-page">
            <Header />
            <Background/>
            <div className="height-page-container">
                <div className="height-heading">
                    <h1>Check Your Height</h1>
                </div>
                
                <div className="height-page-content">
                    <div className="height-page-left-section">
                        <div className="height-steps-textbox">
                            <img src={`/images/height_test.png`} alt="Steps" className="height-step-image"/>
                            <div className="height-step-texts">
                                <p>1 - Take off your shoes and stand on a flat surface with your heels against the wall.</p>
                                <p>2 - Ensure that your heels, shoulders, and the back of your head are all touching the wall.</p>
                                <p>3 - Your body should form a straight line against the wall.</p>
                            </div>
                        </div>
                        <img src={`/images/blood_pressure_check.png`} alt="Second" className="height-second-image"/>
                        <p>Height | How to check your Height</p>
                    </div>

                    <div className="height-page-right-section">
                        <div className="height-page-textbox">
                            <img src={`/images/testing_complete_tick.png`} alt="Testing Completed Tick" className="height-tick-image"/>
                            <h2>Testing Completed</h2>
                            <p className="height-info">Your Height is</p>
                            <p className="height-level">180 cm</p>
                            <button className="height-test-now-btn">Test Now</button>
                        </div>
                        <Link to="/home" className="height-back-btn">
                            <img src={`/images/back-icon.png`} alt="Back Arrow" className="height-back-arrow"/>
                            Back
                        </Link>
                    </div>
                </div>
            </div>
        </div>   
        // </div> 
    );
}

export default CheckHeight;