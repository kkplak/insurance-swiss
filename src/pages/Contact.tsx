import React from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm/ContactForm";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const phoneValue = t("GENERAL.lukaszPhone").replace(/^[^0-9+]+/i, "").trim();
  const emailValue = t("GENERAL.lukaszMail").replace(/^mail:\s*/i, "").trim();

  return (
    <div className='contact-page container'>
      <div className='contact-intro'>
        <h1>{t("GENERAL.contact")}</h1>
        <p>{t("CONTACT.contactIntro")}</p>
      </div>

      <div className='contact-options'>
        <div className='contact-option-card'>
          <h2>{t("CONTACT.callMeTitle")}</h2>
          <p>{t("CONTACT.callMeText")}</p>
          <a href={`tel:${phoneValue}`}>{t("GENERAL.lukaszPhone")}</a>
        </div>

        <div className='contact-option-card'>
          <h2>{t("CONTACT.emailMeTitle")}</h2>
          <p>{t("CONTACT.emailMeText")}</p>
          <a href={`mailto:${emailValue}`}>{emailValue}</a>
        </div>
      </div>

      <div className='contact-form-panel'>
        <div className='contact-form-intro'>
          <h2>{t("CONTACT.detailsTitle")}</h2>
          <p>{t("CONTACT.detailsText")}</p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};
export default Contact;
