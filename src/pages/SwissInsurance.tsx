import React from "react";
import { useTranslation } from "react-i18next";

const SwissInsurance: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="insurance-page container">
      <h1>{t("GENERAL.swissInsurance")}</h1>
      <div className="insurance-section newcommer">
        {/* <h2 className="section-title">{t("HEALTH.newcommers.h2")}</h2> */}
      
        <h3>{t("HEALTH.newcommers.p2")}</h3>
        <ul className="info-list">
          <li>
            <b>{t("HEALTH.newcommers.item1")}</b>
          </li>
          <p className="small-text">{t("HEALTH.newcommers.p3")}</p>
          <ul className="small-list">
            <li>
              {" "}
              <p className="small-text">{t("HEALTH.newcommers.p3item1")}</p>
            </li>

            <li>
              {" "}
              <p className="small-text">{t("HEALTH.newcommers.p3item2")}</p>
            </li>
            <li>
              {" "}
              <p className="small-text">{t("HEALTH.newcommers.p3item3")}</p>
            </li>
          </ul>
          <li>
            <b>{t("HEALTH.newcommers.item2")}</b>
          </li>
          <li>
            <b>{t("HEALTH.newcommers.item3")}</b>
          </li>
          <li>
            <b>{t("HEALTH.newcommers.item4")}</b>
          </li>
        </ul>

        <p className="small-text">{t("HEALTH.newcommers.p4")}</p>
        <div className="text-center">
        <p className="bgcolor" dangerouslySetInnerHTML={{ __html: t("HEALTH.newcommers.p") }} />

        </div>
      </div>
    
    </div>
  );
};
export default SwissInsurance;
