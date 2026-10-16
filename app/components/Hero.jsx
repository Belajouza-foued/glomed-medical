
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./css/Hero.css"

const slides = [
  {
    image:
      "/images/sante.avif",
    alt: "Professionnels de santé dans un environnement médical",
    icon: "bi bi-heart-pulse",
    eyebrow: "VOTRE PARTENAIRE SANTÉ EN TUNISIE",
    title: "Glomed Group,",
    accent: "accompagné à chaque étape.",
    text:
      "Glomed Group vous accompagne dans l'organisation de votre séjour médical en Tunisie : coordination, hébergement, transferts et orientation vers des professionnels partenaires.",
    primary: "Parler de mon projet",
    secondary: "Découvrir nos services",
  },
  {
    image:
   "/images/glomed-group.avif",
    alt: "Environnement de soins esthétiques",
    icon: "bi bi-stars",
    eyebrow: "ESTHÉTIQUE ET BIEN-ÊTRE",
    title: "Prenez soin de vous,",
    accent: "en toute sérénité.",
    text:
      "Nous vous aidons à organiser votre projet de soins esthétiques et à coordonner les différentes étapes de votre séjour avec les professionnels concernés.",
    primary: "Découvrir nos services",
    secondary: "Nous contacter",
  },
  {
    image:
      "/images/glomed-guide.avif",
    alt: "Équipe médicale dans un établissement de santé",
    icon: "bi bi-airplane",
    eyebrow: "VOTRE SÉJOUR MÉDICAL ORGANISÉ",
    title: "De votre arrivée",
    accent: "à votre accompagnement.",
    text:
      "Hébergement, transferts et coordination : nous vous aidons à préparer votre séjour en Tunisie selon votre demande et vos besoins.",
    primary: "Organiser un séjour",
    secondary: "Comment ça marche ?",
  },
  {
  image: "/images/glomed-ch.avif",
  alt: "Équipe médicale dans un bloc opératoire moderne",
  icon: "bi bi-hospital",
  eyebrow: "CHIRURGIE ET SÉJOUR MÉDICAL EN TUNISIE",
  title: "Votre chirurgie,",
  accent: "un séjour organisé avec soin.",
  text:
    "Glomed Group vous accompagne dans la préparation de votre séjour chirurgical en Tunisie : coordination des rendez-vous, organisation des transferts, hébergement et mise en relation avec des professionnels de santé partenaires.",
  primary: "Organiser mon séjour",
  secondary: "Découvrir nos services",
},
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => {
    setActive((index + slides.length) % slides.length);
  };

  return (
    <section className="hero" id="home" aria-label="Présentation de Glomed Group">
      {slides.map((slide, index) => (
        <article
          key={slide.image}
          className={`hero-slide ${index === active ? "active" : ""}`}
          aria-hidden={index !== active}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            fetchPriority={index === 0 ? "high" : "auto"}
          />

          <div className="hero-slide__overlay" />

          <div className="container hero-slide__container">
            <div className="hero-content">
              <span className="hero-eyebrow">
                <i className={slide.icon} aria-hidden="true" />
                {slide.eyebrow}
              </span>

              <h1>
                {slide.title}
                <span>{slide.accent}</span>
              </h1>

              <p>{slide.text}</p>

              <div className="hero-actions">
                <Link href="#contact" className="btn-primary-custom">
                  {slide.primary}
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </Link>

                <Link
                  href={index === 2 ? "#about" : "#services"}
                  className="btn-outline-custom"
                >
                  {slide.secondary}
                </Link>
              </div>

              <div className="hero-trust">
                <span className="hero-trust-icon">
                  <i className="bi bi-check-lg" aria-hidden="true" />
                </span>
                <span>
                  <strong>Un accompagnement personnalisé</strong>
                  <small>De la préparation à l'organisation du séjour</small>
                </span>
              </div>
            </div>
          </div>
        </article>
      ))}

      <div className="hero-bottom-line">
        <div className="container hero-bottom-inner">
          <span>ACCOMPAGNEMENT</span>
          <span className="hero-bottom-separator">✳</span>
          <span>COORDINATION</span>
          <span className="hero-bottom-separator">✳</span>
          <span>SÉJOUR MÉDICAL</span>
        </div>
      </div>

      <div className="hero-dots" aria-label="Choisir une diapositive">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            className={`hero-dot ${index === active ? "active" : ""}`}
            aria-label={`Afficher la diapositive ${index + 1}`}
            aria-pressed={index === active}
            onClick={() => goTo(index)}
          />
        ))}
      </div>

     <button
  type="button"
  className="hero-arrow hero-arrow--prev"
  aria-label="Diapositive précédente"
  onClick={() => goTo(active - 1)}
>
  <span aria-hidden="true">←</span>
</button>

<button
  type="button"
  className="hero-arrow hero-arrow--next"
  aria-label="Diapositive suivante"
  onClick={() => goTo(active + 1)}
>
  <span aria-hidden="true">→</span>
</button>
    </section>
  );
}