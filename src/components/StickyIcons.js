import React, { useState } from 'react';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './StickyIcons.css'; // Import the CSS file for styling
import Popup from '../components/Popup'; // Adjust the path as necessary

const StickyIcons = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className="sticky-icons">
      <Link to="#" className="bookademo" onClick={togglePopup}>
        <i className="fa-solid fa-book"></i>
      </Link>

      {isPopupVisible && <Popup onClose={togglePopup} />}

      <a
        href="https://api.whatsapp.com/send?phone=447389806075" // Use the phone number in the correct format
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      <a
        href="https://www.instagram.com/globalprostatesolution?igsh=eDJwbnJ5YWh1YzR4" // Replace with your Instagram profile
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-icon"
      >
        <i className="fab fa-instagram"></i>
      </a>
      {/* <a
        href="https://www.facebook.com/YOUR_PAGE" // Replace with your Facebook page
        target="_blank"
        rel="noopener noreferrer"
        className="facebook-icon"
      >
        <i className="fab fa-facebook"></i>
      </a> */}
      <a
        href="https://www.linkedin.com/company/global-prostate-solutions-ltd/" // Replace with your LinkedIn profile
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-icon"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      {/* Uncomment if Instagram is needed */}

    </div>
  );
};

export default StickyIcons;
