import React from "react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className='container'>
      <div className="about-us-header">
        <h1>{t("aboutUs")}</h1>
        <p>{t("aboutUsContent")}</p>
      </div>
      {/* {currentLanguage === "pl" || currentLanguage === "el" ? (
        <div className="people-container">
          <div className="ioannis-container">
            <img src={`${process.env.PUBLIC_URL}/media/img-placeholder.webp`} alt="Ioannis" />
            <h2>{t("ioannis")}</h2>
            <p>{t("aboutIoannis")}</p>
          </div>
          <div className="lukasz-container">
            <img src={`${process.env.PUBLIC_URL}/media/img-placeholder.webp`} alt="Lukasz" />
            <h2>{t("lukasz")}</h2>
            <p>{t("aboutLukasz")}</p>
          </div>
        </div>
      ) : (
        <div className="wrapper">
        <div className="people-container">
        <div className="ioannis-container">
          <img src={`${process.env.PUBLIC_URL}/media/img-placeholder.webp`} alt="Ioannis" />
          <h2>{t("ioannis")}</h2>
        </div>
        <div className="lukasz-container">
          <img src={`${process.env.PUBLIC_URL}/media/img-placeholder.webp`} alt="Lukasz" />
          <h2>{t("lukasz")}</h2>
        
        </div>
       
        </div>
        <p>{t("aboutUsTogetherContent")}</p>
      </div>
      )} */}
           <div className="wrapper">
        <div className="people-container">
        <div className="ioannis-container">
          <img src={`${process.env.PUBLIC_URL}/media/img-placeholder.webp`} alt="Ioannis" />
          <h2>{t("ioannis")}</h2>
        </div>
        <div className="lukasz-container">
          <img src={`${process.env.PUBLIC_URL}/media/img-placeholder.webp`} alt="Lukasz" />
          <h2>{t("lukasz")}</h2>
        
        </div>
       
        </div>
        <p>{t("aboutUsTogetherContent")}</p>
      </div>
    </div>
  );
};

export default AboutUs;
