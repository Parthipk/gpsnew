import React from 'react';
import './FeOne.css'; // Keep the CSS import the same if you don't want to change it

function FeFive() {
  return (
    <div className="partfive-container">
      <h1 className="partfive-heading">Our Features</h1>
      <p className="partfive-description">
      Comprehensive support with the latest ultrasound technology and expert assistance.
      </p>
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
      <div className="partfive-boxes">
        <div className="partfive-box">
     
          <p className="box-content">Latest ultrasound for precise imaging.</p>
        </div>
        <div className="partfive-box">

          <p className="box-content">Affordable free-hand needle guides.</p>
        </div>
        <div className="partfive-box">

          <p className="box-content">Fully equipped with essential consumables</p>
        </div>
        <div className="partfive-box">
         
          <p className="box-content">Flexible rentals from 1 to 12 patients.</p>
        </div>
      </div>
    </div>
  );
}

export default FeFive;
