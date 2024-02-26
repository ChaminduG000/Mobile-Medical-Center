import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <div className="navbar-item">
                <Link to="/home" className="navbar-link">
                    <span className="navbar-text">Home</span>
                    </Link>
                    <div className="dropdown-icon">▼</div>
                </div>
                <div className="navbar-item">
                <Link to="/help" className="navbar-link">
                    <span className="navbar-text">Help</span>
                    </Link>
                    <div className="dropdown-icon">▼</div>
                </div>
                <div className="navbar-item">
                <Link to="/more" className="navbar-link">
                    <span className="navbar-text">More</span>
                    </Link>
                    <div className="dropdown-icon">▼</div>
                </div>
                <Link to="/qrscanpage" className="navbar-link">
                <span className="navbar-text">HEALTH HUB App</span>
                </Link>
            </div>

            <div className="navbar-right">
                <img src="/images/search-icon.png" alt="search" className="navbar-icon search-icon" />
                <img src="/images/notifications-icon.png" alt="notification" className="navbar-icon notification-icon" />
                <img src="/images/Settings-icon.png" alt="setting" className="navbar-icon setting-icon" />
                <img src="/images/profile-icon.png" alt="profile" className="navbar-icon profile-icon" />
            </div>
        </div>
    );
}

export default Navbar;
