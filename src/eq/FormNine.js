import React, { useState } from 'react';
import axios from 'axios';
import '../Product/Partsix.css'; // Import the CSS file

const FormNine = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
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

    const formActionUrl = 'https://script.google.com/macros/s/AKfycbzWtQevPS4Vur_aRHde-KwU2VqNBCTDxtCf7maGoweGaROJ2BW1CQAkiQrgEGwQO4M/exec'; // Replace with your Google Form URL

    const data = new URLSearchParams();
    data.append('FIRST NAME', formData.firstName);
    data.append('LAST NAME', formData.lastName);
    data.append('PHONE', formData.phone);
    data.append('EMAIL ', formData.email);
    data.append('ADDRESS ', formData.address);
    data.append('MESSAGE', formData.message);
    data.append('PRODUCT', 'FormOne'); // Add hidden message here// Add hidden message here

    axios.post(formActionUrl, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => {
        console.log('Form submitted successfully', response);
        alert('Form submitted successfully');
        setFormData({
          firstName: '',
          lastName: '',
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
          <div className="form-group-half">
            <label htmlFor="firstName">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
              placeholder="First Name" 
              required 
            />
          </div>
          <div className="form-group-half">
            <label htmlFor="lastName">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
              placeholder="Last Name" 
              required 
            />
          </div>
        </div>

        <div className="form-group form-group-horizontal">
          <div className="form-group-half">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="Phone Number" 
              required 
            />
          </div>
          <div className="form-group-half">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Email" 
              required 
            />
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

export default FormNine;
