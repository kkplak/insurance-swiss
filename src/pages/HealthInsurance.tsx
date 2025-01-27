import React from "react";
import { useTranslation } from "react-i18next";
import "./HealthInsurance.css"; // Make sure this file contains the CSS styles below.

const HealthInsurance: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="insurance-page container">
      <h1 className="main-title">{t("HEALTH.title")}</h1>
      <p className="intro-text">{t("HEALTH.info")}</p>
      <p className="info-list-title">{t("HEALTH.infoList")}</p>
      <ol className="info-list">
        <li>{t("HEALTH.infoListItem1")}</li>
        <li>{t("HEALTH.infoListItem2")}</li>
      </ol>

      <div className="insurance-section">
        <h2 className="section-title">{t("HEALTH.basic.title")}</h2>
        <p>{t("HEALTH.basic.p")}</p>
        <h3 className="subsection-title">{t("HEALTH.basic.p1")}</h3>
        <ul className="info-list">
          <li>{t("HEALTH.basic.l1")}</li>
          <li>{t("HEALTH.basic.l2")}</li>
          <li>{t("HEALTH.basic.l3")}</li>
          <li>{t("HEALTH.basic.l4")}</li>
          <li>{t("HEALTH.basic.l5")}</li>
        </ul>
        <h3 className="subsection-title">{t("HEALTH.basic.p2")}</h3>
        <ul className="info-list">
          <li>{t("HEALTH.basic.pl1")}</li>
          <li>{t("HEALTH.basic.pl2")}</li>
        </ul>
      </div>

      <div className="insurance-section">
        <h2 className="section-title">{t("HEALTH.fran.title")}</h2>
        <p>{t("HEALTH.fran.p")}</p>
        <h3 className="subsection-title">{t("HEALTH.fran.p1")}</h3>
        <ul className="info-list">
          <li>
            {t("HEALTH.fran.p2")} {t("HEALTH.fran.p3")}
          </li>
          {/* <p>{t("HEALTH.fran.p4")}</p> */}
          <li>
            {t("HEALTH.fran.p5")}
            {t("HEALTH.fran.p6")}
          </li>
          <p>{t("HEALTH.fran.p7")}</p>
        </ul>
        <p className="example-text">{t("HEALTH.fran.p8")}</p>
      </div>

      <div className="insurance-section">
        <h2 className="section-title">{t("HEALTH.model.title")}</h2>
        <p>{t("HEALTH.model.p")}</p>
        <ul className="info-list">
          <li>{t("HEALTH.model.p2")}</li>
          <li>{t("HEALTH.model.p3")}</li>
          <li>{t("HEALTH.model.p4")}</li>
          <li>{t("HEALTH.model.p5")}</li>
        </ul>
      </div>

      <div className="insurance-section">
        <h2 className="section-title">{t("HEALTH.add.title")}</h2>
        <p>{t("HEALTH.add.p")}</p>
        <ul className="info-list">
          <li>{t("HEALTH.add.i1")}</li>
          <li>{t("HEALTH.add.i2")}</li>
          <li>{t("HEALTH.add.i3")}</li>
          <li>{t("HEALTH.add.i4")}</li>
          <li>{t("HEALTH.add.i5")}</li>
        </ul>
        <p>{t("HEALTH.add.p2")}</p>
      </div>

      <div className="insurance-section extra-section">
        <h2 className="section-title">{t("HEALTH.extra.title")}</h2>
        <p className="subsection-title">{t("HEALTH.extra.p1")}</p>
        <p>{t("HEALTH.extra.i1")}</p>
        <p className="subsection-title">{t("HEALTH.extra.p2")}</p>
        <p>{t("HEALTH.extra.i2")}</p>
        <p className="subsection-title">{t("HEALTH.extra.p3")}</p>
        <p>{t("HEALTH.extra.i3")}</p>
        <p className="subsection-title">{t("HEALTH.extra.p4")}</p>
        <p>{t("HEALTH.extra.i4")}</p>
        <p className="subsection-title">{t("HEALTH.extra.p5")}</p>
        <p>{t("HEALTH.extra.i5")}</p>
        <p className="subsection-title">{t("HEALTH.extra.p6")}</p>
        <p>{t("HEALTH.extra.i6")}</p>
        <ul className="info-list">
          <li>{t("HEALTH.extra.il1")}</li>
          <li>{t("HEALTH.extra.il2")}</li>
          <li>{t("HEALTH.extra.il3")}</li>
          <li>{t("HEALTH.extra.il4")}</li>
          <li>{t("HEALTH.extra.il5")}</li>
        </ul>
        <p>{t("HEALTH.extra.p7")}</p>
        <p className="subsection-title">{t("HEALTH.extra.p8")}</p>
        <p>{t("HEALTH.extra.i8")}</p>
        <p>{t("HEALTH.extra.i9")}</p>
        <p className="subsection-title">{t("HEALTH.extra.p9")}</p>
        <p>{t("HEALTH.extra.i10")}</p>
        <p>{t("HEALTH.extra.i11")}</p>
        <p>{t("HEALTH.extra.i12")}</p>
      </div>

      <div className="insurance-section">
        <h2 className="section-title">{t("HEALTH.newcommers.h2")}</h2>
        <p>{t("HEALTH.newcommers.p")}</p>
        <p>{t("HEALTH.newcommers.p2")}</p>
        <ul className="info-list">
          <li>
            <b>{t("HEALTH.newcommers.item1")}</b>
          </li>
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
        <p className="small-text">{t("HEALTH.newcommers.p3")}</p>
        <p>{t("HEALTH.newcommers.p4")}</p>
      </div>
    </div>
  );
};

export default HealthInsurance;
