import React from "react";
import { useTranslation } from "react-i18next";

const HealthInsurance: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
    <div className='insurance-page container'>
      <h1>{t("healthInsurance")}</h1>
      <p>{t("healthInfoP")}</p>


   
      <div className='insurance-page container2'>
      <p>{t("healthInfoUP")}</p>
   
      <p>{t("healthInfoFran")}</p>
    
      <p>{t("healthInfoModel")}</p>
  
      <p>{t("healthInfoD")}</p>

      <p>{t("healthInfoW")}</p>
      </div>

      <div className='insurance-page container2'>
      <h2>{t("healthNewH2")}</h2>
      <p>{t("healthNewP")}</p>
      <p>{t("healthNewP2")}</p>
      <p><b>{t("healthNewPItem1")}</b></p>
      <p className="smaller-p">{t("healthNewP3")}</p>
      <p><b>{t("healthNewPItem2")}</b></p>
      <p><b>{t("healthNewPItem3")}</b></p>
      <p><b>{t("healthNewPItem4")}</b></p>
      <p>{t("healthNewP4")}</p>
      </div>
          </div>
    </>
  );
};
export default HealthInsurance;
