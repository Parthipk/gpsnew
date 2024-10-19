// ImgTexThree.js
import React from 'react';
import './ImgTexOne.css'; // Import the updated CSS file

// Import images from your local folder
import topViewImage from '../images/Group 875 (1).png';
import sideViewImage from '../product_images/cq1.png';
import bottomViewImage from '../product_images/c2.png';


const ImgTexThree = () => {
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
          The Fully Automatic Disposable Biopsy device is a single-use tool designed for fast and precise tissue sampling. It offers automatic, consistent performance, ensuring accurate biopsies with minimal effort. Ideal for improving efficiency and reducing contamination risks, this disposable device is perfect for healthcare professionals seeking reliable, sterile, and high-quality results in diagnostic procedures.
        </p>
      </div>
    </div>
  );
};

export default ImgTexThree;
