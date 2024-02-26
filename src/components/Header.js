import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img src="/images/logo.png" alt="Logo" className="header-logo" />
      <div className="header-texts">
        <h1 className="header-title">HEALTH HUB</h1>
        <p className="header-subtitle">Journey to Health, Wherever You Are</p>
      </div>
    </div>
  );
};

export default Header;
