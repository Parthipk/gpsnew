import React from 'react';
import './FeOne.css'; // Keep the CSS import the same if you don't want to change it

function FeFour() {
  return (
    <div className="partfive-container">
      <h1 className="partfive-heading">Our Features</h1>
      <p className="partfive-description">
      Our system delivers precise imaging with comprehensive support and flexible rental options.
      </p>
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
      <div className="partfive-boxes">
        <div className="partfive-box">
       
          <p className="box-content">Advanced ultrasound for imaging</p>
        </div>
        <div className="partfive-box">
  
          <p className="box-content">Stepper stabilizer for procedures</p>
        </div>
        <div className="partfive-box">

          <p className="box-content">Complete with essential supplies</p>
        </div>
        <div className="partfive-box">
     
          <p className="box-content">Expert support and flexible rentals</p>
        </div>
      </div>
    </div>
  );
}

export default FeFour;
