
"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../contexts/LanguageContext";

export default function SpecialiteContent({ specialite }) {
  const { language, dir } = useLanguage();

const data = specialite[language] || specialite.fr || specialite;

  const labels = {
    fr: {
      stay: "SÉJOUR MÉDICAL EN TUNISIE",
      organize: "Organiser mon séjour →",
      intro: "PRÉSENTATION",
      pathologies: "PATHOLOGIES",
      diseases: "Maladies et pathologies",
      sports: "TRAUMATOLOGIE DU SPORT",
      sportsTitle: "Blessures sportives chez les athlètes",
      treatments: "TRAITEMENTS ET CHIRURGIE",
      procedures: "Interventions possibles",
      investigations: "EXPLORATIONS MÉDICALES",
      diagnosis: "Examens et diagnostic",
      faq: "QUESTIONS FRÉQUENTES",
      questions: "Vos questions sur",
      project: "VOTRE PROJET DE SÉJOUR MÉDICAL",
      need: "Besoin d'informations sur",
      contactText:
        "Contactez notre équipe pour obtenir des informations et organiser votre séjour médical en Tunisie.",
      contact: "Contacter notre équipe →",
    },
    en: {
      stay: "MEDICAL STAY IN TUNISIA",
      organize: "Organize my stay →",
      intro: "OVERVIEW",
      pathologies: "CONDITIONS",
      diseases: "Diseases and conditions",
      sports: "SPORTS TRAUMATOLOGY",
      sportsTitle: "Sports injuries in athletes",
      treatments: "TREATMENTS AND SURGERY",
      procedures: "Possible procedures",
      investigations: "MEDICAL INVESTIGATIONS",
      diagnosis: "Examinations and diagnosis",
      faq: "FREQUENTLY ASKED QUESTIONS",
      questions: "Your questions about",
      project: "YOUR MEDICAL STAY PROJECT",
      need: "Need information about",
      contactText:
        "Contact our team for information and help organizing your medical stay in Tunisia.",
      contact: "Contact our team →",
    },
    ar: {
      stay: "الإقامة الطبية في تونس",
      organize: "تنظيم إقامتي ←",
      intro: "نبذة تعريفية",
      pathologies: "الأمراض والحالات الطبية",
      diseases: "الأمراض والحالات",
      sports: "طب الإصابات الرياضية",
      sportsTitle: "الإصابات الرياضية لدى الرياضيين",
      treatments: "العلاجات والجراحة",
      procedures: "التدخلات الممكنة",
      investigations: "الفحوصات الطبية",
      diagnosis: "الفحوصات والتشخيص",
      faq: "الأسئلة الشائعة",
      questions: "أسئلتكم حول",
      project: "مشروع إقامتكم الطبية",
      need: "هل تحتاجون إلى معلومات حول",
      contactText:
        "تواصلوا مع فريقنا للحصول على المعلومات والمساعدة في تنظيم إقامتكم الطبية في تونس.",
      contact: "اتصلوا بفريقنا ←",
    },
  };

  const t = labels[language] || labels.fr;

  return (
    <main className="specialite-page" dir={dir}>

      {/* HERO */}
      <section className="specialite-hero">
        <div className="specialite-hero-content">
          <span className="specialite-eyebrow">
            GLOMED GROUP · {t.stay}
          </span>

          <h1>{data.title}</h1>
          <h2>{data.subtitle}</h2>
          <p>{data.description}</p>

          <Link href="/#contact" className="specialite-cta">
            {t.organize}
          </Link>
        </div>

        <div className="specialite-hero-image">
          <Image
            src={data.image}
            alt={data.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* INTRODUCTION */}
      {data.intro && (
        <section className="specialite-section">
          <div className="specialite-section-heading">
            <span>{t.intro}</span>
            <h2>{data.title}</h2>
          </div>

        {data.intro && (
  <div className="specialite-intro">
    {typeof data.intro === "object" ? (
      <>
        {data.intro.titre && <h2>{data.intro.titre}</h2>}
        {data.intro.texte && <p>{data.intro.texte}</p>}
      </>
    ) : (
      <p>{data.intro}</p>
    )}
  </div>
)}
        </section>
      )}

      {/* MALADIES */}
      {data.maladies?.length > 0 && (
        <section className="specialite-services">
          <div className="specialite-section-heading">
            <span>{t.pathologies}</span>
            <h2>{t.diseases} {data.title}</h2>
          </div>

          <div className="specialite-services-grid">
            {data.maladies.map((maladie) => (
              <article className="specialite-service-card" key={maladie.nom}>
                {maladie.image && (
                  <Image
                    src={maladie.image}
                    alt={maladie.nom}
                    width={500}
                    height={300}
                    className="urologie-maladie-image"
                  />
                )}

                <h3>{maladie.nom}</h3>
                <p>{maladie.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* BLESSURES SPORTIVES */}
      {data.blessuresSportives?.length > 0 && (
        <section className="specialite-section">
          <div className="specialite-section-heading">
            <span>{t.sports}</span>
            <h2>{t.sportsTitle}</h2>
          </div>

          <div className="specialite-services-grid">
            {data.blessuresSportives.map((blessure) => (
              <article className="specialite-service-card" key={blessure.nom}>
                {blessure.image && (
                  <Image
                    src={blessure.image}
                    alt={blessure.nom}
                    width={500}
                    height={300}
                    className="blessure-sportive-image"
                  />
                )}

                <h3>{blessure.nom}</h3>
                <p>{blessure.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* INTERVENTIONS */}
      {data.interventions?.length > 0 && (
        <section className="specialite-services">
          <div className="specialite-section-heading">
            <span>{t.treatments}</span>
            <h2>{t.procedures}</h2>
          </div>

          <div className="specialite-services-grid">
            {data.interventions.map((item) => (
              <article className="specialite-service-card" key={item.nom}>
                <span className="specialite-check">✓</span>
                <h3>{item.nom}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* EXAMENS */}
      {data.examens?.length > 0 && (
        <section className="specialite-services">
          <div className="specialite-section-heading">
            <span>{t.investigations}</span>
            <h2>{t.diagnosis}</h2>
          </div>

          <div className="specialite-services-grid">
            {data.examens.map((examen) => (
              <article className="specialite-service-card" key={examen}>
                <span className="specialite-check">✓</span>
                <h3>{examen}</h3>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      {data.faq?.length > 0 && (
        <section className="specialite-faq">
          <div className="specialite-section-heading">
            <span>{t.faq}</span>
            <h2>{t.questions} {data.title}</h2>
          </div>

          <div className="specialite-faq-list">
            {data.faq.map((item, index) => (
              <details
                className="specialite-faq-item"
                key={item.question}
                open={index === 0}
              >
                <summary className="specialite-faq-question">
                  <span>{item.question}</span>
                  <span className="specialite-faq-icon">+</span>
                </summary>

                <div className="specialite-faq-answer">
                  <p>{item.reponse}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* CONTACT - UNE SEULE SECTION */}
      <section className="specialite-contact">
        <div>
          <span>{t.project}</span>
          <h2>{t.need} {data.title.toLowerCase()} ?</h2>
          <p>{t.contactText}</p>
        </div>

        <Link href="/#contact" className="specialite-cta">
          {t.contact}
        </Link>
      </section>

    </main>
  );
}
