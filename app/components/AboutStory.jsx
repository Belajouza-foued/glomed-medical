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