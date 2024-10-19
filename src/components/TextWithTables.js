import React from 'react';
import './TextWithTables.css';
import logo1 from '../images/stepper_stabilizer.png';
import logo2 from '../images/Group 875 (1).png';
import logo3 from '../images/Group 861 (1).png';
import logo4 from '../images/Sure123.png';
import { Link } from 'react-router-dom';

const TextWithTables = () => {
  return (
    <>
            <h3 className="section-title">Our Products</h3>
            <p className="section-p">Save £6,000 with our comprehensive Packages which includes equipment free deals.
            </p>
              <br></br><br></br>
      <div className="container reversed">
  <div className="image-column">
    <img src={logo3} alt="Coaxial needles" className="primary-image" />
  </div>
  <div className="text-column">
    <h1>Coaxial needles</h1>
   
    <ul className="description-list">
      <li className="description-item">Designed for efficient and precise tissue sampling procedures.</li>
      <li className="description-item">Allows multiple samples through a single insertion point.</li>
      <li className="description-item">Minimizes patient discomfort and reduces tissue trauma significantly.</li>
      <li className="description-item">Enhances accuracy and reduces overall procedure time.</li>
    </ul>
    <Link to="/equipmentfour" className="button_new">Order Now</Link>
  </div>
</div>
      
      <div className="container">
        <div className="text-column">
          <h1>SureFire needle guide</h1>
      
          <ul className="description-list">
            <li className="description-item">Enhances biopsy accuracy with advanced design.</li>
            <li className="description-item">Ensures precise needle placement.</li>
            <li className="description-item">Streamlines the biopsy process, reducing procedure time.</li>
            <li className="description-item">Improves diagnostic outcomes for effective prostate cancer detection.</li>
          </ul>
          <Link to="/Equipmentone" className="button_new">Order Now</Link>
        </div>
        <div className="image-column">
          <img src={logo4} alt="SureFire needle guide" className="primary-image" />
        </div>
      </div>
      
      <br/><br/><br/><br/>
      
      <div className="container reversed">
        <div className="image-column">
          <img src={logo1} alt="Stepper stabilizer" className="primary-image" />
        </div>
        <div className="text-column">
          <h1>Stepper stabilizer</h1>
       
          <ul className="description-list">
            <li className="description-item">Provides secure and stable positioning during biopsy procedures.</li>
            <li className="description-item">Ensures consistent alignment and control.</li>
            <li className="description-item">Enhances accuracy and reduces movement.</li>
            <li className="description-item">Improves biopsy outcomes with reliable performance.</li>
          </ul>
          <Link to="/equipmenttwo" className="button_new">Order Now</Link>
        </div>
      </div>
      
      {/* <div className="container">
        <div className="text-column">
          <h1>Fully automatic disposable biopsy</h1>
        
          <ul className="description-list">
            <li className="description-item">Single-use tool for fast and precise tissue sampling.</li>
            <li className="description-item">Offers automatic, consistent performance.</li>
            <li className="description-item">Reduces contamination risks with disposable design.</li>
            <li className="description-item">Ensures reliable, sterile, and high-quality results.</li>
          </ul>
          <Link to="/equipmentthree" className="button_new">Order Now</Link>
        </div>
        <div className="image-column">
          <img src={logo2} alt="Fully automatic disposable biopsy" className="primary-image" />
        </div>
      </div> */}

    

    </>
  );
};

export default TextWithTables;
