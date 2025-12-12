import React, { useState, useEffect } from 'react';
import personalInfo from '../data/personalInfo.json';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    'Software Developer',
    'Full Stack Engineer',
    'AI Enthusiast',
    'Problem Solver'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;
    
    const typeWriter = setInterval(() => {
      if (charIndex < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeWriter);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
          setDisplayText('');
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeWriter);
  }, [currentIndex]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    // Track navigation events
    if (window.gtag) {
      window.gtag('event', 'navigation', {
        event_category: 'User Interaction',
        event_label: sectionId
      });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">
            Hi, I'm <span className="name-highlight">{personalInfo.name}</span>
          </h1>
          <div className="hero-title">
            <span>I'm a </span>
            <span className="typing-text">{displayText}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-summary">{personalInfo.summary}</p>
          
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <a 
              href={personalInfo.resumeUrl}
              className="btn btn-secondary"
              download
            >
              Download Resume
            </a>
          </div>

          <div className="hero-social">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href={`mailto:${personalInfo.email}`}>
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-container">
            <img 
              src={personalInfo.avatar} 
              alt={personalInfo.name}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x300/2c3e50/ffffff?text=UP';
              }}
            />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow" onClick={() => scrollToSection('about')}>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;