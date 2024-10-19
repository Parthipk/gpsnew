// BoxDisplay.js
import React from 'react';
import './BoxDisplay.css'; // Import the CSS file for styling
import boxImage from '../images/Frame 48.png'
const BoxDisplay = () => {
  return (
    <>
       <h1 style={{color:'#003366',textAlign:'center',fontSize:'3rem'}}>NHS Connect</h1>
    <div className="box-container">
      <div className="box">
        <h2 className="box-heading">NHS Connect </h2>
        <p className="box-description">
        By utilizing our 12-patient list, the NHS can significantly reduce biopsy wait times, ensuring faster diagnosis and more timely treatment.
        </p>
      </div>
      <div className="box">
        <h2 className="box-heading">Private Healthcare</h2>
        <p className="box-description">
        Private hospitals can streamline schedules and expand their reach with NHS Connect, reducing backlogs and boosting revenue through consistent NHS referrals. </p>
      </div>
      <div className="box">
        <h2 className="box-heading">Patients</h2>
        <p className="box-description">
        NHS Connect directs patients to faster prostate biopsies and diagnoses at private hospitals, providing peace of mind with efficient and streamlined support.
        </p>
      </div>
    </div>
    <div className="imageOne">
        <img src={boxImage} alt="Decorative" /> 
      </div>
    </>
  );
};

export default BoxDisplay;
