import "./css/Footer.css";

export default function Footer() {
  const navigation = [
    { label: "Accueil", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "À propos", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

const phone = "+21693767950";
const whatsapp = phone.replace(/\D/g, "");
const whatsappUrl = `https://wa.me/${whatsapp}`;
  const email = "groupglomed@gmail.com";

  return (
  <footer className="glomed-footer">
  <div className="container">

    <div className="glomed-footer-top">

      {/* COLONNE 1 : IDENTITÉ */}
      <div className="glomed-footer-column">
     <a href="#home" className="glomed-footer-brand">
  <img
    src="/assets/logo/logo-glomed-vert-jaune.png"
    alt="Glomed Group - Medical Tourism"
    className="glomed-footer-logo"
  />
</a>


        <p className="glomed-footer-about">
          Votre partenaire pour organiser votre séjour médical
          en Tunisie. Nous vous accompagnons dans vos démarches
          pour vous aider à préparer votre parcours de soins
          en toute sérénité.
        </p>

        <div className="glomed-footer-socials">
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
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Contacter Glomed Group sur WhatsApp"
>
  <i className="bi bi-whatsapp" aria-hidden="true" />
</a>
        </div>
      </div>

      {/* COLONNE 2 : NAVIGATION */}
      <div className="glomed-footer-column">
        <h3 className="glomed-footer-heading">
          Navigation
        </h3>

        <ul className="glomed-footer-navigation">
          {navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href}>
                <i className="bi bi-chevron-right" aria-hidden="true" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* COLONNE 3 : CONTACT */}
      <div className="glomed-footer-column">
        <h3 className="glomed-footer-heading">
          Contactez-nous
        </h3>

        <ul className="glomed-footer-contact">
          <li>
            <a href={`tel:${phone}`}>
              <i className="bi bi-telephone" aria-hidden="true" />
              <span>{phone}</span>
            </a>
          </li>

          <li>
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-whatsapp" aria-hidden="true" />
              <span>Contacter sur WhatsApp</span>
            </a>
          </li>

          <li>
            <a href={`mailto:${email}`}>
              <i className="bi bi-envelope" aria-hidden="true" />
              <span>{email}</span>
            </a>
          </li>

          <li>
            <span>
              <i className="bi bi-geo-alt" aria-hidden="true" />
              Tunisie
            </span>
          </li>
        </ul>

        <a href="#contact" className="glomed-footer-cta">
          Organiser un séjour
          <i className="bi bi-arrow-up-right" aria-hidden="true" />
        </a>
      </div>

    </div>

    {/* BAS DE PAGE */}
    <div className="glomed-footer-bottom">
      <p>© 2026 Glomed Group. Tous droits réservés.</p>
      <p>Le soin commence par l'écoute.</p>
    </div>

  </div>
</footer>

  );
}