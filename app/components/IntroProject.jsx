
"use client";

import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import "./css/IntroProject.css";

const translations = {
  fr: {
    kicker: "PARLONS DE VOTRE PROJET",
    title: "Un séjour médical en Tunisie",
    accent: "à organiser ?",
    description:
      "Présentez-nous votre demande : nous vous répondons pour discuter des possibilités d’accompagnement et des prochaines étapes.",
    contact: "Nous contacter",
    whatsapp: "Écrire sur WhatsApp",
  },

  en: {
    kicker: "LET'S TALK ABOUT YOUR PROJECT",
    title: "A medical stay in Tunisia",
    accent: "to organize?",
    description:
      "Tell us about your request. We will get back to you to discuss the available support options and the next steps.",
    contact: "Contact us",
    whatsapp: "Message us on WhatsApp",
  },

  ar: {
    kicker: "لنتحدث عن مشروعكم",
    title: "إقامة طبية في تونس",
    accent: "هل ترغبون في تنظيمها؟",
    description:
      "أخبرونا بطلبكم، وسنتواصل معكم لمناقشة إمكانيات المرافقة والخطوات القادمة.",
    contact: "اتصلوا بنا",
    whatsapp: "راسلونا عبر واتساب",
  },
};

export default function IntroProject() {
  const { language } = useLanguage();
  const t = translations[language] || translations.fr;
  const isArabic = language === "ar";

  return (
    <section
      className="ipro"
      aria-labelledby="ipro-title"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="ipro-panel">
        <div className="ipro-text">
          <p className="ipro-kicker">{t.kicker}</p>

          <h2 id="ipro-title">
            {t.title} <span>{t.accent}</span>
          </h2>

          <p className="ipro-lead">{t.description}</p>
        </div>

        <div className="ipro-actions">
          <Link
            href="/contact"
            className="ipro-button ipro-button-primary"
          >
            {t.contact}
            <span className="ipro-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>

          <a
            href="https://wa.me/21693767950"
            className="ipro-button ipro-button-whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-whatsapp" aria-hidden="true" />
            {t.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
