import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-icon">⬡</span>
              <span>EstateHub</span>
            </Link>
            <p className="footer-tagline">
              Your trusted partner in finding the perfect property. We connect buyers, sellers, and agents for seamless real estate experiences.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
              <a href="#" className="social-icon"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/listings" className="footer-link">Browse Listings</Link>
            <Link to="/create" className="footer-link">List Your Property</Link>
            <Link to="/dashboard" className="footer-link">Dashboard</Link>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Property Types</h4>
            <Link to="/listings?type=house" className="footer-link">Houses</Link>
            <Link to="/listings?type=apartment" className="footer-link">Apartments</Link>
            <Link to="/listings?type=villa" className="footer-link">Villas</Link>
            <Link to="/listings?type=condo" className="footer-link">Condos</Link>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact">
              <HiOutlineLocationMarker />
              <span>123 Real Estate Blvd, Suite 100</span>
            </div>
            <div className="footer-contact">
              <HiOutlinePhone />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="footer-contact">
              <HiOutlineMail />
              <span>hello@estatehub.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 EstateHub. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
