"use client";

import "./css/Services.css";

const SPECIALTIES = [
  {
    icon: "bi bi-heart-pulse",
    title: "Chirurgie esthétique",
    text: "Organisation et coordination de votre projet avec des professionnels de santé partenaires, selon votre demande.",
  },
  {
    icon: "bi bi-person-hearts",
    title: "Médecine esthétique",
    text: "Accompagnement pour vos demandes de soins esthétiques et orientation vers les professionnels concernés.",
  },
  {
    icon: "bi bi-scissors",
    title: "Greffe de cheveux",
    text: "Aide à l'organisation de votre séjour et à la prise de contact avec des professionnels spécialisés.",
  },
  {
    icon: "bi bi-emoji-smile",
    title: "Implants dentaires",
    text: "Coordination de votre demande de soins dentaires et organisation pratique de votre séjour.",
  },
  {
    icon: "bi bi-activity",
    title: "Autres spécialités médicales",
    text: "Étude de votre demande et orientation vers les professionnels ou établissements adaptés, selon les possibilités.",
  },
  {
    icon: "bi bi-clipboard2-pulse",
    title: "Suivi et rendez-vous",
    text: "Aide à la coordination des rendez-vous et des informations nécessaires à la préparation de votre séjour.",
  },
];

const STEPS = [
  {
    number: "01",
    icon: "bi bi-chat-dots",
    title: "Votre demande",
    text: "Vous nous présentez votre projet, vos attentes et les soins que vous souhaitez envisager.",
  },
  {
    number: "02",
    icon: "bi bi-file-earmark-medical",
    title: "Orientation médicale",
    text: "Avec votre accord, nous facilitons la transmission des informations nécessaires aux professionnels de santé concernés. Le médecin évalue votre situation.",
  },
  {
    number: "03",
    icon: "bi bi-calendar-check",
    title: "Organisation du séjour",
    text: "Nous vous aidons à coordonner les rendez-vous, les dates envisagées et les aspects pratiques de votre séjour.",
  },
  {
    number: "04",
    icon: "bi bi-airplane",
    title: "Accueil et transfert",
    text: "Selon la formule convenue, nous organisons votre accueil et vos transferts entre l'aéroport, l'hébergement et les lieux de rendez-vous.",
  },
  {
    number: "05",
    icon: "bi bi-building",
    title: "Hébergement",
    text: "Nous vous accompagnons dans la recherche ou la réservation d'un hébergement adapté à la durée prévue de votre séjour.",
  },
  {
    number: "06",
    icon: "bi bi-heart",
    title: "Accompagnement sur place",
    text: "Nous facilitons la coordination pratique pendant votre séjour. Les décisions et les soins médicaux restent sous la responsabilité des professionnels de santé.",
  },
];

export default function Services() {
  return (
    <>
      <section id="services" className="services">
        <div className="container">
          <div className="services__heading">
            <span className="services__eyebrow">
              NOS DOMAINES D'ACCOMPAGNEMENT
            </span>

            <h2 className="section-title">
              Gestions des Services ,
              <span> Medicaux.</span>
            </h2>

            <p className="section-lead">
              Glomed Group vous accompagne dans l'organisation de votre
              séjour médical en Tunisie, de votre première demande aux
              aspects pratiques de votre venue.
            </p>
          </div>

          <div className="row services__list">
            {SPECIALTIES.map((service) => (
              <div
                className="col-lg-6 services__item"
                key={service.title}
              >
                <div className="services__row">
                  <span className="services__icon">
                    <i className={service.icon} aria-hidden="true" />
                  </span>

                  <div className="services__content">
                    <h3 className="services__item-title">
                      {service.title}
                    </h3>

                    <p className="services__item-text">
                      {service.text}
                    </p>
                  </div>

                  <span className="services__arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="services__note">
            <i className="bi bi-info-circle" aria-hidden="true" />
            <p>
              Les soins, les indications médicales, les traitements et
              les résultats attendus sont évalués par les professionnels
              de santé compétents. Toute intervention dépend de leur avis
              et de votre situation individuelle.
            </p>
          </div>
        </div>
      </section>

      <section id="etapes" className="medical-process">
        <div className="container">
          <div className="medical-process__heading">
            <span className="services__eyebrow">
              UN PARCOURS EN 6 ÉTAPES
            </span>

            <h2 className="section-title">
              De votre demande
              <span> à votre séjour en Tunisie.</span>
            </h2>

            <p className="section-lead">
              Chaque étape est préparée avec vous pour rendre
              l'organisation de votre séjour plus claire et plus simple.
            </p>
          </div>

          <div className="medical-process__list">
            {STEPS.map((step) => (
              <article className="medical-process__item" key={step.number}>
                <div className="medical-process__number">
                  {step.number}
                </div>

                <div className="medical-process__icon">
                  <i className={step.icon} aria-hidden="true" />
                </div>

                <div className="medical-process__content">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>

                <span className="medical-process__check" aria-hidden="true">
                  <i className="bi bi-arrow-up-right" />
                </span>
              </article>
            ))}
          </div>

          <div className="medical-process__cta">
            <div>
              <span className="services__eyebrow">
                VOTRE PROJET COMMENCE ICI
              </span>
              <h3>Vous envisagez un séjour médical en Tunisie ?</h3>
              <p>
                Présentez-nous votre demande pour discuter des possibilités
                d'accompagnement et des prochaines étapes.
              </p>
            </div>

            <a href="/#contact" className="services__cta">
              Nous contacter
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}