import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import imgStepperGrid from '../images/Stepper-grid_guided-removebg-preview (1).png';
import imgFreeHand from '../images/second.png';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <>
      <h3 className="testimonial-title">Services</h3>
      <p className="testimonial-subtitle">Our team handles everything from booking to delivery <br></br>setup, and operation. We supply all equipment and consumables, ensuring a smooth, efficient process.</p>

      <div className="testimonial-container">
        <div className="testimonial-item">
          <div className="testimonial-image-column">
            <img src={imgStepperGrid} alt="Stepper Grid Testimonial" className="testimonial-image" />
          </div>
          <div className="testimonial-text-column">
            <h1 className="testimonial-heading">Cognitive Stepper-grid guided transperineal biopsy</h1>
            <p className="testimonial-description">
            We offer comprehensive imaging solutions, including advanced ultrasound machines, stabilizers, essential consumables, expert support, and flexible rental options.
            </p>
            {/* Link for navigation instead of button */}
            <Link to="/equipmentsix" className="order-now-button" style={{textDecoration:'none'}}>Book Now</Link>
          </div>
        </div>

        <div className="testimonial-item">
          <div className="testimonial-image-column">
            <img src={imgFreeHand} alt="Free Hand Testimonial" className="testimonial-image" />
          </div>
          <div className="testimonial-text-column">
            <h1 className="testimonial-heading">Cognitive Free hand biopsy</h1>
            <p className="testimonial-description">
            We provide cutting-edge ultrasound machines, affordable free-hand needle guides, essential consumables, expert assistance, and flexible rental options for patient lists.
            </p>
            {/* Link for navigation instead of button */}
            <Link to="/equipmentfive" className="order-now-button" style={{textDecoration:'none'}}>Book Now</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
