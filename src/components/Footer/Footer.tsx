import React from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Layout: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='layout'>
      <Outlet />
      <footer id='contact'>
        <div className='contact'>
          <div className='contact-text'>
            <h2>{t("contact")}</h2>
            <div className='contact-people'>
              <div>
                <p className="people-name">
                  <b>{t("ioannis")}</b>
                </p>
                <p>{t("ioannisPhone")}</p>
                <p>{t("ioannisMail")}</p>
              </div>
              <div>
              <p className="people-name">
                  <b>{t("lukasz")}</b>
                </p>
                <p>{t("lukaszPhone")}</p>
                <p>{t("lukaszMail")}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
