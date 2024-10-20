import React, { useState,useEffect } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests
import './Popup.css'; // For styling the popup

export default function BookADemoPopup({ onClose }) {
  const [hospitalName, setHospitalName] = useState('');
  const [surgeonName, setSurgeonName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [purchaseOrder, setPurchaseOrder] = useState('');
  const [numberOfPatients, setNumberOfPatients] = useState('');
  const [dateTime, setDateTime] = useState(''); // Combine date and time
  const [service, setService] = useState(''); // State for service
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Update state on resize
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize); // Add event listener
    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup
    };
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    const formActionUrl = 'https://script.google.com/macros/s/AKfycbzeAbUBHdfSlkvvzxzaeR7XRhzMmHy86PxmWAoIb0U2qdujNKH8iza5aCpryko7Joex6A/exec'; // Replace with your actual URL

    const data = new URLSearchParams();
    data.append('HOSPITAL_NAME', hospitalName);
    data.append('SURGEON_NAME', surgeonName);
    data.append('EMAIL', email);
    data.append('PHONE', phone);
    data.append('PURCHASE_ORDER', purchaseOrder);
    data.append('NUMBER_OF_PATIENTS', numberOfPatients);
    data.append('DATE_TIME', dateTime); // Key for combined date and time
    data.append('SERVICE', service); // Key for service

    axios.post(formActionUrl, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then((response) => {
      console.log('Submitted:', response);
      // Reset form fields
      setHospitalName('');
      setSurgeonName('');
      setEmail('');
      setPhone('');
      setPurchaseOrder('');
      setNumberOfPatients('');
      setDateTime(''); // Clear date and time
      setService(''); // Clear service
      onClose(); // Close the popup after successful submission
      alert('Demo booked successfully!'); // Optional success alert
    })
    .catch((error) => {
      console.error('Error submitting form:', error);
      alert('Something went wrong, please try again.'); // Optional error alert
    });
  };

  return (
    <div className="bookademopopup-overlay">
      <div className="bookademopopup-container">
        <button className="bookademopopup-close-button" onClick={onClose} aria-label="Close Popup">
          &times; {/* "X" character for the close button */}
        </button>
        <h2 className="bookademopopup-header">Book A Demo</h2>
        <form onSubmit={handleSubmit}>
          <div className="bookademopopup-form-group">
            <input
              type="text"
              id="hospitalName"
              value={hospitalName}
              placeholder='Hospital Name'
              onChange={(e) => setHospitalName(e.target.value)}
              required
              style={{ width: '90%' }} // Inline style for width
            />
          </div>
          <div className="bookademopopup-form-group">
            <input
              type="email"
              id="email"
              value={email}
              placeholder='Email Address'
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '90%' }} // Inline style for width
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
            <div style={{ flex: 1, marginRight: '10px' }}>
              <input
                type="text"
                id="surgeonName"
                value={surgeonName}
                placeholder='Surgeon Name'
                onChange={(e) => setSurgeonName(e.target.value)}
                required
                style={{ width: '90%' ,  marginLeft: isMobile ? '0' : '10px' }} // Full width for input
              />
            </div>
            <div style={{ flex: 1, marginLeft: '10px' }}>
              <input
                type="tel"
                id="phone"
                value={phone}
                placeholder='Phone Number'
                onChange={(e) => setPhone(e.target.value)}
                required
                style={{ width: '80%' }} // Full width for input
              />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
            <div style={{ flex: 1, marginRight: '10px' }}>
              <input
                type="text"
                id="purchaseOrder"
                value={purchaseOrder}
                placeholder='Purchase Order Number'
                onChange={(e) => setPurchaseOrder(e.target.value)}
                required
                style={{ width: '90%', marginLeft: isMobile ? '0' : '10px'  }} // Full width for input
              />
            </div>
            <div style={{ flex: 1, marginLeft: '10px' }}>
              <input
                type="number"
                id="numberOfPatients"
                value={numberOfPatients}
                placeholder='Number of Patients'
                onChange={(e) => setNumberOfPatients(e.target.value)}
                required
                style={{ width: '80%' }} // Full width for input
              />
            </div>
          </div>
          <div className="bookademopopup-form-group" style={{ marginTop: '15px' }}>
            <input
              type="datetime-local"
              id="dateTime"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              required
              style={{ width: '90%' }} // Full width for input
            />
          </div>
          <div className="bookademopopup-form-group" style={{ marginTop: '15px' }}>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              style={{ width: '90%', borderRadius: '5px', height: '40px' ,marginRight:'25px'}} // Full width for select
            >
              <option value="">Select Service</option>
              <option value="Transperineal Biopsy">Stepper-grid guided transperineal biopsy</option>
              <option value="Free Hand Biopsy">Free hand biopsy</option>
              {/* <option value="Tower Procedure">Tower procedure</option> */}
            </select>
          </div>
          <div className="bookademopopup-button-container" style={{ marginTop: '20px' }}>
            <button type="submit" className="bookademopopup-submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
