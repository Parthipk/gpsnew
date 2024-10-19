import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar_About.css'; // Ensure this is the path to your CSS
import logo1 from '../images/logo1.png'; // Original logo
import logo2 from '../image_About/gps_white.png'; // New logo for when scrolled

function Navbar_About() {
  const [navbar, setNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dropdown, setDropdown] = useState(false);

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

  const toggleDropdown = () => {
    setDropdown(!dropdown);
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
        <li><Link to="/">Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
        <li><Link to="/ForPatients">For Patients&nbsp;&nbsp;&nbsp;</Link></li>
       
        <li className="dropdown">
          <a href="#!" onClick={toggleDropdown}>For Product&nbsp;&nbsp;&nbsp;</a>
          {dropdown && (
            <div className="dropdown-menu">
              <Link to="/Sales">Sales</Link>
              <Link to="/ProBook">Services</Link>
            </div>
          )}
        </li>
        <li><Link to="/ForProviders">Biopsy Box&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
        <li><Link to="/Tower">Tower&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar_About;
