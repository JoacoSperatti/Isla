import { useTranslation } from "react-i18next";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contacto" className="footer-minimal">
      <div className="footer-container">
        <div className="social-links-minimal">
          <a 
            href="https://www.instagram.com/islanegraresto/" 
            aria-label="Instagram"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.facebook.com/people/Isla-Negra-Restaurante/61587087786945/?ref=PROFILE_EDIT_xav_ig_profile_page_web" 
            aria-label="Facebook"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a 
            href="https://wa.me/5491124904320" 
            aria-label="WhatsApp"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Gurruchaga+1450%2C+Palermo+Soho" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Google Maps"
          >
            <SiGooglemaps />
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
          <p className="developer-credit">
            {t("footer.developed_by")}{" "}
            <a 
              href="https://portafolio-joaquinsperatti.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="developer-link"
            >
              Joaquín Speratti
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
