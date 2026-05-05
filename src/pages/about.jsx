import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="section">
        <h2>{t('about.title')}</h2>
        <p style={{ whiteSpace: 'pre-line' }}>{t('about.description')}</p>
      </section>
    </main>
  );
};

export default About;
