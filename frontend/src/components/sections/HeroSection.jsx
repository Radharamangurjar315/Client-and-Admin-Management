import { Link } from 'react-router-dom';
import '../../styles/sections/hero.css';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Build Your Dream <span className="highlight">Digital Product</span>
            </h1>
            <p className="hero-description">
              We are a team of experienced full-stack developers ready to turn your ideas into reality. 
              From concept to deployment, we've got you covered with cutting-edge technology.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary btn-lg">
                 Start Your Project
              </a>
              <a href="#services" className="btn btn-primary btn-lg">
                 Learn More
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=500&fit=crop" 
                alt="Web Development" 
                className="hero-img"
              />
              <div className="hero-image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
