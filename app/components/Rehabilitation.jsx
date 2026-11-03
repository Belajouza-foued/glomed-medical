"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./css/Rehabilitation.css";

const STEPS = [
  {
    icon: "bi bi-clipboard2-pulse",
    title: "Suivi post-opératoire",
    text: "Coordination des contrôles et des rendez-vous avec l’équipe médicale dans les jours qui suivent l’intervention.",
  },
  {
    icon: "bi bi-person-walking",
    title: "Rééducation fonctionnelle",
    text: "Organisation des séances de kinésithérapie prescrites par le médecin, pour retrouver progressivement mobilité et force.",
  },
  {
    icon: "bi bi-activity",
    title: "Réadaptation",
    text: "Accompagnement pour reprendre pas à pas les gestes du quotidien, selon le programme défini par les professionnels de santé.",
  },
  {
    icon: "bi bi-house-heart",
    title: "Convalescence et retour",
    text: "Hébergement adapté pendant la récupération, puis préparation du retour et des rendez-vous de suivi.",
  },
];

const GOALS = [
  { icon: "bi bi-emoji-smile", label: "Soulager la douleur" },
  { icon: "bi bi-arrows-move", label: "Retrouver la mobilité" },
  { icon: "bi bi-bicycle", label: "Reprendre ses activités" },
];

export default function Rehabilitation() {
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
      id="reeducation"
      ref={ref}
      className={`grehab ${ready ? "is-ready" : ""} ${visible ? "is-visible" : ""}`}
    >
      <div className="grehab-container">
        {/* Titre */}
        <header className="grehab-head">
          <span className="grehab-eyebrow">
            <span className="grehab-dot" />
            RÉÉDUCATION ET RÉADAPTATION
          </span>
          <h2>
            Bien récupérer
            <span> après votre opération.</span>
          </h2>
          <p>
            Une bonne récupération fait partie du parcours de soins. Glomed
            Group coordonne pour vous la rééducation, la réadaptation et la
            convalescence, selon les recommandations de l’équipe médicale.
          </p>
        </header>

        <div className="grehab-grid">
          {/* Gauche : étapes */}
          <div className="grehab-col grehab-col-left">
            <ol className="grehab-steps">
              {STEPS.map((step, i) => (
                <li className="grehab-step" key={step.title} style={{ "--i": i }}>
                  <span className="grehab-step-icon">
                    <i className={step.icon} aria-hidden="true" />
                  </span>
                  <div className="grehab-step-body">
                    <span className="grehab-step-number">Étape {i + 1}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Droite : image + objectifs */}
          <div className="grehab-col grehab-col-right">
            <div className="grehab-media">
              <span className="grehab-media-fallback" aria-hidden="true">
                <i className="bi bi-person-walking" />
              </span>
              <img
                src="/images/reeducation.avif"
                alt="Séance de rééducation après une opération"
                className="grehab-img"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="grehab-badge">
                <i className="bi bi-heart-pulse" aria-hidden="true" />
                <span>
                  <strong>Une récupération encadrée</strong>
                  <small>Selon le programme de votre médecin</small>
                </span>
              </div>
            </div>

            <ul className="grehab-goals">
              {GOALS.map((goal) => (
                <li key={goal.label}>
                  <i className={goal.icon} aria-hidden="true" />
                  {goal.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bas : note + bouton */}
        <div className="grehab-footer">
          <p className="grehab-disclaimer">
            Le programme de rééducation, sa durée et ses exercices sont définis
            par les professionnels de santé, après évaluation individuelle.
            Glomed Group coordonne l’organisation pratique.
          </p>
          <Link href="/contact" className="grehab-button">
            Organiser ma récupération <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}