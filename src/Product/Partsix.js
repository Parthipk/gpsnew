import React from 'react';
import './Partsix.css'; // Make sure to create and import this CSS file

function Partsix() {
  return (
    <div className="partsix-container">
      <h1 className="partsix-heading">Request a Call</h1>
      <p className="partsix-description">
        Please fill out the form below, and one of our representatives will get back to you shortly.
     
      </p>
      <form className="partsix-form">
        <div className="form-group">
          <label htmlFor="hospital">Select Hospital</label>
          <input type="text" id="hospital" placeholder="Hospital Name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" />
        </div>

        <div className="form-group">
          <label htmlFor="surgeon">Name of the Surgeon</label>
          <input type="text" id="surgeon" placeholder="Name of the Surgeon" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" placeholder="Phone Number" />
        </div>

        <div className="form-group">
          <label htmlFor="order">Purchase Order Number</label>
          <input type="text" id="order" placeholder="Purchase Order Number" />
        </div>
        <div className="form-group">
          <label htmlFor="patients">No of Patients</label>
          <input type="number" id="patients" placeholder="No of Patients" />
        </div>

        <div className="form-group">
          <label htmlFor="date">Select Date</label>
          <input type="date" id="date" />
        </div>
        <div className="form-group">
          <label htmlFor="time">Select Time</label>
          <input type="time" id="time" />
        </div>

        <div className="form-group">
          <label htmlFor="service">Service</label>
          <input type="text" id="service" placeholder="Service" />
        </div>

        <button type="submit" className="partsix-submit">Submit</button>
      </form>
    </div>
  );
}

export default Partsix;
