import React from "react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className='container'>
      <h1>{t("aboutUs")}</h1>
      <p>{t("aboutUsContent")}</p>
    </div>
  );
};

export default AboutUs;
