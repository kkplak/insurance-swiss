// src/pages/Home.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import ButtonBox from "../components/ButtonBox/ButtonBox";
import LogoLine from "../components/LogoLine/LogoLine";
import InsuranceData from "../components/InsuranceData/InsuranceData";

interface ClientStory {
  name: string;
  focus: string;
  body: string;
  value: string;
}

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const currentLanguage = i18n.language;
  const heroImages = [
    "/media/hero-1.jpg",
    "/media/hero-2.jpg",
    "/media/hero-3.jpg",
        "/media/hero-4.jpg",
  ];
  const [activeHeroIndex, setActiveHeroIndex] = React.useState(0);

  const clientStoriesRaw = t("HOME.clientStories.cases", {
    returnObjects: true,
  }) as unknown;
  const clientStories: ClientStory[] = Array.isArray(clientStoriesRaw)
    ? (clientStoriesRaw as ClientStory[])
    : [];

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

  React.useEffect(() => {
    if (heroImages.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5500);

    return () => window.clearInterval(intervalId);
  }, [heroImages.length]);

  return (
    <div className='homepage'>
      <div className='container-home home'>
        <div id='home' className={`hero-section`}>
          <div className='background-video-desktop'>
            {heroImages.map((imageSrc, index) => (
              <img
                key={imageSrc}
                src={imageSrc}
                alt={`${t("HOME.heroImageAlt")} ${index + 1}`}
                className={`hero-slide ${index === activeHeroIndex ? "active" : ""}`}
              />
            ))}
          </div>

          <div className='overlay'>
            <div className='hero-card'>
              <span className='hero-badge'>{t("HOME.heroBadge")}</span>
              <h1 className='hero-title'>{t("HOME.heroTitle")}</h1>
              <p className='hero-lead'>{t("HOME.heroLead")}</p>
              <p className='hero-subcopy'>{t("HOME.heroSubcopy")}</p>

              <div className='hero-actions'>
                <Link to={`/${lang}/contact`} className='button-link'>
                  <button className='welcome-button'>
                    <span className='lable'>{t("HOME.heroCta")}</span>
                  </button>
                </Link>
              </div>

              {/* <ul className='hero-benefits'>
                <li>{t("GENERAL.heroFeature1")}</li>
                <li>{t("GENERAL.heroFeature2")}</li>
                <li>{t("GENERAL.heroFeature3")}</li>
              </ul> */}
            </div>
          </div>
        </div>

        {/* <div className='image-container'>
          <img src='/media/hero3.png'></img>
        </div> */}
      </div>
      <InsuranceData />
      <div className='button-box-container'>
        <h2 className='button-box-heading'>{t("HOME.productsHeading")}</h2>
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

      <section className='client-stories' aria-labelledby='client-stories-heading'>
        <p className='client-stories-kicker'>{t("HOME.clientStories.kicker")}</p>
        <h2 id='client-stories-heading' className='client-stories-heading'>
          {t("HOME.clientStories.title")}
        </h2>
        <p className='client-stories-lead'>
          {t("HOME.clientStories.lead")}
        </p>

        <div className='client-stories-grid'>
          {clientStories.map((story) => (
            <article className='client-story-card' key={story.name}>
              <h3 className='client-story-title'>
                <span className='client-story-name'>{story.name}</span>
                <span className='client-story-focus'>{story.focus}</span>
              </h3>
              <p className='client-story-body'>{story.body}</p>
              <p className='client-story-value'>{story.value}</p>
            </article>
          ))}
        </div>
      </section>
      <LogoLine logos={logos} mobileBreakpoint={900} marqueeSpeed={30} />
    </div>
  );
};

export default Home;
