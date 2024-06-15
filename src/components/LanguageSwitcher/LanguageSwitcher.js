import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as FlagEnglish } from "../LanguageSwitcher/flag-english.svg";
import { ReactComponent as FlagGerman } from "../LanguageSwitcher/flag-german.svg";
import { ReactComponent as FlagPolish } from "../LanguageSwitcher/flag-polish.svg";
import { ReactComponent as FlagGreek } from "../LanguageSwitcher/flag-greek.svg";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split("/").slice(2).join("/");

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    navigate(`/${lang}/${currentPath}`);
  };

  return (
    <div className='language-switcher'>
      <FlagEnglish
        onClick={() => handleLanguageChange("en")}
        className={`language-icon ${i18n.language === "en" ? "active" : ""}`}
      />
      <FlagGerman
        onClick={() => handleLanguageChange("de")}
        className={`language-icon ${i18n.language === "de" ? "active" : ""}`}
      />
      <FlagPolish
        onClick={() => handleLanguageChange("pl")}
        className={`language-icon ${i18n.language === "pl" ? "active" : ""}`}
      />
      <FlagGreek
        onClick={() => handleLanguageChange("el")}
        className={`language-icon ${i18n.language === "el" ? "active" : ""}`}
      />
    </div>
  );
};

export default LanguageSwitcher;
