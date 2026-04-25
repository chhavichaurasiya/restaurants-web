import React from 'react';
import { galleryImages } from '../data/dummyData';
import './Gallery.css';

const Gallery = () => {
  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <div className="text-center">
          <h4 className="text-gold section-subtitle">Ambiance</h4>
          <h2 className="section-title">The Gallery</h2>
        </div>
        
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img} alt={`Gallery ${index + 1}`} className="gallery-img" />
              <div className="gallery-overlay">
                <span className="gallery-icon">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
