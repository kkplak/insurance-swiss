import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import AboutUs from "./pages/AboutUs";
import { I18nextProvider } from "react-i18next";
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
import SwissInsurance from "./pages/SwissInsurance";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Arrow from "./components/Arrow/ScrollArrow";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import "./App.css";
import Contact from "./pages/Contact";

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
  return (
    <div
    // style={{
    //   backgroundImage: `url(${process.env.PUBLIC_URL}/media/bg22.jpg)`,
    //   backgroundSize: "cover",
    // }}
    >
      <I18nextProvider i18n={i18next}>
        <Router>
          <ScrollToTop />
          <NavBar />
          <Routes>
            <Route path='/' element={<RedirectToDefaultLanguage />} />
            <Route path='/:lang/home' element={<Home />} />
            <Route path='/:lang/info' element={<Info />} />
            <Route path='/:lang/contact' element={<Contact />} />
            <Route path='/:lang/about-us' element={<AboutUs />} />
            <Route
              path='/:lang/health-insurance'
              element={<HealthInsurance />}
            />
            <Route path='/:lang/life-insurance' element={<LifeInsurance />} />
            <Route path='/:lang/house-insurance' element={<HouseInsurance />} />
            <Route path='/:lang/law-protection' element={<LawProtection />} />
            <Route path='/:lang/car-insurance' element={<CarInsurance />} />
            <Route path='/:lang/swiss-insurance' element={<SwissInsurance />} />
          </Routes>
          <Footer />
          {/* <Arrow /> */}
        </Router>
      </I18nextProvider>
    </div>
  );
};

export default App;
