
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import "./css/AboutCards.css";

const CARDS = [
  {
    icon: "bi bi-car-front",
    image: "/images/aeroport.avif",
    hoverImage: "/images/aeropert-1.avif",
  },
  {
    icon: "bi bi-building",
    image: "/images/conva-1.avif",
    hoverImage: "/images/hebergement-1.avif",
  },
  {
    icon: "bi bi-heart-pulse",
    image: "/images/conva.avif",
    hoverImage: "/images/conva-3.avif",
  },
  {
    icon: "bi bi-airplane",
    image: "/images/accueil-1.avif",
    hoverImage: "/images/accueil.avif",
  },
  {
    icon: "bi bi-translate",
    image: "/images/linguise.jpg",
    hoverImage: "/images/linguise-1.webp",
  },
  {
    icon: "bi bi-telephone-inbound",
    image: "/images/suivi.jpg",
    hoverImage: "/images/suivi-1.jpg",
  },
];

const translations = {
  fr: {
    eyebrow: "À PROPOS · NOS SERVICES GLOMED",
    title: "Votre séjour,",
    accent: "organisé de A à Z.",
    description:
      "En plus de la coordination médicale, Glomed Group s’occupe de tout ce qui rend votre séjour en Tunisie plus simple et plus confortable.",
    cards: [
      {
        title: "Transport et transferts",
        text: "Transferts entre l’aéroport, votre hébergement et les lieux de rendez-vous, selon la formule convenue.",
      },
      {
        title: "Hébergement",
        text: "Aide à la recherche et à la réservation d’un hébergement adapté à la durée de votre séjour.",
      },
      {
        title: "Convalescence",
        text: "Organisation de votre repos après les soins, dans un cadre adapté aux recommandations de l’équipe médicale.",
      },
      {
        title: "Accueil à l’aéroport",
        text: "Une prise en charge dès votre arrivée en Tunisie, pour un début de séjour plus serein.",
      },
      {
        title: "Assistance linguistique",
        text: "Aide à la communication avec les équipes médicales et les différents interlocuteurs pendant votre séjour.",
      },
      {
        title: "Suivi après le séjour",
        text: "Coordination des informations et des rendez-vous de suivi lorsque les professionnels de santé les recommandent.",
      },
    ],
    cta: "Parler à notre équipe",
  },

  en: {
    eyebrow: "ABOUT US · GLOMED SERVICES",
    title: "Your stay,",
    accent: "organized from A to Z.",
    description:
      "In addition to medical coordination, Glomed Group takes care of everything that makes your stay in Tunisia easier and more comfortable.",
    cards: [
      {
        title: "Transport and Transfers",
        text: "Transfers between the airport, your accommodation and appointment locations, according to the agreed arrangement.",
      },
      {
        title: "Accommodation",
        text: "Assistance with finding and booking accommodation suited to the length of your stay.",
      },
      {
        title: "Recovery and Convalescence",
        text: "Organization of your recovery period in an environment suited to the recommendations of your medical team.",
      },
      {
        title: "Airport Reception",
        text: "Assistance from the moment you arrive in Tunisia, helping you start your stay with peace of mind.",
      },
      {
        title: "Language Assistance",
        text: "Help with communication between you, medical teams and other contacts throughout your stay.",
      },
      {
        title: "Post-Stay Follow-up",
        text: "Coordination of information and follow-up appointments when recommended by healthcare professionals.",
      },
    ],
    cta: "Talk to our team",
  },

  ar: {
    eyebrow: "من نحن · خدمات GLOMED",
    title: "إقامتكم،",
    accent: "منظمة من البداية إلى النهاية.",
    description:
      "إلى جانب التنسيق الطبي، تتولى Glomed Group تنظيم كل ما يجعل إقامتكم في تونس أكثر سهولة وراحة.",
    cards: [
      {
        title: "النقل والتنقلات",
        text: "تنظيم التنقل بين المطار ومكان الإقامة ومواقع المواعيد الطبية، وفقًا للاتفاق المسبق.",
      },
      {
        title: "الإقامة",
        text: "المساعدة في البحث عن مكان إقامة مناسب وحجزه وفقًا لمدة إقامتكم.",
      },
      {
        title: "فترة النقاهة",
        text: "تنظيم فترة الراحة بعد العلاج في مكان يتناسب مع توصيات الفريق الطبي.",
      },
      {
        title: "الاستقبال في المطار",
        text: "استقبالكم ومرافقتكم منذ وصولكم إلى تونس لضمان بداية إقامة أكثر راحة واطمئنانًا.",
      },
      {
        title: "المساعدة اللغوية",
        text: "المساعدة على التواصل مع الفرق الطبية ومختلف الأطراف المعنية طوال فترة إقامتكم.",
      },
      {
        title: "المتابعة بعد الإقامة",
        text: "تنسيق المعلومات ومواعيد المتابعة عندما يوصي بها المهنيون الصحيون.",
      },
    ],
    cta: "تواصلوا مع فريقنا",
  },
};

export default function AboutCards() {
  const { language, dir } = useLanguage();

  const content = translations[language] || translations.fr;

  const sectionRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    setReady(true);

    const node = sectionRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services-glomed"
      ref={sectionRef}
      dir={dir}
      className={`gabout ${ready ? "is-ready" : ""} ${
        visible ? "is-visible" : ""
      }`}
    >
      <div className="gabout-container">
        <div className="gabout-heading">
          <span className="gabout-eyebrow">
            <span className="gabout-dot" />
            {content.eyebrow}
          </span>

          <h2>
            {content.title}
            <span>{content.accent}</span>
          </h2>

          <p>{content.description}</p>
        </div>

        <div className="gabout-grid">
          {CARDS.map((card, index) => {
            const cardContent = content.cards[index];

            return (
              <article
                className={`gabout-card ${
                  active === index ? "is-active" : ""
                }`}
                key={card.image}
                style={{ "--i": index }}
                onClick={() =>
                  setActive(active === index ? null : index)
                }
              >
                <div className="gabout-media">
                  <span
                    className="gabout-media-fallback"
                    aria-hidden="true"
                  >
                    <i className={card.icon} />
                  </span>

                  <img
                    src={card.image}
                    alt={cardContent.title}
                    loading="lazy"
                    className="gabout-img"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  <img
                    src={card.hoverImage}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="gabout-img gabout-img-hover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  <span className="gabout-icon">
                    <i className={card.icon} aria-hidden="true" />
                  </span>
                </div>

                <div className="gabout-body">
                  <h3>{cardContent.title}</h3>
                  <p>{cardContent.text}</p>
                </div>

                <span className="gabout-line" aria-hidden="true" />
              </article>
            );
          })}
        </div>

        <div className="gabout-footer">
          <Link href="/#contact" className="gabout-cta">
            {content.cta} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
