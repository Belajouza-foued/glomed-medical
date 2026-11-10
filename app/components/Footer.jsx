
"use client";

import { useLanguage } from "../contexts/LanguageContext";
import "./css/Footer.css";

const translations = {
  fr: {
    about:
      "Votre partenaire pour organiser votre séjour médical en Tunisie. Nous vous accompagnons dans vos démarches pour vous aider à préparer votre parcours de soins en toute sérénité.",
    navigation: "Navigation",
    contact: "Contactez-nous",
    whatsapp: "Contacter sur WhatsApp",
    country: "Tunisie",
    organize: "Organiser un séjour",
    rights: "Tous droits réservés.",
    slogan: "Le soin commence par l'écoute.",
    links: [
      { label: "Accueil", href: "/" },
      { label: "Services", href: "/services" },
      { label: "À propos", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },

  en: {
    about:
      "Your partner in organizing your medical stay in Tunisia. We support you throughout the process to help you prepare your healthcare journey with complete peace of mind.",
    navigation: "Navigation",
    contact: "Contact us",
    whatsapp: "Contact us on WhatsApp",
    country: "Tunisia",
    organize: "Organize your stay",
    rights: "All rights reserved.",
    slogan: "Care begins with listening.",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "About us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },

  ar: {
    about:
      "شريككم في تنظيم إقامتكم الطبية في تونس. نرافقكم في مختلف الإجراءات لمساعدتكم على التحضير لرحلتكم العلاجية بكل راحة وطمأنينة.",
    navigation: "التنقل",
    contact: "اتصلوا بنا",
    whatsapp: "تواصلوا معنا عبر واتساب",
    country: "تونس",
    organize: "تنظيم إقامتكم",
    rights: "جميع الحقوق محفوظة.",
    slogan: "تبدأ الرعاية بالإنصات.",
    links: [
      { label: "الرئيسية", href: "/" },
      { label: "خدماتنا", href: "/services" },
      { label: "من نحن", href: "/about" },
      { label: "اتصل بنا", href: "/contact" },
    ],
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language] || translations.fr;
  const isArabic = language === "ar";

  const phone = "+216 93 767 950";
  const whatsapp = phone.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsapp}`;
  const email = "groupglomed@gmail.com";

  return (
    <footer className="glomed-footer" dir={isArabic ? "rtl" : "ltr"}>
      <div className="container">
        <div className="glomed-footer-top">

          {/* COLONNE 1 : IDENTITÉ */}
          <div className="glomed-footer-column">
            <a href="/" className="glomed-footer-brand">
              <img
                src="/assets/logo/logo-glomed-vert-jaune.png"
                alt="Glomed Group - Medical Tourism"
                className="glomed-footer-logo"
              />
            </a>

            <p className="glomed-footer-about">
              {t.about}
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
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* COLONNE 2 : NAVIGATION */}
          <div className="glomed-footer-column">
            <h3 className="glomed-footer-heading">
              {t.navigation}
            </h3>

            <ul className="glomed-footer-navigation">
              {t.links.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>
                    <i
                      className="bi bi-chevron-right"
                      aria-hidden="true"
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNE 3 : CONTACT */}
          <div className="glomed-footer-column">
            <h3 className="glomed-footer-heading">
              {t.contact}
            </h3>

            <ul className="glomed-footer-contact">
              <li>
                <a href={`tel:${phone}`}>
                  <i className="bi bi-telephone" aria-hidden="true" />
                  <span dir="ltr">{phone}</span>
                </a>
              </li>

              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp" aria-hidden="true" />
                  <span>{t.whatsapp}</span>
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
                  {t.country}
                </span>
              </li>
            </ul>

            <a href="/contact" className="glomed-footer-cta">
              {t.organize}
              <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* BAS DE PAGE */}
        <div className="glomed-footer-bottom">
          <p>
            © 2026 Glomed Group. {t.rights}
          </p>

          <p>{t.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
