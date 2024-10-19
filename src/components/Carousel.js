import React, { useState, useEffect } from 'react';
import './Carousel.css';
import logo1 from '../images/j2.jpg';
import logo2 from '../images/j3.jpg';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [boxWidth, setBoxWidth] = useState(600); // Default width
  const [showAdditionalItems, setShowAdditionalItems] = useState(false);

  const carouselItems = [
    { id: 1, image: logo1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tincidunt lacus.", date: "August 20, 2024", url: "/blog" },
    { id: 2, image: logo2, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tincidunt lacus.", date: "August 21, 2024", url: "/blog1" },
    { id: 3, image: logo1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tincidunt lacus.", date: "August 22, 2024", url: "/blog2" },
    { id: 4, image: logo2, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tincidunt lacus.", date: "August 23, 2024", url: "/blog3" },
  ];

  // Duplicate the items to enable seamless infinite scroll
  const slides = [...carouselItems, ...carouselItems];

  useEffect(() => {
    const handleResize = () => {
      setBoxWidth(window.innerWidth < 768 ? window.innerWidth / 2.5 : 600);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call on initial load

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Set up an interval to show additional items after a delay
    const interval = setInterval(() => {
      setShowAdditionalItems(true);
    }, 3000); // Delay before showing additional items

    return () => clearInterval(interval);
  }, []);

  const totalBoxes = slides.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalBoxes);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalBoxes) % totalBoxes);
  };

  return (
    <div className="carousel-section">
      <h1 className="carousel-header">Latest Blogs And News</h1>
      <div className="carousel-container">
        <div
          className={`carousel-box ${showAdditionalItems ? 'show-additional' : ''}`}
          style={{
            transform: `translateX(-${currentIndex * boxWidth}px)`,
            width: `${totalBoxes * boxWidth}px`,
          }}
        >
          {slides.map(item => (
            <div key={item.id} className="carousel-item">
              {/* Wrap image and content in an anchor tag */}
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img src={item.image} alt={`Carousel ${item.id}`} className="item-image" />
                <div className="item-content">
                  <p className="item-description">{item.description}</p>
                  <div className="item-footer">
                    <p className="item-date">{item.date}</p>
                    <span className="read-more">Read More</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <button className="carousel-button prev" onClick={handlePrev}>‹</button>
        <button className="carousel-button next" onClick={handleNext}>›</button>
      </div>
      <div className="carousel-dots">
        {carouselItems.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${currentIndex % carouselItems.length === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
