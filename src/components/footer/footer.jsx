import React from 'react';
import './footer.scss';
import logo from './../../assets/LOGO blanc.png';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-logo">
            <img src={logo} alt="kasa-logo" />
            </div>
            
            <p className="footer-text">© 2020 Kasa. Tous droits réservés</p>
        </footer>
    );
}

export default Footer;
