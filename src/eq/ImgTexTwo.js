// ImgTexOne.js
import React from 'react';
import './ImgTexOne.css'; // Import the updated CSS file

// Import images from your local folder
import topViewImage from '../product_images/eq1.png';
import sideViewImage from '../product_images/eq2.png';
import bottomViewImage from '../product_images/eq3.png';


const ImgTexTwo = () => {
  // State to hold the currently selected image
  const [mainImage, setMainImage] = React.useState(topViewImage);

  // Array of image sources
  const images = {
    top: topViewImage,
    side: sideViewImage,
    bottom: bottomViewImage,

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
          The Stepper Stabilizer is a precision tool designed to provide secure and stable positioning during prostate biopsy procedures. It ensures consistent alignment and control, enhancing accuracy and reducing movement during the process. Ideal for healthcare professionals, the stabilizer improves biopsy outcomes by delivering reliable performance, making it an essential component in advanced prostate diagnostics.
        </p>
      </div>
    </div>
  );
};

export default ImgTexTwo;
