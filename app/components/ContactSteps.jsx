
"use client";

import "../contact/contact-page.css";
import { useLanguage } from "../contexts/LanguageContext";

const translations = {
  fr: {
    kicker: "APRÈS VOTRE MESSAGE",
    title: "Comment cela",
    accent: "se passe ?",
    steps: [
      {
        number: "01",
        title: "Réception de votre demande",
        text: "Notre équipe reçoit votre message et prend connaissance de vos besoins.",
      },
      {
        number: "02",
        title: "Prise de contact",
        text: "Nous vous contactons pour échanger sur votre projet.",
      },
      {
        number: "03",
        title: "Organisation de votre séjour",
        text: "Nous vous accompagnons dans la préparation de votre séjour médical en Tunisie.",
      },
    ],
  },

  en: {
    kicker: "AFTER YOUR MESSAGE",
    title: "What happens",
    accent: "next?",
    steps: [
      {
        number: "01",
        title: "Receiving your request",
        text: "Our team receives your message and reviews your needs.",
      },
      {
        number: "02",
        title: "Getting in touch",
        text: "We contact you to discuss your plans.",
      },
      {
        number: "03",
        title: "Organizing your stay",
        text: "We assist you in preparing your medical stay in Tunisia.",
      },
    ],
  },

  ar: {
    kicker: "ماذا يحدث بعد إرسال رسالتكم؟",
    title: "ماذا يحدث",
    accent: "بعد ذلك؟",
    steps: [
      {
        number: "01",
        title: "استلام طلبكم",
        text: "يتلقى فريقنا رسالتكم ويطّلع على احتياجاتكم.",
      },
      {
        number: "02",
        title: "التواصل معكم",
        text: "نتواصل معكم لمناقشة طلبكم.",
      },
      {
        number: "03",
        title: "تنظيم إقامتكم",
        text: "نرافقكم في التحضير لإقامتكم العلاجية في تونس.",
      },
    ],
  },
};

export default function ContactSteps() {
  const { language, dir } = useLanguage();
  const content = translations[language] || translations.fr;

  return (
    <section className="cpage-steps" dir={dir}>
      <div className="cpage-container">
        <div className="cpage-heading cpage-heading-light">
          <p className="cpage-kicker">{content.kicker}</p>

          <h2>
            {content.title} <span>{content.accent}</span>
          </h2>
        </div>

        <ol className="cpage-steps-list">
          {content.steps.map((s) => (
            <li key={s.number}>
              <span>{s.number}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
