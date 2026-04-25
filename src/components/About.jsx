import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        <div className="about-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9bc?q=80&w=1000&auto=format&fit=crop" 
            alt="Chef preparing food" 
            className="about-image"
          />
          <div className="experience-badge glass-panel">
            <span className="years">15+</span>
            <span className="text">Years of Excellence</span>
          </div>
        </div>
        
        <div className="about-content">
          <h4 className="text-gold section-subtitle">Our Story</h4>
          <h2 className="section-title">Culinary Artistry Redefined</h2>
          <p className="about-text">
            At L'Étoile, we believe that dining is not just about sustenance, but an experience that engages all the senses. Founded by award-winning Chef Julien Dubois, our restaurant brings together the finest locally-sourced ingredients and innovative culinary techniques.
          </p>
          <p className="about-text">
            Every dish tells a story of passion, precision, and a relentless pursuit of perfection. Step into our world and let us take you on an unforgettable gastronomic adventure.
          </p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Signature_of_John_Hancock.svg" alt="Signature" className="signature" style={{ filter: 'invert(1)', opacity: 0.6, width: '150px' }} />
        </div>
      </div>
    </section>
  );
};

export default About;
