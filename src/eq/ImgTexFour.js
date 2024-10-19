// ImgTexFour.js
import React from 'react';
import './ImgTexOne.css'; // Import the updated CSS file

// Import images from your local folder
import topViewImage from '../images/Group 861 (1).png';
import sideViewImage from '../product_images/products-coaxial-needle2.png';
import bottomViewImage from '../product_images/products-coaxial-needle.png'; // Add the third image

const ImgTexFour = () => {
  // State to hold the currently selected image
  const [mainImage, setMainImage] = React.useState(topViewImage);

  // Array of image sources with the three selected images
  const images = {
    top: topViewImage,
    side: sideViewImage,
    bottom: bottomViewImage, // Add the third image
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
          </div>
        </div>
      </div>
      <div className="imgtexone_rightColumn">
        <h2 className="imgtexone_heading">Our Product Overview</h2>
        <p className="imgtexone_description">
          Coaxial Needles are designed for efficient and precise tissue sampling during biopsy procedures. Featuring an inner and outer needle, they allow for multiple samples through a single insertion, minimizing patient discomfort and reducing tissue trauma. Ideal for healthcare professionals, coaxial needles enhance accuracy, reduce procedure time, and improve overall diagnostic outcomes.
        </p>
      </div>
    </div>
  );
};

export default ImgTexFour;
