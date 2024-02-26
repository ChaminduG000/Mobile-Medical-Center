import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import './HelpPage.css';
import Background from '../components/Background';

const HelpPage = () => {
    return (
        <div className="help-page">
            <Header />
            <Navbar />
            <Background/>
            <div className="help-content">
                <h1>Health Center - Personal Account</h1>
                <h2>How can we help you?</h2>
                
                <div className="help-search-bar">
                    <img src="/images/search-icon.png" alt="Search" className="help-search-icon" />
                    <input type="text" placeholder="Search questions, key words, or topic" className="help-search-input" />
                </div>
                
                <div className='help-questions'>
                <h3>Common Questions</h3>
                <ul className="help-questions-list">
                    <li>I forgot my password. How do I reset it?</li>
                    <li>How can I change or remove my phone number on my Health Hub account?</li>
                    <li>How can I use a glucose meter?</li>
                    <li>How can I check test results?</li>
                    <li>Can I generate the medical report with a basic package?</li>
                </ul>
                </div>
                <div className="help-footer-container">
                <div className='help-footer'>
                    <h5>More ways we can help</h5>
                    <div className="help-option">
                        <img src="/images/phone.png" alt="Phone" />
                        <span>Contact Us</span>
                    </div>
                    <div className="help-option">
                        <img src="/images/messege.png" alt="Message" />
                        <span>Message</span>
                    </div>
                    <div className="help-option">
                        <img src="/images/computer.png" alt="Laptop" />
                        <span>Technical Help</span>
                    </div>
                    
                </div>
                <img src="/images/image-one.png" alt="Description" className="help-bottom-right-image"/>
                </div>
            </div>
        </div>
    );
}

export default HelpPage;
