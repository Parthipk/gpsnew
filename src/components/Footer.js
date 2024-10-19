import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo1 from '../images/gps-logo-white.025ee053.png';
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formActionUrl = 'https://script.google.com/macros/s/AKfycbxIkTr-peXrKgGatazVHQqB0rwjhmIfEULjyoWvdOOVk33kVeVijqEhlPwBwyGF8HVb6Q/exec'; // Replace with your Google Form URL

    const data = new URLSearchParams();
    data.append('NAME', formData.name);
    data.append('EMAIL', formData.email);
    data.append('MESSAGE', formData.message);

    axios.post(formActionUrl, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then((response) => {
      console.log('Form submitted successfully', response);
      alert('Form submitted successfully');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Error submitting form:', error);
      alert('Something went wrong, please check the console for details.');
    });
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo1} alt="Logo" className="footer-logo" />
        <p className="footer-text" style={{ textAlign: 'justify', width: '580px' }}>
          Global Prostate Solutions, established in 2012, is an innovative UK-based company specializing in comprehensive prostate biopsy solutions. With an experienced 24/7 team and a commitment to excellent customer service, we provide cutting-edge diagnostic services for accurate and timely prostate cancer detection.
        </p>
      </div>

      <div className="footer-right">
        <div className="contact-box">
          <div className="contact-form">
            <h4>Contact Us</h4>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Name" 
                className="form-input" 
                required 
                style={{ width: '90%' }}
              />
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Email" 
                className="form-input" 
                required 
                style={{ width: '90%' }}
              />
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Message" 
                className="form-input" 
                rows="3" 
                required 
              />
              <button type="submit" className="form-submit">Send</button>
            </form>
          </div>
        </div>
      </div>
 
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

export default Footer;
