import React from 'react';
import './About.css';
import vedio from '../imgnew/new.mp4' ;
import audio from '../images/first.mp3' ;
function About() {
  return (
    <>
     <div className="about-section" id="about">
  <div className="about-content">
    <div className="about-text" style={{ textAlign: 'justify' }}>
      <h2 style={{color:'gray',fontSize:'1.5rem'}}>About Us</h2>
      <h2 style={{color:'#003366', fontSize:'3rem',marginTop:'2px'}}>Our Expertise</h2>
      <p>
  Global Prostate Solution, established in 2012, is a leading innovator based in the UK, specialising in the development and provision of advanced prostate biopsy solutions. Over the years, we have built a reputation for excellence, driven by our commitment to delivering high-quality diagnostic services. Our dedicated team operates around the clock to ensure that our clients receive unparalleled customer service and support.
</p>
<ul className="description-list" style={{color:'#555' , marginBottom:'-50px'}}>
            <li className="description-item">We use the latest tools for precise prostate cancer detection.</li>
            <li className="description-item"> Our tools aid in accurate diagnosis and patient care</li>
            <li className="description-item">We uphold high service and reliability standards.</li>

          </ul>
      <br></br>
      {/* <ul className="about-points">
      <li>Established in 2012 with a focus on advanced prostate biopsy solutions</li><br></br>
  <li>24/7 customer service and support with a commitment to excellence</li><br></br>
  <li>Utilizes cutting-edge technology for precise and timely prostate cancer detection</li><br></br>
</ul> */}
    </div>




          <div className="about-media">
            <div className="about-video">
              <video
                width="100%"
                height="auto"
                controls
                src={vedio} /* Replace with the path to your video file */
                type="video/mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="about-audio">
              <audio controls>
                <source src={audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </div>

   
      
    </>
  );
}

export default About;
