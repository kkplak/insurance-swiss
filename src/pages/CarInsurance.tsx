import React from "react";
import { useTranslation } from "react-i18next";

const CarInsurance: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className='insurance-page container'>
      <h1>{t("Car Insurance")}</h1>
      <p>{t("Detailed description of car insurance")}</p>
    </div>
  );
};

export default CarInsurance;
