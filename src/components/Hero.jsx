import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content animate-fade-in">
        <h3 className="hero-subtitle text-gold">Experience the Extraordinary</h3>
        <h1 className="hero-title">A Symphony of Flavors</h1>
        <p className="hero-text">
          Discover a culinary journey where tradition meets innovation in the heart of the city.
        </p>
        <div className="hero-actions">
          <a href="#reservation" className="btn btn-primary">Book Your Table</a>
          <a href="#menu" className="btn btn-outline">View Menu</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
