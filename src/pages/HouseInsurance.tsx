import React from "react";
import { useTranslation } from "react-i18next";

const HouseInsurance: React.FC = () => {
  const { t } = useTranslation();
  return (
    // <div className='insurance-page container'>
    //   <h1>{t("GENERAL.houseInsurance")}</h1>
    //   <p>{t("GENERAL.houseInsuranceDescriptionLong")}</p>
    // </div>
    <div className='container-maintenance full-container'>
      <div className='notice'>
        <h1>{t("GENERAL.maintenanceh1")}</h1>
        <p>{t("GENERAL.maintenancep")}</p>
      </div>
    </div>
  );
};
export default HouseInsurance;
