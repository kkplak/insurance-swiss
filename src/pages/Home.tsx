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
    { src: "/media/helsana.png", name: "Helsana" },
    { src: "/media/visana.png", name: "Visana" },
    { src: "/media/css.png", name: "CSS" },
    { src: "/media/swica.png", name: "Swica" },
    { src: "/media/groupemutuel.png", name: "Groupe Mutuel" },
    { src: "/media/sanitas.svg", name: "Sanitas" },
    { src: "/media/axa.png", name: "Axa" },
    { src: "/media/Allianz.png", name: "Allianz" },
    { src: "/media/atupri.webp", name: "Atupri" },
    { src: "/media/concordia.png", name: "Concordia" },
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
          <h1>{t("homeH1")}</h1>
          <p>{t("homeP")}</p>
          <Link to={`/${lang}/about-lukasz`}>
            <button className='welcome-button'>{t("homeButton")}</button>
          </Link>
        </div>
        <div className='image-container'>
          <img src='/media/home-img.png' alt='Background' />
        </div>
      </div>
      <div className='button-box-container'>
        <div className='button-box-row'>
          <ButtonBox
            icon='/media/health-icon.png'
            titleKey='healthInsurance'
            descriptionKey='healthInsuranceDescription'
            link={`/${lang}/health-insurance`}
          />
          <ButtonBox
            icon='/media/life-icon.png'
            titleKey='lifeInsurance'
            descriptionKey='lifeInsuranceDescription'
            link={`/${lang}/life-insurance`}
          />
               <ButtonBox
            icon='/media/car-icon.png'
            titleKey='carInsurance'
            descriptionKey='carInsuranceDescription'
            link={`/${lang}/car-insurance`}
          />
      
        </div>
        <div className='button-box-row'>
          <ButtonBox
            icon='/media/law-icon.png'
            titleKey='lawProtection'
            descriptionKey='lawProtectionDescription'
            link={`/${lang}/law-protection`}
          />
              <ButtonBox
            icon='/media/house-icon.png'
            titleKey='houseInsurance'
            descriptionKey='houseInsuranceDescription'
            link={`/${lang}/house-insurance`}
          />
     
          <ButtonBox
            icon='/media/pets-icon.png'
            titleKey='petInsurance'
            descriptionKey='petInsuranceDescription'
            link={`/${lang}/pets-insurance`}
          />
        </div>
      </div>
      <LogoLine logos={logos} />
    </div>
  );
};

export default Home;
