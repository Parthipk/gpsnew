// ImgTexOne.js
import React from 'react';
import './ImgTexOne.css'; // Import the updated CSS file

// Import images from your local folder
import topViewImage from  '../images/Sure123.png';
import sideViewImage from '../product_images/surii.png';
import bottomViewImage from '../product_images/surii2.png'; // Add the third image

const ImgTexOne = () => {
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
          The Surefire Needle Guide enhances biopsy accuracy with its advanced design, ensuring precise needle placement. Engineered for ease of use, it streamlines the biopsy process, reducing procedure time and improving diagnostic outcomes. Ideal for healthcare professionals seeking reliable performance, the Surefire Needle Guide provides consistent, high-quality results for effective prostate cancer detection and patient care.
        </p>
      </div>
    </div>
  );
};

export default ImgTexOne;
