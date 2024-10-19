import React from 'react';
import './FeOne.css'; // Keep the CSS import the same if you don't want to change it

function FeSix() {
  return (
    <div className="partfive-container">
      <h1 className="partfive-heading">Our Features</h1>
      <p className="partfive-description">
      Advanced ultrasound system with comprehensive support and flexible rental options.
      </p>
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
      <div className="partfive-boxes">
        <div className="partfive-box">
         
          <p className="box-content">Latest ultrasound for precise imaging.</p>
        </div>
        <div className="partfive-box">
  
          <p className="box-content">In-house stepper stabilizer for guided procedures</p>
        </div>
        <div className="partfive-box">
  
          <p className="box-content">Fully equipped with essential consumables.</p>
        </div>
        <div className="partfive-box">
        
          <p className="box-content">Flexible rentals for 1 to 12 patients</p>
        </div>
      </div>
    </div>
  );
}

export default FeSix;
