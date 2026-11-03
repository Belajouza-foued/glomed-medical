
"use client";

import { useLanguage } from "../contexts/LanguageContext";
import "./css/Testimonials.css";

const testimonials = {
  fr: {
    eyebrow: "TÉMOIGNAGES",
    title: "Ils nous ont fait confiance",
    description:
      "Découvrez les expériences de patients accompagnés dans l'organisation de leur parcours de soins en Tunisie.",
    reviews: [
      {
        name: "Amine B.",
        country: "🇩🇿 Algérie",
        service: "Accompagnement médical",
        text: "J'ai apprécié la disponibilité de l'équipe et les informations reçues pour préparer mon séjour médical en Tunisie.",
        image: "https://i.pravatar.cc/100?img=11",
        alt: "Portrait illustratif d'un homme",
      },
    
{
  name: "Fatou S.",
  country: "🇸🇳 Sénégal",
  service: "Organisation du séjour",
  text: "L'équipe m'a aidée à mieux comprendre les différentes étapes et à organiser mon déplacement en Tunisie.",
  image: "/images/profil-senegal.png",
  alt: "Portrait d'une femme sénégalaise",
},

      {
        name: "Ahmed K.",
        country: "🇸🇦 Arabie saoudite",
        service: "Coordination du parcours",
        text: "J'ai apprécié la qualité des échanges et l'accompagnement proposé tout au long de la préparation de mon séjour.",
        image: "https://i.pravatar.cc/100?img=12",
        alt: "Portrait illustratif d'un homme",
      },
      {
        name: "Mariam A.",
        country: "🇦🇪 Émirats arabes unis",
        service: "Assistance et coordination",
        text: "Une équipe attentive qui m'a apporté des informations utiles pour organiser les différentes étapes de mon séjour.",
        image: "https://i.pravatar.cc/100?img=44",
        alt: "Portrait illustratif d'une femme",
      },
      {
        name: "Sophie M.",
        country: "🇫🇷 France",
        service: "Organisation du séjour",
        text: "J'ai apprécié la clarté des informations et la disponibilité de l'équipe pour répondre à mes questions.",
        image: "https://i.pravatar.cc/100?img=45",
        alt: "Portrait illustratif d'une femme",
      },
      {
        name: "Marc D.",
        country: "🇧🇪 Belgique",
        service: "Accompagnement personnalisé",
        text: "Les échanges ont été simples et rassurants. J'ai pu obtenir les informations nécessaires pour préparer mon séjour.",
        image: "https://i.pravatar.cc/100?img=13",
        alt: "Portrait illustratif d'un homme",
      },
    ],
  },

  en: {
    eyebrow: "TESTIMONIALS",
    title: "They trusted us",
    description:
      "Discover the experiences of patients supported throughout the organization of their healthcare journey in Tunisia.",
    reviews: [
      {
        name: "Amine B.",
        country: "🇩🇿 Algeria",
        service: "Medical assistance",
        text: "I appreciated the team's availability and the information provided to prepare my medical stay in Tunisia.",
        image: "https://i.pravatar.cc/100?img=11",
        alt: "Illustrative portrait of a man",
      },
      {
        name: "Fatou S.",
        country: "🇸🇳 Senegal",
        service: "Stay organization",
        text: "The team helped me understand the different steps and organize my trip to Tunisia.",
        image: "https://i.pravatar.cc/100?img=48",
        alt: "Illustrative portrait of a woman",
      },
      {
        name: "Ahmed K.",
        country: "🇸🇦 Saudi Arabia",
        service: "Care coordination",
        text: "I appreciated the communication and the support provided while preparing my stay.",
        image: "https://i.pravatar.cc/100?img=12",
        alt: "Illustrative portrait of a man",
      },
      {
        name: "Mariam A.",
        country: "🇦🇪 United Arab Emirates",
        service: "Assistance and coordination",
        text: "An attentive team that provided useful information to help organize the different stages of my stay.",
        image: "https://i.pravatar.cc/100?img=44",
        alt: "Illustrative portrait of a woman",
      },
      {
        name: "Sophie M.",
        country: "🇫🇷 France",
        service: "Stay organization",
        text: "I appreciated the clear information and the team's availability to answer my questions.",
        image: "https://i.pravatar.cc/100?img=45",
        alt: "Illustrative portrait of a woman",
      },
      {
        name: "Marc D.",
        country: "🇧🇪 Belgium",
        service: "Personalized assistance",
        text: "Communication was simple and reassuring. I received the information I needed to prepare my stay.",
        image: "https://i.pravatar.cc/100?img=13",
        alt: "Illustrative portrait of a man",
      },
    ],
  },
};

export default function Testimonials() {
  const { language } = useLanguage();
  const content = testimonials[language] || testimonials.fr;

  return (
    <section className="testimonials" id="avis">
      <div className="testimonials-container">

        <div className="testimonials-heading">
          <span className="testimonials-eyebrow">
            {content.eyebrow}
          </span>

          <h2>
            {content.title.split(" ").slice(0, -1).join(" ")}
            {" "}
            <span>
              {content.title.split(" ").slice(-1)}
            </span>
          </h2>

          <p>{content.description}</p>
        </div>

        <div className="testimonials-grid">
          {content.reviews.map((review) => (
            <article
              className="testimonial-card"
              key={review.name}
            >
              <div className="testimonial-top">
                <div className="testimonial-avatar">
                  <img
                    src={review.image}
                    alt={review.alt}
                    width="56"
                    height="56"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      event.currentTarget.nextElementSibling.style.display =
                        "flex";
                    }}
                  />

                  <span
                    className="testimonial-avatar-fallback"
                    aria-hidden="true"
                  >
                    {review.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .replace(".", "")}
                  </span>
                </div>

                <div className="testimonial-author">
                  <h3 className="testimonial-name">
                    {review.name}
                  </h3>

                  <span className="testimonial-country">
                    {review.country}
                  </span>
                </div>

                <span
                  className="testimonial-quote"
                  aria-hidden="true"
                >
                  “
                </span>
              </div>

              <div
                className="testimonial-stars"
                aria-label="5 étoiles"
              >
                ★★★★★
              </div>

              <p className="testimonial-text">
                {review.text}
              </p>

              <div className="testimonial-footer">
                <span className="testimonial-service">
                  {review.service}
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
