import Link from "next/link";

export default function IntroProject() {
return (
 <section className="apage-cta">
        <div className="apage-container apage-cta-inner">
          <div>
            <p className="apage-cta-kicker">PARLONS DE VOTRE PROJET</p>
            <h2>
              Un séjour médical en Tunisie <span>à organiser ?</span>
            </h2>
            <p>
              Présentez-nous votre demande : nous vous répondons pour discuter
              des possibilités d’accompagnement et des prochaines étapes.
            </p>
          </div>

          <div className="apage-actions">
            <Link href="/#contact" className="apage-button apage-button-primary">
              Nous contacter <span aria-hidden="true">↗</span>
            </Link>
            <a
              href="https://wa.me/21693767950"
              className="apage-button apage-button-whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              Écrire sur WhatsApp
            </a>
          </div>
        </div>
      </section>
)
}