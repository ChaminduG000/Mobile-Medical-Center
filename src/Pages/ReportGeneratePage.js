import React from 'react';
import Header from '../components/Header';
import Background from '../components/Background';
import Navbar from '../components/Navbar';
import DetailLine from '../components/DetailLine';
// import { PDFDownloadLink } from "@react-pdf/renderer";
// import PdfTemplate from "../components/PdfTemplate";
import './ReportGeneratePage.css';

const ReportGeneratePage = () => {
  
    return (
        <div className="report-generate-page">
            <Header />
            <Background />
            <Navbar />
            <DetailLine />
            

            <div className="report-generate-box">
            <div className="report-generate-box-heading">
                    Health Report
            </div>        
                <div className="report-generate-box-content">
                    <p>xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                    <p>xxxxxxxxxxxxxxxxxxxxx</p>
                    <p>xxxxxxxxxxxxxxxxxx</p>
                </div>
            </div>
            

            <div className='report-generate-button-container'>

            <div className="generate-download-section">
                <p>Get Download link to your phone</p>
                <button className="generate-download-btn">
                {/* <PDFDownloadLink document={<PdfTemplate healthData={healthData}/>} fileName="report.pdf">
                    {({ blob, url, loading, error }) =>
                        loading ? "Loading document..." : "Download PDF"
                    }
                </PDFDownloadLink> */}
                    Click Here
                    <img src="/images/hand-icon.png" alt="Hand Icon" className="generate-hand-icon" />
                </button>
            </div>

            <div className="generate-email-section">
                <p>Send an email</p>
                <button className="generate-email-btn">
                    Click Here
                    <img src="/images/hand-icon.png" alt="Hand Icon" className="generate-hand-icon" />
                </button>
            </div>
            </div>
            </div>
        
    );
}

export default ReportGeneratePage;
