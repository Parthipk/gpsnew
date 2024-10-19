import React, { useState, useEffect } from 'react';
import './Photo.css'; // Optional CSS file for styling
import desktopImage from '../NEWIMG/BRANDLAND.png'; // Import the desktop image
import mobileImage from '../NEWIMG/BRANDNEW.png'; // Import the mobile image

const Photo = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Set initial state based on window size

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Update state on window resize
    };

    window.addEventListener('resize', handleResize); // Attach resize event listener
    return () => {
      window.removeEventListener('resize', handleResize); // Clean up listener on unmount
    };
  }, []);

  return (
    <div className="photo-container">
      <img
        src={isMobile ? mobileImage : desktopImage} // Use mobile or desktop image based on state
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300'; // Fallback if image fails to load
        }}
        alt="Descriptive Alt Text"
        className="photo-image"
      />
    </div>
  );
};

export default Photo;
