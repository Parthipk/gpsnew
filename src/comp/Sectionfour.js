import React, { useState } from 'react';
import './Sectionfour.css'; // Import the updated CSS file
import visionLogo from '../image_About/Group.png'; // Replace with the path to your logo image
import missionLogo from '../image_About/hugeicons_vision.png';; // Replace with the path to your logo image

const quotes = [
  { heading: "Vision", text: "To enhance prostate health outcomes through accessible and advanced diagnostic solutions.", author: "Team Vision", logo: visionLogo },
  { heading: "Mission", text: " To empower healthcare providers with innovative tools and support for accurate prostate cancer detection, fostering a community of care and awareness.", author: "Team Mission", logo: missionLogo },
];

const Sectionfour = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentQuoteIndex(index);
  };

  return (
    <section className="section_four">
      <div className="section_four__quote-container">
        <h2 className="section_four__quote-heading">
          {quotes[currentQuoteIndex].heading}
          <img
            src={quotes[currentQuoteIndex].logo}
            alt={`${quotes[currentQuoteIndex].heading} Logo`}
            className="section_four__logo"
          />
        </h2>
        <p className="section_four__quote-text">"{quotes[currentQuoteIndex].text}"</p>
        <p className="section_four__quote-author">— {quotes[currentQuoteIndex].author}</p>
      </div>
      <div className="section_four__quote-dots">
        {quotes.map((_, index) => (
          <span
            key={index}
            className={`section_four__dot ${index === currentQuoteIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Sectionfour;
