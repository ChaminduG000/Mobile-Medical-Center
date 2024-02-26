import React from 'react';
import Navbar from '../components/Navbar';
import './HomePage.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Background from '../components/Background';


const TextBox = ({title, text1, text2, background, titleColor, textColor, width, height,imageSrc}) => (
    <div className="home-textbox" style={{ background, width, height }}>
         <img src={imageSrc} alt={title} className="home-textbox-image" />
       
        <div>
            <h2 style={{ color: titleColor }}>{title}</h2>
            <p style={{ color: textColor }}>{text1}</p>
            <p style={{ color: textColor }}>{text2}</p>
        </div>
    </div>
);

const HomePage = () => {
    return (
        <div className="home-page">
        <Header/>
        <Background/>
        <div className="homepage-container">
            <Navbar />
            <div className="home-content">
                <div className="home-left-column">
                    <Link to="/height">
                        <TextBox 
                            title="Check Your Height" 
                            text1="Click the icon" 
                            text2="and start to test"
                            background="#E3B7F8"
                            titleColor="#740A8F"
                            textColor="#333BE9"
                            // width="600px"
                            // height="200px"
                            imageSrc={`/images/height.png`}
                        />
                    </Link>
                    <Link to="/glucose-test">
                        <TextBox 
                            title="Glucose Test" 
                            text1="Test Your Glucose Level" 
                            text2="Click the icon and start to test"
                            background="#9DDAE3"
                            titleColor="#1E55E5"
                            textColor="#1E55E5"
                            // width="600px"
                            // height="200px"
                            imageSrc={`/images/Glucose_Monitor.png`}
                        />
                    </Link>
                    <Link to="/weight">
                        <TextBox 
                            title="Check Your Body Weight" 
                            text1="Check Your Body Weight" 
                            text2="We calculate Your BMI Value"
                            background="#FDFDFF"
                            titleColor="#4C62B0"
                            textColor="#4C62B0"
                            // width="600px"
                            // height="200px"
                            imageSrc={`/images/weight.png`}
                        />
                    </Link>
                </div>
                <div className="home-right-column">
                    <Link to="/blood-pressure">
                        <TextBox 
                            title="Blood Pressure Test" 
                            text1="Test Your Blood Pressure" 
                            text2="Click the icon and start to test"
                            background="#9DACE3"
                            titleColor="#1E55E5"
                            textColor="#1E55E5"
                            // width="600px"
                            // height="200px"
                            imageSrc={`/images/Blood-Pressure-Monitor.png`}

                        />
                    </Link>
                    <Link to="/heart-rate">
                        <TextBox 
                            title="ECG Test" 
                            text1="Electrical signals in the heart" 
                            text2="Click the icon and start to test"
                            background="#F095FF"
                            titleColor="#1E55E5"
                            textColor="#1E55E5"
                            // width="600px"
                            // height="200px"
                            imageSrc={`/images/heart-rate.png`}

                        />
                    </Link>
                    <Link to="/Cholesterol">
                        <TextBox 
                            title="Cholesterol Test" 
                            text1="Check Your Cholesterol level" 
                            text2="Click the icon and start to test"
                            background="#CEDAF9"
                            titleColor="#1E55E5"
                            textColor="#1E55E5"
                            // width="600px"
                            // height="200px"
                            imageSrc={`/images/cholesterol.png`}

                        />
                    </Link>
                </div>
            </div>
            </div>
        </div>
    );
}

export default HomePage;





















// import React from 'react';
// import './HomePage.css';
// import Header from '../components/Header';
// import Navbar from '../components/Navbar';

// const HomePage = () => {
//     return (
//         <div className="page-container">
//         <Header />
//         <div className="home-container">
//             <Navbar />
//             <div className="content">
//                 <div className="left-section">
//                     <TextBox 
//                         title="Check Your Height"
//                         desc1="Click the icon and start to test"
//                         bgColor="#E3B7F8"
//                         link="/HeightPage"
//                     />
//                     <TextBox 
//                         title="Glucose Test"
//                         desc1="Test Your Glucose Level"
//                         desc2="Click the icon and start to test"
//                         bgColor="#9DDAE3"
//                         link="/GlucosePage"
//                     />
//                     <TextBox 
//                         title="Check Your Body Weight"
//                         desc1="Check Your Body Weight"
//                         desc2="We calculate Your BMI Value"
//                         bgColor="#FDFDFF"
//                         link="/WeightPage"
//                     />
//                 </div>

//                 <div className="right-section">
//                     <TextBox 
//                         title="Blood Pressure Test"
//                         desc1="Test Your Blood Pressure"
//                         desc2="Click the icon and start to test"
//                         bgColor="#9DACE3"
//                         link="/BloodPressurePage"
//                     />
//                     <TextBox 
//                         title="ECG Test"
//                         desc1="Electrical signals in the heart"
//                         desc2="Click the icon and start to test"
//                         bgColor="#F095FF"
//                         link="/EcgPage"
//                     />
//                     <TextBox 
//                         title="Cholesterol Test"
//                         desc1="Check Your Cholesterol Level"
//                         desc2="Click the icon and start to test"
//                         bgColor="#CEDAF9"
//                         link="/CholesterolPage"
//                     />
//                 </div>
//             </div>
//         </div>
//         </div>
//     );
// }

// const TextBox = ({ title, desc1, desc2, bgColor, link }) => {
//     return (
//         <div className="textbox" style={{ background: bgColor }}>
//             <div className="image-container">
//                 {/* Placeholder for image */}
//             </div>
//             <div className="text-container">
//                 <h2>{title}</h2>
//                 <p>{desc1}</p>
//                 <p>{desc2}</p>
//             </div>
//         </div>
//     );
// }

// export default HomePage;
