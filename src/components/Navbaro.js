import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo1 from '../images/logo1.png';
import logo2 from '../image_About/gps_white.png'; // Add the second logo

function Navbaro() {
  const [navbar, setNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) { // Adjust the scroll distance as needed
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav className={navbar ? 'navbar active' : 'navbar'}>
      <Link to="/">
        <img src={navbar ? logo2 : logo1} alt="Logo" className="logo" /> {/* Change logo based on navbar state */}
      </Link>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        <i className={isMobile ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={isMobile ? 'nav-links mobile active' : 'nav-links'}>
      <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">AboutUs</Link></li>
        <li><Link to="/ForPatients">For Patients</Link></li>
          <li className="dropdown">
          <a href="#!" onClick={toggleDropdown}>For Product</a>
          {dropdown && (
            <div className="dropdown-menu">
              <Link to="/Partone">Sales</Link>
              <Link to="/Parttwo">Services</Link>
        
      
            </div>
          )}
        </li>
        <li><Link to="/ForProviders">For Providers</Link></li>
        <Link to="/appointment">
          <button className="appointment-button">Book An Appointment</button>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbaro;
