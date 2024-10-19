import React from 'react';
import './Sectiontwo.css'; // Import the updated CSS file
import logo from '../images/newp2.jpg';
const Sectiontwo = () => {
  return (
    <>    
    <h1 className="heading-approach">Our Approach</h1>
    <section className="sectiontwo">
        
      <div className="content-text">
       
        <p>
     our approach is centered on patient care, utilizing advanced technology to ensure the best outcomes. We prioritize the comfort and individual needs of our patients, providing personalized attention throughout their diagnostic journey. Our skilled team, available 24/7, is dedicated to delivering high-quality care and support, ready to address any queries or concerns. We believe in collaborative solutions, working closely with healthcare providers to develop tailored services that seamlessly integrate into their practices. Additionally, we are committed to continuous improvement, focusing on ongoing education and training to refine our methods and adopt new technologies, ultimately enhancing patient outcomes and service efficiency.
        </p>
      </div>
      <div className="content-image">
        <img src={logo} alt="Descriptive alt text" />
      </div>
    </section>
    </>
  );
};

export default Sectiontwo;
