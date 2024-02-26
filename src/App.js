import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './Pages/WelcomePage';
import Signup from './Pages/Signup';
import Setup from './Pages/SetupPage'
import './App.css';
import LoginPage from './Pages/LoginPage';
import PackageSelection from './Pages/PackageSelection';
import PaymentCompletion from './Pages/PaymentCompletion';
import HomePage from './Pages/HomePage';
import CheckGlucosePage from './Pages/CheckGlucosePage'; 
import CheckBloodPressure from './Pages/CheckBloodPressure';
import CheckCholesterol from './Pages/CheckCholesterol';
import CheckHeartRate from './Pages/CheckHeartRate';
import CheckWeight from './Pages/CheckWeight';
import CheckHeight from './Pages/CheckHeight';
import QRscanPage from './Pages/QRscanPage';
import HelpPage from './Pages/HelpPage';
import DisplayPage from './Pages/DisplayPage';
import ReportGeneratePage from './Pages/ReportGeneratePage';
import ReportSharePage from './Pages/ReportSharePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<WelcomePage/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/setup" element={<Setup/>}/>
        <Route path="/packages" element={<PackageSelection/>}/>
        <Route path="/payment" element={<PaymentCompletion/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/glucose-test" element={<CheckGlucosePage/>} />
        <Route path="/blood-pressure" element={<CheckBloodPressure/>} />
        <Route path="/Cholesterol" element={<CheckCholesterol/>} />
        <Route path="/heart-rate" element={<CheckHeartRate/>} />
        <Route path="/weight" element={<CheckWeight/>} />
        <Route path="/height" element={<CheckHeight/>} />
        <Route path="/qrscanpage" element={<QRscanPage/>} />
        <Route path="/help" element={<HelpPage/>} />
        <Route path="/more" element={<DisplayPage/>} />
        <Route path="/report-generate" element={<ReportGeneratePage/>} />
        <Route path='/report-share' element={<ReportSharePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
