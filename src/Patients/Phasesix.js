import React from 'react';
import './Phasesix.css'; // Import the CSS file for styling
import logo from '../images/v1.mp4';
const Phasesix = () => {
  return (
    <div className="phasesix-container">
      <h1 className="phasesix-heading">Now there is a better way…</h1>
      <h3 style={{fontSize:'1.5rem'}}> Watch Our Detailed Explanation </h3>
      <div className="phasesix-video-container">
        <video controls>
          <source src={logo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Phasesix;
