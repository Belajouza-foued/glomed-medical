
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import "./css/Rehabilitation.css";

export default function Rehabilitation() {
  const { t, dir } = useLanguage();

  const ref = useRef(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  const STEPS = [
    {
      icon: "bi bi-clipboard2-pulse",
      title: t("rehabStep1Title"),
      text: t("rehabStep1Text"),
    },
    {
      icon: "bi bi-person-walking",
      title: t("rehabStep2Title"),
      text: t("rehabStep2Text"),
    },
    {
      icon: "bi bi-activity",
      title: t("rehabStep3Title"),
      text: t("rehabStep3Text"),
    },
    {
      icon: "bi bi-house-heart",
      title: t("rehabStep4Title"),
      text: t("rehabStep4Text"),
    },
  ];

  const GOALS = [
    { icon: "bi bi-emoji-smile", label: t("rehabGoal1") },
    { icon: "bi bi-arrows-move", label: t("rehabGoal2") },
    { icon: "bi bi-bicycle", label: t("rehabGoal3") },
  ];

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
      dir={dir}
      className={`grehab ${ready ? "is-ready" : ""} ${
        visible ? "is-visible" : ""
      }`}
    >
      <div className="grehab-container">

        {/* Titre */}
        <header className="grehab-head">
          <span className="grehab-eyebrow">
            <span className="grehab-dot" />
            {t("rehabEyebrow")}
          </span>

          <h2>
            {t("rehabTitle")}
            <span>{t("rehabAccent")}</span>
          </h2>

          <p>{t("rehabDescription")}</p>
        </header>

        <div className="grehab-grid">

          {/* Gauche : étapes */}
          <div className="grehab-col grehab-col-left">
            <ol className="grehab-steps">
              {STEPS.map((step, i) => (
                <li
                  className="grehab-step"
                  key={step.title}
                  style={{ "--i": i }}
                >
                  <span className="grehab-step-icon">
                    <i className={step.icon} aria-hidden="true" />
                  </span>

                  <div className="grehab-step-body">
                    <span className="grehab-step-number">
                      {t("rehabStep")} {i + 1}
                    </span>

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
                alt={t("rehabImageAlt")}
                className="grehab-img"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              <div className="grehab-badge">
                <i className="bi bi-heart-pulse" aria-hidden="true" />

                <span>
                  <strong>{t("rehabBadgeTitle")}</strong>
                  <small>{t("rehabBadgeText")}</small>
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
            {t("rehabDisclaimer")}
          </p>

          <Link href="/contact" className="grehab-button">
            {t("rehabCTA")}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
