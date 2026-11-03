
"use client";

import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Link from "next/link";
import "./css/Navbar.css";

const languages = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
];

export default function Navbar() {
  const { language, setLanguage, t, dir } = useLanguage();

  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [surgeryOpen, setSurgeryOpen] = useState(false);

  function closeMenu() {
    setMobileOpen(false);
    setLanguageOpen(false);
    setSurgeryOpen(false);
  }

  function renderLanguageSelector() {
    return (
      <div className="glomed-language">
        <button
          type="button"
          className="glomed-language-trigger"
          aria-expanded={languageOpen}
          onClick={() => setLanguageOpen((open) => !open)}
        >
          {language.toUpperCase()}
          <span className="glomed-chevron">▾</span>
        </button>

        {languageOpen && (
          <div className="glomed-language-menu">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                className={
                  language === item.code
                    ? "glomed-language-selected"
                    : ""
                }
                onClick={() => {
                  setLanguage(item.code);
                  setLanguageOpen(false);
                }}
              >
                {item.label}
                {language === item.code && <span>✓</span>}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  function renderCTA() {
    return (
      <a
        href="/#contact"
        className="glomed-cta"
        onClick={closeMenu}
      >
        {t("navCTA")} <span>↗</span>
      </a>
    );
  }

  return (
    <header className="glomed-header" dir={dir}>
      <div className="glomed-nav-container">

        <a
          href="/"
          className="glomed-brand"
          aria-label="Glomed Group - Accueil"
          onClick={closeMenu}
        >
          <img
            src="/assets/logo/logo-glomed.jpeg"
            alt="Glomed Group"
            className="glomed-brand-mark"
          />
        </a>

        <div className="glomed-brand-caption">
          <Link href="/services" className="glomed-brand-title">
            {t("topbarService")}
          </Link>
        </div>

        <button
          type="button"
          className={`glomed-menu-toggle ${mobileOpen ? "is-open" : ""}`}
          aria-label={mobileOpen ? t("navClose") : t("navOpen")}
          aria-expanded={mobileOpen}
          aria-controls="glomed-navigation"
          onClick={() => {
            setMobileOpen((open) => !open);
            setLanguageOpen(false);
          }}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="glomed-navigation"
          className={`glomed-nav ${mobileOpen ? "is-open" : ""}`}
          aria-label={t("navLabel")}
        >
          <Link href="/" onClick={closeMenu}>
            {t("navHome")}
          </Link>

          <Link href="/services" onClick={closeMenu}>
            {t("navServices")}
          </Link>

          <div
            className={`glomed-nav-dropdown ${
              surgeryOpen ? "is-open" : ""
            }`}
          >
            <button
              type="button"
              className="glomed-nav-dropdown-trigger"
              aria-haspopup="true"
              aria-expanded={surgeryOpen}
              onClick={() => setSurgeryOpen((prev) => !prev)}
            >
              {t("navSurgery")}
              <span className="glomed-chevron" aria-hidden="true">
                ⌄
              </span>
            </button>

            <div className="glomed-nav-dropdown-menu">

              <Link href="/chirurgie/orthopedie" onClick={closeMenu}>
                {t("navOrthopedics")}
              </Link>

              <Link href="/chirurgie/cardiologie" onClick={closeMenu}>
                {t("navCardiology")}
              </Link>

              <Link href="/chirurgie/pneumologie" onClick={closeMenu}>
                {t("navPneumology")}
              </Link>

              <Link href="/chirurgie/urologie" onClick={closeMenu}>
                {t("navUrology")}
              </Link>

              <Link href="/chirurgie/pediatrie" onClick={closeMenu}>
                {t("navPediatrics")}
              </Link>

              <Link href="/chirurgie/gastro-enterologie" onClick={closeMenu}>
                {t("navGastro")}
              </Link>

              <Link href="/chirurgie/ophtalmologie" onClick={closeMenu}>
                {t("navOphthalmology")}
              </Link>

              <Link href="/chirurgie/gynecologie" onClick={closeMenu}>
                {t("navGynecology")}
              </Link>

            </div>
          </div>

          <Link href="/about" onClick={closeMenu}>
            {t("navAbout")}
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            {t("navContact")}
          </Link>

          <div className="glomed-mobile-actions">
            {renderLanguageSelector()}
            {renderCTA()}
          </div>
        </nav>

        <div className="glomed-desktop-actions">
          {renderLanguageSelector()}
          {renderCTA()}
        </div>

      </div>
    </header>
  );
}
