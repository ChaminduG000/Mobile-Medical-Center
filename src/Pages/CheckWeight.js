import React from 'react';
import { Link } from 'react-router-dom';
import './CheckWeight.css';
import Header from '../components/Header';
import Background from '../components/Background';

const CheckWeight= () => {
    return (
        <div className="weight-page">
            <Header />
            <Background/>
            <div className="weight-page-container">
                <div className="weight-heading">
                    <h1>Test Your Weight</h1>
                </div>
                
                <div className="weight-page-content">
                    <div className="weight-page-left-section">
                        <div className="weight-steps-textbox">
                            <img src={`/images/weight_image.png`} alt="Steps" className="weight-step-image"/>
                            <div className="weight-step-texts">
                                <p>1 - Place the digital weighing scale on a flat and level surface.</p>
                                <p>2 - Step onto the center of the scale with bare or socked feet. </p>
                                <p>3 - Keep your body still and stand up straight with your arms at your sides.</p>
                                <p>4 - Give the scale a moment to stabilize and calculate your weight.</p>
                            </div>
                        </div>
                        <img src={`/images/weight_video.png`} alt="Second" className="weight-second-image"/>
                        <p>Body Weight | How to check your body weight</p>
                    </div>

                    <div className="weight-page-right-section">
                        <div className="weight-page-textbox">
                            <img src={`/images/testing_complete_tick.png`} alt="Testing Completed Tick" className="weight-tick-image"/>
                            <h2>Testing Completed</h2>
                            <p className="weight-info">Your Weight is</p>
                            <p className="weight-level">65 kg</p>
                            <button className="weight-test-now-btn">Test Now</button>
                        </div>
                        <Link to="/home" className="weight-back-btn">
                            <img src={`/images/back-icon.png`} alt="Back Arrow" className="weight-back-arrow"/>
                            Back
                        </Link>
                    </div>
                </div>
            </div>
        </div>   
        // </div> 
    );
}

export default CheckWeight;
