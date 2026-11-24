
"use client";

import { useLanguage } from "../contexts/LanguageContext";
import "./css/Testimonials.css";

const testimonials = {
  fr: {
    eyebrow: "TÉMOIGNAGES",
    title: "Ils nous ont fait",
    accent: "confiance",
    description:
      "Découvrez les expériences de patients accompagnés dans l'organisation de leur parcours de soins en Tunisie.",
    starsLabel: "5 étoiles",
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
    title: "They trusted",
    accent: "us",
    description:
      "Discover the experiences of patients supported throughout the organization of their healthcare journey in Tunisia.",
    starsLabel: "5 stars",
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
        image: "/images/profil-senegal.png",
        alt: "Portrait of a Senegalese woman",
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

  ar: {
    eyebrow: "آراء وتجارب المرضى",
    title: "لقد وضعوا",
    accent: "ثقتهم بنا",
    description:
      "اكتشفوا تجارب المرضى الذين رافقناهم في تنظيم رحلة علاجهم وإقامتهم في تونس.",
    starsLabel: "خمس نجوم",
    reviews: [
      {
        name: "Amine B.",
        country: "🇩🇿 الجزائر",
        service: "المرافقة الطبية",
        text: "أعجبتني سرعة استجابة الفريق والمعلومات التي قدموها لي للتحضير لإقامتي العلاجية في تونس.",
        image: "https://i.pravatar.cc/100?img=11",
        alt: "صورة توضيحية لرجل",
      },
      {
        name: "Fatou S.",
        country: "🇸🇳 السنغال",
        service: "تنظيم الإقامة",
        text: "ساعدني الفريق على فهم مختلف المراحل بشكل أفضل وتنظيم رحلتي إلى تونس.",
        image: "/images/profil-senegal.png",
        alt: "صورة امرأة سنغالية",
      },
      {
        name: "Ahmed K.",
        country: "🇸🇦 المملكة العربية السعودية",
        service: "تنسيق الرحلة العلاجية",
        text: "أعجبتني جودة التواصل والمرافقة التي قدمها الفريق خلال فترة التحضير لإقامتي.",
        image: "https://i.pravatar.cc/100?img=12",
        alt: "صورة توضيحية لرجل",
      },
      {
        name: "Mariam A.",
        country: "🇦🇪 الإمارات العربية المتحدة",
        service: "المساعدة والتنسيق",
        text: "فريق مهتم قدم لي معلومات مفيدة لتنظيم مختلف مراحل إقامتي في تونس.",
        image: "https://i.pravatar.cc/100?img=44",
        alt: "صورة توضيحية لامرأة",
      },
      {
        name: "Sophie M.",
        country: "🇫🇷 فرنسا",
        service: "تنظيم الإقامة",
        text: "أعجبتني وضوح المعلومات واستعداد الفريق للإجابة عن جميع استفساراتي.",
        image: "https://i.pravatar.cc/100?img=45",
        alt: "صورة توضيحية لامرأة",
      },
      {
        name: "Marc D.",
        country: "🇧🇪 بلجيكا",
        service: "المرافقة الشخصية",
        text: "كان التواصل سهلاً ومطمئناً، وتمكنت من الحصول على المعلومات اللازمة للتحضير لإقامتي.",
        image: "https://i.pravatar.cc/100?img=13",
        alt: "صورة توضيحية لرجل",
      },
    ],
  },

it: {
  eyebrow: "TESTIMONIANZE",
  title: "Si sono affidati a noi",
  accent: "con fiducia",
  description:
    "Scoprite le esperienze dei pazienti che abbiamo accompagnato nell'organizzazione del loro percorso di cure in Tunisia.",
  starsLabel: "5 stelle",
  reviews: [
    {
      name: "Amine B.",
      country: "🇩🇿 Algeria",
      service: "Assistenza medica",
      text: "Ho apprezzato la disponibilità del team e le informazioni ricevute per preparare il mio soggiorno medico in Tunisia.",
      image: "https://i.pravatar.cc/100?img=11",
      alt: "Ritratto illustrativo di un uomo",
    },
    {
      name: "Fatou S.",
      country: "🇸🇳 Senegal",
      service: "Organizzazione del soggiorno",
      text: "Il team mi ha aiutata a comprendere meglio le diverse fasi e a organizzare il mio viaggio in Tunisia.",
      image: "/images/profil-senegal.png",
      alt: "Ritratto di una donna senegalese",
    },
    {
      name: "Ahmed K.",
      country: "🇸🇦 Arabia Saudita",
      service: "Coordinamento del percorso",
      text: "Ho apprezzato la qualità della comunicazione e l'assistenza offerta durante tutta la preparazione del mio soggiorno.",
      image: "https://i.pravatar.cc/100?img=12",
      alt: "Ritratto illustrativo di un uomo",
    },
    {
      name: "Mariam A.",
      country: "🇦🇪 Emirati Arabi Uniti",
      service: "Assistenza e coordinamento",
      text: "Un team attento che mi ha fornito informazioni utili per organizzare le diverse fasi del mio soggiorno.",
      image: "https://i.pravatar.cc/100?img=44",
      alt: "Ritratto illustrativo di una donna",
    },
    {
      name: "Sophie M.",
      country: "🇫🇷 Francia",
      service: "Organizzazione del soggiorno",
      text: "Ho apprezzato la chiarezza delle informazioni e la disponibilità del team nel rispondere alle mie domande.",
      image: "https://i.pravatar.cc/100?img=45",
      alt: "Ritratto illustrativo di una donna",
    },
    {
      name: "Marc D.",
      country: "🇧🇪 Belgio",
      service: "Assistenza personalizzata",
      text: "La comunicazione è stata semplice e rassicurante. Ho potuto ottenere tutte le informazioni necessarie per preparare il mio soggiorno.",
      image: "https://i.pravatar.cc/100?img=13",
      alt: "Ritratto illustrativo di un uomo",
    },
  ],
},

de: {
  eyebrow: "ERFAHRUNGSBERICHTE",
  title: "Sie haben uns",
  accent: "ihr Vertrauen geschenkt",
  description:
    "Entdecken Sie die Erfahrungen von Patienten, die wir bei der Organisation ihres medizinischen Aufenthalts in Tunesien begleitet haben.",
  starsLabel: "5 Sterne",
  reviews: [
    {
      name: "Amine B.",
      country: "🇩🇿 Algerien",
      service: "Medizinische Betreuung",
      text: "Ich habe die Verfügbarkeit des Teams und die Informationen, die ich zur Vorbereitung meines medizinischen Aufenthalts in Tunesien erhalten habe, sehr geschätzt.",
      image: "https://i.pravatar.cc/100?img=11",
      alt: "Symbolisches Porträt eines Mannes",
    },
    {
      name: "Fatou S.",
      country: "🇸🇳 Senegal",
      service: "Organisation des Aufenthalts",
      text: "Das Team hat mir geholfen, die verschiedenen Schritte besser zu verstehen und meine Reise nach Tunesien zu organisieren.",
      image: "/images/profil-senegal.png",
      alt: "Porträt einer senegalesischen Frau",
    },
    {
      name: "Ahmed K.",
      country: "🇸🇦 Saudi-Arabien",
      service: "Koordination des Behandlungsablaufs",
      text: "Ich habe die Qualität der Kommunikation und die angebotene Unterstützung während der gesamten Vorbereitung meines Aufenthalts sehr geschätzt.",
      image: "https://i.pravatar.cc/100?img=12",
      alt: "Symbolisches Porträt eines Mannes",
    },
    {
      name: "Mariam A.",
      country: "🇦🇪 Vereinigte Arabische Emirate",
      service: "Betreuung und Koordination",
      text: "Ein aufmerksames Team, das mir hilfreiche Informationen zur Organisation der verschiedenen Schritte meines Aufenthalts gegeben hat.",
      image: "https://i.pravatar.cc/100?img=44",
      alt: "Symbolisches Porträt einer Frau",
    },
    {
      name: "Sophie M.",
      country: "🇫🇷 Frankreich",
      service: "Organisation des Aufenthalts",
      text: "Ich habe die klaren Informationen und die Hilfsbereitschaft des Teams bei der Beantwortung meiner Fragen sehr geschätzt.",
      image: "https://i.pravatar.cc/100?img=45",
      alt: "Symbolisches Porträt einer Frau",
    },
    {
      name: "Marc D.",
      country: "🇧🇪 Belgien",
      service: "Individuelle Betreuung",
      text: "Die Kommunikation war unkompliziert und beruhigend. Ich konnte alle notwendigen Informationen zur Vorbereitung meines Aufenthalts erhalten.",
      image: "https://i.pravatar.cc/100?img=13",
      alt: "Symbolisches Porträt eines Mannes",
    },
  ],
},

es: {
  eyebrow: "TESTIMONIOS",
  title: "Han depositado su",
  accent: "confianza en nosotros",
  description:
    "Descubre las experiencias de pacientes a quienes hemos acompañado en la organización de su proceso de atención médica en Túnez.",
  starsLabel: "5 estrellas",
  reviews: [
    {
      name: "Amine B.",
      country: "🇩🇿 Argelia",
      service: "Acompañamiento médico",
      text: "Me gustó la disponibilidad del equipo y la información que recibí para preparar mi estancia médica en Túnez.",
      image: "https://i.pravatar.cc/100?img=11",
      alt: "Retrato ilustrativo de un hombre",
    },
    {
      name: "Fatou S.",
      country: "🇸🇳 Senegal",
      service: "Organización de la estancia",
      text: "El equipo me ayudó a comprender mejor las diferentes etapas y a organizar mi viaje a Túnez.",
      image: "/images/profil-senegal.png",
      alt: "Retrato de una mujer senegalesa",
    },
    {
      name: "Ahmed K.",
      country: "🇸🇦 Arabia Saudí",
      service: "Coordinación del proceso",
      text: "Valoré la calidad de la comunicación y el acompañamiento ofrecido durante toda la preparación de mi estancia.",
      image: "https://i.pravatar.cc/100?img=12",
      alt: "Retrato ilustrativo de un hombre",
    },
    {
      name: "Mariam A.",
      country: "🇦🇪 Emiratos Árabes Unidos",
      service: "Asistencia y coordinación",
      text: "Un equipo atento que me proporcionó información útil para organizar las diferentes etapas de mi estancia.",
      image: "https://i.pravatar.cc/100?img=44",
      alt: "Retrato ilustrativo de una mujer",
    },
    {
      name: "Sophie M.",
      country: "🇫🇷 Francia",
      service: "Organización de la estancia",
      text: "Valoré la claridad de la información y la disponibilidad del equipo para responder a mis preguntas.",
      image: "https://i.pravatar.cc/100?img=45",
      alt: "Retrato ilustrativo de una mujer",
    },
    {
      name: "Marc D.",
      country: "🇧🇪 Bélgica",
      service: "Acompañamiento personalizado",
      text: "La comunicación fue sencilla y tranquilizadora. Pude obtener toda la información necesaria para preparar mi estancia.",
      image: "https://i.pravatar.cc/100?img=13",
      alt: "Retrato ilustrativo de un hombre",
    },
  ],
},


};

export default function Testimonials() {
  const { language, dir } = useLanguage();

  const content = testimonials[language] || testimonials.fr;

  return (
    <section
      className="testimonials"
      id="avis"
      dir={dir}
    >
      <div className="testimonials-container">

        {/* En-tête */}
        <div className="testimonials-heading">
          <span className="testimonials-eyebrow">
            {content.eyebrow}
          </span>

          <h2>
            {content.title}{" "}
            <span>{content.accent}</span>
          </h2>

          <p>{content.description}</p>
        </div>

        {/* Cartes témoignages */}
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
                aria-label={content.starsLabel}
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
