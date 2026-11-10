
"use client";

import "../contact/contact-page.css";
import { useLanguage } from "../contexts/LanguageContext";

const translations = {
  fr: {
    kicker: "NOUS JOINDRE DIRECTEMENT",
    title: "Une question ?",
    accent: "Écrivez-nous ou appelez-nous.",
    infos: [
      { label: "Entreprise", value: "Glomed Group" },
      { label: "Téléphone", value: "+216 93 767 950" },
      { label: "E-mail", value: "contact@glomed.tn" },
      { label: "Localisation", value: "Tunisie" },
    ],
  },

  en: {
    kicker: "CONTACT US DIRECTLY",
    title: "Have a question?",
    accent: "Write to us or give us a call.",
    infos: [
      { label: "Company", value: "Glomed Group" },
      { label: "Phone", value: "+216 93 767 950" },
      { label: "Email", value: "contact@glomed.tn" },
      { label: "Location", value: "Tunisia" },
    ],
  },

  ar: {
    kicker: "تواصلوا معنا مباشرة",
    title: "هل لديكم سؤال؟",
    accent: "راسلونا أو اتصلوا بنا.",
    infos: [
      { label: "الشركة", value: "Glomed Group" },
      { label: "الهاتف", value: "+216 93 767 950" },
      { label: "البريد الإلكتروني", value: "contact@glomed.tn" },
      { label: "الموقع", value: "تونس" },
    ],
  },
};

const INFOS = [
  {
    icon: "bi bi-building",
    href: null,
  },
  {
    icon: "bi bi-telephone",
    href: "tel:+21693767950",
  },
  {
    icon: "bi bi-envelope",
    href: "mailto:contact@glomed.tn",
  },
  {
    icon: "bi bi-geo-alt",
    href: null,
  },
];

export default function ContactInfos() {
  const { language, dir } = useLanguage();

  const content = translations[language] || translations.fr;

  return (
    <section className="cpage-infos" dir={dir}>
      <div className="cpage-container">
        <div className="cpage-heading">
          <p className="cpage-kicker">{content.kicker}</p>

          <h2>
            {content.title} <span>{content.accent}</span>
          </h2>
        </div>

        <ul className="cpage-infos-grid">
          {INFOS.map((info, index) => {
            const item = content.infos[index];

            const infoContent = (
              <>
                <span className="cpage-info-icon">
                  <i className={info.icon} aria-hidden="true" />
                </span>

                <span className="cpage-info-text">
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                </span>
              </>
            );

            return (
              <li key={info.icon}>
                {info.href ? (
                  <a href={info.href} className="cpage-info">
                    {infoContent}
                  </a>
                ) : (
                  <div className="cpage-info">
                    {infoContent}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
