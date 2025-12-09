import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
           RG Tech
        </Link>

        <button
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#clients" onClick={() => setIsMenuOpen(false)}>
              Clients
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </li>
          <li>
            <Link
              to="/admin"
              className="btn btn-primary btn-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
