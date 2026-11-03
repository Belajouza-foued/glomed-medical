"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./css/DoctorsAbroad.css";

// Pays où vos médecins interviennent. Ajoute une ligne par pays : { name: "Algérie", code: "DZ" }
const COUNTRIES = [
  { name: "Libye", code: "LY" },
      { name: "France", code: "FR" },
   { name: "Qatar", code: "QA" },
];

const flag = (code) => `https://flagcdn.com/w160/${code.toLowerCase()}.png`;

const SERVICES = [
  {
    icon: "bi bi-chat-heart",
    title: "Consultations",
    text: "Des consultations spécialisées organisées sur place, au plus près des patients.",
  },
  {
    icon: "bi bi-bandaid",
    title: "Interventions",
    text: "Des interventions réalisées par des médecins expérimentés, selon les indications médicales.",
  },
  {
    icon: "bi bi-hospital",
    title: "Opérations",
    text: "Des opérations coordonnées avec les établissements d’accueil, de la préparation au suivi.",
  },
];

export default function DoctorsAbroad() {
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
      id="missions-internationales"
      ref={ref}
      className={`gabroad ${ready ? "is-ready" : ""} ${visible ? "is-visible" : ""}`}
    >
      <div className="gabroad-container">
        {/* TITRE */}
        <header className="gabroad-head">
          <span className="gabroad-eyebrow">
            <span className="gabroad-dot" />
            MISSIONS MÉDICALES À L’INTERNATIONAL
          </span>
          <h2>
            Nos médecins se déplacent
            <span> auprès de vos patients.</span>
          </h2>
          <p>
            Glomed Group ne vous fait pas seulement venir en Tunisie : nous
            envoyons aussi des médecins tunisiens assurer des consultations,
            des interventions et des opérations en Libye et dans d’autres
            pays.
          </p>
        </header>

        <div className="gabroad-grid">
          {/* GAUCHE : image */}
          <div className="gabroad-col gabroad-col-left">
            <div className="gabroad-media">
              <span className="gabroad-media-fallback" aria-hidden="true">
                <i className="bi bi-globe-europe-africa" />
              </span>
              <img
                src="/images/medecins.avif"
                alt="Médecins de Glomed Group en mission à l’étranger"
                className="gabroad-img"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="gabroad-badge">
                <i className="bi bi-airplane" aria-hidden="true" />
                <span>
                  <strong>Des médecins en mission</strong>
                  <small>Tunisie → Libye et autres pays</small>
                </span>
              </div>
            </div>
          </div>

          {/* DROITE : services + pays */}
          <div className="gabroad-col gabroad-col-right">
            <ul className="gabroad-list">
              {SERVICES.map((s, i) => (
                <li className="gabroad-item" key={s.title} style={{ "--i": i }}>
                  <span className="gabroad-item-icon">
                    <i className={s.icon} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="gabroad-countries">
              <p className="gabroad-countries-title">Ils nous ont fait confiance</p>
              <ul>
                {COUNTRIES.map((c) => (
                  <li key={c.code}>
                    <img src={flag(c.code)} alt="" width="32" height="22" loading="lazy" />
                    {c.name}
                  </li>
                ))}
                <li className="gabroad-more">
                  <i className="bi bi-globe2" aria-hidden="true" />
                  et d’autres pays
                </li>
              </ul>
            </div>

            <Link href="/#contact" className="gabroad-button">
              Demander une mission <span aria-hidden="true">→</span>
            </Link>

            <p className="gabroad-disclaimer">
              Les interventions sont réalisées par des professionnels de santé,
              selon leur évaluation, la réglementation locale et la
              disponibilité des établissements d’accueil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}