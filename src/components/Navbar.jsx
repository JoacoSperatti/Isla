import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
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
            <Link to="/" onClick={(e) => handleLinkClick(e, '/')}>{t('navbar.home')}</Link>
            <Link to="/menu" onClick={(e) => handleLinkClick(e, '/menu')}>{t('navbar.menu')}</Link>
            <Link to="/about" onClick={(e) => handleLinkClick(e, '/about')}>{t('navbar.about')}</Link>
            <Link to="/events" onClick={(e) => handleLinkClick(e, '/events')}>{t('navbar.events')}</Link>
            <Link to="/gallery" onClick={(e) => handleLinkClick(e, '/gallery')}>{t('navbar.gallery')}</Link>
            <a href="#contacto" onClick={(e) => handleLinkClick(e, '#contacto')}>{t('navbar.contact')}</a>
            
            <div className="lang-switcher">
              <button onClick={() => changeLanguage('es')} className={i18n.language === 'es' ? 'active' : ''}>ES</button>
              <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>EN</button>
              <button onClick={() => changeLanguage('pt')} className={i18n.language === 'pt' ? 'active' : ''}>PT</button>
            </div>
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

        <div className="menu-links">
          <a href="/" onClick={(e) => handleLinkClick(e, '/')}>{t('navbar.home')}</a>
          <a href="/menu" onClick={(e) => handleLinkClick(e, '/menu')}>{t('navbar.menu')}</a>
          <a href="/about" onClick={(e) => handleLinkClick(e, '/about')}>{t('navbar.about')}</a>
          <a href="/events" onClick={(e) => handleLinkClick(e, '/events')}>{t('navbar.events')}</a>
          <a href="/gallery" onClick={(e) => handleLinkClick(e, '/gallery')}>{t('navbar.gallery')}</a>
          <a href="#contacto" onClick={(e) => handleLinkClick(e, '#contacto')}>{t('navbar.contact')}</a>
        </div>

        <div className="lang-switcher-mobile">
          <button onClick={() => changeLanguage('es')} className={i18n.language === 'es' ? 'active' : ''}>Español</button>
          <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>English</button>
          <button onClick={() => changeLanguage('pt')} className={i18n.language === 'pt' ? 'active' : ''}>Português</button>
        </div>

        <div className="menu-cta">
          <a 
            href="https://www.apparta.co/isla-negra/reservas" 
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('navbar.reserve')}
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
