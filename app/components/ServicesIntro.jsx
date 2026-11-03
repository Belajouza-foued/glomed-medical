"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./css/ServicesIntro.css";

const ITEMS = [
  {
    icon: "bi bi-clipboard2-pulse",
    title: "Bilans et consultations médicales",
    text: "Organisation des bilans de santé, des analyses médicales et des consultations auprès de spécialistes.",
  },
  {
    icon: "bi bi-hospital",
    title: "Interventions et opérations",
    text: "Coordination des rendez-vous et du parcours préopératoire et postopératoire avec les équipes médicales partenaires, selon les indications du médecin.",
  },
  {
    icon: "bi bi-radioactive",
    title: "Imagerie médicale",
    text: "Orientation et organisation des examens prescrits : radiographie, échographie, scanner et IRM.",
  },
  {
    icon: "bi bi-person-walking",
    title: "Rééducation et suivi",
    text: "Coordination des séances de rééducation et des rendez-vous de suivi lorsque cela est indiqué par les professionnels de santé.",
  },
  {
    icon: "bi bi-airplane",
    title: "Organisation du séjour",
    text: "Aide à la coordination des transferts, de l’hébergement et des aspects pratiques de votre venue.",
  },
];

export default function ServicesIntro() {
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
      className={`sintro ${ready ? "is-ready" : ""} ${visible ? "is-visible" : ""}`}
    >
      <div className="sintro-container">
        {/* TITRE AU MILIEU */}
        <header className="sintro-head">
          <span className="sintro-eyebrow">GLOMED GROUP · NOS SERVICES</span>
          <h1>
            Votre santé,
            <span> notre accompagnement.</span>
          </h1>
          <p>
            Du premier contact à la fin de votre séjour, nous organisons vos
            consultations, vos examens et les aspects pratiques de votre venue
            en Tunisie.
          </p>
        </header>

        {/* DEUX COLONNES */}
        <div className="sintro-grid">
          {/* Colonne gauche : image qui glisse depuis la gauche */}
          <div className="sintro-col sintro-col-left">
            <div className="sintro-image-wrapper">
              <img
                src="/images/glomed-contact.avif"
                alt="Accompagnement médical et organisation des soins en Tunisie"
                className="sintro-image"
              />
              <div className="sintro-image-label">
                <i className="bi bi-heart-pulse" aria-hidden="true" />
                <span>Votre parcours de soins en Tunisie</span>
              </div>
            </div>
          </div>

          {/* Colonne droite : contenu qui glisse depuis la droite */}
          <div className="sintro-col sintro-col-right">
            <ul className="sintro-list">
              {ITEMS.map((item, i) => (
                <li className="sintro-item" key={item.title} style={{ "--i": i }}>
                  <span className="sintro-item-icon">
                    <i className={item.icon} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link href="/#contact" className="sintro-button">
              Organiser mon séjour <span aria-hidden="true">→</span>
            </Link>

            <p className="sintro-disclaimer">
              Les examens, traitements et interventions sont décidés par les
              professionnels de santé compétents, après évaluation
              individuelle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}