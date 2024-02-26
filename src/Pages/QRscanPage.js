import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import './QRscanPage.css';
import Background from '../components/Background';

const QRscanPage = () => {
    return (
        <div className="qrscan-page">
            <Header />
            <Background/>
            <Navbar />

            <div className="qrscan-content">
                <img src="/images/cell-phone-icon.png" alt="Phone" className="qrscan-phone-image" />

                <span>Scan the QR code or get a link to download the Health Hub app</span>

                <div className="qrscan-row">
                    <img src="/images/qr_code.png" alt="QR Code" className="qr-code" />

                    <div className="qrscan-textbox-section">
                        <input type="text" placeholder="Mobile Number" className="mobile-input" />
                        <p>By clicking below button,  you agree to receive a text message
                        with a link to the HEALTH HUB app.</p>
                        <button className="qrscan-link-button">Send me the link</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QRscanPage;
