import React from "react";
import { useTranslation } from "react-i18next";

const PetsInsurance: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className='insurance-page container'>
      <h1>{t("GENERAL.petInsurance")}</h1>
      <p>{t("GENERAL.petInsuranceDescriptionLong")}</p>
    </div>
  );
};
export default PetsInsurance;
