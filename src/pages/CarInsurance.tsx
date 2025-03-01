import React from "react";
import { useTranslation } from "react-i18next";

const CarInsurance: React.FC = () => {
  const { t } = useTranslation();
  return (
    // <div className='insurance-page container'>
    //   <h1>{t("GENERAL.carInsurance")}</h1>
    //   <p>{t("GENERAL.carInsuranceDescriptionLong")}</p>
    // </div>
    <div className='container-maintenance full-container'>
      <div className='notice'>
        <h1>{t("GENERAL.maintenanceh1")}</h1>
        <p>{t("GENERAL.maintenancep")}</p>
      </div>
    </div>
  );
};

export default CarInsurance;
