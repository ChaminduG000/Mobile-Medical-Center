import React from 'react';
import Header from '../components/Header';
import Background from '../components/Background';
import Navbar from '../components/Navbar';
import DetailLine from '../components/DetailLine';
import './ReportSharePage.css';

const ReportSharePage = () => {
    return (
        <div className="report-share-page">
            <Header />
            <Background />
            <Navbar />
            <DetailLine />
            
            <div className="search-bar">
                <img src="/images/search-icon.png" alt="Search Icon" className="share-search-icon"/>
                <span className="search-text">search doctors</span>
                <div className="type-contact-info">
                    <div className="vertical-line"></div>
                    <span>Type contact info</span>
                </div>
            </div>


            <div className="report-share-box">
            <div className="report-share-box-heading">
                    Health Report
            </div>        
                <div className="report-share-box-content">
                    <p>xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                    <p>xxxxxxxxxxxxxxxxxxxxx</p>
                    <p>xxxxxxxxxxxxxxxxxx</p>
                </div>
            </div>

           
                <button className="report-share-btn">
                    <img src="/images/share-icon.png" alt="Hand Icon" className="report-share-icon" />
                    Share
                </button>
            </div>

           
            
        
    );
}

export default ReportSharePage;
