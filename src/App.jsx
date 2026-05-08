import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LanguageModal from './components/LanguageModal';

// Páginas
import Home from './pages/home';
import Menu from './pages/menu';
import About from './pages/about';
import Events from './pages/events';
import Gallery from './pages/gallery';
import Contact from './pages/contact';

function App() {
  const [showLanguageModal, setShowLanguageModal] = useState(() => {
    // Verificamos si ya se eligió idioma antes directamente en el estado inicial
    return !localStorage.getItem('languageSelected');
  });

  const handleLanguageSelect = () => {
    setShowLanguageModal(false);
    localStorage.setItem('languageSelected', 'true');
  };

  return (
    <Router>
      <div className="App">
        {showLanguageModal && <LanguageModal onSelect={handleLanguageSelect} />}
        <h1 className="sr-only">Isla Negra - Restaurante de Autor en Palermo</h1>
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

        <Footer />
      </div>
    </Router>
  );
}

export default App;
