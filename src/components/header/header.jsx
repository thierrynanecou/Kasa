import React from 'react';
import { NavLink } from "react-router-dom";
import './header.scss';
import logo from './../../assets/LOGO.png';

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-logo">
                <img src={logo} alt="kasa-logo" />
            </div>

            <div className="header-nav">
                <NavLink to="/" className={(nav)=>( nav.isActive?"link active":"link")}>Accueil</NavLink>
                <NavLink to="/about" className={(nav)=>( nav.isActive?"link active":"link")}>À propos</NavLink>
            </div>
        </header>
    );
}

export default Header;
