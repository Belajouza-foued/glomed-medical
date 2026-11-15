
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import "./css/DoctorsAbroad.css";

// Pays où les médecins interviennent
const COUNTRIES = [
  { code: "LY" },
  { code: "FR" },
  { code: "QA" },
];

const flag = (code) =>
  `https://flagcdn.com/w160/${code.toLowerCase()}.png`;

const translations = {
  fr: {
    eyebrow: "MISSIONS MÉDICALES À L’INTERNATIONAL",
    title: "Nos médecins se déplacent",
    accent: " auprès de vos patients.",
    description:
      "Glomed Group ne vous fait pas seulement venir en Tunisie : nous envoyons aussi des médecins tunisiens assurer des consultations, des interventions et des opérations en Libye et dans d’autres pays.",
    imageAlt: "Médecins de Glomed Group en mission à l’étranger",
    badgeTitle: "Des médecins en mission",
    badgeSubtitle: "Tunisie → Libye et autres pays",
    services: [
      {
        title: "Consultations",
        text: "Des consultations spécialisées organisées sur place, au plus près des patients.",
      },
      {
        title: "Interventions",
        text: "Des interventions réalisées par des médecins expérimentés, selon les indications médicales.",
      },
      {
        title: "Opérations",
        text: "Des opérations coordonnées avec les établissements d’accueil, de la préparation au suivi.",
      },
    ],
    countriesTitle: "Ils nous ont fait confiance",
    countries: {
      LY: "Libye",
      FR: "France",
      QA: "Qatar",
    },
    moreCountries: "et d’autres pays",
    button: "Demander une mission",
    disclaimer:
      "Les interventions sont réalisées par des professionnels de santé, selon leur évaluation, la réglementation locale et la disponibilité des établissements d’accueil.",
  },

  en: {
    eyebrow: "INTERNATIONAL MEDICAL MISSIONS",
    title: "Our doctors travel",
    accent: " to provide care to your patients.",
    description:
      "Glomed Group does more than welcome patients to Tunisia: we also send Tunisian doctors abroad to provide consultations, medical procedures and surgeries in Libya and other countries.",
    imageAlt: "Glomed Group doctors on an international medical mission",
    badgeTitle: "Doctors on medical missions",
    badgeSubtitle: "Tunisia → Libya and other countries",
    services: [
      {
        title: "Consultations",
        text: "Specialist consultations organized locally, close to patients.",
      },
      {
        title: "Medical procedures",
        text: "Procedures performed by experienced doctors according to medical indications.",
      },
      {
        title: "Surgical operations",
        text: "Surgeries coordinated with host healthcare facilities, from preparation to follow-up.",
      },
    ],
    countriesTitle: "Countries that have trusted us",
    countries: {
      LY: "Libya",
      FR: "France",
      QA: "Qatar",
    },
    moreCountries: "and other countries",
    button: "Request a medical mission",
    disclaimer:
      "Medical procedures are performed by healthcare professionals according to their assessment, local regulations and the availability of host facilities.",
  },

  ar: {
    eyebrow: "المهام الطبية الدولية",
    title: "أطباؤنا ينتقلون",
    accent: " لتقديم الرعاية لمرضاكم.",
    description:
      "لا تقتصر خدمات جلوميد جروب على استقبال المرضى في تونس، بل نوفّر أيضاً أطباء تونسيين للتنقل إلى الخارج وتقديم الاستشارات والتدخلات والعمليات الطبية في ليبيا ودول أخرى.",
    imageAlt: "أطباء جلوميد جروب خلال مهمة طبية بالخارج",
    badgeTitle: "أطباء في مهام طبية",
    badgeSubtitle: "تونس ← ليبيا ودول أخرى",
    services: [
      {
        title: "الاستشارات الطبية",
        text: "تنظيم استشارات طبية متخصصة في عين المكان، بالقرب من المرضى.",
      },
      {
        title: "التدخلات الطبية",
        text: "تدخلات طبية يجريها أطباء ذوو خبرة وفقاً للمؤشرات الطبية.",
      },
      {
        title: "العمليات الجراحية",
        text: "تنسيق العمليات مع المؤسسات الصحية المستضيفة، من التحضير إلى المتابعة.",
      },
    ],
    countriesTitle: "دول وضعت ثقتها فينا",
    countries: {
      LY: "ليبيا",
      FR: "فرنسا",
      QA: "قطر",
    },
    moreCountries: "ودول أخرى",
    button: "طلب مهمة طبية",
    disclaimer:
      "تُجرى التدخلات من قبل مهنيي الصحة وفقاً لتقييمهم واللوائح المحلية ومدى توفر المؤسسات الصحية المستضيفة.",
  },
  it: {
  eyebrow: "MISSIONI MEDICHE INTERNAZIONALI",
  title: "I nostri medici si recano",
  accent: "presso i vostri pazienti.",
  description:
    "Glomed Group non si limita ad accogliervi in Tunisia: inviamo anche medici tunisini per effettuare consultazioni, interventi e operazioni in Libia e in altri Paesi.",
  imageAlt: "Medici di Glomed Group in missione all’estero",
  badgeTitle: "Medici in missione",
  badgeSubtitle: "Tunisia → Libia e altri Paesi",
  services: [
    {
      title: "Consultazioni",
      text: "Consultazioni specialistiche organizzate sul posto, vicino ai pazienti.",
    },
    {
      title: "Interventi",
      text: "Interventi eseguiti da medici esperti, secondo le indicazioni mediche.",
    },
    {
      title: "Operazioni chirurgiche",
      text: "Operazioni coordinate con le strutture sanitarie ospitanti, dalla preparazione al follow-up.",
    },
  ],
  countriesTitle: "Hanno riposto la loro fiducia in noi",
  countries: {
    LY: "Libia",
    FR: "Francia",
    QA: "Qatar",
  },
  moreCountries: "e altri Paesi",
  button: "Richiedere una missione",
  disclaimer:
    "Gli interventi sono eseguiti da professionisti sanitari, in base alla loro valutazione, alla normativa locale e alla disponibilità delle strutture sanitarie ospitanti.",
},
de: {
  eyebrow: "MEDIZINISCHE EINSÄTZE IM AUSLAND",
  title: "Unsere Ärzte kommen",
  accent: "zu Ihren Patienten.",
  description:
    "Glomed Group bringt Sie nicht nur nach Tunesien: Wir entsenden auch tunesische Ärzte, um Beratungen, medizinische Eingriffe und Operationen in Libyen und anderen Ländern durchzuführen.",
  imageAlt: "Ärzte von Glomed Group bei einem Auslandseinsatz",
  badgeTitle: "Ärzte im Auslandseinsatz",
  badgeSubtitle: "Tunesien → Libyen und andere Länder",
  services: [
    {
      title: "Beratungen",
      text: "Vor Ort organisierte Facharztberatungen in unmittelbarer Nähe der Patienten.",
    },
    {
      title: "Medizinische Eingriffe",
      text: "Eingriffe durch erfahrene Ärzte entsprechend der medizinischen Indikation.",
    },
    {
      title: "Operationen",
      text: "Koordination der Operationen mit den aufnehmenden Einrichtungen – von der Vorbereitung bis zur Nachbetreuung.",
    },
  ],
  countriesTitle: "Diese Länder vertrauen uns",
  countries: {
    LY: "Libyen",
    FR: "Frankreich",
    QA: "Katar",
  },
  moreCountries: "und weitere Länder",
  button: "Einen medizinischen Einsatz anfragen",
  disclaimer:
    "Die Eingriffe werden von medizinischem Fachpersonal entsprechend dessen Beurteilung, den örtlichen Vorschriften und der Verfügbarkeit der aufnehmenden Einrichtungen durchgeführt.",
},
};

const SERVICE_ICONS = [
  "bi bi-chat-heart",
  "bi bi-bandaid",
  "bi bi-hospital",
];

export default function DoctorsAbroad() {
  const { language, dir } = useLanguage();

  const content = translations[language] || translations.fr;

  const ref = useRef(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setReady(true);

    const node = ref.current;
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
      id="missions-internationales"
      ref={ref}
      dir={dir}
      className={`gabroad ${ready ? "is-ready" : ""} ${
        visible ? "is-visible" : ""
      }`}
    >
      <div className="gabroad-container">
        {/* TITRE */}
        <header className="gabroad-head">
          <span className="gabroad-eyebrow">
            <span className="gabroad-dot" />
            {content.eyebrow}
          </span>

          <h2>
            {content.title}
            <span>{content.accent}</span>
          </h2>

          <p>{content.description}</p>
        </header>

        <div className="gabroad-grid">
          {/* GAUCHE : IMAGE */}
          <div className="gabroad-col gabroad-col-left">
            <div className="gabroad-media">
              <span className="gabroad-media-fallback" aria-hidden="true">
                <i className="bi bi-globe-europe-africa" />
              </span>

              <img
                src="/images/medecins.avif"
                alt={content.imageAlt}
                className="gabroad-img"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              <div className="gabroad-badge">
                <i className="bi bi-airplane" aria-hidden="true" />

                <span>
                  <strong>{content.badgeTitle}</strong>
                  <small>{content.badgeSubtitle}</small>
                </span>
              </div>
            </div>
          </div>

          {/* DROITE : SERVICES + PAYS */}
          <div className="gabroad-col gabroad-col-right">
            <ul className="gabroad-list">
              {content.services.map((s, i) => (
                <li
                  className="gabroad-item"
                  key={i}
                  style={{ "--i": i }}
                >
                  <span className="gabroad-item-icon">
                    <i className={SERVICE_ICONS[i]} aria-hidden="true" />
                  </span>

                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* PAYS */}
            <div className="gabroad-countries">
              <p className="gabroad-countries-title">
                {content.countriesTitle}
              </p>

              <ul>
                {COUNTRIES.map((c) => (
                  <li key={c.code}>
                    <img
                      src={flag(c.code)}
                      alt=""
                      width="32"
                      height="22"
                      loading="lazy"
                    />
                    {content.countries[c.code]}
                  </li>
                ))}

                <li className="gabroad-more">
                  <i className="bi bi-globe2" aria-hidden="true" />
                  {content.moreCountries}
                </li>
              </ul>
            </div>

            <Link href="/#contact" className="gabroad-button">
              {content.button} <span aria-hidden="true">→</span>
            </Link>

            <p className="gabroad-disclaimer">
              {content.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
