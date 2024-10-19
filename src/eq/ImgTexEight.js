// ImgTexOne.js
import React from 'react';
import './ImgTexOne.css'; // Import the updated CSS file

const ImgTexEight = () => {
  // State to hold the currently selected image
  const [mainImage, setMainImage] = React.useState('https://via.placeholder.com/300?text=Top+View');

  // Array of image sources
  const images = {
    top: 'https://via.placeholder.com/300?text=Top+View',
    side: 'https://via.placeholder.com/300?text=Side+View',
    bottom: 'https://via.placeholder.com/300?text=Bottom+View',
    left: 'https://via.placeholder.com/300?text=Left+View',
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          scelerisque, erat in bibendum gravida, ligula elit aliquet nunc, a
          vehicula nunc lorem eget ante. Praesent quis dui sed libero tincidunt
          tristique. Ut in risus a orci luctus tempor eu sit amet 
        </p>
      </div>
    </div>
  );
};

export default ImgTexEight;
    