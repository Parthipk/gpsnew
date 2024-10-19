import React, { useState } from 'react';
import axios from 'axios';
import '../Product/Partsix.css'; // Import the CSS file

const FormTwo = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    message: '',
  });

  const [showPhone, setShowPhone] = useState(true); // State to toggle between phone and email

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleToggle = () => {
    setShowPhone(!showPhone); // Toggle between phone and email
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formActionUrl = 'https://script.google.com/macros/s/AKfycbzWtQevPS4Vur_aRHde-KwU2VqNBCTDxtCf7maGoweGaROJ2BW1CQAkiQrgEGwQO4M/exec'; // Replace with your Google Form URL

    const data = new URLSearchParams();
    data.append('FULL NAME', formData.fullName);
    data.append('PHONE', formData.phone);
    data.append('EMAIL', formData.email);
    data.append('ADDRESS', formData.address);
    data.append('MESSAGE', formData.message);
    data.append('PRODUCT', 'Stepper Stabilizer '); // Add hidden message here

    axios.post(formActionUrl, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => {
        console.log('Form submitted successfully', response);
        alert('GLOBAL PROSTATE SOLUTION says: Thank you! We\'ll contact you immediately.'); // Updated alert message
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          address: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        alert('Something went wrong, please check the console for details.');
      });
  };

  return (
    <div className="partsix-container">
      <h1 className="partsix-heading">Request a Call</h1>
      <p className="partsix-description">
        Please fill out the form below, and one of our representatives will get back to you shortly.
      </p>
      <form onSubmit={handleSubmit} className="partsix-form">
        <div className="form-group form-group-horizontal">
          <div className="form-group-full">
            <label htmlFor="fullName">Full Name</label>
            <input 
              type="text" 
              id="fullName" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange} 
              placeholder="Full Name" 
              required 
            />
          </div>
        </div>

        <div className="form-group form-group-horizontal">
          <div className="form-group-half">
            <label htmlFor="contact">Contact</label>
            <div className="contact-container">
              <button type="button" className="contact-toggle" onClick={handleToggle}>
                {showPhone ? 'Email' : 'Phone'}
              </button>
              <input 
                type={showPhone ? 'tel' : 'email'} 
                id="contact" 
                name={showPhone ? 'phone' : 'email'} 
                value={showPhone ? formData.phone : formData.email} 
                onChange={handleChange} 
                placeholder={showPhone ? 'Phone Number' : 'Email'} 
                required 
              />
            </div>
          </div>
        </div>

        <div className="form-group form-group-horizontal">
          <div className="form-group-full">
            <label htmlFor="address">Address</label>
            <input 
              type="text" 
              id="address" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              placeholder="Address" 
              required 
            />
          </div>
        </div>

        <div className="form-group form-group-horizontal">
          <div className="form-group-full">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Your message" 
              rows="4" 
              required 
            />
          </div>
        </div>

        <button type="submit" className="partsix-submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default FormTwo;
