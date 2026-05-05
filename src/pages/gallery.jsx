import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="section">
        <h2>{t('gallery.title')}</h2>
        <p>{t('gallery.description')}</p>
      </section>
    </main>
  );
};

export default Gallery;
