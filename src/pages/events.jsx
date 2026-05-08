import { useTranslation } from 'react-i18next';
import Carousel from '../components/Carousel';
import heroImg from '../assets/hero.png';

const Events = () => {
  const { t } = useTranslation();

  const images = [
    '/media/images/salon1.jpg',
    '/media/images/salon2.jpg',
    heroImg
  ];

  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="section">
        <h2>{t('events.title')}</h2>
        <p>{t('events.description')}</p>
        <Carousel images={images} />
      </section>
    </main>
  );
};

export default Events;
