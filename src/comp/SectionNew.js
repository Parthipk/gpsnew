
import React, { useState } from 'react';
import axios from 'axios';
import './Sectionfive.css'; // Import the CSS file

const SectionNew = () => {
const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
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

    const formActionUrl = 'https://script.google.com/macros/s/AKfycbx4V-TQIv0VXRtW1A4LmFJlc-fGCntA_-Rtg_lwZd-2DjI79zJpyYohG3cjxpIqIks_2w/exec'; // Replace with your Google Form URL

    const data = new URLSearchParams();
    data.append('FIRST NAME', formData.firstName);
    data.append('LAST NAME', formData.lastName);
    data.append('EMAIL', formData.email);
    data.append('PHONE', formData.phoneNumber);
    data.append('MESSAGE', formData.message);

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
          email: '',
          phoneNumber: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        alert('Something went wrong, please check the console for details.');
      });
  };

  return (
    <div id="sectionfive">
      <section className="fivefive_section_five">
        <div className="fivefive_section_five__contact-info">
          <h2>Book Now </h2>
          <p>For inquiries, please contact us using the form on the right </p>
          <p>Email: query.globalps@gmail.com</p>
          <p>Phone: +44 (0) 124 539 2110
          </p>
          <p>Address:    Unit 6 Cherrytree Farm Blackmore End Road
          Sible Hedingham, Halstead, England, CO9 3LZ</p>
        </div>
        <div className="fivefive_section_five__form-container">
          <form className="fivefive_section_five__form" onSubmit={handleSubmit}>
            <h2 className="fivefive_section_five__form-heading">WELCOME TO GLOBAL PROSTATE SOLUTION</h2>
            <h3 className="fivefive_section_five__form-subheading">FIND A TREATMENT</h3>
            <div className="fivefive_section_five__form-row">
              <input 
                type="text" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} 
                placeholder="First Name" 
                className="fivefive_section_five__input" 
                required 
              />
              <input 
                type="text" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
                placeholder="Last Name" 
                className="fivefive_section_five__input" 
                required 
              />
            </div>
            <div className="fivefive_section_five__form-row">
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Email" 
                className="fivefive_section_five__input" 
                required 
              />
              <input 
                type="tel" 
                name="phoneNumber" 
                value={formData.phoneNumber} 
                onChange={handleChange} 
                placeholder="Phone Number" 
                className="fivefive_section_five__input" 
                required 
              />
            </div>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Message" 
              className="fivefive_section_five__textarea" 
              required 
            ></textarea>
            <button type="submit" className="fivefive_section_five__submit-button">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};
export default SectionNew;