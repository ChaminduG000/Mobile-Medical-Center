import React from 'react';
import './ImageOne.css';

const ImageOne = () => {
  return (
    <div className="imageone-container">
      <img src="/images/image-one.png" alt="One" className="image-one" />
      <img src="/images/image-two.png" alt="Two" className="image-two" />
    </div>
  );
};

export default ImageOne;
