import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SalesNav.css'; // Updated the path to the new CSS file
import logo1 from '../images/logo1.png'; // Original logo
import logo2 from '../image_About/gps_white.png'; // New logo for when scrolled

function SalesNav() { 
  const [navbar, setNavbar] = useState(true); // Set to true to keep the navbar active from the start
  const [isMobile, setIsMobile] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className={navbar ? 'SalesNav_navbar active' : 'SalesNav_navbar'}>
      <Link to="/">
        <img src={navbar ? logo2 : logo1} alt="Logo" className="SalesNav_logo" /> {/* Use active logo */}
      </Link>
      <div className="SalesNav_menu-icon" onClick={toggleMobileMenu}>
        <i className={isMobile ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={isMobile ? 'SalesNav_nav-links mobile active' : 'SalesNav_nav-links'}>
       
        <li><Link to="/about-us">About Us &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
        <li><Link to="/ForPatients">For Patients&nbsp;&nbsp;&nbsp;</Link></li>
        <li className="SalesNav_dropdown">
          <a href="#!" onClick={toggleDropdown}>For Product&nbsp;&nbsp;&nbsp;</a>
          {dropdown && (
            <div className="SalesNav_dropdown-menu">
              <Link to="/Sales">Sales</Link>
              <Link to="/ProBook">Services</Link>
            </div>
          )}
        </li>
        <li><Link to="/ForProviders">Biopsy Box&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
        <li><Link to="/Tower">Tower&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
      </ul>
    </nav>
  );
}

export default SalesNav;
