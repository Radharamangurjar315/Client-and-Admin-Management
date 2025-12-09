import { Link } from 'react-router-dom';
import '../styles/footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-title"> RG Tech</h4>
            <p className="footer-text">
              Building exceptional digital products for startups and enterprises.
            </p>
            <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">𝕏</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="footer-section">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#projects">Projects</a></li>
              <li><a href="#clients">Clients</a></li>
              <li><Link to="/admin">Admin</Link></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h5 className="footer-heading">Services</h5>
            <ul className="footer-links">
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Mobile Apps</a></li>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">API Development</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h5 className="footer-heading">Contact</h5>
            <ul className="footer-links">
              <li><a href="mailto:hello@RG Tech.com">hello@RG Tech.com</a></li>
              <li><a href="tel:+919876543210">+91 9876 543 210</a></li>
              <li>Mumbai, India</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} RG Tech. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
