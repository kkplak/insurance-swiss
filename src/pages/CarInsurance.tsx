import React from "react";
import { useTranslation } from "react-i18next";

const CarInsurance: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className='insurance-page container'>
      <h1>{t("GENERAL.carInsurance")}</h1>
      <p>{t("GENERAL.carInsuranceDescriptionLong")}</p>
    </div>
  );
};

export default CarInsurance;
