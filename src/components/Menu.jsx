import React, { useState } from 'react';
import { menuData } from '../data/dummyData';
import './Menu.css';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('starters');

  return (
    <section id="menu" className="section menu-section">
      <div className="container">
        <div className="text-center">
          <h4 className="text-gold section-subtitle">Discover</h4>
          <h2 className="section-title">Our Menu</h2>
        </div>

        <div className="menu-tabs">
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              className={`menu-tab ${activeTab === category ? 'active' : ''}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-grid animate-fade-in">
          {menuData[activeTab].map((item) => (
            <div key={item.id} className="menu-item glass-panel">
              <div className="menu-item-img-wrapper">
                <img src={item.image} alt={item.name} className="menu-item-img" />
              </div>
              <div className="menu-item-content">
                <div className="menu-item-header">
                  <h3 className="menu-item-name">{item.name}</h3>
                  <span className="menu-item-price text-gold">{item.price}</span>
                </div>
                <div className="menu-item-separator"></div>
                <p className="menu-item-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
