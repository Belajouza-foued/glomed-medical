
import TopBar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { specialites } from "../../data/specialites";
import "./Specialite.css";

export const instant = false;

export function generateStaticParams() {
  return Object.keys(specialites).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const specialite = specialites[slug];

  if (!specialite) {
    return {
      title: "Spécialité médicale | Glomed Group",
      description: "Découvrez nos spécialités médicales en Tunisie.",
    };
  }

  return {
    title: `${specialite.title} en Tunisie | Glomed Group`,
    description: specialite.description,
  };
}

export default async function SpecialitePage({ params }) {
  const { slug } = await params;
  const specialite = specialites[slug];

  if (!specialite) {
    notFound();
  }

 
return (
  <>
      <TopBar />
    <Navbar />
  <main className="specialite-page">
    {/* HERO */}
    <section className="specialite-hero">
      <div className="specialite-hero-content">
        <span className="specialite-eyebrow">
          GLOMED GROUP · SÉJOUR MÉDICAL EN TUNISIE
        </span>

        <h1>{specialite.title}</h1>
        <h2>{specialite.subtitle}</h2>
        <p>{specialite.description}</p>

        <Link href="/#contact" className="specialite-cta">
          Organiser mon séjour →
        </Link>
      </div>

      <div className="specialite-hero-image">
        <Image
          src={specialite.image}
          alt={specialite.alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>

    {/* MALADIES */}
    {specialite.maladies?.length > 0 && (
      <section className="specialite-services">
        <div className="specialite-section-heading">
          <span>PATHOLOGIES</span>
          <h2>Maladies et pathologies en {specialite.title.toLowerCase()}</h2>
          <p>
            Découvrez quelques pathologies pouvant nécessiter une évaluation
            par un professionnel de santé.
          </p>
        </div>

        <div className="specialite-services-grid">
       
{specialite.maladies?.map((maladie) => (
  <article
    className="specialite-service-card"
    key={maladie.nom}
  >
    {maladie.image && (
      <img
        src={maladie.image}
        alt={maladie.nom}
        className="urologie-maladie-image"
        loading="lazy"
      />
    )}

    <h3>{maladie.nom}</h3>
    <p>{maladie.description}</p>
  </article>
))}

        </div>
      </section>
    )}

    {/* blessures sportives*/}
    

{specialite.blessuresSportives?.length > 0 && (
  <section className="specialite-section">
    <div className="specialite-section-heading">
      <span>TRAUMATOLOGIE DU SPORT</span>

      <h2>Blessures sportives chez les athlètes</h2>

      <img
        src="/images/blessures-sportives/traumatologie-sport.avif"
        alt="Prise en charge des blessures sportives chez les athlètes"
        className="blessures-sportives-banner"
        loading="lazy"
      />
    </div>

    <div className="specialite-services-grid">
      {specialite.blessuresSportives.map((blessure) => (
        <article
          className="specialite-service-card"
          key={blessure.nom}
        >
          {blessure.image && (
            <img
              src={blessure.image}
              alt={blessure.nom}
              className="blessure-sportive-image"
              loading="lazy"
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
    {specialite.interventions?.length > 0 && (
      <section className="specialite-services">
        <div className="specialite-section-heading">
          <span>TRAITEMENTS ET CHIRURGIE</span>
          <h2>Interventions possibles</h2>
          <p>
            Les options dépendent du diagnostic, de l'avis médical et des
            services disponibles auprès des établissements partenaires.
          </p>
        </div>

        <div className="specialite-services-grid">
          {specialite.interventions.map((intervention) => (
            <article
              className="specialite-service-card"
              key={intervention.nom}
            >
              <span className="specialite-check" aria-hidden="true">✓</span>
              <h3>{intervention.nom}</h3>
              <p>{intervention.description}</p>
            </article>
          ))}
        </div>
      </section>
    )}

    {/* EXAMENS */}
    {specialite.examens?.length > 0 && (
      <section className="specialite-services">
        <div className="specialite-section-heading">
          <span>EXPLORATIONS MÉDICALES</span>
          <h2>Examens et diagnostic</h2>
        </div>

        <div className="specialite-services-grid">
          {specialite.examens.map((examen) => (
            <article className="specialite-service-card" key={examen}>
              <span className="specialite-check" aria-hidden="true">✓</span>
              <h3>{examen}</h3>
            </article>
          ))}
        </div>
      </section>
    )}

    {/* SERVICES EXISTANTS */}
    {specialite.services?.length > 0 && (
      <section className="specialite-services">
        <div className="specialite-section-heading">
          <span>NOTRE ACCOMPAGNEMENT</span>
          <h2>Nos services en {specialite.title.toLowerCase()}</h2>
        </div>

        <div className="specialite-services-grid">
          {specialite.services.map((service) => (
            <article className="specialite-service-card" key={service}>
              <span className="specialite-check" aria-hidden="true">✓</span>
              <h3>{service}</h3>
            </article>
          ))}
        </div>
      </section>
    )}

    {/* FAQ */}

{/* FAQ ACCORDÉON */}
{specialite.faq?.length > 0 && (
  <section className="specialite-faq">
    <div className="specialite-section-heading">
      <span>QUESTIONS FRÉQUENTES</span>
      <h2>
        Vos questions sur {specialite.title.toLowerCase()}
      </h2>
      <p>
        Retrouvez les réponses aux questions fréquentes concernant
        votre parcours médical en Tunisie.
      </p>
    </div>

    <div className="specialite-faq-list">
      {specialite.faq.map((item, index) => (
        <details
          className="specialite-faq-item"
          key={item.question}
          open={index === 0}
        >
          <summary className="specialite-faq-question">
            <span>{item.question}</span>
            <span className="specialite-faq-icon" aria-hidden="true">
              +
            </span>
          </summary>

          <div className="specialite-faq-answer">
            <p>{item.reponse}</p>
          </div>
        </details>
      ))}
    </div>
  </section>
)}


    {/* CONTACT */}
    <section className="specialite-contact">
      <div>
        <span>VOTRE PROJET DE SÉJOUR MÉDICAL</span>
        <h2>Besoin d'informations sur {specialite.title.toLowerCase()} ?</h2>
        <p>
          Contactez notre équipe pour obtenir des informations et organiser
          votre séjour médical en Tunisie.
        </p>
      </div>

      <Link href="/#contact" className="specialite-cta">
        Contacter notre équipe →
      </Link>
    </section>
  </main>
  <Footer/>
    </>
);

}

