import React from 'react';
import './M3.css'; // Updated CSS import

// Importing images from the images directory
import leftImage from '../NEWIMG/bio.jpeg';  // Image for the left side
import img1 from '../NEWIMG/Frame 41.png';  // First image for the right side
import img2 from '../NEWIMG/Frame 42.png';  // Second image for the right side
import img3 from '../NEWIMG/Frame 43.png';  // Third image for the right side
import img4 from '../NEWIMG/Frame 44.png';  // Fourth image for the right side
import img5 from '../NEWIMG/Frame 45.png';  // Fifth image for the right side

const M3 = () => {
  return (
    <>
      <h1 className="m3-header">Welcome to Our Image Gallery</h1>
      <p className="m3-lorem-ipsum">
      Introducing our advanced biopsy box, designed to enhance accuracy and streamline the biopsy process. With its innovative design, it ensures precise needle placement, improving overall accuracy. Experience efficient and quick operations, making the biopsy procedure quick and easy to use. Elevate your diagnostic capabilities with our state-of-the-art solution!
      </p>

      <div className="m3-outer-container">
        <div className="m3-container">
          <div className="m3-left">
            <img
              src={leftImage}
              alt="Left Side"
              className="m3-left-image"
            />
          </div>
          <div className="m3-right">
            <div className="m3-right-images-container">
              {/* Using different images for the right side */}
              <img src={img1} alt="Rounded Image 1" className="m3-right-image" />
              <img src={img2} alt="Rounded Image 2" className="m3-right-image" />
              <img src={img3} alt="Rounded Image 3" className="m3-right-image" />
              <img src={img4} alt="Rounded Image 4" className="m3-right-image" />
              <img src={img5} alt="Rounded Image 5" className="m3-right-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default M3;
