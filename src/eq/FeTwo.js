import React from 'react';
import './FeOne.css'; // Keep the CSS import the same if you don't want to change it

function FeTwo() {
  return (
    <div className="partfive-container">
      <h1 className="partfive-heading">Our Features</h1>
      <p className="partfive-description">
      Secures stable positioning for precise prostate biopsies.
      </p>
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
      <div className="partfive-boxes">
        <div className="partfive-box">
    
          <p className="box-content">Enhances biopsy accuracy</p>
        </div>
        <div className="partfive-box">
      
          <p className="box-content">Reduces movement.</p>
        </div>
        <div className="partfive-box">
       
          <p className="box-content"> Improves diagnostic results.</p>
        </div>
        <div className="partfive-box">
     
          <p className="box-content">Ideal for advanced prostate diagnostics</p>
        </div>
      </div>
    </div>
  );
}

export default FeTwo;
