import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './LandingPage.css';
import pcImage1 from '../imgnew/Frame 30.png';
import pcImage2 from '../imgnew/Frame 36.png';
import pcImage3 from '../imgnew/Frame 37.png';
import mobileImage1 from '../imgnew/Frame 38.png';
import mobileImage2 from '../imgnew/Frame 39.png';
import mobileImage3 from '../imgnew/Frame 40.png';
import Popup from './PopUp2'; // Adjust the path as needed

function LandingPage() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className="landing-page">
      {/* Image boxes for PC */}
      <div className="image-box-container pc-images">
        <Link to="/ForProviders" className="image-box">
          <img src={pcImage1} alt="PC Image 1" />
        </Link>
        <Link to="/Tower" className="image-box">
          <img src={pcImage2} alt="PC Image 2" />
        </Link>
        <Link to="#" className="image-box" onClick={(e) => { e.preventDefault(); togglePopup(); }}>
          <img src={pcImage3} alt="PC Image 3" />
        </Link>
      </div>

      {/* Image boxes for Mobile */}
      <div className="image-box-container mobile-images">
        <Link to="/ForProviders" className="image-box">
          <img src={mobileImage1} alt="Mobile Image 1" />
        </Link>
        <Link to="/Tower" className="image-box">
          <img src={mobileImage2} alt="Mobile Image 2" />
        </Link>
        <Link to="#" className="image-box" onClick={(e) => { e.preventDefault(); togglePopup(); }}>
          <img src={mobileImage3} alt="Mobile Image 3" />
        </Link>
      </div>

      {/* Popup for Booking a Demo */}
      {isPopupVisible && <Popup onClose={togglePopup} />}
    </div>
  );
}

export default LandingPage;
