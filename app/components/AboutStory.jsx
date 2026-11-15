"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import "../about/about-hero.css";

/*
  Images : dépose tes photos dans public/images/ ou change simplement les chemins ici.
  - main  : image principale ; hover : image qui apparaît au survol (ou au toucher)
  - side1 / side2 : les deux images à droite
  Si un fichier n'existe pas, un fond de couleur s'affiche à la place.
*/
const IMAGES = {
  main: "/images/senegal.png",
  hover: "/images/equipe-1.avif",
  side1: "/images/france.png",
  side2: "/images/tourisme.avif",
};

const translations = {
  fr: {
    label: "À PROPOS DE GLOMED GROUP",
    title: "Votre partenaire pour organiser",
    accent: "votre séjour médical en Tunisie.",
    text1:
      "Glomed Group est une agence spécialisée dans la gestion et la coordination des services liés au séjour médical. Nous facilitons l’organisation de votre venue en Tunisie, de votre première demande jusqu’à la fin de votre séjour.",
    text2:
      "Notre rôle est de faciliter la coordination entre vos demandes, les professionnels de santé concernés et les prestataires nécessaires : les décisions médicales restent toujours celles des médecins.",
    points: [
      "Une écoute attentive et un accompagnement personnalisé",
      "Coordination des rendez-vous avec les équipes médicales",
      "Organisation des transferts et de l’hébergement",
      "Confidentialité de vos informations et clarté à chaque étape",
    ],
    button: "Parlons de votre projet",
    badgeTitle: "Un séjour mieux organisé",
    badgeText: "Accompagnement sur mesure",
    alt1: "Professionnel de santé et accompagnement des patients",
    alt2: "Équipe Glomed Group à l’écoute des patients",
    alt3: "Transferts organisés pour les patients en Tunisie",
    alt4: "Hébergement adapté au séjour médical",
  },

  en: {
    label: "ABOUT GLOMED GROUP",
    title: "Your partner to organize",
    accent: "your medical stay in Tunisia.",
    text1:
      "Glomed Group is an agency specialized in managing and coordinating the services related to a medical stay. We make it easier to organize your visit to Tunisia, from your first request to the end of your stay.",
    text2:
      "Our role is to facilitate coordination between your requests, the healthcare professionals concerned and the necessary service providers: medical decisions always remain with the doctors.",
    points: [
      "Attentive listening and personalized support",
      "Coordination of appointments with medical teams",
      "Organization of transfers and accommodation",
      "Confidentiality of your information and clarity at every step",
    ],
    button: "Let’s talk about your project",
    badgeTitle: "A better organized stay",
    badgeText: "Tailor-made support",
    alt1: "Healthcare professional and patient support",
    alt2: "Glomed Group team listening to patients",
    alt3: "Organized transfers for patients in Tunisia",
    alt4: "Accommodation suited to a medical stay",
  },

  ar: {
    label: "عن ڨلوميد ڨروب",
    title: "شريككم لتنظيم",
    accent: "إقامتكم العلاجية في تونس.",
    text1:
      "ڨلوميد ڨروب وكالة متخصصة في إدارة وتنسيق الخدمات المرتبطة بالإقامة العلاجية. نسهّل تنظيم زيارتكم إلى تونس، من طلبكم الأول إلى نهاية إقامتكم.",
    text2:
      "دورنا تسهيل التنسيق بين طلباتكم والمهنيين الصحيين المعنيين ومقدمي الخدمات اللازمين: وتبقى القرارات الطبية دائماً من اختصاص الأطباء.",
    points: [
      "إصغاء دقيق ومرافقة شخصية",
      "تنسيق المواعيد مع الفرق الطبية",
      "تنظيم التنقلات والإقامة",
      "سرية معلوماتكم ووضوح في كل مرحلة",
    ],
    button: "لنتحدث عن مشروعكم",
    badgeTitle: "إقامة أفضل تنظيماً",
    badgeText: "مرافقة حسب الطلب",
    alt1: "مهني صحي ومرافقة المرضى",
    alt2: "فريق جلوميد جروب يصغي إلى المرضى",
    alt3: "تنقلات منظمة للمرضى في تونس",
    alt4: "إقامة مناسبة للإقامة العلاجية",
  },
  it: {
  label: "CHI È GLOMED GROUP",
  title: "Il vostro partner per organizzare",
  accent: "il vostro soggiorno medico in Tunisia.",
  text1:
    "Glomed Group è un’agenzia specializzata nella gestione e nel coordinamento dei servizi legati al soggiorno medico. Facilitiamo l’organizzazione del vostro viaggio in Tunisia, dalla prima richiesta fino al termine del vostro soggiorno.",
  text2:
    "Il nostro ruolo è facilitare il coordinamento tra le vostre richieste, i professionisti sanitari interessati e i fornitori di servizi necessari: le decisioni mediche restano sempre di competenza dei medici.",
  points: [
    "Ascolto attento e accompagnamento personalizzato",
    "Coordinamento degli appuntamenti con le équipe mediche",
    "Organizzazione dei trasferimenti e dell’alloggio",
    "Riservatezza delle vostre informazioni e chiarezza in ogni fase",
  ],
  button: "Parliamo del vostro progetto",
  badgeTitle: "Un soggiorno organizzato al meglio",
  badgeText: "Assistenza su misura",
  alt1: "Professionista sanitario e assistenza ai pazienti",
  alt2: "Il team di Glomed Group attento alle esigenze dei pazienti",
  alt3: "Trasferimenti organizzati per i pazienti in Tunisia",
  alt4: "Alloggio adeguato al soggiorno medico",
},
de: {
  label: "ÜBER GLOMED GROUP",
  title: "Ihr Partner für die Organisation",
  accent: "Ihres medizinischen Aufenthalts in Tunesien.",
  text1:
    "Glomed Group ist eine Agentur, die auf die Verwaltung und Koordination von Dienstleistungen rund um den medizinischen Aufenthalt spezialisiert ist. Wir erleichtern die Organisation Ihrer Reise nach Tunesien – von Ihrer ersten Anfrage bis zum Ende Ihres Aufenthalts.",
  text2:
    "Unsere Aufgabe ist es, die Koordination zwischen Ihren Anliegen, den zuständigen medizinischen Fachkräften und den erforderlichen Dienstleistern zu erleichtern. Medizinische Entscheidungen bleiben stets den Ärzten vorbehalten.",
  points: [
    "Aufmerksames Zuhören und persönliche Betreuung",
    "Koordination der Termine mit den medizinischen Teams",
    "Organisation von Transfers und Unterkünften",
    "Vertraulicher Umgang mit Ihren Informationen und Transparenz in jeder Phase",
  ],
  button: "Sprechen wir über Ihr Vorhaben",
  badgeTitle: "Ein besser organisierter Aufenthalt",
  badgeText: "Individuelle Betreuung",
  alt1: "Medizinisches Fachpersonal und Betreuung von Patienten",
  alt2: "Das Team von Glomed Group hört den Patienten aufmerksam zu",
  alt3: "Organisierte Transfers für Patienten in Tunesien",
  alt4: "Geeignete Unterkunft für den medizinischen Aufenthalt",
},
};

function hideOnError(e) {
  e.currentTarget.style.display = "none";
}

export default function AboutStory() {
  const { language } = useLanguage();
  const t = translations[language] || translations.fr;
  const rtl = language === "ar";

  const sectionRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const [swapped, setSwapped] = useState(false); // toucher sur mobile : affiche la 2e image

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
      ref={sectionRef}
      dir={rtl ? "rtl" : undefined}
      className={`astory ${ready ? "is-ready" : ""} ${visible ? "is-visible" : ""}`}
    >
      <div className="astory-container">
        <div className="astory-grid">
          {/* ============ IMAGES ============ */}
          <div className="astory-images">
            <div className="astory-main-wrap">
              {/* Image principale avec 2e image au survol */}
              <div
                className={`astory-img-hover ${swapped ? "is-swapped" : ""}`}
                onClick={() => setSwapped((s) => !s)}
              >
                <img src={IMAGES.main} alt={t.alt1} className="astory-img-base" onError={hideOnError} />
                <img src={IMAGES.hover} alt={t.alt2} className="astory-img-second" onError={hideOnError} />
              </div>

              {/* Badge */}
              <div className="astory-badge">
                <i className="bi bi-heart-pulse" aria-hidden="true" />
                <strong>{t.badgeTitle}</strong>
                <span>{t.badgeText}</span>
              </div>
            </div>

            {/* Images secondaires */}
            <div className="astory-stack">
              <div className={`astory-short astory-reveal-1`}>
                <img src={IMAGES.side1} alt={t.alt3} onError={hideOnError} />
              </div>
              <div className={`astory-short astory-reveal-2`}>
                <img src={IMAGES.side2} alt={t.alt4} onError={hideOnError} />
              </div>
            </div>
          </div>

          {/* ============ CONTENU ============ */}
          <div className="astory-content">
            <span className="astory-label">{t.label}</span>

            <h2>
              {t.title} <span>{t.accent}</span>
            </h2>

            <p>{t.text1}</p>
            <p>{t.text2}</p>

            <ul className="astory-list">
              {t.points.map((point) => (
                <li key={point}>
                  <i className="bi bi-check-circle-fill" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact" className="astory-button">
              {t.button}
              <i className={`bi ${rtl ? "bi-arrow-left" : "bi-arrow-right"}`} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}