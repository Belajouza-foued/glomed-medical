import Link from "next/link";
import "./css/IntroProject.css";

export default function IntroProject() {
  return (
    <section className="ipro" aria-labelledby="ipro-title">
      {/* .ipro-panel = bloc centré avec marges à gauche et à droite */}
      <div className="ipro-panel">
        <div className="ipro-text">
          <p className="ipro-kicker">PARLONS DE VOTRE PROJET</p>

          <h2 id="ipro-title">
            Un séjour médical en Tunisie <span>à organiser ?</span>
          </h2>

          <p className="ipro-lead">
            Présentez-nous votre demande : nous vous répondons pour discuter des
            possibilités d’accompagnement et des prochaines étapes.
          </p>
        </div>

        <div className="ipro-actions">
          <Link href="/contact" className="ipro-button ipro-button-primary">
            Nous contacter
            <span className="ipro-arrow" aria-hidden="true">↗</span>
          </Link>

          <a
            href="https://wa.me/21693767950"
            className="ipro-button ipro-button-whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-whatsapp" aria-hidden="true" />
            Écrire sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}