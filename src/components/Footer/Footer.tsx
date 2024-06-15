// src/components/Layout/Layout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='layout'>
      <Outlet />
      <footer id='contact-footer'>
        <div className='contact'>
          <div className='contact-text'>
            <h2>{t("Contact")}</h2>
            <p>Lukasz</p>
            <p>Phone number: 11111111</p>
            <p>Email: aaaaa@aaaaa.com</p>
            <p>Janis</p>
            <p>Phone number: 11111111</p>
            <p>Email: aaaaa@aaaaa.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
