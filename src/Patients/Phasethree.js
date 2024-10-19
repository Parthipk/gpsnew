import React from 'react';
import './Phasethree.css'; // Import the updated CSS file
import logo from '../images/newp5.jpg';

const Phasethree = () => {
  return (
    <>
      <h1 className="heading-phasethree">Understanding Prostate Health</h1>
      <section className="section-phasethree">
        <div className="image-container-phasethree">
          <img src={logo} alt="Descriptive alt text" />
        </div>
        <div className="text-container-phasethree">
          <p style={{ textAlign: 'justify' }}>
            The prostate is a vital component of the male reproductive system, located just below the bladder. It plays a key role in producing prostatic fluid, which is crucial for the nourishment and transportation of sperm. This fluid forms a significant part of semen and supports sperm vitality, enhancing the chances of successful fertilization.

            Maintaining prostate health is essential for overall well-being. Common issues like prostate enlargement, inflammation, and cancer can impact both urinary and sexual functions. Awareness and early intervention are critical, as they can help manage symptoms and improve outcomes. Regular medical evaluations and a healthy lifestyle contribute to better prostate health, allowing men to address any potential concerns before they become serious. Understanding the prostate's function and potential health risks empowers individuals to take informed steps toward maintaining their health.

          </p>
        </div>
      </section>
      <div className="bottom-section-phasethree">
        <h2 className="bottom-header-phasethree">How Is Prostate Cancer Diagnosed?</h2>
        <p className="bottom-paragraph-phasethree ">
          Diagnosing prostate cancer involves several steps, starting with a thorough medical evaluation and followed by specific tests. The process typically begins with a consultation where a healthcare provider assesses symptoms, medical history, and any risk factors associated with prostate cancer. If there's a suspicion of prostate cancer, a combination of diagnostic tests is used to confirm the presence and extent of the disease.

          One of the initial tests is the Prostate-Specific Antigen (PSA) blood test. Elevated levels of PSA, a protein produced by the prostate, can indicate the presence of cancer, although high PSA levels can also be due to other conditions. A digital rectal exam (DRE) may follow, where the doctor physically examines the prostate for abnormalities.

          If these tests suggest cancer, a biopsy is performed to obtain tissue samples from the prostate. During the biopsy, a needle is inserted into the prostate to extract small tissue samples, which are then examined under a microscope to determine if cancer cells are present
        </p><br></br><br></br><br></br>
        <h2 className="bottom-header-phasethree">Prostate Biopsy: TRANSRECTAL vs. TRANSPERINEAL</h2> <br></br><br></br><br></br>
        <p className="bottom-paragraph-phasethree ">
        Prostate biopsies are crucial for diagnosing prostate conditions, and the choice of method can impact both the procedure and the results. The transrectal biopsy is the more commonly used technique, performed by inserting a needle through the rectum to collect tissue samples from the prostate. This approach is generally quicker and less invasive, making it a preferred option for many practitioners. It involves using an ultrasound probe to guide the needle, which helps in accurately targeting the prostate tissue. Despite its benefits, this method carries certain risks, including discomfort and a potential for infection or bleeding due to the proximity of the rectum to the prostate.
        </p>
      </div>
    </>
  );
};

export default Phasethree;
