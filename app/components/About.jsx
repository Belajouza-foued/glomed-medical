
"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "./css/About.css";

export default function About() {
  const { t, dir } = useLanguage();

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
    <section
      id="about"
      className="about-section"
      dir={dir}
    >
      <div className="container">

        {/* EN-TÊTE */}
        <div className="about-heading">
          <span className="about-label">
            {t("aboutLabel")}
          </span>

          <h2>
            {t("aboutTitle")}<br></br>
            <span className="">{t("aboutAccent")}</span>
          </h2>

          <p>
            {t("aboutDescription")}
          </p>
        </div>

        {/* CONTENU */}
        <div className="about-grid">

          {/* IMAGE ANIMÉE */}
          <div
            ref={imageRef}
            className={`about-image-wrap ${
              imageVisible ? "about-image-visible" : ""
            }`}
          >
            <img
              src="/images/glomed-doc-1.avif"
              alt={t("aboutImageAlt")}
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
                <strong>{t("aboutBadgeTitle")}</strong>
                <span>{t("aboutBadgeText")}</span>
              </div>
            </div>

            <span
              className="about-image-decoration"
              aria-hidden="true"
            />
          </div>

          {/* TEXTE ET ACCORDÉONS */}
          <div className="about-content">

            <span className="about-eyebrow">
              {t("aboutEyebrow")}
            </span>

            <h3>
              {t("aboutHeading")}
            </h3>

            <p className="about-intro">
              {t("aboutIntro")}
            </p>

            <div className="about-accordion">

              {/* ACCORDÉON 1 */}
              <details className="about-accordion-item" open>
                <summary>
                  <span className="about-accordion-number">01</span>
                  <span className="about-accordion-title">
                    {t("aboutAccordion1Title")}
                  </span>
                  <span
                    className="about-accordion-icon"
                    aria-hidden="true"
                  />
                </summary>

                <div className="about-accordion-panel">
                  <div className="about-accordion-inner">
                    {t("aboutAccordion1Text")}
                  </div>
                </div>
              </details>

              {/* ACCORDÉON 2 */}
              <details className="about-accordion-item">
                <summary>
                  <span className="about-accordion-number">02</span>
                  <span className="about-accordion-title">
                    {t("aboutAccordion2Title")}
                  </span>
                  <span
                    className="about-accordion-icon"
                    aria-hidden="true"
                  />
                </summary>

                <div className="about-accordion-panel">
                  <div className="about-accordion-inner">
                    {t("aboutAccordion2Text")}
                  </div>
                </div>
              </details>

              {/* ACCORDÉON 3 */}
              <details className="about-accordion-item">
                <summary>
                  <span className="about-accordion-number">03</span>
                  <span className="about-accordion-title">
                    {t("aboutAccordion3Title")}
                  </span>
                  <span
                    className="about-accordion-icon"
                    aria-hidden="true"
                  />
                </summary>

                <div className="about-accordion-panel">
                  <div className="about-accordion-inner">
                    {t("aboutAccordion3Text")}
                  </div>
                </div>
              </details>

              {/* ACCORDÉON 4 */}
              <details className="about-accordion-item">
                <summary>
                  <span className="about-accordion-number">04</span>
                  <span className="about-accordion-title">
                    {t("aboutAccordion4Title")}
                  </span>
                  <span
                    className="about-accordion-icon"
                    aria-hidden="true"
                  />
                </summary>

                <div className="about-accordion-panel">
                  <div className="about-accordion-inner">
                    {t("aboutAccordion4Text")}
                  </div>
                </div>
              </details>

            </div>

            {/* BOUTON */}
            <a href="#contact" className="about-button">
              {t("aboutCTA")}
              <i
                className="bi bi-arrow-right"
                aria-hidden="true"
              />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
