import React from 'react';
import './Phasefour.css'; // Import the updated CSS file
import logo from '../NEWIMG/Urology.jpg';

const Phasefour = () => {
  return (
    <>
      <h1 className="heading-phasefour">WHAT IS PROSTATE</h1>
      <section className="section-phasefour">
        <div className="content-text-phasefour">
        <p>
  The prostate is a small, walnut-sized gland located just below the bladder in men. It is a critical part of the male reproductive system. Its primary function is to produce a fluid that nourishes and helps transport sperm during ejaculation. This prostatic fluid constitutes a significant portion of semen and aids in sperm motility.

  Understanding the anatomy and function of the prostate is essential for recognizing and addressing various prostate-related health issues. Prostate health is crucial, as it impacts reproductive functions and can be a source of significant health concerns if not properly managed.
</p>


        </div>
        <div className="content-image-phasefour">
          <img src={logo} alt="Descriptive alt text" />
        </div>
      </section>
    </>
  );
};

export default Phasefour;
