
"use client";

import { useLanguage } from "../contexts/LanguageContext";
import "./css/Testimonials.css";

const testimonials = {
  fr: {
    eyebrow: "TÉMOIGNAGES",
    title: "Ils nous ont fait confiance",
    description:
      "Découvrez les témoignages de patients accompagnés dans leur parcours de soins en Tunisie.",
    reviews: [
      {
        name: "Sophie M.",
        country: "🇫🇷 France",
        service: "Accompagnement médical",
        text: "Une équipe à l’écoute qui m’a accompagnée dans l’organisation de mon séjour médical en Tunisie.",
        image: "https://i.pravatar.cc/100?img=47",
        alt: "Portrait de Sophie",
      },
      {
        name: "Marc D.",
        country: "🇧🇪 Belgique",
        service: "Organisation du séjour",
        text: "Les différentes étapes de mon séjour ont été bien organisées. J’ai apprécié la disponibilité de l’équipe.",
        image: "https://i.pravatar.cc/100?img=12",
        alt: "Portrait de Marc",
      },
      {
        name: "Laura B.",
        country: "🇨🇭 Suisse",
        service: "Coordination du parcours",
        text: "J’ai bénéficié d’informations claires et d’un accompagnement rassurant avant et pendant mon séjour.",
        image: "https://i.pravatar.cc/100?img=44",
        alt: "Portrait de Laura",
      },
    ],
  },

  en: {
    eyebrow: "TESTIMONIALS",
    title: "They trusted us",
    description:
      "Discover the experiences of patients supported throughout their healthcare journey in Tunisia.",
    reviews: [
    
{
  name: "Ahmed K.",
  country: "🇸🇦 Saudi Arabia",
  service: "Medical assistance",
  text: "I appreciated the team's support and the organization of my medical stay in Tunisia.",
  image: "https://i.pravatar.cc/100?img=11",
  alt: "Illustrative portrait of a man",
},

      {
        name: "Marc D.",
        country: "🇧🇪 Belgium",
        service: "Stay organization",
        text: "The different stages of my stay were well organized. I appreciated the team's availability.",
        image: "https://i.pravatar.cc/100?img=12",
        alt: "Portrait of Marc",
      },
      {
        name: "Laura B.",
        country: "🇨🇭 Switzerland",
        service: "Care coordination",
        text: "I received clear information and reassuring support before and during my stay.",
        image: "https://i.pravatar.cc/100?img=44",
        alt: "Portrait of Laura",
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
  Ils nous ont fait
  <span> confiance.</span>
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
