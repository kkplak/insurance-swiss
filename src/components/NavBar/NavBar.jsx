import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./../LanguageSwitcher/LanguageSwitcher";

const NavLeft = ({ language, scrollPosition, windowWidth }) => {
  const { t } = useTranslation();
  // const shouldHide = scrollPosition > 20 && windowWidth < 980;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img className='icon' src={`/media/icon-new.png`} alt='icon' />
      {/* <h2>PROTEGOS</h2> */}
      <div
        className='nav-left'
        style={{ display: "flex", alignItems: "center" }}
      >
        {/* {!shouldHide && ( */}

        {/* )} */}
        <div className='links'>
          <ul>
            <li>
              <Link to={`/${language}/home`}>{t("GENERAL.home")}</Link>
            </li>
            <li>
              <Link to={`/${language}/about-me`}>{t("GENERAL.aboutUs")}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const NavCenter = ({ scrollPosition, windowWidth }) => {
  const centerClass =
    scrollPosition > 20 && windowWidth < 700 ? "hide" : "show";

  return <div className={`nav-center`}>{/* <LanguageSwitcher /> */}</div>;
};

const NavRight = ({ scrollPosition, windowWidth }) => {
  const { t } = useTranslation();

  return (
    <div className={`nav-right`} style={{ justifyContent: "flex-end" }}>
      <LanguageSwitcher />
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

  // const padding = windowWidth > 768 ? "0.2% 5% 0.2% 2%" : "0.2% 5% 0.2% 5%";
  // const borderR = scrollPosition < 10 ? "15px" : "0 0 15px 15px";
  const navbarStyle = {
    // backgroundColor: scrollPosition > 20 ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.4)",
    padding: "0.5rem 4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    top: 0,
    zIndex: 1000,
    transition: "0.3s ease-out",
    backdropFilter: "blur(3px)",
    borderRadius: 0,
  };

  return (
    <nav style={navbarStyle} className='nav-bar'>
      <NavLeft
        language={language}
        scrollPosition={scrollPosition}
        windowWidth={windowWidth}
      />
      <NavCenter scrollPosition={scrollPosition} windowWidth={windowWidth} />
      <NavRight scrollPosition={scrollPosition} windowWidth={windowWidth} />
    </nav>
  );
};

export default NavBar;
