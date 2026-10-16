
"use client";

import { useState } from "react";
import Link from "next/link";
import "./css/Navbar.css";

const languages = [
  { code: "FR", label: "Français" },
  { code: "EN", label: "English" },
  { code: "AR", label: "العربية" },
];

export default function Navbar() {
  const [language, setLanguage] = useState("FR");
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
          {language}
          <span className="glomed-chevron">▾</span>
        </button>

        {languageOpen && (
          <div className="glomed-language-menu">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                className={
                  language === item.code ? "glomed-language-selected" : ""
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
        Organiser un séjour <span>↗</span>
      </a>
    );
  }

  return (
    <header className="glomed-header">
      <div className="glomed-nav-container">
      <a
  href="#home"
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
    <span className="glomed-brand-title">
    GESTION DE SERVICE MEDICAUX
    </span>
 
  </div>

        <button
          type="button"
          className={`glomed-menu-toggle ${mobileOpen ? "is-open" : ""}`}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
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
          aria-label="Navigation principale"
        >
          <Link href="/" onClick={closeMenu}>Accueil</Link>
          <Link href="#services" onClick={closeMenu}>Services</Link>
          {/* MENU CHIRURGIE */}
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
    Chirurgie
    <span className="glomed-chevron" aria-hidden="true">
      ⌄
    </span>
  </button>

  <div className="glomed-nav-dropdown-menu">
    <Link href="/#orthopedie" onClick={() => setSurgeryOpen(false)}>
      Orthopédie
    </Link>
   
<Link href="/chirurgie/cardiologie" onClick={closeMenu}>
  Cardiologie
</Link>

    <Link href="/#pneumologie" onClick={() => setSurgeryOpen(false)}>
      Pneumologie
    </Link>
    <Link href="/#urologie" onClick={() => setSurgeryOpen(false)}>
      Urologie
    </Link>
    <Link href="/#pediatrie" onClick={() => setSurgeryOpen(false)}>
      Pédiatrie
    </Link>
    <Link href="/#gastro-enterologie" onClick={() => setSurgeryOpen(false)}>
      Gastro-entérologie
    </Link>
    <Link href="/#ophtalmologie" onClick={() => setSurgeryOpen(false)}>
      Ophtalmologie
    </Link>
  </div>
</div>


          <a href="#about" onClick={closeMenu}>À propos</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

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
