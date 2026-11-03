
import Link from "next/link";
import "./css/Partnerships.css";

// Drapeaux depuis FlagCDN
const flag = (code) =>
  `https://flagcdn.com/w160/${code.toLowerCase()}.png`;

const countries = [
  // Afrique du Nord
  { name: "Algérie", code: "DZ", region: "Afrique" },
  { name: "Libye", code: "LY", region: "Afrique" },
  { name: "Maroc", code: "MA", region: "Afrique" },
  { name: "Mauritanie", code: "MR", region: "Afrique" },

  // Afrique de l'Ouest
  { name: "Sénégal", code: "SN", region: "Afrique" },
  { name: "Côte d'Ivoire", code: "CI", region: "Afrique" },
  { name: "Burkina Faso", code: "BF", region: "Afrique" },
  { name: "Niger", code: "NE", region: "Afrique" },

  // Afrique centrale
  { name: "Cameroun", code: "CM", region: "Afrique" },
  { name: "Gabon", code: "GA", region: "Afrique" },
  { name: "Congo", code: "CG", region: "Afrique" },

  // Pays du Golfe
  { name: "Arabie saoudite", code: "SA", region: "Golfe" },
  { name: "Émirats arabes unis", code: "AE", region: "Golfe" },
  { name: "Qatar", code: "QA", region: "Golfe" },
  { name: "Koweït", code: "KW", region: "Golfe" },
  { name: "Bahreïn", code: "BH", region: "Golfe" },
  { name: "Oman", code: "OM", region: "Golfe" },

  // Europe
  { name: "France", code: "FR", region: "Europe" },
  { name: "Italie", code: "IT", region: "Europe" },
  { name: "Allemagne", code: "DE", region: "Europe" },
];

export default function Partnerships() {
  return (
    <section className="glomed-partners" id="partenariats">
      <div className="glomed-partners-container">

        {/* EN-TÊTE */}
        <div className="glomed-partners-heading">
          <span className="glomed-partners-eyebrow">
            <span className="glomed-partners-dot" />
            NOTRE OUVERTURE INTERNATIONALE
          </span>

          <h2>
            Un réseau international,
            <span> une destination : la Tunisie.</span>
          </h2>

          <p className="glomed-partners-intro">
            Depuis l'Afrique, les pays du Golfe et l'Europe,
            Glomed Group accompagne les patients dans l'organisation
            de leur parcours de soins en Tunisie, en facilitant la
            coordination avec les professionnels et établissements
            de santé partenaires.
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
                alt={`Drapeau ${country.name}`}
                loading="lazy"
                width="56"
                height="38"
              />

              <div className="glomed-partner-card-content">
                <h3>{country.name}</h3>
                <span className="glomed-partner-code">
                  {country.region}
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
            <strong>Une destination : la Tunisie.</strong>
            <span>
              Un accompagnement pensé autour des besoins de chaque patient.
            </span>
          </p>

          <Link
            href="/#contact"
            className="glomed-partners-cta"
          >
            Parlons de Votre Soins
            <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
