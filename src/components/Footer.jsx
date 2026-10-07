import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo-wrapper">
            <img src="/assets/womup-logo-horizontal-white.png?v=5" alt="WOMUP" className="footer-logo" />
          </div>
          <p className="footer-tagline">Smart Shopping &bull; Better Living &bull; Save & Earn Everyday</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/for-customers">For Customers</Link>
          <Link to="/for-vendors">For Vendors</Link>
          <Link to="/shop-categories">Shop Categories</Link>
          <Link to="/income-opportunity">Income</Link>
          <Link to="/womup-mobile-app">Mobile App</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 WOMUP Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}




