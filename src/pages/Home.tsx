// src/pages/Home.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import ButtonBox from "../components/ButtonBox/ButtonBox";
import LogoLine from "../components/LogoLine/LogoLine";

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const currentLanguage = i18n.language;

  const logos = [
    { src: "/media/helsana.png", name: "Helsana" },
    { src: "/media/visana.png", name: "Visana" },
    { src: "/media/css.png", name: "CSS" },
    { src: "/media/swica.png", name: "Swica" },
    { src: "/media/groupemutuel.png", name: "Groupe Mutuel" },
    { src: "/media/sanitas.svg", name: "Sanitas" },
    { src: "/media/concordia.png", name: "Concordia" },
    { src: "/media/l-life.png", name: "Liechtenstein Life" },
    { src: "/media/axa.png", name: "Axa" },
    { src: "/media/Allianz.png", name: "Allianz" },
  ];
  React.useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <div className='homepage'>
      <div className='container-home home'>
        <div id='home' className={`hero-section`}>
          <div className='background-video-desktop'>
            <img
              src='/media/hiker1.png'
              alt='A male climber on top of a snowy swiss mountain'
            />
          </div>

          <div className='overlay'>
            <div className='text-container'>
              <h1>{t("GENERAL.homeH1")}</h1>
              <p>{t("GENERAL.homeP")}</p>
              <p>{t("GENERAL.homeP2")}</p>
              <Link to={`/${lang}/contact`} className='button-link'>
                <button className='welcome-button'>
                  <span className='lable'>{t("GENERAL.contactUs")}</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* <div className='image-container'>
          <img src='/media/hero3.png'></img>
        </div> */}
      </div>
      <div className='container new'>
        <div className='text-container text-new'>
          <div className='wrapper-text'>
            {/* {" "}
            <p>{t("GENERAL.heroP")}</p> */}
            <h2>{t("GENERAL.heroH2")}</h2>
            <p>{t("GENERAL.heroP2")}</p>
          </div>

          {/* <Link to={`/${lang}/contact`} className='button-link'>
            <button className='welcome-button'>
              <span className='lable'>{t("GENERAL.contactUs")}</span>
            </button>
          </Link> */}
        </div>
      </div>
      {/* <LogoLine logos={logos} /> */}
      <div className='button-box-container'>
        {/* <h1 className="insurances-header"> Placeholder for checking if we want text here?</h1> */}
        <div
          className={`button-box-row  ${
            currentLanguage === "de" ? "german-container" : ""
          }`}
        >
          <ButtonBox
            icon='/media/image-one.png'
            titleKey='GENERAL.healthInsurance'
            descriptionKey='GENERAL.healthInsuranceDescription'
            link={`/${lang}/health-insurance`}
          />
          <ButtonBox
            icon='/media/image-home.png'
            titleKey='GENERAL.houseInsurance'
            descriptionKey='GENERAL.houseInsuranceDescription'
            link={`/${lang}/house-insurance`}
          />

          <ButtonBox
            icon='/media/image-car.jpeg'
            titleKey='GENERAL.carInsurance'
            descriptionKey='GENERAL.carInsuranceDescription'
            link={`/${lang}/car-insurance`}
          />

          <ButtonBox
            icon='/media/image-law.jpeg'
            titleKey='GENERAL.lawProtection'
            descriptionKey='GENERAL.lawProtectionDescription'
            link={`/${lang}/law-protection`}
          />
          <ButtonBox
            icon='/media/image-liability.jpeg'
            titleKey='GENERAL.lifeInsurance'
            descriptionKey='GENERAL.lifeInsuranceDescription'
            link={`/${lang}/life-insurance`}
          />

          <ButtonBox
            icon='/media/image-switzerland.png'
            titleKey='GENERAL.swissInsurance'
            descriptionKey='GENERAL.swissInsuranceDescription'
            link={`/${lang}/swiss-insurance`}
          />
        </div>
      </div>
      <LogoLine logos={logos} mobileBreakpoint={900} marqueeSpeed={30} />
    </div>
  );
};

export default Home;
