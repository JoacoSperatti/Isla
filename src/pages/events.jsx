import { useTranslation } from 'react-i18next';
import './events.css';

const Events = () => {
  const { t } = useTranslation();

  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="section events-container">
        <h2>{t('events.title')}</h2>
        <p>{t('events.description')}</p>
        
        <div className="events-video-wrapper">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="events-video" 
            preload="metadata"
          >
            <source src="/media/videos/terraza.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </main>
  );
};

export default Events;
