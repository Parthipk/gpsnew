import React from 'react';
import './Partnership.css'; // Updated the CSS file name

// Importing images
import logo1 from '../images/p1.png';
import logo2 from '../images/p2.png';
import logo3 from '../images/p3.png';
import logo4 from '../images/p4.png';
import companyLogo from '../images/company1.png'; // New logo image

function LogoGallery() {
  const logos = [logo1, logo2, logo3, logo4, companyLogo]; // Array of logo images including the new one

  return (
    <div className="partnership-gallery">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Logo ${index + 1}`}
          className={`partnership-logo ${index === logos.length - 1 ? 'company-logo' : ''}`} // Conditional class for the last logo
        />
      ))}
    </div>
  );
}

export default LogoGallery;
