import React from 'react';
import './FeOne.css'; // Keep the CSS import the same if you don't want to change it

function FeSeven() {
  return (
    <div className="partfive-container">
      <h1 className="partfive-heading">Our Features</h1>
      <p className="partfive-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
      <div className="partfive-boxes">
        <div className="partfive-box">
          <h2 className="box-number">1</h2>
          <p className="box-content">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="partfive-box">
          <h2 className="box-number">2</h2>
          <p className="box-content">Consectetur adipiscing elit.</p>
        </div>
        <div className="partfive-box">
          <h2 className="box-number">3</h2>
          <p className="box-content">Sed do eiusmod tempor incididunt.</p>
        </div>
        <div className="partfive-box">
          <h2 className="box-number">4</h2>
          <p className="box-content">Ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
}

export default FeSeven;
