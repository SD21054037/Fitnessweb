import React from 'react';

import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-copyright">
                    <p>&copy; {currentYear} Fitness & Education. All rights reserved.</p>
                </div>

                <div className="footer-links">
                    <a href="#privacy" className="footer-link">Privacy Policy</a>
                    <span className="footer-divider">|</span>
                    <a href="#terms" className="footer-link">Terms of Service</a>
                    <span className="footer-divider">|</span>
                    <a href="#contact" className="footer-link">Contact Us</a>
                </div>

                <div className="footer-made-with">
                    <p>Made with love by Dione Americaan</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;