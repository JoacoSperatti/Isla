import { useTranslation } from 'react-i18next';

const Menu = () => {
  const { t } = useTranslation();

  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="section">
        <h2>{t('menu_page.title')}</h2>
        <p>{t('menu_page.description')}</p>
      </section>
    </main>
  );
};

export default Menu;
