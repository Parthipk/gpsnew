import React from 'react';
import './ImgTexFive.css'; // Import the updated CSS file

// Import images
import topView from '../product_images/Group 834 (1) (1).png'; // Update with your actual image path
import sideView from '../product_images/echographe-flex-focus-500-1-large.png'; // Update with your actual image path
import bottomView from '../product_images/surii.png'; // Update with your actual image path
import leftView from '../product_images/needle.png'; // Update with your actual image path

const ImgTexFive = () => {
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
          Our ultrasound machine provides precise imaging, complemented by affordable free-hand needle guides. We arrive fully equipped with essential consumables and offer flexible rental options for 1 to 12 patients. Our skilled team provides full assistance throughout the process.
        </p>
      </div>
    </div>
  );
};

export default ImgTexFive;
