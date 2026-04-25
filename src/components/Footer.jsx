import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container footer-container">
        <div className="footer-col">
          <h3 className="footer-logo">L'Étoile</h3>
          <p className="footer-desc">
            A journey through exceptional flavors, curated by master chefs in an ambiance of pure elegance.
          </p>
          <div className="social-links">
            <a href="#" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-title">Contact Us</h4>
          <p className="footer-text">123 Culinary Avenue, Food District</p>
          <p className="footer-text">New York, NY 10001</p>
          <p className="footer-text mt-1">contact@letoile.com</p>
          <p className="footer-text">+1 (555) 123-4567</p>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-title">Opening Hours</h4>
          <div className="hours-row">
            <span>Mon - Thu:</span>
            <span>17:00 - 22:30</span>
          </div>
          <div className="hours-row">
            <span>Fri - Sat:</span>
            <span>17:00 - 23:30</span>
          </div>
          <div className="hours-row">
            <span>Sunday:</span>
            <span>16:00 - 21:30</span>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} L'Étoile Restaurant. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
