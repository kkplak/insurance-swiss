import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Home from "./pages/Home";
import Info from "./pages/Info";
// import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en.json";
import translationDE from "./locales/de.json";
import translationPL from "./locales/pl.json";
import translationEL from "./locales/el.json";
import HealthInsurance from "./pages/HealthInsurance";
import LifeInsurance from "./pages/LifeInsurance";
import HouseInsurance from "./pages/HouseInsurance";
import LawProtection from "./pages/LawProtection";
import CarInsurance from "./pages/CarInsurance";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";

import "./App.css";

const resources = {
  en: { translation: translationEN },
  de: { translation: translationDE },
  pl: { translation: translationPL },
  el: { translation: translationEL },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

const RedirectToDefaultLanguage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const defaultLanguage = "en";
    navigate(`/${defaultLanguage}/home`);
  }, [navigate]);
  return null;
};

const App = () => {
  const NavBar = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const language = location.pathname.split("/")[1];

    return (
      <nav>
        <img
          className='icon'
          src='https://cdn-icons-png.flaticon.com/512/8323/8323822.png'
          alt='icon'
        />
        <div className='links'>
          <ul>
            <li>
              <Link to={`/${language}/home`}>{t("home")}</Link>
            </li>
            <li>
              <HashLink smooth to={`/${language}/home#contact-footer`}>
                {t("contact")}
              </HashLink>
            </li>
          </ul>
          <LanguageSwitcher />
        </div>
      </nav>
    );
  };

  return (
    <I18nextProvider i18n={i18next}>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<RedirectToDefaultLanguage />} />

          <Route path='/:lang/home' element={<Home />} />
          <Route path='/:lang/info' element={<Info />} />
          {/* <Route path='/:lang/contact' element={<Contact />} /> */}
          <Route path='/:lang/about-lukasz' element={<AboutUs />} />
          <Route path='/:lang/health-insurance' element={<HealthInsurance />} />
          <Route path='/:lang/life-insurance' element={<LifeInsurance />} />
          <Route path='/:lang/house-insurance' element={<HouseInsurance />} />
          <Route path='/:lang/law-protection' element={<LawProtection />} />
          <Route path='/:lang/car-insurance' element={<CarInsurance />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
};

export default App;
