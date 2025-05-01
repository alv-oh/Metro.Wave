import React, { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Thank you for your feedback!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer className="footer bg-dark text-light py-5">
    <div>
      {/* New Review/Message Box */}
      <div className="row mt-4">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Leave a Message or Review</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="3"
                    placeholder="Your Message or Review"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
          
      {/* Copyright */}
      <div className="text-center mt-4 pb-4 mb-4">
        <p className="text-light">&copy; {new Date().getFullYear()} MetroWave. All Rights Reserved.</p>
      </div>
    </div>
    </footer>
  );
};

export default Footer;

