
import React from 'react';
import './WelcomePage.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Background from '../components/Background';

function WelcomePage(props) {

    return (
        <div className="welcome-page-container">
            <Header />
            <Background/>
        <div className="welcome-container">
            <div className="welcome-content">
            <div className="welcome-buttons">
                    <Link to="/signup" className="welcome-sign-up-button">Sign In</Link>
                    <Link to="/login" className="welcome-log-in-button">Log In</Link>
                </div>
                <h1>Welcome to HEALTH HUB!</h1>
                
                <video controls>
                    <source src="/videos/video1.mp4" type="video/mp4" />
                </video>
            </div>
            </div>
        </div>
    );
}

export default WelcomePage;











