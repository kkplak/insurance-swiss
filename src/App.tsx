import React, { useState, useEffect } from "react";
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
import PetsInsurance from "./pages/PetsInsurance";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import Footer from "./components/Footer/Footer";

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
    const defaultLanguage = "en"; // Change this to your actual default language code
    navigate(`/${defaultLanguage}/home`);
  }, [navigate]);
  return null;
};

const App = () => {
  const NavBar = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const language = location.pathname.split("/")[1];

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      };

      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    // Calculate background color based on scroll position
    const navbarStyle = {
      backgroundColor:
        scrollPosition > 20 ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.2)",
      padding: scrollPosition > 20 ? "1% 5% 1% 10%" : "2% 5% 2% 10%",
      display: "flex",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      transition: "0.3s ease-out",
        backdropFilter: "blur(3px)"
    };

    return (
      //@ts-ignore
      <nav style={navbarStyle} className='nav-bar'>
        <img
          className='icon'
          src={`${process.env.PUBLIC_URL}/media/logo-white.png`}
          alt='icon'
        />
        <div className='links'>
          <ul>
            <li>
              <Link to={`/${language}/home`}>{t("home")}</Link>
            </li>
            <li>
              <HashLink smooth to={`#${t("contact").toLowerCase()}`}>
                {t("contact")}
              </HashLink>
            </li>
          </ul>
          <LanguageSwitcher />
          <div className='nav-phone-numbers'>
            <div className='phone-line'>
            <p>
                <b>{t("lukasz")}</b>
              </p>
              <p>{t("lukaszPhone")}</p>
            </div>
            <div className='phone-line'>
            <p>
                <b>{t("ioannis")}</b>
              </p>
              <p>{t("ioannisPhone")}</p>
          
            </div>
          </div>
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
          <Route path='/:lang/about-lukasz' element={<AboutUs />} />
          <Route path='/:lang/health-insurance' element={<HealthInsurance />} />
          <Route path='/:lang/life-insurance' element={<LifeInsurance />} />
          <Route path='/:lang/house-insurance' element={<HouseInsurance />} />
          <Route path='/:lang/law-protection' element={<LawProtection />} />
          <Route path='/:lang/car-insurance' element={<CarInsurance />} />
          <Route path='/:lang/pets-insurance' element={<PetsInsurance />} />
        </Routes>
        <Footer />
      </Router>
    </I18nextProvider>
  );
};

export default App;
