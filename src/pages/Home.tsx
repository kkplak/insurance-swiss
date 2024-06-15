// src/pages/Home.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import ButtonBox from "../components/ButtonBox/ButtonBox";
import LogoLine from "../components/LogoLine/LogoLine";

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  const logos = [
    "/media/Allianz.png",
    "/media/atupri.webp",
    "/media/axa.png",
    "/media/concordia.png",
    "/media/css.png",
    "/media/groupemutuel.jpg",
    "/media/helsana.png",
    "/media/sanitas.svg",
    "/media/swica.png",
    "/media/visana.png",
  ];

  React.useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <div className='homepage'>
      <div className='container home'>
        <div className='text-container'>
          <h1>{t("welcomeMessage")}</h1>
          <p>{t("welcomeBody")}</p>
          <Link to={`/${lang}/about-lukasz`}>
            <button className='welcome-button'>{t("More About us")}</button>
          </Link>
        </div>
        <div className='image-container'>
          <img src='/media/homeImage.png' alt='Background' />
        </div>
      </div>
      <div className='button-box-container'>
        <div className='button-box-row'>
          <ButtonBox
            icon='/media/health-icon.png'
            title='Health Insurance'
            description='Short description of health insurance'
            link={`/${lang}/health-insurance`}
          />
          <ButtonBox
            icon='/media/life-icon.png'
            title='Life Insurance'
            description='Short description of life insurance'
            link={`/${lang}/life-insurance`}
          />
          <ButtonBox
            icon='/media/house-icon.png'
            title='House Insurance'
            description='Short description of house insurance'
            link={`/${lang}/house-insurance`}
          />
        </div>
        <div className='button-box-row'>
          <ButtonBox
            icon='/media/law-icon.png'
            title='Law Protection'
            description='Short description of law protection'
            link={`/${lang}/law-protection`}
          />
          <ButtonBox
            icon='/media/car-icon.png'
            title='Car Insurance'
            description='Short description of car insurance'
            link={`/${lang}/car-insurance`}
          />
        </div>
      </div>
      <LogoLine logos={logos} />

      <footer id='contact-footer'>
        <div className='contact'>
          <div className='contact-text'>
            <h2>Contact</h2>
            <p>Lukasz</p>
            <p>Phone number: 11111111</p>
            <p>Email: aaaaa@aaaaa.com</p>
            <p>Janis</p>
            <p>Phone number: 11111111</p>
            <p>Email: aaaaa@aaaaa.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
