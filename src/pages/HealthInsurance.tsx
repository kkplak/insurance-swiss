import React from "react";
import { useTranslation } from "react-i18next";

const HealthInsurance: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className='insurance-page container'>
      <h1>{t("healthInsurance")}</h1>
      <p>{t("healthInsuranceDescriptionLong")}</p>
    </div>
  );
};
export default HealthInsurance;
