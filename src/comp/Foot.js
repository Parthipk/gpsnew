import React from 'react';
import './Foot.css';
import { Link } from 'react-router-dom';
import logo1 from '../images/gps-logo-white.025ee053.png';
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Foot = () => {
  return (
    <footer className="foot">
      <div className="foot__left">
        <img src={logo1} alt="Logo" className="foot__logo" />
        <p className="foot__text" style={{ textAlign: 'justify', width: '580px' }}>
          Global Prostate Solutions, established in 2012, is an innovative UK-based company specializing in comprehensive prostate biopsy solutions. With an experienced 24/7 team and a commitment to excellent customer service, we provide cutting-edge diagnostic services for accurate and timely prostate cancer detection.
        </p>
      </div>
      <div className="foot__middle">
        <h3 className="foot__header">Address</h3>
        <ul className="foot__links">
        <li><a href="#">Unit 6 Cherrytree Farm Blackmore End Road</a></li> 
          <li><a href="#">   Sible Hedingham, Halstead, England, CO9 3LZ</a></li>
          <li><a href="#">Available 24x7</a></li>
        </ul>
      </div>
      <div className="foot__right">
     
        <h3 className="foot__header">Support & Sale:</h3>
        <ul className="foot__links">
          <li><a href="#">+44 (0) 124 539 2110</a></li>
          <li><a href="#">query.globalps@gmail.com</a></li>
 
        </ul>
     
      </div>
      <hr className="foot__divider" />
      <div className="footer-bottom">
        <div className="footer-column">
          <Link to="/Privacy" style={{ color: 'white', textDecoration: 'none' }}>
            &copy; {new Date().getFullYear()} Global Prostate Solutions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
