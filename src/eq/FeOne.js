import React from 'react';
import './FeOne.css'; // Keep the CSS import the same if you don't want to change it

function FeOne() {
  return (
    <div className="partfive-container">
      <h1 className="partfive-heading">Features</h1>
      <p className="partfive-description">
      Enhances biopsy accuracy with its advanced design for precise needle placement.
      </p>
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
      <div className="partfive-boxes">
        <div className="partfive-box">

          <p className="box-content">Improves accuracy in needle placement.</p>
        </div>
        <div className="partfive-box">
       
          <p className="box-content">Streamlines the biopsy process</p>
        </div>
        <div className="partfive-box">

          <p className="box-content">Efficient and quick operation</p>
        </div>
        <div className="partfive-box">
 
          <p className="box-content">Quick and easy to use.</p>
        </div>
      </div>
    </div>
  );
}

export default FeOne;
