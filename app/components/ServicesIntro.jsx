
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import "./css/ServicesIntro.css";

const translations = {
  fr: {
    eyebrow: "GLOMED GROUP · NOS SERVICES",
    title: "Votre santé,",
    accent: " notre accompagnement.",
    description:
      "Du premier contact à la fin de votre séjour, nous organisons vos consultations, vos examens et les aspects pratiques de votre venue en Tunisie.",
    imageAlt:
      "Accompagnement médical et organisation des soins en Tunisie",
    imageLabel: "Votre parcours de soins en Tunisie",
    button: "Organiser mon séjour",
    disclaimer:
      "Les examens, traitements et interventions sont décidés par les professionnels de santé compétents, après évaluation individuelle.",
    items: [
      {
        title: "Bilans et consultations médicales",
        text: "Organisation des bilans de santé, des analyses médicales et des consultations auprès de spécialistes.",
      },
      {
        title: "Interventions et opérations",
        text: "Coordination des rendez-vous et du parcours préopératoire et postopératoire avec les équipes médicales partenaires, selon les indications du médecin.",
      },
      {
        title: "Imagerie médicale",
        text: "Orientation et organisation des examens prescrits : radiographie, échographie, scanner et IRM.",
      },
      {
        title: "Rééducation et suivi",
        text: "Coordination des séances de rééducation et des rendez-vous de suivi lorsque cela est indiqué par les professionnels de santé.",
      },
      {
        title: "Organisation du séjour",
        text: "Aide à la coordination des transferts, de l’hébergement et des aspects pratiques de votre venue.",
      },
    ],
  },

  en: {
    eyebrow: "GLOMED GROUP · OUR SERVICES",
    title: "Your health,",
    accent: " our commitment.",
    description:
      "From your first contact to the end of your stay, we organize your consultations, medical examinations and the practical arrangements for your visit to Tunisia.",
    imageAlt:
      "Medical assistance and healthcare coordination in Tunisia",
    imageLabel: "Your healthcare journey in Tunisia",
    button: "Organize my stay",
    disclaimer:
      "Examinations, treatments and procedures are decided by qualified healthcare professionals following an individual assessment.",
    items: [
      {
        title: "Medical check-ups and consultations",
        text: "Organization of health check-ups, medical tests and consultations with specialist doctors.",
      },
      {
        title: "Medical procedures and surgery",
        text: "Coordination of appointments and preoperative and postoperative care with partner medical teams, according to the doctor's recommendations.",
      },
      {
        title: "Medical imaging",
        text: "Guidance and organization of prescribed examinations: X-rays, ultrasound, CT scans and MRI.",
      },
      {
        title: "Rehabilitation and follow-up",
        text: "Coordination of rehabilitation sessions and follow-up appointments when recommended by healthcare professionals.",
      },
      {
        title: "Stay arrangements",
        text: "Assistance with coordinating transfers, accommodation and the practical arrangements for your visit.",
      },
    ],
  },

  ar: {
    eyebrow: "جلوميد جروب · خدماتنا",
    title: "صحتكم،",
    accent: " واهتمامنا بمرافقتكم.",
    description:
      "منذ أول اتصال وحتى نهاية إقامتكم، نتولى تنظيم الاستشارات الطبية والفحوصات والجوانب العملية لرحلتكم العلاجية إلى تونس.",
    imageAlt:
      "المرافقة الطبية وتنظيم الرعاية الصحية في تونس",
    imageLabel: "رحلتكم العلاجية في تونس",
    button: "تنظيم إقامتي",
    disclaimer:
      "يتم تحديد الفحوصات والعلاجات والتدخلات الطبية من قبل المختصين في الرعاية الصحية بعد تقييم كل حالة على حدة.",
    items: [
      {
        title: "الفحوصات والاستشارات الطبية",
        text: "تنظيم الفحوصات الصحية والتحاليل الطبية والاستشارات لدى الأطباء المختصين.",
      },
      {
        title: "التدخلات والعمليات الجراحية",
        text: "تنسيق المواعيد ومراحل الرعاية قبل وبعد العمليات بالتعاون مع الفرق الطبية الشريكة، وفقاً لتوصيات الطبيب.",
      },
      {
        title: "التصوير الطبي",
        text: "توجيه المرضى وتنظيم الفحوصات الموصوفة: الأشعة السينية والموجات فوق الصوتية والتصوير المقطعي والرنين المغناطيسي.",
      },
      {
        title: "إعادة التأهيل والمتابعة",
        text: "تنسيق جلسات إعادة التأهيل ومواعيد المتابعة عندما يوصي بذلك المختصون في الرعاية الصحية.",
      },
      {
        title: "تنظيم الإقامة",
        text: "المساعدة في تنسيق خدمات النقل والإقامة وجميع الترتيبات العملية المتعلقة بقدومكم إلى تونس.",
      },
    ],
  },
};

const ITEMS = [
  { icon: "bi bi-clipboard2-pulse" },
  { icon: "bi bi-hospital" },
  { icon: "bi bi-radioactive" },
  { icon: "bi bi-person-walking" },
  { icon: "bi bi-airplane" },
];

export default function ServicesIntro() {
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
      ref={ref}
      dir={dir}
      className={`sintro ${ready ? "is-ready" : ""} ${
        visible ? "is-visible" : ""
      }`}
    >
      <div className="sintro-container">
        {/* TITRE AU MILIEU */}
        <header className="sintro-head">
          <span className="sintro-eyebrow">{content.eyebrow}</span>

          <h1>
            {content.title}
            <span>{content.accent}</span>
          </h1>

          <p>{content.description}</p>
        </header>

        {/* DEUX COLONNES */}
        <div className="sintro-grid">
          {/* COLONNE GAUCHE : IMAGE */}
          <div className="sintro-col sintro-col-left">
            <div className="sintro-image-wrapper">
              <img
                src="/images/glomed-contact.avif"
                alt={content.imageAlt}
                className="sintro-image"
              />

              <div className="sintro-image-label">
                <i className="bi bi-heart-pulse" aria-hidden="true" />
                <span>{content.imageLabel}</span>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : SERVICES */}
          <div className="sintro-col sintro-col-right">
            <ul className="sintro-list">
              {ITEMS.map((item, i) => (
                <li
                  className="sintro-item"
                  key={i}
                  style={{ "--i": i }}
                >
                  <span className="sintro-item-icon">
                    <i className={item.icon} aria-hidden="true" />
                  </span>

                  <div>
                    <h3>{content.items[i].title}</h3>
                    <p>{content.items[i].text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link href="/#contact" className="sintro-button">
              {content.button} <span aria-hidden="true">→</span>
            </Link>

            <p className="sintro-disclaimer">
              {content.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
