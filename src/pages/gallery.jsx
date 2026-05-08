import { useTranslation } from 'react-i18next';
import Carousel from '../components/Carousel';
import heroImg from '../assets/hero.png';

const Gallery = () => {
  const { t } = useTranslation();

  const images = [
    '/media/images/galery1.jpg',
    '/media/images/galery2.jpg',
    '/media/images/galery3.jpg',
    '/media/images/galery4.jpg',
    '/media/images/galery5.jpg',
    '/media/images/galery6.jpg',
    '/media/images/galery7.jpg',
  ];

  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="section">
        <h2>{t('gallery.title')}</h2>
        <p>{t('gallery.description')}</p>
        <Carousel images={images} />
      </section>
    </main>
  );
};

export default Gallery;
