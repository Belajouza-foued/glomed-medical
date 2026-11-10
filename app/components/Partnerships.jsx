
"use client";

import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import "./css/Partnerships.css";

// Drapeaux depuis FlagCDN
const flag = (code) =>
  `https://flagcdn.com/w160/${code.toLowerCase()}.png`;

const countries = [
  // Afrique du Nord
  { key: "countryAlgeria", code: "DZ", region: "partnersRegionAfrica" },
  { key: "countryLibya", code: "LY", region: "partnersRegionAfrica" },
  { key: "countryMauritania", code: "MR", region: "partnersRegionAfrica" },

  // Afrique de l'Ouest
  { key: "countryIvoryCoast", code: "CI", region: "partnersRegionAfrica" },
  { key: "countryBurkinaFaso", code: "BF", region: "partnersRegionAfrica" },
  { key: "countryNiger", code: "NE", region: "partnersRegionAfrica" },

  // Afrique centrale
  { key: "countryCameroon", code: "CM", region: "partnersRegionAfrica" },
  { key: "countryGabon", code: "GA", region: "partnersRegionAfrica" },

  // Pays du Golfe
  { key: "countrySaudiArabia", code: "SA", region: "partnersRegionGulf" },
  { key: "countryUAE", code: "AE", region: "partnersRegionGulf" },
  { key: "countryQatar", code: "QA", region: "partnersRegionGulf" },
  { key: "countryKuwait", code: "KW", region: "partnersRegionGulf" },
  { key: "countryBahrain", code: "BH", region: "partnersRegionGulf" },
  { key: "countryOman", code: "OM", region: "partnersRegionGulf" },

  // Europe
  { key: "countryFrance", code: "FR", region: "partnersRegionEurope" },
  { key: "countryItaly", code: "IT", region: "partnersRegionEurope" },
  ];

export default function Partnerships() {
  const { t, dir } = useLanguage();

  return (
    <section
      className="glomed-partners"
      id="partenariats"
      dir={dir}
    >
      <div className="glomed-partners-container">

        {/* EN-TÊTE */}
        <div className="glomed-partners-heading">
          <span className="glomed-partners-eyebrow">
            <span className="glomed-partners-dot" />
            {t("partnersEyebrow")}
          </span>

          <h2>
            {t("partnersTitle")}
            <span>{t("partnersAccent")}</span>
          </h2>

          <p className="glomed-partners-intro">
            {t("partnersDescription")}
          </p>
        </div>

        {/* LISTE DES PAYS */}
        <div className="glomed-partners-grid">
          {countries.map((country, index) => (
            <article
              className="glomed-partner-card"
              key={country.code}
              style={{ "--card-index": index }}
            >
              <img
                className="glomed-partner-flag"
                src={flag(country.code)}
                alt={`${t("partnersFlag")} ${t(country.key)}`}
                loading="lazy"
                width="56"
                height="38"
              />

              <div className="glomed-partner-card-content">
                <h3>{t(country.key)}</h3>
                <span className="glomed-partner-code">
                  {t(country.region)}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* BAS DE SECTION */}
        <div className="glomed-partners-bottom">
          <div
            className="glomed-partners-bottom-icon"
            aria-hidden="true"
          >
            ✦
          </div>

          <p>
            <strong>{t("partnersDestination")}</strong>
            <span>{t("partnersBottomText")}</span>
          </p>

          <Link
            href="/#contact"
            className="glomed-partners-cta"
          >
            {t("partnersCTA")}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
