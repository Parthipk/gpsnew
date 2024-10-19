import React, { useState } from 'react';
import axios from 'axios';
import '../Product/Partsix.css'; // Import the CSS file

const FormFive = () => {
  const [hospitalName, setHospitalName] = useState('');
  const [email, setEmail] = useState('');
  const [surgeonName, setSurgeonName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [purchaseOrderNumber, setPurchaseOrderNumber] = useState('');
  const [numberOfPatients, setNumberOfPatients] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeHospital = (e) => {
    setHospitalName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeSurgeon = (e) => {
    setSurgeonName(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleChangePurchaseOrder = (e) => {
    setPurchaseOrderNumber(e.target.value);
  };

  const handleChangeNumberOfPatients = (e) => {
    setNumberOfPatients(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formActionUrl = 'https://script.google.com/macros/s/AKfycbzeAbUBHdfSlkvvzxzaeR7XRhzMmHy86PxmWAoIb0U2qdujNKH8iza5aCpryko7Joex6A/exec';

    const data = new URLSearchParams();
    data.append('HOSPITAL_NAME', hospitalName);
    data.append('EMAIL', email);
    data.append('SURGEON_NAME', surgeonName);
    data.append('PHONE_NUMBER', phoneNumber);
    data.append('PURCHASE_ORDER_NUMBER', purchaseOrderNumber);
    data.append('NUMBER_OF_PATIENTS', numberOfPatients);
    data.append('DATE', date); // Add date
    data.append('TIME', time); // Add time
    data.append('MESSAGE', message); // Add message
    data.append('PRODUCT', 'Free Hand Biopsy'); // Hidden message

    axios.post(formActionUrl, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => {
        console.log('Form submitted successfully', response);
        alert('GLOBAL PROSTATE SOLUTION says: Thank you! We\'ll contact you immediately.');
        setHospitalName('');
        setEmail('');
        setSurgeonName('');
        setPhoneNumber('');
        setPurchaseOrderNumber('');
        setNumberOfPatients('');
        setDate('');
        setTime('');
        setMessage('');
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
            <label htmlFor="hospitalName">Hospital Name</label>
            <input 
              type="text" 
              id="hospitalName" 
              name="hospitalName" 
              value={hospitalName} 
              onChange={handleChangeHospital} 
              placeholder="Hospital Name" 
              required 
              style={{ width: '100%' }} 
            />
          </div>
        </div>
        <div className="form-group form-group-horizontal">
          <div className="form-group-full">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email} 
              onChange={handleChangeEmail} 
              placeholder="Email Address" 
              required 
              style={{ width: '100%' }} 
            />
          </div>
        </div>
        <div className="form-group form-group-horizontal">
          <div className="form-group-half">
            <label htmlFor="surgeonName">Surgeon Name</label>
            <input 
              type="text" 
              id="surgeonName" 
              name="surgeonName" 
              value={surgeonName} 
              onChange={handleChangeSurgeon} 
              placeholder="Surgeon Name" 
              required 
              style={{ width: '100%' }} 
            />
          </div>
          <div className="form-group-half">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input 
              type="tel" 
              id="phoneNumber" 
              name="phoneNumber" 
              value={phoneNumber} 
              onChange={handleChangePhone} 
              placeholder="Phone Number" 
              required 
              style={{ width: '100%' }} 
            />
          </div>
        </div>
        <div className="form-group form-group-horizontal">
          <div className="form-group-half">
            <label htmlFor="purchaseOrderNumber">Purchase Order Number</label>
            <input 
              type="text" 
              id="purchaseOrderNumber" 
              name="purchaseOrderNumber" 
              value={purchaseOrderNumber} 
              onChange={handleChangePurchaseOrder} 
              placeholder="Purchase Order Number" 
              required 
              style={{ width: '100%' }} 
            />
          </div>
          <div className="form-group-half">
            <label htmlFor="numberOfPatients">Number of Patients</label>
            <input 
              type="number" 
              id="numberOfPatients" 
              name="numberOfPatients" 
              value={numberOfPatients} 
              onChange={handleChangeNumberOfPatients} 
              placeholder="Number of Patients" 
              required 
              style={{ width: '100%' }} 
            />
          </div>
        </div>
        <div className="form-group form-group-horizontal">
          <div className="form-group-half">
            <label htmlFor="date">Date</label>
            <input 
              type="date" 
              id="date" 
              name="date" 
              value={date} 
              onChange={handleChangeDate} 
              required 
              style={{ width: '100%' }} 
            />
          </div>
          <div className="form-group-half">
            <label htmlFor="time">Time</label>
            <input 
              type="time" 
              id="time" 
              name="time" 
              value={time} 
              onChange={handleChangeTime} 
              required 
              style={{ width: '100%' }} 
            />
          </div>
        </div>
        <div className="form-group form-group-horizontal">
          <div className="form-group-full">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={message} 
              onChange={handleChangeMessage} 
              placeholder="Enter your message here..." 
              rows="4" 
              required 
              style={{ width: '100%' }} 
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

export default FormFive;
