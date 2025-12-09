import { Link } from 'react-router-dom';
import '../../styles/sections/cta.css';

export default function CallToAction() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p className="cta-text">
            Let's discuss your ideas and create something amazing together.
          </p>
          <div className="cta-buttons">
            <Link to="#contact" className="btn btn-primary btn-lg">
               Get Started Now
            </Link>
            <a href="#contact" className="btn btn-primary btn-lg">
               Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
