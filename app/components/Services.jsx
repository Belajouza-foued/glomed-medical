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


import "./css/Services.css";
import { useLanguage } from "../contexts/LanguageContext";

const translations = {
  fr: {
    eyebrow: "NOS DOMAINES D'ACCOMPAGNEMENT",
    title: "Gestion des services",
    accent: "médicaux.",
    description:
      "Glomed Group vous accompagne dans l'organisation de votre séjour médical en Tunisie, de votre première demande aux aspects pratiques de votre venue.",

    services: [
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
    ],

    note:
      "Les soins, les indications médicales, les traitements et les résultats attendus sont évalués par les professionnels de santé compétents. Toute intervention dépend de leur avis et de votre situation individuelle.",

    processEyebrow: "UN PARCOURS EN 6 ÉTAPES",
    processTitle: "De votre demande",
    processAccent: "à votre séjour en Tunisie.",
    processDescription:
      "Chaque étape est préparée avec vous pour rendre l'organisation de votre séjour plus claire et plus simple.",

    steps: [
      {
        icon: "bi bi-chat-dots",
        title: "Votre demande",
        text: "Vous nous présentez votre projet, vos attentes et les soins que vous souhaitez envisager.",
      },
      {
        icon: "bi bi-file-earmark-medical",
        title: "Orientation médicale",
        text: "Avec votre accord, nous facilitons la transmission des informations nécessaires aux professionnels de santé concernés. Le médecin évalue votre situation.",
      },
      {
        icon: "bi bi-calendar-check",
        title: "Organisation du séjour",
        text: "Nous vous aidons à coordonner les rendez-vous, les dates envisagées et les aspects pratiques de votre séjour.",
      },
      {
        icon: "bi bi-airplane",
        title: "Accueil et transfert",
        text: "Selon la formule convenue, nous organisons votre accueil et vos transferts entre l'aéroport, l'hébergement et les lieux de rendez-vous.",
      },
      {
        icon: "bi bi-building",
        title: "Hébergement",
        text: "Nous vous accompagnons dans la recherche ou la réservation d'un hébergement adapté à la durée prévue de votre séjour.",
      },
      {
        icon: "bi bi-heart",
        title: "Accompagnement sur place",
        text: "Nous facilitons la coordination pratique pendant votre séjour. Les décisions et les soins médicaux restent sous la responsabilité des professionnels de santé.",
      },
    ],

    ctaEyebrow: "VOTRE PROJET COMMENCE ICI",
    ctaTitle: "Vous envisagez un séjour médical en Tunisie ?",
    ctaText:
      "Présentez-nous votre demande pour discuter des possibilités d'accompagnement et des prochaines étapes.",
    ctaButton: "Organiser un séjour",
  },

  en: {
    eyebrow: "OUR AREAS OF SUPPORT",
    title: "Medical service",
    accent: "management.",
    description:
      "Glomed Group supports you in organizing your medical stay in Tunisia, from your initial request to the practical arrangements for your visit.",

    services: [
      {
        icon: "bi bi-heart-pulse",
        title: "Cosmetic Surgery",
        text: "Organization and coordination of your project with partner healthcare professionals, according to your needs.",
      },
      {
        icon: "bi bi-person-hearts",
        title: "Aesthetic Medicine",
        text: "Support with your aesthetic treatment requests and guidance towards the relevant healthcare professionals.",
      },
      {
        icon: "bi bi-scissors",
        title: "Hair Transplant",
        text: "Assistance with organizing your stay and contacting specialized healthcare professionals.",
      },
      {
        icon: "bi bi-emoji-smile",
        title: "Dental Implants",
        text: "Coordination of your dental care request and practical organization of your stay.",
      },
      {
        icon: "bi bi-activity",
        title: "Other Medical Specialties",
        text: "Assessment of your request and guidance towards suitable healthcare professionals or facilities, depending on availability.",
      },
      {
        icon: "bi bi-clipboard2-pulse",
        title: "Follow-up and Appointments",
        text: "Assistance with coordinating appointments and gathering the information needed to prepare your stay.",
      },
    ],

    note:
      "Medical care, indications, treatments and expected outcomes are assessed by qualified healthcare professionals. Any procedure depends on their opinion and your individual situation.",

    processEyebrow: "YOUR JOURNEY IN 6 STEPS",
    processTitle: "From your initial request",
    processAccent: "to your stay in Tunisia.",
    processDescription:
      "Each step is planned with you to make organizing your stay clearer and easier.",

    steps: [
      {
        icon: "bi bi-chat-dots",
        title: "Your Request",
        text: "Tell us about your project, your expectations and the treatments you are considering.",
      },
      {
        icon: "bi bi-file-earmark-medical",
        title: "Medical Guidance",
        text: "With your consent, we facilitate the transfer of the necessary information to the relevant healthcare professionals. The doctor assesses your situation.",
      },
      {
        icon: "bi bi-calendar-check",
        title: "Stay Organization",
        text: "We help coordinate appointments, proposed dates and the practical arrangements for your stay.",
      },
      {
        icon: "bi bi-airplane",
        title: "Welcome and Transfers",
        text: "According to the agreed package, we arrange your welcome and transfers between the airport, accommodation and appointment locations.",
      },
      {
        icon: "bi bi-building",
        title: "Accommodation",
        text: "We assist you in finding or booking accommodation suited to the planned duration of your stay.",
      },
      {
        icon: "bi bi-heart",
        title: "On-site Assistance",
        text: "We facilitate practical coordination throughout your stay. Medical decisions and treatments remain the responsibility of healthcare professionals.",
      },
    ],

    ctaEyebrow: "YOUR JOURNEY STARTS HERE",
    ctaTitle: "Planning a medical stay in Tunisia?",
    ctaText:
      "Tell us about your request so we can discuss the available support options and the next steps.",
    ctaButton: "Plan Your Stay",
  },

  ar: {
    eyebrow: "مجالات خدماتنا ومرافقتنا",
    title: "إدارة الخدمات",
    accent: "الطبية.",
    description:
      "ترافقكم مجموعة Glomed في تنظيم إقامتكم الطبية في تونس، بداية من طلبكم الأول وحتى جميع الترتيبات العملية لرحلتكم.",

    services: [
      {
        icon: "bi bi-heart-pulse",
        title: "جراحة التجميل",
        text: "تنظيم وتنسيق مشروعكم بالتعاون مع مهنيي الصحة الشركاء، وفقاً لاحتياجاتكم.",
      },
      {
        icon: "bi bi-person-hearts",
        title: "الطب التجميلي",
        text: "مرافقتكم في طلبات العلاجات التجميلية وتوجيهكم نحو المختصين المعنيين.",
      },
      {
        icon: "bi bi-scissors",
        title: "زراعة الشعر",
        text: "المساعدة في تنظيم إقامتكم والتواصل مع المختصين في زراعة الشعر.",
      },
      {
        icon: "bi bi-emoji-smile",
        title: "زراعة الأسنان",
        text: "تنسيق طلبات العلاج المتعلقة بالأسنان وتنظيم الجوانب العملية لإقامتكم.",
      },
      {
        icon: "bi bi-activity",
        title: "تخصصات طبية أخرى",
        text: "دراسة طلبكم وتوجيهكم نحو المختصين أو المؤسسات الصحية المناسبة حسب الإمكانيات المتاحة.",
      },
      {
        icon: "bi bi-clipboard2-pulse",
        title: "المتابعة والمواعيد",
        text: "المساعدة في تنسيق المواعيد وجمع المعلومات اللازمة للتحضير لإقامتكم.",
      },
    ],

    note:
      "يتم تقييم العلاجات والمؤشرات الطبية والنتائج المتوقعة من قبل مهنيي الصحة المختصين. ويعتمد أي تدخل طبي على رأيهم وعلى الحالة الفردية لكل مريض.",

    processEyebrow: "رحلتكم في 6 مراحل",
    processTitle: "من طلبكم الأول",
    processAccent: "إلى إقامتكم في تونس.",
    processDescription:
      "نقوم بالتحضير لكل مرحلة معكم حتى تكون ترتيبات إقامتكم أكثر وضوحاً وسهولة.",

    steps: [
      {
        icon: "bi bi-chat-dots",
        title: "طلبكم الأول",
        text: "تقدمون لنا مشروعكم وتوقعاتكم والعلاجات التي ترغبون في الاستفسار عنها.",
      },
      {
        icon: "bi bi-file-earmark-medical",
        title: "التوجيه الطبي",
        text: "بموافقتكم، نسهل إرسال المعلومات اللازمة إلى مهنيي الصحة المعنيين، ويتولى الطبيب تقييم حالتكم.",
      },
      {
        icon: "bi bi-calendar-check",
        title: "تنظيم الإقامة",
        text: "نساعدكم في تنسيق المواعيد والتواريخ المقترحة والجوانب العملية لإقامتكم.",
      },
      {
        icon: "bi bi-airplane",
        title: "الاستقبال والنقل",
        text: "حسب الاتفاق، ننظم استقبالكم والتنقل بين المطار ومكان الإقامة ومواقع المواعيد الطبية.",
      },
      {
        icon: "bi bi-building",
        title: "الإقامة والسكن",
        text: "نرافقكم في البحث عن مكان إقامة مناسب أو حجزه حسب المدة المحددة لرحلتكم.",
      },
      {
        icon: "bi bi-heart",
        title: "المرافقة في تونس",
        text: "نسهل التنسيق العملي طوال فترة إقامتكم. وتبقى القرارات والعلاجات الطبية من مسؤولية مهنيي الصحة.",
      },
    ],

    ctaEyebrow: "مشروعكم يبدأ من هنا",
    ctaTitle: "هل تخططون لإقامة طبية في تونس؟",
    ctaText:
      "أرسلوا لنا طلبكم لمناقشة إمكانيات المرافقة والخطوات القادمة.",
    ctaButton: "تنظيم الإقامة",
  },
};

export default function Services() {
  const { language } = useLanguage();

  const lang = translations[language] ? language : "fr";
  const t = translations[lang];
  const isArabic = lang === "ar";

  return (
    <div dir={isArabic ? "rtl" : "ltr"} lang={lang}>
      <section id="services" className="services">
        <div className="container">
          <div className="services__heading">
            <span className="services__eyebrow">
              {t.eyebrow}
            </span>

            <h2 className="section-title">
              {t.title}
              <span> {t.accent}</span>
            </h2>

            <p className="section-lead">
              {t.description}
            </p>
          </div>

          <div className="row services__list">
            {t.services.map((service) => (
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
            <p>{t.note}</p>
          </div>
        </div>
      </section>

      <section id="etapes" className="medical-process">
        <div className="container">
          <div className="medical-process__heading">
            <span className="services__eyebrow">
              {t.processEyebrow}
            </span>

            <h2 className="section-title">
              {t.processTitle}
              <span> {t.processAccent}</span>
            </h2>

            <p className="section-lead">
              {t.processDescription}
            </p>
          </div>

          <div className="medical-process__list">
            {t.steps.map((step, index) => (
              <article
                className="medical-process__item"
                key={index}
              >
                <div className="medical-process__number">
                  {String(index + 1).padStart(2, "0")}
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
                {t.ctaEyebrow}
              </span>

              <h3>{t.ctaTitle}</h3>
              <p>{t.ctaText}</p>
            </div>

            <a href="/contact" className="glomed-footer-cta">
              {t.ctaButton}
              <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}