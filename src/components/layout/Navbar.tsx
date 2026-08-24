import React from 'react';
import "./Navbar.css";
import Logo from '../../assets/logo.svg';
import logosen from '../../assets/logosen.svg';
export const Navbar: React.FC = () => {
  return (
    <header className="navbar-container">
        <div className="navbar-inner">
            <a href="#hero" className="navbar-brand">
                <img src={Logo} alt="Isotipo SEN" className="navbar-logo-img" />
                <img src={logosen} alt="SEN Studio" className="navbar-name-img" />
            </a>

            <nav className="navbar-links">
                <a href="#about" className="navbar-link">Servicios</a>
                <a href="#projects" className="navbar-link">Ecosistema Phygital</a>
                <a href="#contact" className="navbar-link">Sobre Sylvia</a>
            </nav>
        
            <a href="#contacto" className="navbar-cta">
                Hablemos
            </a>
        </div>
       </header>
  );
};