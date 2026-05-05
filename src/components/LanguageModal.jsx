import { useTranslation } from 'react-i18next';
import './LanguageModal.css';

const LanguageModal = ({ onSelect }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    onSelect();
  };

  return (
    <div className="language-modal-overlay">
      <div className="language-modal-content">
        <h2>{t('languageSelector.title')}</h2>
        <div className="language-options">
          <button onClick={() => changeLanguage('es')}>
            <span className="flag">🇪🇸</span> {t('languageSelector.es')}
          </button>
          <button onClick={() => changeLanguage('en')}>
            <span className="flag">🇺🇸</span> {t('languageSelector.en')}
          </button>
          <button onClick={() => changeLanguage('pt')}>
            <span className="flag">🇧🇷</span> {t('languageSelector.pt')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;
