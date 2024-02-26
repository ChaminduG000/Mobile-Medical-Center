import React, { useEffect } from 'react';
import './Background.css';

const Background = ({ children }) => {

    useEffect(() => {
        function setHeight() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);

            const backgroundContainer = document.querySelector('.background-container');
            if (backgroundContainer) {
                backgroundContainer.style.height = `${window.innerHeight}px`;
            }
        }

        // Set the height initially
        setHeight();

        // Add the event listener
        window.addEventListener('resize', setHeight);

        // Cleanup on component unmount
        return () => window.removeEventListener('resize', setHeight);  
    }, []);

    return (
        <div className="background-container">
            {children}
        </div>
    );
}

export default Background;

























// import './Background.css'; 

// const Background = () => {
//   return (
//     <div className="background-container">
//       <img
//         src={'/images/background.png'}
//         alt="Background"
//         className="background-image"
//       />
//       <img
//         src={'/images/corner1.png'}
//         alt="Corner1"
//         className="corner1-image" 
//       />
//         <img
//         src={'/images/corner2.png'}
//         alt="Corner2"
//         className="corner2-image" 
//       />
//     </div>
//   );
// };

// export default Background;

