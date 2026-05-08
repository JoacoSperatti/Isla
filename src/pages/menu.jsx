import { useTranslation } from 'react-i18next';
import './menu.css';

const Menu = () => {
  const { t } = useTranslation();

  const categories = [
    {
      title: t('menu_page.river_flavors'),
      image: "/media/images/pescado.jpg", 
      description: t('menu_page.river_desc')
    },
    {
      title: t('menu_page.pastas'),
      image: "/media/images/pastas.jpg", 
      description: t('menu_page.pastas_desc')
    },
    {
      title: t('menu_page.meats'),
      image: "/media/images/carne.jpg", 
      description: t('menu_page.meats_desc')
    },
    {
      title: t('menu_page.salads'),
      image: "/media/images/ensalada.jpg", 
      description: t('menu_page.salads_desc')
    },
    {
      title: t('menu_page.cocktails'),
      image: "/media/images/coctel.jpg", 
      description: t('menu_page.cocktails_desc')
    }
  ];

  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="menu-featured">
        <h2>{t('menu_page.title_featured')}</h2>
        
        <div className="menu-categories">
          {categories.map((cat, index) => (
            <div key={index} className="menu-category">
              <h3>{cat.title}</h3>
              <div className="menu-image-container">
                <img src={cat.image} alt={cat.title} />
              </div>
              <p>{cat.description}</p>
            </div>
          ))}
        </div>

        <div className="full-menu-section">
          <h4>{t('menu_page.full_menu_title')}</h4>
          <a 
            href="https://drive.google.com/drive/folders/1DbERH-FSqn_1W3rV4RCTVcakCWkor570?usp=sharing" 
            className="menu-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('menu_page.discover_full')}
          </a>
        </div>
      </section>
    </main>
  );
};

export default Menu;
