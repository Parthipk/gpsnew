import React from 'react';
import './Phasefive.css'; // Import the CSS file for styling
import sampleImage from '../images/r6.jpg'; // Update with the correct path to your image

const Phasefive = () => {
  return (
    <div className="phasefive-container">
      <div className="phasefive-content">
        <p>
        <h1 className="heading-phasethree" style={{color:'white', textAlign:'center'}}>The Traditional Method of Prostate Biopsy (TRANSRECTAL)</h1>
        On the other hand, the transperineal biopsy involves accessing the prostate through the perineum, the area between the scrotum and anus.
          <img src={sampleImage} alt="Sample" className="paragraph-image"  />
       
          This method uses imaging techniques, like ultrasound or MRI, to guide the needle and ensure accurate sampling. A significant advantage of the transperineal biopsy is its lower risk of rectal infections, which can be a concern with the transrectal approach. It is also suitable for patients with certain anatomical challenges or those who have previously undergone transrectal biopsies.

Both biopsy methods aim to deliver precise diagnostic results but differ in procedure, comfort, and associated risks. The choice between transrectal and transperineal biopsy depends on patient-specific factors, clinical needs, and the expertise of the healthcare provider. Each technique has its benefits and limitations, making it important to select the most appropriate method for accurate diagnosis.</p>
the choice between transrectal and transperineal biopsy may also be influenced by the availability of resources and the experience of the medical team. While transrectal biopsies are more widely performed and may be more familiar to many practitioners, transperineal biopsies might be preferred in certain cases where the transrectal approach has proven less effective or has presented complications. Ultimately, discussing the options with a healthcare provider can help determine the most suitable approach based on individual circumstances, ensuring that the diagnostic process is both effective and tailored to the patient's needs. 
      </div>
    </div>
  );
};

export default Phasefive;
