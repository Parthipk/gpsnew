import React from 'react';
import './ImgTexOne.css'; // Import the updated CSS file

// Import images
import topView from '../product_images/Stepper-grid guided.png'; // Update with your actual image path
import sideView from '../product_images/echographe-flex-focus-500-1-large.png'; // Update with your actual image path
import bottomView from '../product_images/eq3.png'; // Update with your actual image path
import leftView from '../product_images/ss1.png'; // Update with your actual image path

const ImgTexOne = () => {
  // State to hold the currently selected image
  const [mainImage, setMainImage] = React.useState(topView);

  // Array of image sources
  const images = {
    top: topView,
    side: sideView,
    bottom: bottomView,
    left: leftView,
  };

  return (
    <div className="imgtexone_container">
      <div className="imgtexone_leftColumn">
        <div className="imgtexone_imageWrapper">
          {/* Primary Image */}
          <div>
            <img src={mainImage} alt="Product" className="imgtexone_mainImage" />
          </div>

          {/* Thumbnails */}
          <div className="imgtexone_thumbnailContainer">
            <img 
              src={images.top} 
              alt="Top View" 
              className="imgtexone_thumbnail" 
              onClick={() => setMainImage(images.top)} 
            />
            <img 
              src={images.side} 
              alt="Side View" 
              className="imgtexone_thumbnail" 
              onClick={() => setMainImage(images.side)} 
            />
            <img 
              src={images.bottom} 
              alt="Bottom View" 
              className="imgtexone_thumbnail" 
              onClick={() => setMainImage(images.bottom)} 
            />
            <img 
              src={images.left} 
              alt="Left View" 
              className="imgtexone_thumbnail" 
              onClick={() => setMainImage(images.left)} 
            />
          </div>
        </div>
      </div>
      <div className="imgtexone_rightColumn">
        <h2 className="imgtexone_heading">Our Product Overview</h2>
        <p className="imgtexone_description">
          Our advanced ultrasound system ensures precise imaging and is complemented by an in-house stepper stabilizer for guided procedures. We arrive fully equipped with essential consumables and offer flexible rental options for 1 to 12 patients. Our skilled team provides comprehensive assistance throughout the process.
        </p>
      </div>
    </div>
  );
};

export default ImgTexOne;
