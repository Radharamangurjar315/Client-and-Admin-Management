import { useState } from 'react';
import API from '../services/api';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    city: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await API.post('/contacts', formData);
      setSubmitted(true);
      setFormData({ fullName: '', email: '', mobileNumber: '', city: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError(err.response?.data?.error || 'Error submitting form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's discuss how we can help you achieve your goals
          </p>
        </div>
        
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-text">
              Fill out the form and our team will get back to you within 24 hours.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-value">hello@rgtech.com</div>
                </div>
              </div>
              
              <div className="contact-item">
                <div>
                  <div className="contact-label">Phone</div>
                  <div className="contact-value">+91 9876 543 210</div>
                </div>
              </div>
              
              <div className="contact-item">
                
                <div>
                  <div className="contact-label">Location</div>
                  <div className="contact-value">Mumbai, India</div>
                </div>
              </div>
            </div>

            <div className="social-links-contact">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">𝕏</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {submitted && (
              <div className="alert alert-success">
                 Thank you! Your message has been sent successfully.
              </div>
            )}
            {error && (
              <div className="alert alert-error">
                ❌ {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Mobile Number *</label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="9876543210"
                  maxLength="10"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Mumbai"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="loading"></span>
                    Submitting...
                  </>
                ) : (
                  <>
                     Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
