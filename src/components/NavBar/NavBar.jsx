import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./../LanguageSwitcher/LanguageSwitcher";

const NavLeft = ({ language, scrollPosition, windowWidth }) => {
  const { t } = useTranslation();
  // const shouldHide = scrollPosition > 20 && windowWidth < 980;

  return (
    <div className='nav-left' style={{ display: 'flex', alignItems: 'center' }}>
      {/* {!shouldHide && ( */}
        <img
          className='icon'
          src={`${process.env.PUBLIC_URL}/media/logo-white.png`}
          alt='icon'
        />
      {/* )} */}
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
      </div>
    </div>
  );
};

const NavCenter = ({ scrollPosition, windowWidth }) => {
  const centerClass = scrollPosition > 20 && windowWidth < 980 ? 'hide' : 'show';

  return (
    <div className={`nav-center ${centerClass}`}>
      <LanguageSwitcher />
    </div>
  );
};

const NavRight = ({ scrollPosition, windowWidth }) => {
  const { t } = useTranslation();
  // const rightClass = scrollPosition > 20 && windowWidth < 980 ? 'hide' : 'show';

  return (
    <div className={`nav-right `} style={{ justifyContent: 'flex-end' }}>
      <div className='nav-phone-numbers'>
        <div className='phone-line'>
          <p>
            <b>{t("lukasz")}</b>
          </p>
          <a href={`tel:${t("lukaszPhone")}`}>{t("lukaszPhone")}</a>
        </div>
        <div className='phone-line'>
          <p>
            <b>{t("ioannis")}</b>
          </p>
          <a href={`tel:${t("ioannisPhone")}`}>{t("ioannisPhone")}</a>
        </div>
      </div>
    </div>
  );
};

const NavBar = () => {
  const location = useLocation();
  const language = location.pathname.split("/")[1];
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: scrollPosition > 20 ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.2)",
    padding: scrollPosition > 20 ? "0.4% 5%" : "2% 5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    transition: "0.3s ease-out",
    backdropFilter: "blur(3px)"
  };

  return (
    <nav style={navbarStyle} className='nav-bar'>
      <NavLeft language={language} scrollPosition={scrollPosition} windowWidth={windowWidth} />
      <NavCenter scrollPosition={scrollPosition} windowWidth={windowWidth} />
      <NavRight scrollPosition={scrollPosition} windowWidth={windowWidth} />
    </nav>
  );
};

export default NavBar;
