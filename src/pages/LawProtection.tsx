import React from "react";
import { useTranslation } from "react-i18next";

const LawProtection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className='insurance-page container'>
      <h1>{t("GENERAL.lawProtection")}</h1>
      <p>{t("GENERAL.lawProtectionDescriptionLong")}</p>
    </div>
  );
};

export default LawProtection;
