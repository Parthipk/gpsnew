// ImageAndText.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ImageAndText.css';
import logo from '../images/Stepper-grid_guided-removebg-preview (1).png';

const ImageAndText = () => {
  return (
    <>
      <section className="layout-section">
        <div className="text-content">
        <h3 style={{color:'gray'}} >Rental Booking </h3>
        <h2 className="heading-lorem" style={{color:'#003366', fontSize:'2.5rem',marginTop:'-7px'}}>Easy Booking for Your Next Rental</h2>
       

          <p style={{textAlign:'justify'}}>
          Access Global Prostate Solution's cutting-edge prostate biopsy equipment by booking today to elevate your diagnostic precision. With flexible rental options, you can use advanced tools without long-term commitments, supported by our dedicated customer service team. Enhance patient care with reliable, state-of-the-art technology for accurate prostate cancer detection.<br/><br/>
            <Link to="/equipmenteigth">
              <button className='bg-success' style={{color:'white', backgroundColor:'#007bff'}}>Book Now</button>
            </Link>
          </p>
        </div>
        <div className="image-container">
          <img src={logo} alt="Descriptive Image Text" className="custom-image" />
        </div>
      </section>
    </>
  );
};

export default ImageAndText;
