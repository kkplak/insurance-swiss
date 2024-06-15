import React from "react";
import { useTranslation } from "react-i18next";

const LifeInsurance: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className='insurance-page container'>
      <h1>{t("Life Insurance")}</h1>
      <p>{t("Detailed description of life insurance")}</p>
    </div>
  );
};
export default LifeInsurance;
