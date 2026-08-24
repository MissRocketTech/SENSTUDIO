import react from 'react';
import "./Navbar.css";

export const Navbar: React.FC = () => {
  return (
    <header className="navbar-container">
        <div className="navbar-inner">
            <a href="#hero" className="navbar-logo">
                <span className="logo-symbol">&lt;s&gt;</span>
                <span className="logo-text">senstudio.es</span>
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