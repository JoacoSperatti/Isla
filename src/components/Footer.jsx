import { useTranslation } from "react-i18next";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contacto" className="footer-minimal">
      <div className="footer-container">
        <div className="social-links-minimal">
          <a href="https://www.instagram.com/islanegraresto/" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/people/Isla-Negra-Restaurante/61587087786945/?ref=PROFILE_EDIT_xav_ig_profile_page_web" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://wa.me/5491124904320" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>

        <div className="contact-line">
          <span>Gurruchaga 1450, Palermo</span>
          <span className="separator">•</span>
          <span>+54 11 2490-4320</span>
          <span className="separator">•</span>
          <span>islanegraresto@gmail.com</span>
        </div>

        <div className="hours-line">
          <div>{t("footer.days")}</div>
          <div>{t("footer.special")}</div>
        </div>

        <div className="footer-credits">
          <p>© 2026 Isla Negra — {t("footer.description")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
