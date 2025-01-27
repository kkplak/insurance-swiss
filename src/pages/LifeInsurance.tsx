import React from "react";
import { useTranslation } from "react-i18next";

const LifeInsurance: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className='insurance-page container'>
      <h1>{t("GENERAL.lifeInsurance")}</h1>
      <p>{t("GENERAL.lifeInsuranceDescriptionLong")}</p>
    </div>
  );
};
export default LifeInsurance;
