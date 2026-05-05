import { useState, useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const footer = document.querySelector('footer');
      const footerTop = footer ? footer.offsetTop : Infinity;
      const windowHeight = window.innerHeight;

      // Activar sticky después de 400px
      if (scrollY > 400) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // Detectar si el botón está llegando al footer
      // 30px es el bottom original, 80px es un margen de seguridad
      if (footer && (scrollY + windowHeight - 80) >= footerTop) {
        setIsAtFooter(true);
      } else {
        setIsAtFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="video-bg" 
        poster="/media/images/poster.jpg"
      >
        <source src="/media/videos/video.mp4" type="video/mp4" />
      </video>

      <div className="hero-content">
        <h1>Un paréntesis en Palermo 🍷🔥</h1>
        <p>Bajá un cambio, viví Isla Negra.</p>
        <a 
          ref={buttonRef}
          className={`btn ${isSticky ? 'btn-sticky' : ''} ${isAtFooter ? 'at-footer' : ''}`} 
          href="https://www.apparta.co/isla-negra/reservas"
        >
          Reservar mesa
        </a>
      </div>
    </section>
  );
};

export default Hero;