import React from "react";
import { useTranslation } from "react-i18next";

const HouseInsurance: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className='insurance-page container'>
      <h1>{t("House Insurance")}</h1>
      <p>{t("Detailed description of house insurance")}</p>
    </div>
  );
};
export default HouseInsurance;
