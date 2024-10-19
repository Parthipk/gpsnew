import React, { useState } from 'react';
import './Text.css';
import Popup from './Popup'; // Import the Popup component

const Text = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  return (
    <div className="text-container">
      <h1 className="heading">Precision in every shot : Revolutionize your prostate diagnostics with our complete biopsy box, offering all-in-one precision and efficiency for accurate results</h1>
     <h2 className="subheading">
 <span style={{color:'#008bff'}}>60%</span> consumables discount<br />
  &nbsp;&nbsp; Free demonstration provided
</h2>

      <a 
        href="#"
        className="rounded-button"
        style={{ textDecoration: 'none' }}
        onClick={(e) => {
          e.preventDefault(); // Prevent default link behavior
          handleButtonClick();
        }}
      >
        Order Now
      </a>
      <Popup isVisible={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
};

export default Text;
