import React from "react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className='container background-white about-me-page'>
      <div className='about-us-header'>
        <h1>{t("GENERAL.aboutUs")}</h1>
        <p>{t("GENERAL.aboutUsContent")}</p>
      </div>
      <div className='about-me-wrapper'>
        <div className='lukasz-container'>
          <img src={'/media/lukasz1.jpeg'} alt='Lukasz Bergel' />
          <h2>{t("GENERAL.lukaszBergel")}</h2>
        </div>
        <div className='about-me-copy'>
          <p>{t("GENERAL.aboutLukasz")}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
