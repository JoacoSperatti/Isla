import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

// Páginas
import Home from './pages/home';
import Menu from './pages/menu';
import About from './pages/about';
import Events from './pages/events';
import Gallery from './pages/gallery';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        {/* Aquí se renderiza el contenido según la URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer id="contacto" className="footer-minimal">
          <div className="footer-container">
            <div className="social-links-minimal">
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>

            <div className="contact-line">
              <span>Calle Falsa 123, CABA</span>
              <span className="separator">•</span>
              <span>+54 11 1234-5678</span>
              <span className="separator">•</span>
              <span>hola@islanegra.com.ar</span>
            </div>

            <div className="hours-line">
              Martes a Sábado 12:00 — 00:00 • Domingos 12:00 — 18:00
            </div>

            <div className="footer-credits">
              <p>© 2026 Isla Negra — Un paréntesis necesario en Palermo</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
