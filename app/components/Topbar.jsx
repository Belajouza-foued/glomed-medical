
import "./css/Topbar.css";

export default function Topbar() {
  return (
    <div className="glomed-topbar">
      <div className="glomed-topbar-inner">

        {/* NOM DU SERVICE */}
        <div className="glomed-topbar-brand">
          <i className="bi bi-heart-pulse" aria-hidden="true" />
          <span>Gestion des services médicaux</span>
        </div>

        {/* COORDONNÉES ET RÉSEAUX SOCIAUX */}
        <div className="glomed-topbar-info">

          <span className="glomed-topbar-item">
            <i className="bi bi-geo-alt" aria-hidden="true" />
            Tunisie
          </span>

          <a
            href="mailto:contact@glomed.tn"
            className="glomed-topbar-item"
            aria-label="Envoyer un e-mail"
          >
            <i className="bi bi-envelope" aria-hidden="true" />
            <span>groupglomed@gmail.com</span>
          </a>

          <a
            href="tel:+21693767950"
            className="glomed-topbar-item"
            aria-label="Appeler Glomed Group"
          >
            <i className="bi bi-telephone" aria-hidden="true" />
            <span>+216 93 767 950</span>
          </a>

          {/* RÉSEAUX SOCIAUX */}
          <div className="glomed-topbar-socials">
            <a
              href="https://www.facebook.com/VOTRE-PAGE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook" aria-hidden="true" />
            </a>

            <a
              href="https://www.instagram.com/VOTRE-COMPTE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram" aria-hidden="true" />
            </a>

            <a
              href="https://wa.me/216XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="bi bi-whatsapp" aria-hidden="true" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
