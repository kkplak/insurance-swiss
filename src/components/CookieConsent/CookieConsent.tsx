import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./CookieConsent.css";

const STORAGE_KEY = "site-cookie-consent";

type ConsentChoice = "accepted" | "essential";

const CookieConsent: React.FC = () => {
  const { i18n } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setVisible(true);
    }
  }, []);

  const handleAccept = (value: ConsentChoice) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  const currentLang = i18n.resolvedLanguage?.split("-")[0] || "en";

  if (!visible) {
    return null;
  }

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className="cookie-banner__content">
        <div>
          <h3>Cookies</h3>
          <p>
            This site uses essential and functional cookies to keep the website working and remember your language preference.
            No advertising or tracking cookies are used.
          </p>
        </div>
        <div className="cookie-banner__actions">
          <button type="button" className="cookie-banner__button cookie-banner__button--secondary" onClick={() => handleAccept("essential")}>
            Accept essential cookies
          </button>
          <button type="button" className="cookie-banner__button" onClick={() => handleAccept("accepted")}>
            Accept all
          </button>
        </div>
      </div>
      <p className="cookie-banner__legal">
        <Link to={`/${currentLang}/legal`}>Read our cookie and privacy notice</Link>
      </p>
    </div>
  );
};

export default CookieConsent;
