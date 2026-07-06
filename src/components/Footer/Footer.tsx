import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer id='contact' className='footer'>
      <div className='footer-inner'>
        <div className='footer-info'>
          <p className='footer-label'>{t("GENERAL.lukaszBergel")}</p>
          <p className='footer-copy'>{t("GENERAL.aboutUsContent")}</p>
        </div>
        <div className='footer-contact'>
          <a className='footer-link' href={`tel:${t("GENERAL.lukaszPhone")}`}>
            {t("GENERAL.lukaszPhone")}
          </a>
          <a className='footer-link' href={`mailto:${t("GENERAL.lukaszMail")}`}>
            {t("GENERAL.lukaszMail")}
          </a>
        </div>
      </div>
      <div className='footer-footer'>
        <p>© {currentYear} {t("GENERAL.lukaszBergel")} · Personal insurance advisor.</p>
      </div>
    </footer>
  );
};

export default Footer;
