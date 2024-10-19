import React from 'react';
import './About.css';

function About() {
  return (
    <>
      <div className="about-section" id="about">
        <div className="about-content">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque eleifend dui, nec interdum nisi pellentesque non. Donec
              sed orci urna. Nulla facilisi. Praesent non varius libero, id
              convallis ligula. Curabitur ac ex nec lorem ultricies efficitur ac
              a lacus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              imperdiet, dolor in condimentum sollicitudin, libero eros tincidunt
              augue, vel hendrerit libero justo vel nisi. Ut gravida neque vel
              velit aliquam, et aliquet urna interdum.
            </p>
          </div>
          <div className="about-media">
            <div className="about-video">
              <video
                width="100%"
                height="auto"
                controls
                src="path/to/your/video.mp4" /* Replace with the path to your video file */
                type="video/mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="about-audio">
              <audio controls>
                <source src="your-audio-file.mp3" type="audio/mpeg" />
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
