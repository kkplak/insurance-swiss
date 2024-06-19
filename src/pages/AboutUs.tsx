import React from "react";
import { useTranslation } from "react-i18next";



const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className='container'>
      <div className="about-us-header">
      <h1>{t("aboutUs")}</h1>
      <p>{t("aboutUsContent")}</p>
      </div>
      <div className="people-container">
        <div className="ioannis-container"><img src={`${process.env.PUBLIC_URL}/media/img-placeholder.webp`}></img><h2>{t("ioannis")}</h2><p>{t("aboutIoannis")}</p></div>
        <div className="lukasz-container"><img src={`${process.env.PUBLIC_URL}/media/img-placeholder.webp`}></img><h2>{t("lukasz")}</h2><p>{t("aboutLukasz")}</p></div>
        </div>
    </div>
  );
};

export default AboutUs;
