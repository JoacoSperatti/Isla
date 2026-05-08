import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main>
      <Hero />
      
      <section id="sobre" className="section">
        <h2>{t('home.experience')}</h2>
        {/* Usamos preload="metadata" como tenías en tu JS */}
        <video autoPlay muted loop playsInline className="video-full" preload="metadata">
          <source src="/media/videos/terraza.mp4" type="video/mp4" />
        </video>
      </section>

      <section id="menu" className="section">
        <h2>{t('home.flavors_title')}</h2>
        <p className="home-description">{t('home.flavors_desc')}</p>
      </section>

      <section id="reservas" className="section">
        <h2>{t('home.reservations_title')}</h2>
        <a 
          className="btn" 
          href="https://www.apparta.co/isla-negra/reservas"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('home.reservations_cta')}
        </a>
      </section>
    </main>
  );
};

export default Home;
