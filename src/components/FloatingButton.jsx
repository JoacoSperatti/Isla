import { useState, useEffect } from 'react';
import './FloatingButton.css';

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a 
      href="https://www.apparta.co/isla-negra/reservas" 
      className={`reserve-btn ${isVisible ? 'visible' : ''}`}
    >
      Reservar mesa
    </a>
  );
};

export default FloatingButton;