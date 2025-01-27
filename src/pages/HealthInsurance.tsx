import React from "react";
import { useTranslation } from "react-i18next";

const HealthInsurance: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
    <div className='insurance-page container'>
      <h1>{t("HEALTH.title")}</h1>
      <p>{t("HEALTH.info")}</p>
      <p>{t("HEALTH.infoList")}</p>
      <ol>
        <li>{t("HEALTH.infoListItem1")}</li>
        <li>{t("HEALTH.infoListItem2")}</li>
        </ol>


   
      <div className='insurance-page container2'>
      <p>{t("HEALTH.basic.title")}</p>
      <p>{t("HEALTH.basic.p")}</p>
      <p>{t("HEALTH.basic.p1")}</p>
      <p>{t("HEALTH.basic.l1")}</p>
      <p>{t("HEALTH.basic.l2")}</p>
      <p>{t("HEALTH.basic.l3")}</p>
      <p>{t("HEALTH.basic.l4")}</p>
      <p>{t("HEALTH.basic.l5")}</p>
      <p>{t("HEALTH.basic.p2")}</p>
      <p>{t("HEALTH.basic.pl1")}</p>
      <p>{t("HEALTH.basic.pl2")}</p>
      
   
      <p>{t("HEALTH.fran.title")}</p>
      <p>{t("HEALTH.fran.p")}</p>
      <p>{t("HEALTH.fran.p1")}</p>
      <p>{t("HEALTH.fran.p2")}</p>
      <p>{t("HEALTH.fran.p3")}</p>
      <p>{t("HEALTH.fran.p4")}</p>
      <p>{t("HEALTH.fran.p5")}</p>
      <p>{t("HEALTH.fran.p6")}</p>
      <p>{t("HEALTH.fran.p7")}</p>
      <p>{t("HEALTH.fran.p8")}</p>
   
    
      <p>{t("HEALTH.healthInfoModel")}</p>
  
      <p>{t("HEALTH.healthInfoD")}</p>

      <p>{t("HEALTH.healthInfoW")}</p>
      </div>

      <div className='insurance-page container2'>
      <h2>{t("HEALTH.newcommers.h2")}</h2>
      <p>{t("HEALTH.newcommers.p")}</p>
      <p>{t("HEALTH.newcommers.p2")}</p>
      <p><b>{t("HEALTH.newcommers.item1")}</b></p>
      <p className="smaller-p">{t("HEALTH.newcommers.p3")}</p>
      <p><b>{t("HEALTH.newcommers.item2")}</b></p>
      <p><b>{t("HEALTH.newcommers.item3")}</b></p>
      <p><b>{t("HEALTH.newcommers.item4")}</b></p>
      <p>{t("HEALTH.newcommers.p4")}</p>
      </div>
          </div>
    </>
  );
};
export default HealthInsurance;
