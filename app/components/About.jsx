"use client";

import { useEffect, useRef, useState } from "react";
import "./css/About.css";

export default function About() {
  const imageRef = useRef(null);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const element = imageRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* En-tête */}
        <div className="about-heading">
          <span className="about-label">
            QUI SOMMES-NOUS ?
          </span>

          <h2>
            La coordination au service de
            <span> votre séjour médical.</span>
          </h2>

          <p>
            Glomed Group vous accompagne dans l’organisation
            des services liés à votre séjour médical en Tunisie,
            avec une approche personnalisée, claire et attentive
            à vos besoins.
          </p>
        </div>

        {/* Contenu */}
        <div className="about-grid">
             <div
            ref={imageRef}
            className={`about-image-wrap ${
              imageVisible ? "about-image-visible" : ""
            }`}
          >
            <img
              src="/images/glomed-doc-1.avif"
              alt="Professionnel de santé dans un environnement médical"
              loading="lazy"
            />

            <div className="about-image-badge">
              <div className="about-badge-icon">
                <i
                  className="bi bi-heart-pulse"
                  aria-hidden="true"
                />
              </div>

              <div className="about-badge-text">
                <strong>Un séjour mieux organisé</strong>
                <span>
                  Un accompagnement adapté à vos besoins.
                </span>
              </div>
            </div>

            <span
              className="about-image-decoration"
              aria-hidden="true"
            />
          </div>
          <div className="about-content">
            <span className="about-eyebrow">
              NOTRE IDENTITÉ ET NOTRE MISSION
            </span>

            <h3>
              Votre partenaire pour organiser votre séjour médical en Tunisie.
            </h3>

            <p className="about-intro">
              Glomed Group est une agence spécialisée dans la gestion
              et la coordination des services liés au séjour médical.
              Nous facilitons l’organisation de votre venue en Tunisie
              et vous accompagnons dans les aspects pratiques de votre séjour.
            </p>

            <div className="about-accordion">
              <details className="about-accordion-item" open>
                <summary>
                  <span className="about-accordion-number">01</span>
                  <span className="about-accordion-title">
                    Qui sommes-nous ?
                  </span>
                  <span
                    className="about-accordion-icon"
                    aria-hidden="true"
                  />
                </summary>

                <div className="about-accordion-panel">
                  <div className="about-accordion-inner">
                    Glomed Group accompagne les personnes qui souhaitent
                    organiser un séjour médical en Tunisie. Notre rôle
                    est de faciliter la coordination entre les demandes
                    des patients, les professionnels de santé concernés
                    et les prestataires nécessaires à l’organisation du séjour.
                  </div>
                </div>
              </details>

              <details className="about-accordion-item">
                <summary>
                  <span className="about-accordion-number">02</span>
                  <span className="about-accordion-title">
                    Notre mission
                  </span>
                  <span
                    className="about-accordion-icon"
                    aria-hidden="true"
                  />
                </summary>

                <div className="about-accordion-panel">
                  <div className="about-accordion-inner">
                    Notre mission est de simplifier l’organisation
                    de votre séjour en vous aidant à préparer les
                    différentes étapes : prise de contact, coordination
                    des rendez-vous, organisation des déplacements
                    et recherche d’un hébergement adapté à vos besoins.
                  </div>
                </div>
              </details>

              <details className="about-accordion-item">
                <summary>
                  <span className="about-accordion-number">03</span>
                  <span className="about-accordion-title">
                    Gestion des services liés au séjour médical
                  </span>
                  <span
                    className="about-accordion-icon"
                    aria-hidden="true"
                  />
                </summary>

                <div className="about-accordion-panel">
                  <div className="about-accordion-inner">
                    Nous facilitons la coordination des services
                    liés à votre projet et la mise en relation avec
                    les professionnels ou établissements de santé concernés.
                    L’évaluation de votre état de santé, le choix des
                    traitements et les décisions médicales relèvent
                    des professionnels de santé compétents.
                  </div>
                </div>
              </details>

              <details className="about-accordion-item">
                <summary>
                  <span className="about-accordion-number">04</span>
                  <span className="about-accordion-title">
                    Nos valeurs et nos engagements
                  </span>
                  <span
                    className="about-accordion-icon"
                    aria-hidden="true"
                  />
                </summary>

                <div className="about-accordion-panel">
                  <div className="about-accordion-inner">
                    Nous privilégions l’écoute, la clarté des informations,
                    la disponibilité et un accompagnement adapté à chaque
                    demande. Notre objectif est de faciliter l’organisation
                    pratique de votre séjour, dans le respect de votre
                    confidentialité et du rôle des professionnels de santé.
                  </div>
                </div>
              </details>
            </div>

            <a href="#contact" className="about-button">
              Parlons de votre projet
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </a>
          </div>

          {/* Image animée : conservée */}
       
        </div>
      </div>
    </section>
  );
}