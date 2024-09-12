import React from 'react';


export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <a href="#about">About Us</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
      </nav>
      <div className="footer-social">
        <a href="https://facebook.com" aria-label="Facebook" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" aria-label="Twitter" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div className="footer-contact">
        <p>Address: NGO Address</p>
        <p>Phone: NGO Phone Number</p>
        <p>Email: NGO Email</p>
      </div>
      <div className="newsletter-signup">
        <input type="email" placeholder="Subscribe to our newsletter" />
        <button className="btn btn-primary">Subscribe</button>
      </div>
    </footer>
  );
}
