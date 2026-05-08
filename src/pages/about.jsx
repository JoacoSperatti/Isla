import { useTranslation } from 'react-i18next';
import './about.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="section about-container">
        <h2>{t('about.title')}</h2>
        
        <div className="about-image-wrapper">
          <img 
            src="/media/images/maxi.jpg" 
            alt="Dueño y hermana" 
            className="about-image" 
          />
        </div>

        <p className="about-description" style={{ whiteSpace: 'pre-line' }}>
          {t('about.description')}
        </p>
      </section>
    </main>
  );
};

export default About;
