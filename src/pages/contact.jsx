import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="section">
        <h2>{t('contact.title')}</h2>
        <div className="contact-info">
          <p><strong>{t('contact.address')}:</strong> Calle Falsa 123, Isla Negra</p>
          <p><strong>{t('contact.phone')}:</strong> +56 9 1234 5678</p>
          <p><strong>{t('contact.email')}:</strong> contacto@islanegra.cl</p>
          <p><strong>{t('contact.hours')}:</strong> {t('contact.week')}, 12:00 PM - 11:00 PM</p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
