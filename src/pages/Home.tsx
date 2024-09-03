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
    { src: "/media/atupri.webp", name: "Atupri" },
    { src: "/media/axa.png", name: "Axa" },
    { src: "/media/Allianz.png", name: "Allianz" },
  ];
  React.useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <div className="homepage">
      <div className="container-home home">
        <div className="text-container">
          <h1>{t("homeH1")}</h1>
          <p>{t("homeP")}</p>
          <Link to={`/${lang}/contact`} className="button-link">
            <button className="welcome-button">
              <svg
                className="svg-icon"
                height="22"
                viewBox="0 0 20 20"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke-linecap="round" stroke-width="1.5">
                  <path d="m6.66669 6.66667h6.66671"></path>
                  <path
                    clip-rule="evenodd"
                    d="m3.33331 5.00001c0-.92047.74619-1.66667 1.66667-1.66667h10.00002c.9205 0 1.6666.7462 1.6666 1.66667v6.66669c0 .9205-.7461 1.6666-1.6666 1.6666h-4.8274c-.1105 0-.21654.044-.29462.122l-2.50004 2.5c-.26249.2625-.71129.0766-.71129-.2945v-1.9108c0-.2301-.18655-.4167-.41667-.4167h-1.25c-.92048 0-1.66667-.7461-1.66667-1.6666z"
                    fill-rule="evenodd"
                  ></path>
                  <path d="m6.66669 10h2.5"></path>
                </g>
              </svg>
              <span className="lable">{t("contactUs")}</span>
            </button>
          </Link>
        </div>
        <div className="image-container">
          <img src="/media/home-img.png" alt="Background" />
        </div>
      </div>
      <div className="button-box-container">
        {/* <h1 className="insurances-header"> Placeholder for checking if we want text here?</h1> */}
        <div
          className={`button-box-row  ${
            currentLanguage === "de" ? "german-container" : ""
          }`}
        >
          <ButtonBox
            icon="/media/health-icon.png"
            titleKey="healthInsurance"
            descriptionKey="healthInsuranceDescription"
            link={`/${lang}/health-insurance`}
          />
          <ButtonBox
            icon="/media/life-icon.png"
            titleKey="lifeInsurance"
            descriptionKey="lifeInsuranceDescription"
            link={`/${lang}/life-insurance`}
          />
          <ButtonBox
            icon="/media/car-icon.png"
            titleKey="carInsurance"
            descriptionKey="carInsuranceDescription"
            link={`/${lang}/car-insurance`}
          />

          <ButtonBox
            icon="/media/law-icon.png"
            titleKey="lawProtection"
            descriptionKey="lawProtectionDescription"
            link={`/${lang}/law-protection`}
          />
          <ButtonBox
            icon="/media/house-icon.png"
            titleKey="houseInsurance"
            descriptionKey="houseInsuranceDescription"
            link={`/${lang}/house-insurance`}
          />

          <ButtonBox
            icon="/media/pets-icon.png"
            titleKey="petInsurance"
            descriptionKey="petInsuranceDescription"
            link={`/${lang}/pets-insurance`}
          />
        </div>
      </div>
      <LogoLine logos={logos} />
    </div>
  );
};

export default Home;
