import React from 'react';
import './Sectionthree.css'; // Import the updated CSS file
import logo from '../images/newp1.jpg';

const Sectionthree = () => {
  return (
    <>
      <h1 className="heading-philo">
      What We Are Dealing With </h1>
      <section className="section-three-philo">
        <div className="image-container-philo">
          <img src={logo} alt="Descriptive alt text" />
        </div>
        <div className="text-container-philo">
          <p style={{ textAlign: 'justify' }}>
        we specialize in providing comprehensive prostate biopsy solutions designed to enhance the accuracy and effectiveness of prostate cancer detection. Our focus is on utilizing advanced ultrasound technology that allows for precise imaging, ensuring that healthcare professionals can make informed decisions. We understand the critical nature of timely diagnosis in cancer care, which is why we offer flexible rental options and a fully equipped service model to cater to various patient needs. Our team of skilled professionals is dedicated to delivering exceptional support throughout the entire process, from initial consultation to follow-up, ensuring that patients receive the highest quality of care and attention. By combining innovative technology with a patient-centered approach, we are committed to improving outcomes and advancing prostate healthcare.
          </p>
        </div>
      </section>
    </>
  );
};

export default Sectionthree;
