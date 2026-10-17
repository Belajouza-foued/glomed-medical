
"use client";
import Link from "next/link";
import "./css/Partnerships.css";



const countries = [
  {
    name: "Maroc",
    flag: "https://www.tmsmedical.net/wp-content/themes/tms-remake/images/marocco.png",
    code: "MA",
  },
  {
    name: "Burkina Faso",
    flag: "https://www.tmsmedical.net/wp-content/themes/tms-remake/images/burkina-faso.png",
    code: "BF",
  },
  {
    name: "Cameroun",
    flag: "https://www.tmsmedical.net/wp-content/themes/tms-remake/images/camroon.png",
    code: "CM",
  },
  {
    name: "Gabon",
    flag: "https://www.tmsmedical.net/wp-content/themes/tms-remake/images/gabon.png",
    code: "GA",
  },
    {
    name: "Niger",
    flag: "https://www.tmsmedical.net/wp-content/themes/tms-remake/images/niger.png",
    code: "NE",
  },
  {
    name: "France",
    flag: "https://www.tmsmedical.net/wp-content/themes/tms-remake/images/france.png",
    code: "FR",
  },
  {
    name: "Italie",
    flag: "https://flagcdn.com/w160/it.png",
    code: "IT",
  },
  {
    name: "Allemagne",
    flag: "https://flagcdn.com/w160/de.png",
    code: "DE",
  },
];




export default function Partnerships() {
  return (
    <section className="glomed-partners" id="partenariats">
      <div className="glomed-partners-container">
        <div className="glomed-partners-heading">
          <span className="glomed-partners-eyebrow">
            <span className="glomed-partners-dot" />
            NOTRE RÉSEAU INTERNATIONAL
          </span>

            <h2 className="section-title">
              Gestions des Services ,
              <span className="span-medical"> Medicaux.</span>
            </h2>

          <p className="glomed-partners-intro">
            Glomed Group facilite les échanges et la coordination autour
            des séjours médicaux en Tunisie, avec une approche humaine,
            professionnelle et adaptée aux besoins de chaque patient.
          </p>
        </div>

        <div className="glomed-partners-grid">
          {countries.map((country, index) => (
            <article
              className="glomed-partner-card"
              key={country.code}
              style={{ "--card-index": index }}
            >
              <div className="glomed-partner-card-top">
              
<img
  className="glomed-partner-flag"
  src={country.flag}
  alt={`Drapeau ${country.name}`}
  loading="lazy"
  width="65"
  height="44"
/>


                <span className="glomed-partner-code">
                  {country.code}
                </span>
              </div>

              <div className="glomed-partner-card-content">
                <h3>{country.name}</h3>
                <span className="glomed-partner-subtitle">
                  {country.subtitle}
                </span>

                <p>{country.description}</p>
              </div>

              <div className="glomed-partner-card-footer">
                <span className="glomed-partner-line" />
                <span className="glomed-partner-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>

        <div className="glomed-partners-bottom">
          <div className="glomed-partners-bottom-icon">✦</div>
          <p>
            <strong>Une destination : la Tunisie.</strong>
            <span>
              Un accompagnement pensé autour des besoins de chaque patient.
            </span>
          </p>
          <Link href="/contact" className="glomed-partners-cta">
            Parlons de votre projet <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
