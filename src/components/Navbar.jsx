import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    setIsOpen(false);
    document.body.classList.remove('menu-open');

    if (path === '#contacto') {
      const footer = document.querySelector('footer');
      if (footer) {
        // Usamos una posición ajustada para que el scroll se sienta mejor
        const offset = footer.offsetTop;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/media/images/logo.png" alt="Logo Isla Negra" />
            </Link>
          </div>

          {/* Desktop Links */}
          <nav className="desktop-nav">
            <Link to="/" onClick={(e) => handleLinkClick(e, '/')}>Inicio</Link>
            <Link to="/menu" onClick={(e) => handleLinkClick(e, '/menu')}>Menú</Link>
            <Link to="/about" onClick={(e) => handleLinkClick(e, '/about')}>Sobre nosotros</Link>
            <Link to="/events" onClick={(e) => handleLinkClick(e, '/events')}>Eventos</Link>
            <Link to="/gallery" onClick={(e) => handleLinkClick(e, '/gallery')}>Galería</Link>
            <a href="#contacto" onClick={(e) => handleLinkClick(e, '#contacto')}>Contacto</a>
          </nav>

          <button 
            className={`menu-toggle ${isOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </header>

      {/* MOBILE MENU FULLSCREEN */}
      <nav className={`mobile-menu ${isOpen ? 'active' : ''}`} aria-hidden={!isOpen}>
        <div className="menu-header">
          <img src="/media/images/logo.png" alt="Logo Isla Negra" />
          <button className="close-btn" onClick={toggleMenu}>✕</button>
        </div>

        <div className="menu-divider"></div>

        <div className="menu-links">
          <a href="/" onClick={(e) => handleLinkClick(e, '/')}>Inicio</a>
          <a href="/menu" onClick={(e) => handleLinkClick(e, '/menu')}>Menú</a>
          <a href="/about" onClick={(e) => handleLinkClick(e, '/about')}>Sobre nosotros</a>
          <a href="/events" onClick={(e) => handleLinkClick(e, '/events')}>Eventos</a>
          <a href="/gallery" onClick={(e) => handleLinkClick(e, '/gallery')}>Galería</a>
          <a href="#contacto" onClick={(e) => handleLinkClick(e, '#contacto')}>Contacto</a>
        </div>

        <div className="menu-cta">
          <a href="https://www.apparta.co/isla-negra/reservas" className="btn">
            Reservar mesa
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;