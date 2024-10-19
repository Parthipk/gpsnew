import React from 'react';
import './ProBook.css';
import logo1 from '../images/Stepper-grid_guided-removebg-preview (1).png';
import logo2 from '../images/second.png';
import logo3 from '../images/Group 861 (1).png';
import Foot from '../comp/Foot';
import { Link } from 'react-router-dom';
import SalesNav from './SalesNav';

const ProBook = () => {
  return (
    <>
      <SalesNav />
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <h1 className="probook_header">Services</h1>
      <br/>

      <div className="probook_container">
        <div className="probook_text-column">
          <h1 className="probook_heading">Cognitive Stepper-grid guided transperineal biopsy</h1>
          <ul className="probook_about-points">
            <li>Advanced ultrasound system ensures precise imaging</li>
            <li>In-house stepper stabilizer enhances guided procedures.</li>
            <li>Fully equipped with essential consumables provided.</li>
            <li>Flexible rental options for multiple patients.</li>
      
          </ul>
          <Link to="/equipmentsix" className="probook_button_new">Click Me</Link>
        </div>
        <div className="probook_image-column">
          <img src={logo1} alt="Product 1" className="probook_primary-image" />
        </div>
      </div>
      <hr className="probook_divider" />

      <div className="probook_container probook_reversed">
        <div className="probook_image-column">
          <img src={logo2} alt="Product 2" className="probook_primary-image" />
        </div>
        <div className="probook_text-column">
          <h1 className="probook_heading">Cognitive Free hand biopsy</h1>
          <ul className="probook_about-points">
            <li>Ultrasound machine delivers precise imaging results.</li>
            <li>Affordable free-hand needle guides enhance procedures.</li>
            <li>Fully equipped with essential consumables provided.</li>
            <li>Flexible rental options for multiple patients.</li>
            <li>Skilled team offers full process assistance</li>

          </ul>
          <Link to="/equipmentfive" className="probook_button_new">Click Me</Link>
        </div>
      </div>
      {/* <hr className="probook_divider" /> */}

      {/* <div className="probook_container">
        <div className="probook_text-column">
          <h1 className="probook_heading">Lorem Ipsum 1</h1>
          <ul className="probook_about-points">
            <li>First point with a tick mark</li>
            <li>Second point with a tick mark</li>
            <li>Third point with a tick mark</li>
            <li>Fourth point with a tick mark</li>
            <li>Fifth point with a tick mark</li>
            <li>Sixth point with a tick mark</li>
          </ul>
          <Link to="/Productthree" className="probook_button_new">Click Me</Link>
        </div>
        <div className="probook_image-column">
          <img src={logo3} alt="Product 3" className="probook_primary-image" />
        </div>
      </div> */}
      
      <br/><br/><br/>
      <Foot />
    </>
  );
};

export default ProBook;
