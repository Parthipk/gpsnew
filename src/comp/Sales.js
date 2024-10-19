import React from 'react';
import './Sales.css'; // Updated CSS file name
import logo1 from '../images/Sure123.png';
import logo2 from '../images/stepper_stabilizer.png';
import logo3 from '../images/Group 875 (1).png';
import logo4 from '../images/Group 861 (1).png';
import Foot from '../comp/Foot';
import { Link } from 'react-router-dom';
import SalesNav from './SalesNav'; // Ensure SalesNav is correctly named

const Sales = () => {
  return (
    <>
      <SalesNav />
      <br/><br/><br/><br/><br/><br/>
      <h1 className="probook_header">Our Products</h1>
      <br/>
      <div className="probook_container probook_reversed">
        <div className="probook_image-column">
          <img src={logo4} alt="Coaxial needles" className="probook_primary-image" />
        </div>
        <div className="probook_text-column">
          <h1 className="probook_heading">Coaxial needles</h1>
          <ul className="probook_about-points">
            <li>Designed for efficient and precise tissue sampling.</li>
            <li>Allows multiple samples through a single insertion.</li>
            <li>Minimizes patient discomfort and reduces tissue trauma.</li>
            <li>Enhances accuracy and reduces procedure time.</li>
          </ul> 
          <Link to="/Equipmentfour" className="probook_button_new">Click Me</Link>
        </div>
      </div>
      <hr className="probook_divider" />
      <div className="probook_container">
        <div className="probook_text-column">
          <h1 className="probook_heading">SureFire needle guide</h1>
          <ul className="probook_about-points">
            <li>Enhances biopsy accuracy with advanced design.</li>
            <li>Ensures precise needle placement.</li>
            <li>Streamlines the biopsy process, reducing procedure time.</li>
            <li>Improves diagnostic outcomes for effective prostate cancer detection.</li>
          </ul>
          <Link to="/Equipmentone" className="probook_button_new">Click Me</Link>
        </div>
        <div className="probook_image-column">
          <img src={logo1} alt="SureFire needle guide" className="probook_primary-image" />
        </div>
      </div>
      <hr className="probook_divider" />

      <div className="probook_container probook_reversed">
        <div className="probook_image-column">
          <img src={logo2} alt="Stepper stabilizer" className="probook_primary-image" />
        </div>
        <div className="probook_text-column">
          <h1 className="probook_heading">Stepper stabilizer</h1>
          <ul className="probook_about-points">
            <li>Provides secure and stable positioning during biopsy procedures.</li>
            <li>Ensures consistent alignment and control.</li>
            <li>Enhances accuracy and reduces movement.</li>
            <li>Improves biopsy outcomes with reliable performance.</li>
          </ul>
          <Link to="/Equipmenttwo" className="probook_button_new">Click Me</Link>
        </div>
      </div>
    

      {/* <div className="probook_container">
        <div className="probook_text-column">
          <h1 className="probook_heading">Fully automatic disposable biopsy</h1>
          <ul className="probook_about-points">
            <li>Single-use tool for fast and precise tissue sampling.</li>
            <li>Offers automatic, consistent performance.</li>
            <li>Reduces contamination risks with disposable design.</li>
            <li>Ensures reliable, sterile, and high-quality results.</li>
          </ul> 
          <Link to="/Equipmentthree" className="probook_button_new">Click Me</Link>
        </div>
        <div className="probook_image-column">
          <img src={logo3} alt="Fully automatic disposable biopsy" className="probook_primary-image" />
        </div>
      </div>
      <hr className="probook_divider" /> */}

    
      <br/><br/><br/>
      <Foot />
    </>
  );
};

export default Sales; // Updated export statement
