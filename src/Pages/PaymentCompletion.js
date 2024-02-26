import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageOne from '../components/ImageOne';
import './PaymentCompletion.css';
import Background from '../components/Background';

const PaymentCompletion = () => {
    const navigate = useNavigate();  
  
    const handleCheckout= () => {
      navigate('/home');  
    };
        
    return (
      <div className="payment-page">
            <Header />
            <Background/>
            
        <div className="payment-container">
      
            <h1 className="payment-heading">Payment Completion</h1>
            
            <div className="payment-textbox-container">
                <input type="text" placeholder="Debit or Credit Card Number" className="payment-textbox" />
                <input type="text" placeholder="Card Type" className="payment-textbox" />
                <input type="text" placeholder="Expire Date" className="payment-textbox" />
                <input type="text" placeholder="Security Code" className="payment-textbox" />
                <input type="text" placeholder="Billing Address" className="payment-textbox" />
            </div>
            
            <button className="checkout-button" onClick={handleCheckout}>Check Out</button>
        </div>
            <ImageOne/>
            <Footer/>
      </div>
    );

    
    
  };
  
export default PaymentCompletion;