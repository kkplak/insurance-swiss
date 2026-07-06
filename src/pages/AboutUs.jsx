import React from "react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className='container background-white about-me-page'>
      <h1>{t("GENERAL.aboutUs")}</h1>
      <p className='page-intro'>{t("GENERAL.aboutUsContent")}</p>

      <div className='about-me-grid'>
        <div className='lukasz-container'>
          <img src={'/media/lukasz1.jpeg'} alt={t("GENERAL.lukaszBergel")} />
        </div>
        <div className='about-me-copy'>
          <p>{t("GENERAL.aboutLukasz")}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
