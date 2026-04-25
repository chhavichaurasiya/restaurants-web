import React, { useState } from 'react';
import './Reservation.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Reservation request received! We will contact you shortly to confirm.');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="reservation" className="section reservation-section">
      <div className="reservation-bg"></div>
      <div className="container reservation-container">
        <div className="reservation-content glass-panel animate-fade-in">
          <div className="text-center">
            <h4 className="text-gold section-subtitle">Book a Table</h4>
            <h2 className="section-title">Make a Reservation</h2>
          </div>
          
          <form className="reservation-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                value={formData.name}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
                value={formData.email}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <input 
                  type="date" 
                  name="date" 
                  required 
                  value={formData.date}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input 
                  type="time" 
                  name="time" 
                  required 
                  value={formData.time}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <select 
                  name="guests" 
                  value={formData.guests}
                  onChange={handleChange}
                  className="form-control"
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="text-center mt-2">
              <button type="submit" className="btn btn-primary">Confirm Reservation</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
