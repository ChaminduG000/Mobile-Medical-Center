import React from 'react';
import { Link } from 'react-router-dom';
import './CheckCholesterol.css';
import Header from '../components/Header';
import Background from '../components/Background';

const CheckCholesterol = () => {
    return (
        <div className="cholesterol-page">
            <Header />
            <Background/>
            <div className="cholesterol-container">
                <div className="cholesterol-heading">
                    <h1>Test Your Cholesterol Level </h1>
                </div>
                
                <div className="cholesterol-content">
                    <div className="cholesterol-page-left-section">
                        <div className="cholesterol-steps-textbox">
                            <img src={`/images/Cholesterol-Test.png`} alt="Steps" className="cholesterol-step-image"/>
                            <div className="cholesterol-step-texts">
                                <p>1 - Prick your finger with the lancet provided to draw a drop of blood.</p>
                                <p>2 - Place the blood on a test strip.</p>
                                <p>3 -  Insert the test strip into the meter provided to measure cholesterol levels.</p>
                                <p>4 - Stay still and do not talk as yor blood pressure machine operates.</p>
                            </div>
                        </div>
                        <img src={`/images/Cholesterol-machine.png`} alt="Second" className="cholesterol-second-image"/>
                        <h2>Test cholesterol level | How to check you Blood cholesterol level</h2>
                    </div>

                    <div className="cholesterol-page-right-section">
                        <div className="cholesterol-page-textbox">
                            <img src={`/images/testing_complete_tick.png`} alt="Testing Completed Tick" className="cholesterol-tick-image"/>
                            <h2>Testing Completed</h2>
                            <p className="cholesterol-info">Your Cholesterol is</p>
                            <p className="cholesterol-level">170 mg/dL</p>
                            <button className="cholesterol-test-now-btn">Test Now</button>
                        </div>
                        <Link to="/home" className="cholesterol-back-btn">
                            <img src={`/images/back-icon.png`} alt="Back Arrow" className="cholesterol-back-arrow"/>
                            Back
                        </Link>
                    </div>
                </div>
            </div>
        </div>   
        // </div> 
    );
}

export default CheckCholesterol;
