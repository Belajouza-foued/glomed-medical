import Link from "next/link";
import "./css/Partnerships.css";

// Drapeaux depuis flagcdn (même taille et même ratio pour tous)
const flag = (code) => `https://flagcdn.com/w160/${code.toLowerCase()}.png`;

const countries = [
  { name: "Maroc", code: "MA" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Cameroun", code: "CM" },
  { name: "Gabon", code: "GA" },
  { name: "Niger", code: "NE" },
  { name: "France", code: "FR" },
  { name: "Italie", code: "IT" },
  { name: "Allemagne", code: "DE" },
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

          <h2>
            Gestion des services
            <span> médicaux.</span>
          </h2>

          <p className="glomed-partners-intro">
            Glomed Group facilite les échanges et la coordination autour des
            séjours médicaux en Tunisie, avec une approche humaine,
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
              <img
                className="glomed-partner-flag"
                src={flag(country.code)}
                alt={`Drapeau ${country.name}`}
                loading="lazy"
                width="56"
                height="38"
              />

              <div className="glomed-partner-card-content">
                <h3>{country.name}</h3>
                <span className="glomed-partner-code">{country.code}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="glomed-partners-bottom">
          <div className="glomed-partners-bottom-icon" aria-hidden="true">✦</div>
          <p>
            <strong>Une destination : la Tunisie.</strong>
            <span>Un accompagnement pensé autour des besoins de chaque patient.</span>
          </p>
          <Link href="/#contact" className="glomed-partners-cta">
            Parlons de votre projet <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}