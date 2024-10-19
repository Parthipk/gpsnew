import React from 'react';
import './FeOne.css'; // Keep the CSS import the same if you don't want to change it

function FeThree() {
  return (
    <div className="partfive-container">
      <h1 className="partfive-heading">Our Features</h1>
      <p className="partfive-description">
      Samples tissue efficiently with minimal discomfort.
      </p>
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
      <div className="partfive-boxes">
        <div className="partfive-box">

          <p className="box-content"> Multiple samples from one insertion.</p>
        </div>
        <div className="partfive-box">

          <p className="box-content"> Minimizes patient pain.</p>
        </div>
        <div className="partfive-box">
 
          <p className="box-content">Reduces tissue damage.</p>
        </div>
        <div className="partfive-box">
     
          <p className="box-content">Reduces tissue damage.</p>
        </div>
      </div>
    </div>
  );
}

export default FeThree;
