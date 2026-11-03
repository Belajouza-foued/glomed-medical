import Contact from "../components/Contact";
import "./contact-page.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
export const metadata = {
  title: "Contact | Glomed Group",
  description:
    "Contactez Glomed Group pour organiser votre séjour médical en Tunisie. Notre équipe vous répond et vous accompagne dans les prochaines étapes.",
};

const INFOS = [
  { icon: "bi bi-telephone", label: "Téléphone", value: "+216 93 767 950", href: "tel:+21693767950" },
  { icon: "bi bi-whatsapp", label: "WhatsApp", value: "Écrire sur WhatsApp", href: "https://wa.me/21693767950", external: true },
  { icon: "bi bi-envelope", label: "E-mail", value: "contact@glomed-group.com", href: "mailto:contact@glomed-group.com" },
  { icon: "bi bi-geo-alt", label: "Adresse", value: "Tunis, Tunisie" },
];

const STEPS = [
  { number: "01", title: "Vous nous écrivez", text: "Décrivez votre projet et laissez-nous vos coordonnées." },
  { number: "02", title: "Nous vous répondons", text: "Notre équipe étudie votre demande et vous recontacte." },
  { number: "03", title: "Nous organisons", text: "Après confirmation par l’établissement, nous coordonnons votre séjour." },
];

export default function ContactPage() {
  return (
    <>
     <Topbar/>
        <Navbar/>
    <main className="cpage">
      <section className="cpage-infos">
        <div className="cpage-container">
          <div className="cpage-heading">
            <p className="cpage-kicker">NOUS JOINDRE DIRECTEMENT</p>
            <h2>
              Une question ? <span>Écrivez-nous ou appelez-nous.</span>
            </h2>
          </div>

          <ul className="cpage-infos-grid">
            {INFOS.map((info) => {
              const content = (
                <>
                  <span className="cpage-info-icon">
                    <i className={info.icon} aria-hidden="true" />
                  </span>
                  <span className="cpage-info-text">
                    <small>{info.label}</small>
                    <strong>{info.value}</strong>
                  </span>
                </>
              );
              return (
                <li key={info.label}>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="cpage-info"
                      {...(info.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="cpage-info">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      {/* Formulaire (ton composant) */}
      <Contact />
      {/* Coordonnées directes */}
      

      {/* Et ensuite ? */}
      <section className="cpage-steps">
        <div className="cpage-container">
          <div className="cpage-heading cpage-heading-light">
            <p className="cpage-kicker">APRÈS VOTRE MESSAGE</p>
            <h2>
              Comment cela <span>se passe ?</span>
            </h2>
          </div>

          <ol className="cpage-steps-list">
            {STEPS.map((s) => (
              <li key={s.number}>
                <span>{s.number}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
     <Footer/>
    </>
  );
}