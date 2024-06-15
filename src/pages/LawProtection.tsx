import React from "react";
import { useTranslation } from "react-i18next";

const LawProtection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className='insurance-page container'>
      <h1>{t("Law Protection")}</h1>
      <p>{t("Detailed description of law protection")}</p>
    </div>
  );
};

export default LawProtection;
