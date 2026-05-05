import { useTranslation } from 'react-i18next';

const Events = () => {
  const { t } = useTranslation();

  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="section">
        <h2>{t('events.title')}</h2>
        <p>{t('events.description')}</p>
      </section>
    </main>
  );
};

export default Events;
