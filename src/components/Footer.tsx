import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.facebook.com/ghostworkout" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://x.com/ghostworkoutapp" target="_blank" rel="noopener noreferrer" aria-label="X">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="social-icon-x"
            viewBox="0 0 300 271"
            width="20"
            height="18.07"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z" />
          </svg>
        </a>
        <a href="https://tiktok.com/@ghostworkoutapp" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>
      <p>&copy; 2026 Hello Favors, LLC. All rights reserved.</p>
      <nav className="footer-nav">
        <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/delete-account">Delete Account</Link>
      </nav>
    </footer>
  );
}

export default Footer;
