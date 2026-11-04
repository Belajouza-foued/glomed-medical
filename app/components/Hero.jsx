
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import "./css/Hero.css";

const slides = [
  {
    image: "/images/glomed-an.avif",
    icon: "bi bi-heart-pulse",
    number: 1,
    primaryLink: "#contact",
    secondaryLink: "#services",
  },
  {
    image: "/images/glomed-group.avif",
    icon: "bi bi-stars",
    number: 2,
    primaryLink: "#services",
    secondaryLink: "#contact",
  },
  {
    image: "/images/glomed-guide.avif",
    icon: "bi bi-airplane",
    number: 3,
    primaryLink: "#contact",
    secondaryLink: "#about",
  },
  {
    image: "/images/glomed-ch.avif",
    icon: "bi bi-hospital",
    number: 4,
    primaryLink: "#contact",
    secondaryLink: "#services",
  },
  {
    image: "/images/sante.avif",
    icon: "bi bi-heart-pulse",
    number: 5,
    primaryLink: "#contact",
    secondaryLink: "#services",
  },
];

export default function Hero() {
  const { t, dir } = useLanguage();
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
    <section
      className="hero"
      id="home"
      dir={dir}
      aria-label={t("heroLabel")}
    >
      {slides.map((slide, index) => {
        const number = slide.number;

        return (
          <article
            key={slide.image}
            className={`hero-slide ${index === active ? "active" : ""}`}
            aria-hidden={index !== active}
          >
            <img
              src={slide.image}
              alt={t(`hero${number}Alt`)}
              fetchPriority={index === 0 ? "high" : "auto"}
            />

            <div className="hero-slide__overlay" />
<div className="hero-decoration" aria-hidden="true">
  <div className="hero-decoration-ring">
    <img
      src="/assets/logo/logo-glomed.jpeg"
      alt=""
    />
  </div>

  <span className="hero-decoration-icon icon-one">
    <i className="bi bi-heart-pulse" />
  </span>

  <span className="hero-decoration-icon icon-two">
    <i className="bi bi-hospital" />
  </span>

  <span className="hero-decoration-icon icon-three">
    <i className="bi bi-airplane" />
  </span>
</div>
            <div className="container hero-slide__container">
              <div className="hero-content">

                <span className="hero-eyebrow">
                  <i className={slide.icon} aria-hidden="true" />
                  {t(`hero${number}Eyebrow`)}
                </span>

                <h1>
                  {t(`hero${number}Title`)}
                  <span>{t(`hero${number}Accent`)}</span>
                </h1>

                <p>{t(`hero${number}Text`)}</p>

                <div className="hero-actions">
                  <Link
                    href={slide.primaryLink}
                    className="btn-primary-custom"
                  >
                    {t(`hero${number}Primary`)}
                    <i className="bi bi-arrow-right" aria-hidden="true" />
                  </Link>

                  <Link
                    href={slide.secondaryLink}
                    className="btn-outline-custom"
                  >
                    {t(`hero${number}Secondary`)}
                  </Link>
                </div>

                <div className="hero-trust">
                  <span className="hero-trust-icon">
                    <i className="bi bi-check-lg" aria-hidden="true" />
                  </span>

                  <span>
                    <strong>{t("heroTrustTitle")}</strong>
                    <small>{t("heroTrustText")}</small>
                  </span>
                </div>

              </div>
            </div>
          </article>
        );
      })}

      <div className="hero-bottom-line">
        <div className="container hero-bottom-inner">
          <span>{t("heroBottom1")}</span>
          <span className="hero-bottom-separator">✳</span>
          <span>{t("heroBottom2")}</span>
          <span className="hero-bottom-separator">✳</span>
          <span>{t("heroBottom3")}</span>
        </div>
      </div>

      <div
        className="hero-dots"
        aria-label={t("heroDotsLabel")}
      >
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            className={`hero-dot ${index === active ? "active" : ""}`}
            aria-label={`${t("heroDotLabel")} ${index + 1}`}
            aria-pressed={index === active}
            onClick={() => goTo(index)}
          />
        ))}
      </div>

      <button
        type="button"
        className="hero-arrow hero-arrow--prev"
        aria-label={t("heroPrevious")}
        onClick={() => goTo(active - 1)}
      >
        <span aria-hidden="true">←</span>
      </button>

      <button
        type="button"
        className="hero-arrow hero-arrow--next"
        aria-label={t("heroNext")}
        onClick={() => goTo(active + 1)}
      >
        <span aria-hidden="true">→</span>
      </button>

    </section>
  );
}
