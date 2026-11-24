
"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

const translations = {
  fr: {
    // TOPBAR
    topbarService: "Gestion des services médicaux",
    topbarLocation: "Tunisie",
    topbarEmail: "Envoyer un e-mail",
    topbarPhone: "Appeler Glomed Group",

    // NAVBAR
    navHome: "Accueil",
    navServices: "Services",
    navSurgery: "Spécialités",
    navAbout: "À propos",
    navContact: "Contact",
    navCTA: "Organiser un séjour",

    navOrthopedics: "Orthopédie",
    navCardiology: "Cardiologie",
    navPneumology: "Pneumologie",
    navUrology: "Urologie",
    navPediatrics: "Pédiatrie",
    navGastro: "Gastro-entérologie",
    navOphthalmology: "Ophtalmologie",
    navGynecology: "Gynécologie",
/*new dis*/
navOncology: "Oncologie",
navHematology: "Hématologie",
navENT: "ORL",
navGeneralSurgery: "Chirurgie générale",
  navVascularSurgery: "Chirurgie vasculaire",
    navOpen: "Ouvrir le menu",
    navClose: "Fermer le menu",
    navLabel: "Navigation principale",
    /*hero*/
   hero1Alt: "Professionnels de santé dans un environnement médical",
hero1Eyebrow: "VOTRE PARTENAIRE SANTÉ EN TUNISIE",
hero1Title: "Glomed Group,",
hero1Accent: "accompagné à chaque étape.",
hero1Text: "Glomed Group vous accompagne dans l'organisation de votre séjour médical en Tunisie : coordination, hébergement, transferts et orientation vers des professionnels partenaires.",
hero1Primary: "Parcours de soins",
hero1Secondary: "Découvrir nos services",

hero2Alt: "Environnement de soins esthétiques",
hero2Eyebrow: "ESTHÉTIQUE ET BIEN-ÊTRE",
hero2Title: "Prenez soin de vous,",
hero2Accent: "en toute sérénité.",
hero2Text: "Nous vous aidons à organiser votre projet de soins esthétiques et à coordonner les différentes étapes de votre séjour avec les professionnels concernés.",
hero2Primary: "Découvrir nos services",
hero2Secondary: "Nous contacter",

hero3Alt: "Équipe médicale dans un établissement de santé",
hero3Eyebrow: "VOTRE SÉJOUR MÉDICAL ORGANISÉ",
hero3Title: "De votre arrivée",
hero3Accent: "à votre accompagnement.",
hero3Text: "Hébergement, transferts et coordination : nous vous aidons à préparer votre séjour en Tunisie selon votre demande et vos besoins.",
hero3Primary: "Organiser un séjour",
hero3Secondary: "Comment ça marche ?",

hero4Alt: "Équipe médicale dans un bloc opératoire moderne",
hero4Eyebrow: "CHIRURGIE ET SÉJOUR MÉDICAL EN TUNISIE",
hero4Title: "Votre chirurgie,",
hero4Accent: "un séjour organisé avec soin.",
hero4Text: "Glomed Group vous accompagne dans la préparation de votre séjour chirurgical en Tunisie : coordination des rendez-vous, organisation des transferts, hébergement et mise en relation avec des professionnels de santé partenaires.",
hero4Primary: "Organiser mon séjour",
hero4Secondary: "Découvrir nos services",

hero5Alt: "Environnement médical moderne et accompagnement des patients",
hero5Eyebrow: "GLOMED GROUP · VOTRE PARTENAIRE SANTÉ EN TUNISIE",
hero5Title: "Votre parcours de santé,",
hero5Accent: "un accompagnement à chaque étape.",
hero5Text: "Bilans médicaux, consultations spécialisées, chirurgie, radiologie et rééducation : Glomed Group vous accompagne également dans l'organisation de votre séjour en Tunisie, avec coordination, hébergement et transferts auprès de professionnels et établissements partenaires.",
hero5Primary: "Votre parcours de santé",
hero5Secondary: "Découvrir nos services",

heroTrustTitle: "Un accompagnement personnalisé",
heroTrustText: "De la préparation à l'organisation du séjour",
heroBottom1: "ACCOMPAGNEMENT",
heroBottom2: "COORDINATION",
heroBottom3: "SÉJOUR MÉDICAL",
heroLabel: "Présentation de Glomed Group",
heroDotsLabel: "Choisir une diapositive",
heroDotLabel: "Afficher la diapositive",
heroPrevious: "Diapositive précédente",
heroNext: "Diapositive suivante",
/*gallery*/
galleryEyebrow: "GLOMED GROUP · TUNISIE",
galleryTitle: "Des soins spécialisés,",
galleryAccent: "un accompagnement humain",
galleryDescription: "Découvrez nos spécialités médicales et bénéficiez d’un accompagnement personnalisé pour votre parcours de soins en Tunisie.",
galleryLabel: "Nos spécialités médicales",
galleryDiscover: "Découvrir la spécialité",

galleryUrology: "Urologie",
galleryPediatrics: "Pédiatrie",
galleryGastro: "Gastro-entérologie",
galleryPneumology: "Pneumologie",
galleryCardiology: "Cardiologie",
galleryOphthalmology: "Ophtalmologie",
galleryOrthopedics: "Orthopédie",
galleryGynecology: "Gynécologie",

galleryAltUrology: "Soins en urologie",
galleryAltPediatrics: "Soins en pédiatrie",
galleryAltGastro: "Soins en gastro-entérologie",
galleryAltPneumology: "Soins en pneumologie",
galleryAltCardiology: "Soins en cardiologie",
galleryAltOphthalmology: "Soins en ophtalmologie",
galleryAltOrthopedics: "Soins en orthopédie",
galleryAltGynecology: "Soins en gynécologie",
/*service*/
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
/*partner*/
// PARTNERSHIPS
partnersEyebrow: "NOTRE OUVERTURE INTERNATIONALE",
partnersTitle: "Un réseau international,",
partnersAccent: "une destination : la Tunisie.",
partnersDescription:
  "Depuis l'Afrique, les pays du Golfe et l'Europe, Glomed Group accompagne les patients dans l'organisation de leur parcours de soins en Tunisie, en facilitant la coordination avec les professionnels et établissements de santé partenaires.",
partnersRegionAfrica: "Afrique",
partnersRegionGulf: "Golfe",
partnersRegionEurope: "Europe",
partnersDestination: "Une destination : la Tunisie.",
partnersBottomText:
  "Un accompagnement pensé autour des besoins de chaque patient.",
partnersCTA: "Parlons de vos soins",
partnersFlag: "Drapeau",

// PAYS
countryAlgeria: "Algérie",
countryLibya: "Libye",
countryMauritania: "Mauritanie",
countryIvoryCoast: "Côte d'Ivoire",
countryBurkinaFaso: "Burkina Faso",
countryNiger: "Niger",
countryCameroon: "Cameroun",
countryGabon: "Gabon",
countrySaudiArabia: "Arabie saoudite",
countryUAE: "Émirats arabes unis",
countryQatar: "Qatar",
countryKuwait: "Koweït",
countryBahrain: "Bahreïn",
countryOman: "Oman",
countryFrance: "France",
countryItaly: "Italie",
countryGermany: "Allemagne",
/*about*/
// ABOUT SECTION
aboutLabel: "QUI SOMMES-NOUS ?",
aboutTitle: "La coordination au service de",
aboutAccent: "votre séjour médical.",
aboutDescription:
  "Glomed Group vous accompagne dans l’organisation des services liés à votre séjour médical en Tunisie, avec une approche personnalisée, claire et attentive à vos besoins.",

aboutImageAlt: "Professionnel de santé dans un environnement médical",
aboutBadgeTitle: "Un séjour mieux organisé",
aboutBadgeText: "Un accompagnement adapté à vos besoins.",

aboutEyebrow: "NOTRE IDENTITÉ ET NOTRE MISSION",
aboutHeading: "Votre partenaire pour organiser votre séjour médical en Tunisie.",
aboutIntro:
  "Glomed Group est une agence spécialisée dans la gestion et la coordination des services liés au séjour médical. Nous facilitons l’organisation de votre venue en Tunisie et vous accompagnons dans les aspects pratiques de votre séjour.",

aboutAccordion1Title: "Qui sommes-nous ?",
aboutAccordion1Text:
  "Glomed Group accompagne les personnes qui souhaitent organiser un séjour médical en Tunisie. Notre rôle est de faciliter la coordination entre les demandes des patients, les professionnels de santé concernés et les prestataires nécessaires à l’organisation du séjour.",

aboutAccordion2Title: "Notre mission",
aboutAccordion2Text:
  "Notre mission est de simplifier l’organisation de votre séjour en vous aidant à préparer les différentes étapes : prise de contact, coordination des rendez-vous, organisation des déplacements et recherche d’un hébergement adapté à vos besoins.",
aboutAccordion3Title: "Gestion des services liés au séjour médical",
aboutAccordion3Text:
  "Nous facilitons la coordination des services liés à votre soin et la mise en relation avec les professionnels ou établissements de santé concernés. L’évaluation de votre état de santé, le choix des traitements et les décisions médicales relèvent des professionnels de santé compétents.",
aboutAccordion4Title: "Nos valeurs et nos engagements",
aboutAccordion4Text:
  "Nous privilégions l’écoute, la clarté des informations, la disponibilité et un accompagnement adapté à chaque demande. Notre objectif est de faciliter l’organisation pratique de votre séjour, dans le respect de votre confidentialité et du rôle des professionnels de santé.",
aboutCTA: "Votre parcours de santé",
/*reeducation*/
rehabEyebrow: "RÉÉDUCATION ET RÉADAPTATION",
rehabTitle: "Bien récupérer",
rehabAccent: " après votre opération.",
rehabDescription: "Une bonne récupération fait partie du parcours de soins. Glomed Group coordonne pour vous la rééducation, la réadaptation et la convalescence, selon les recommandations de l’équipe médicale.",
rehabStep: "Étape",
rehabStep1Title: "Suivi post-opératoire",
rehabStep1Text: "Coordination des contrôles et des rendez-vous avec l’équipe médicale dans les jours qui suivent l’intervention.",
rehabStep2Title: "Rééducation fonctionnelle",
rehabStep2Text: "Organisation des séances de kinésithérapie prescrites par le médecin, pour retrouver progressivement mobilité et force.",
rehabStep3Title: "Réadaptation",
rehabStep3Text: "Accompagnement pour reprendre pas à pas les gestes du quotidien, selon le programme défini par les professionnels de santé.",
rehabStep4Title: "Convalescence et retour",
rehabStep4Text: "Hébergement adapté pendant la récupération, puis préparation du retour et des rendez-vous de suivi.",
rehabImageAlt: "Séance de rééducation après une opération",
rehabBadgeTitle: "Une récupération encadrée",
rehabBadgeText: "Selon le programme de votre médecin",
rehabGoal1: "Soulager la douleur",
rehabGoal2: "Retrouver la mobilité",
rehabGoal3: "Reprendre ses activités",
rehabDisclaimer: "Le programme de rééducation, sa durée et ses exercices sont définis par les professionnels de santé, après évaluation individuelle. Glomed Group coordonne l’organisation pratique.",
rehabCTA: "Organiser ma récupération",
/*testimonial*/
   eyebrow: "TÉMOIGNAGES",
    title: "Ils nous ont fait",
    accent: "confiance",
    description:
      "Découvrez les expériences de patients accompagnés dans l'organisation de leur parcours de soins en Tunisie.",
    starsLabel: "5 étoiles",
    
        name: "Amine B.",
        country: "🇩🇿 Algérie",
        service: "Accompagnement médical",
        text: "J'ai apprécié la disponibilité de l'équipe et les informations reçues pour préparer mon séjour médical en Tunisie.",
        image: "https://i.pravatar.cc/100?img=11",
        alt: "Portrait illustratif d'un homme",
      
        name: "Fatou S.",
        country: "🇸🇳 Sénégal",
        service: "Organisation du séjour",
        text: "L'équipe m'a aidée à mieux comprendre les différentes étapes et à organiser mon déplacement en Tunisie.",
        image: "/images/profil-senegal.png",
        alt: "Portrait d'une femme sénégalaise",
      
        name: "Ahmed K.",
        country: "🇸🇦 Arabie saoudite",
        service: "Coordination du parcours",
        text: "J'ai apprécié la qualité des échanges et l'accompagnement proposé tout au long de la préparation de mon séjour.",
        image: "https://i.pravatar.cc/100?img=12",
        alt: "Portrait illustratif d'un homme",
     
        name: "Mariam A.",
        country: "🇦🇪 Émirats arabes unis",
        service: "Assistance et coordination",
        text: "Une équipe attentive qui m'a apporté des informations utiles pour organiser les différentes étapes de mon séjour.",
        image: "https://i.pravatar.cc/100?img=44",
        alt: "Portrait illustratif d'une femme",
      
        name: "Sophie M.",
        country: "🇫🇷 France",
        service: "Organisation du séjour",
        text: "J'ai apprécié la clarté des informations et la disponibilité de l'équipe pour répondre à mes questions.",
        image: "https://i.pravatar.cc/100?img=45",
        alt: "Portrait illustratif d'une femme",
    
        name: "Marc D.",
        country: "🇧🇪 Belgique",
        service: "Accompagnement personnalisé",
        text: "Les échanges ont été simples et rassurants. J'ai pu obtenir les informations nécessaires pour préparer mon séjour.",
        image: "https://i.pravatar.cc/100?img=13",
        alt: "Portrait illustratif d'un homme",
  },

  en: {
    // TOPBAR
    topbarService: "Medical Services Management",
    topbarLocation: "Tunisia",
    topbarEmail: "Send an email",
    topbarPhone: "Call Glomed Group",

    // NAVBAR
    navHome: "Home",
    navServices: "Services",
    navSurgery: "Specialties",
    navAbout: "About us",
    navContact: "Contact",
    navCTA: "Organize your stay",

    navOrthopedics: "Orthopedics",
    navCardiology: "Cardiology",
    navPneumology: "Pulmonology",
    navUrology: "Urology",
    navPediatrics: "Pediatrics",
    navGastro: "Gastroenterology",
    navOphthalmology: "Ophthalmology",
    navGynecology: "Gynecology",
/*new dis*/
   navOncology: "Oncology",
navHematology: "Hematology",
navENT: "ENT",
navGeneralSurgery: "General Surgery",
navVascularSurgery: "Vascular Surgery",
navOpen: "Open menu",
    navClose: "Close menu",
    navLabel: "Main navigation",
    /*hero*/
    hero1Alt: "Healthcare professionals in a medical environment",
hero1Eyebrow: "YOUR HEALTHCARE PARTNER IN TUNISIA",
hero1Title: "Glomed Group,",
hero1Accent: "by your side at every step.",
hero1Text: "Glomed Group supports you in organizing your medical stay in Tunisia, including coordination, accommodation, transfers and referrals to partner healthcare professionals.",
hero1Primary: "Your care journey",
hero1Secondary: "Discover our services",

hero2Alt: "Aesthetic care environment",
hero2Eyebrow: "AESTHETICS AND WELL-BEING",
hero2Title: "Take care of yourself,",
hero2Accent: "with complete peace of mind.",
hero2Text: "We help you organize your aesthetic care project and coordinate the different stages of your stay with the professionals involved.",
hero2Primary: "Discover our services",
hero2Secondary: "Contact us",

hero3Alt: "Medical team in a healthcare facility",
hero3Eyebrow: "YOUR MEDICAL STAY, ORGANIZED",
hero3Title: "From your arrival",
hero3Accent: "to your ongoing support.",
hero3Text: "Accommodation, transfers and coordination: we help you prepare your stay in Tunisia according to your request and needs.",
hero3Primary: "Organize your stay",
hero3Secondary: "How does it work?",

hero4Alt: "Medical team in a modern operating room",
hero4Eyebrow: "SURGERY AND MEDICAL STAYS IN TUNISIA",
hero4Title: "Your surgery,",
hero4Accent: "a carefully organized stay.",
hero4Text: "Glomed Group supports you in preparing your surgical stay in Tunisia: appointment coordination, transfers, accommodation and connections with partner healthcare professionals.",
hero4Primary: "Organize my stay",
hero4Secondary: "Discover our services",

hero5Alt: "Modern medical environment and patient support",
hero5Eyebrow: "GLOMED GROUP · YOUR HEALTHCARE PARTNER IN TUNISIA",
hero5Title: "Your healthcare journey,",
hero5Accent: "supported at every step.",
hero5Text: "Medical check-ups, specialist consultations, surgery, radiology and rehabilitation: Glomed Group also supports you in organizing your stay in Tunisia, including coordination, accommodation and transfers with partner professionals and healthcare facilities.",
hero5Primary: "Your healthcare journey",
hero5Secondary: "Discover our services",

heroTrustTitle: "Personalized support",
heroTrustText: "From preparation to the organization of your stay",
heroBottom1: "SUPPORT",
heroBottom2: "COORDINATION",
heroBottom3: "MEDICAL STAY",
heroLabel: "About Glomed Group",
heroDotsLabel: "Choose a slide",
heroDotLabel: "Show slide",
heroPrevious: "Previous slide",
heroNext: "Next slide",
/*gallery*/
galleryEyebrow: "GLOMED GROUP · TUNISIA",
galleryTitle: "Specialized healthcare,",
galleryAccent: "human-centered support",
galleryDescription: "Discover our medical specialties and benefit from personalized support throughout your healthcare journey in Tunisia.",
galleryLabel: "Our medical specialties",
galleryDiscover: "Discover the specialty",

galleryUrology: "Urology",
galleryPediatrics: "Pediatrics",
galleryGastro: "Gastroenterology",
galleryPneumology: "Pulmonology",
galleryCardiology: "Cardiology",
galleryOphthalmology: "Ophthalmology",
galleryOrthopedics: "Orthopedics",
galleryGynecology: "Gynecology",

galleryAltUrology: "Urological care",
galleryAltPediatrics: "Pediatric care",
galleryAltGastro: "Gastroenterology care",
galleryAltPneumology: "Pulmonary care",
galleryAltCardiology: "Cardiology care",
galleryAltOphthalmology: "Eye care",
galleryAltOrthopedics: "Orthopedic care",
galleryAltGynecology: "Gynecological care",
/*partner*/
// PARTNERSHIPS
partnersEyebrow: "OUR INTERNATIONAL REACH",
partnersTitle: "An international network,",
partnersAccent: "one destination: Tunisia.",
partnersDescription:
  "From Africa, the Gulf countries and Europe, Glomed Group supports patients in organizing their healthcare journey in Tunisia, facilitating coordination with partner healthcare professionals and medical institutions.",
partnersRegionAfrica: "Africa",
partnersRegionGulf: "Gulf",
partnersRegionEurope: "Europe",
partnersDestination: "One destination: Tunisia.",
partnersBottomText:
  "Personalized support designed around each patient's needs.",
partnersCTA: "Let's discuss your healthcare needs",
partnersFlag: "Flag",

// COUNTRIES
countryAlgeria: "Algeria",
countryLibya: "Libya",
countryMauritania: "Mauritania",
countryIvoryCoast: "Ivory Coast",
countryBurkinaFaso: "Burkina Faso",
countryNiger: "Niger",
countryCameroon: "Cameroon",
countryGabon: "Gabon",
countrySaudiArabia: "Saudi Arabia",
countryUAE: "United Arab Emirates",
countryQatar: "Qatar",
countryKuwait: "Kuwait",
countryBahrain: "Bahrain",
countryOman: "Oman",
countryFrance: "France",
countryItaly: "Italy",
countryGermany: "Germany",
/*about*/
// ABOUT SECTION
aboutLabel: "WHO ARE WE?",
aboutTitle: "Coordination dedicated to",
aboutAccent: "your medical stay.",
aboutDescription:
  "Glomed Group supports you in organizing the services related to your medical stay in Tunisia, with a personalized, clear approach tailored to your needs.",

aboutImageAlt: "Healthcare professional in a medical environment",
aboutBadgeTitle: "A better-organized stay",
aboutBadgeText: "Support tailored to your needs.",

aboutEyebrow: "OUR IDENTITY AND OUR MISSION",
aboutHeading: "Your partner in organizing your medical stay in Tunisia.",
aboutIntro:
  "Glomed Group is an agency specializing in the management and coordination of services related to medical stays. We make your arrival in Tunisia easier and support you with the practical aspects of your stay.",

aboutAccordion1Title: "Who are we?",
aboutAccordion1Text:
  "Glomed Group supports people who wish to organize a medical stay in Tunisia. Our role is to facilitate coordination between patients' requests, the relevant healthcare professionals and the service providers needed to organize the stay.",

aboutAccordion2Title: "Our mission",
aboutAccordion2Text:
  "Our mission is to simplify the organization of your stay by helping you prepare each step: initial contact, appointment coordination, travel arrangements and finding accommodation suited to your needs.",

aboutAccordion3Title: "Management of medical stay services",
aboutAccordion3Text:
  "We facilitate the coordination of services related to your care and help connect you with the relevant healthcare professionals and institutions. Assessments of your health, treatment choices and medical decisions remain the responsibility of qualified healthcare professionals.",

aboutAccordion4Title: "Our values and commitments",
aboutAccordion4Text:
  "We prioritize attentive listening, clear information, availability and support tailored to every request. Our goal is to make the practical organization of your stay easier while respecting your privacy and the role of healthcare professionals.",

aboutCTA: "Your healthcare journey",
/*reeducation*/
rehabEyebrow: "REHABILITATION AND RECOVERY",
rehabTitle: "Recover well",
rehabAccent: " after your surgery.",
rehabDescription: "A good recovery is an essential part of your care journey. Glomed Group coordinates rehabilitation, recovery support and convalescence according to the medical team's recommendations.",
rehabStep: "Step",
rehabStep1Title: "Post-operative follow-up",
rehabStep1Text: "Coordination of medical check-ups and appointments with the healthcare team in the days following surgery.",
rehabStep2Title: "Functional rehabilitation",
rehabStep2Text: "Organization of physiotherapy sessions prescribed by your doctor to gradually restore mobility and strength.",
rehabStep3Title: "Recovery and adaptation",
rehabStep3Text: "Support in gradually resuming everyday activities according to the programme established by healthcare professionals.",
rehabStep4Title: "Convalescence and return",
rehabStep4Text: "Suitable accommodation during recovery, followed by assistance in preparing your return and follow-up appointments.",
rehabImageAlt: "Rehabilitation session following surgery",
rehabBadgeTitle: "Supervised recovery",
rehabBadgeText: "According to your doctor's programme",
rehabGoal1: "Relieve pain",
rehabGoal2: "Restore mobility",
rehabGoal3: "Resume daily activities",
rehabDisclaimer: "The rehabilitation programme, its duration and exercises are determined by healthcare professionals following an individual assessment. Glomed Group coordinates the practical arrangements.",
rehabCTA: "Organize my recovery",
/*testimonial*/
    eyebrow: "TESTIMONIALS",
    title: "They trusted",
    accent: "us",
    description:
      "Discover the experiences of patients supported throughout the organization of their healthcare journey in Tunisia.",
    starsLabel: "5 stars",
           name: "Amine B.",
        country: "🇩🇿 Algeria",
        service: "Medical assistance",
        text: "I appreciated the team's availability and the information provided to prepare my medical stay in Tunisia.",
        image: "https://i.pravatar.cc/100?img=11",
        alt: "Illustrative portrait of a man",
    
        name: "Fatou S.",
        country: "🇸🇳 Senegal",
        service: "Stay organization",
        text: "The team helped me understand the different steps and organize my trip to Tunisia.",
        image: "/images/profil-senegal.png",
        alt: "Portrait of a Senegalese woman",
      
        name: "Ahmed K.",
        country: "🇸🇦 Saudi Arabia",
        service: "Care coordination",
        text: "I appreciated the communication and the support provided while preparing my stay.",
        image: "https://i.pravatar.cc/100?img=12",
        alt: "Illustrative portrait of a man",
    
        name: "Mariam A.",
        country: "🇦🇪 United Arab Emirates",
        service: "Assistance and coordination",
        text: "An attentive team that provided useful information to help organize the different stages of my stay.",
        image: "https://i.pravatar.cc/100?img=44",
        alt: "Illustrative portrait of a woman",
             name: "Sophie M.",
        country: "🇫🇷 France",
        service: "Stay organization",
        text: "I appreciated the clear information and the team's availability to answer my questions.",
        image: "https://i.pravatar.cc/100?img=45",
        alt: "Illustrative portrait of a woman",
             name: "Marc D.",
        country: "🇧🇪 Belgium",
        service: "Personalized assistance",
        text: "Communication was simple and reassuring. I received the information I needed to prepare my stay.",
        image: "https://i.pravatar.cc/100?img=13",
        alt: "Illustrative portrait of a man",
      
  },

  ar: {
    // TOPBAR
    topbarService: "إدارة الخدمات الطبية",
    topbarLocation: "تونس",
    topbarEmail: "إرسال بريد إلكتروني",
    topbarPhone: "اتصل بمجموعة Glomed",

    // NAVBAR
    navHome: "الرئيسية",
    navServices: "الخدمات",
    navSurgery: "التخصصات",
    navAbout: "من نحن",
    navContact: "اتصل بنا",
    navCTA: "تنظيم رحلة علاجية",

    navOrthopedics: "جراحة العظام",
    navCardiology: "طب القلب",
    navPneumology: "طب الرئة",
    navUrology: "طب المسالك البولية",
    navPediatrics: "طب الأطفال",
    navGastro: "طب الجهاز الهضمي",
    navOphthalmology: "طب العيون",
    navGynecology: "طب النساء",
/*new dis*/
   navOncology: "طب الأورام",
navHematology: "أمراض الدم",
navENT: "طب الأنف والأذن والحنجرة",
navGeneralSurgery: "الجراحة العامة",
 navVascularSurgery: "جراحة الأوعية الدموية",
navOpen: "فتح القائمة",
    navClose: "إغلاق القائمة",
    navLabel: "القائمة الرئيسية",
    /*hero*/
    hero1Alt: "متخصصون في الرعاية الصحية في بيئة طبية",
hero1Eyebrow: "شريككم الصحي في تونس",
hero1Title: "مجموعة Glomed،",
hero1Accent: "معكم في كل خطوة.",
hero1Text: "ترافقكم مجموعة Glomed في تنظيم إقامتكم الطبية في تونس، من خلال التنسيق والإقامة والتنقلات والتوجيه نحو المتخصصين في الرعاية الصحية الشريكة.",
hero1Primary: "مساركم العلاجي",
hero1Secondary: "اكتشفوا خدماتنا",

hero2Alt: "بيئة للعناية التجميلية",
hero2Eyebrow: "التجميل والرفاهية",
hero2Title: "اعتنوا بأنفسكم،",
hero2Accent: "بكل راحة واطمئنان.",
hero2Text: "نساعدكم في تنظيم مشروعكم للعناية التجميلية وتنسيق مختلف مراحل إقامتكم مع المختصين المعنيين.",
hero2Primary: "اكتشفوا خدماتنا",
hero2Secondary: "اتصلوا بنا",

hero3Alt: "فريق طبي في مؤسسة صحية",
hero3Eyebrow: "إقامتكم الطبية منظمة بعناية",
hero3Title: "منذ وصولكم",
hero3Accent: "وحتى مرافقتكم.",
hero3Text: "الإقامة والتنقلات والتنسيق: نساعدكم في التحضير لإقامتكم في تونس وفقاً لطلبكم واحتياجاتكم.",
hero3Primary: "تنظيم الإقامة",
hero3Secondary: "كيف تتم العملية؟",

hero4Alt: "فريق طبي داخل غرفة عمليات حديثة",
hero4Eyebrow: "الجراحة والإقامة الطبية في تونس",
hero4Title: "رحلتكم الجراحية،",
hero4Accent: "إقامة منظمة بعناية.",
hero4Text: "ترافقكم مجموعة Glomed في التحضير لإقامتكم الجراحية في تونس، من خلال تنسيق المواعيد وتنظيم التنقلات والإقامة وربطكم بالمتخصصين في الرعاية الصحية الشريكة.",
hero4Primary: "تنظيم إقامتي",
hero4Secondary: "اكتشفوا خدماتنا",

hero5Alt: "بيئة طبية حديثة ومرافقة المرضى",
hero5Eyebrow: "GLOMED GROUP · شريككم الصحي في تونس",
hero5Title: "مساركم الصحي،",
hero5Accent: "مرافقة في كل مرحلة.",
hero5Text: "الفحوصات الطبية والاستشارات المتخصصة والجراحة والتصوير الطبي وإعادة التأهيل: ترافقكم مجموعة Glomed أيضاً في تنظيم إقامتكم في تونس، بما يشمل التنسيق والإقامة والتنقلات بالتعاون مع المختصين والمؤسسات الصحية الشريكة.",
hero5Primary: "مساركم الصحي",
hero5Secondary: "اكتشفوا خدماتنا",

heroTrustTitle: "مرافقة شخصية",
heroTrustText: "من التحضير إلى تنظيم الإقامة",
heroBottom1: "المرافقة",
heroBottom2: "التنسيق",
heroBottom3: "الإقامة الطبية",
heroLabel: "تعريف بمجموعة Glomed",
heroDotsLabel: "اختيار شريحة",
heroDotLabel: "عرض الشريحة",
heroPrevious: "الشريحة السابقة",
heroNext: "الشريحة التالية",
/*gallery*/
galleryEyebrow: "GLOMED GROUP · تونس",
galleryTitle: "رعاية طبية متخصصة،",
galleryAccent: "ومرافقة إنسانية",
galleryDescription: "اكتشفوا تخصصاتنا الطبية واستفيدوا من مرافقة شخصية طوال مساركم العلاجي في تونس.",
galleryLabel: "تخصصاتنا الطبية",
galleryDiscover: "اكتشفوا التخصص",

galleryUrology: "طب المسالك البولية",
galleryPediatrics: "طب الأطفال",
galleryGastro: "طب الجهاز الهضمي",
galleryPneumology: "طب الرئة",
galleryCardiology: "طب القلب",
galleryOphthalmology: "طب العيون",
galleryOrthopedics: "جراحة العظام",
galleryGynecology: "طب النساء",

galleryAltUrology: "الرعاية الطبية للمسالك البولية",
galleryAltPediatrics: "الرعاية الطبية للأطفال",
galleryAltGastro: "الرعاية الطبية للجهاز الهضمي",
galleryAltPneumology: "الرعاية الطبية للجهاز التنفسي",
galleryAltCardiology: "الرعاية الطبية للقلب",
galleryAltOphthalmology: "الرعاية الطبية للعيون",
galleryAltOrthopedics: "الرعاية الطبية للعظام",
galleryAltGynecology: "الرعاية الطبية لأمراض النساء",
  /*service*/
  
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
/*partner*/
// PARTNERSHIPS
partnersEyebrow: "انفتاحنا الدولي",
partnersTitle: "شبكة دولية،",
partnersAccent: "ووجهة واحدة: تونس.",
partnersDescription:
  "من أفريقيا ودول الخليج وأوروبا، ترافق مجموعة Glomed المرضى في تنظيم رحلتهم العلاجية في تونس، وتسهل التنسيق مع المهنيين والمؤسسات الصحية الشريكة.",
partnersRegionAfrica: "أفريقيا",
partnersRegionGulf: "الخليج",
partnersRegionEurope: "أوروبا",
partnersDestination: "وجهة واحدة: تونس.",
partnersBottomText:
  "مرافقة شخصية تراعي احتياجات كل مريض.",
partnersCTA: "لنتحدث عن احتياجاتكم العلاجية",
partnersFlag: "علم",

// COUNTRIES
countryAlgeria: "الجزائر",
countryLibya: "ليبيا",
countryMauritania: "موريتانيا",
countryIvoryCoast: "ساحل العاج",
countryBurkinaFaso: "بوركينا فاسو",
countryNiger: "النيجر",
countryCameroon: "الكاميرون",
countryGabon: "الغابون",
countrySaudiArabia: "المملكة العربية السعودية",
countryUAE: "الإمارات العربية المتحدة",
countryQatar: "قطر",
countryKuwait: "الكويت",
countryBahrain: "البحرين",
countryOman: "سلطنة عمان",
countryFrance: "فرنسا",
countryItaly: "إيطاليا",
countryGermany: "ألمانيا",
/*about*/
// ABOUT SECTION
aboutLabel: "من نحن؟",
aboutTitle: "التنسيق في خدمة",
aboutAccent: "رحلتكم العلاجية",
aboutDescription:
  "ترافقكم مجموعة Glomed في تنظيم الخدمات المرتبطة بإقامتكم العلاجية في تونس، من خلال نهج شخصي وواضح يراعي احتياجاتكم.",

aboutImageAlt: "مهني صحي في بيئة طبية",
aboutBadgeTitle: "إقامة أكثر تنظيماً",
aboutBadgeText: "مرافقة تتناسب مع احتياجاتكم.",

aboutEyebrow: "هويتنا ورسالتنا",
aboutHeading: "شريككم في تنظيم إقامتكم العلاجية في تونس.",
aboutIntro:
  "مجموعة Glomed وكالة متخصصة في إدارة وتنسيق الخدمات المرتبطة بالإقامة العلاجية. نسهّل تنظيم قدومكم إلى تونس ونرافقكم في الجوانب العملية لإقامتكم.",

aboutAccordion1Title: "من نحن؟",
aboutAccordion1Text:
  "ترافق مجموعة Glomed الأشخاص الراغبين في تنظيم إقامة علاجية في تونس. ويتمثل دورنا في تسهيل التنسيق بين طلبات المرضى والمهنيين الصحيين المعنيين ومقدمي الخدمات الضرورية لتنظيم الإقامة.",

aboutAccordion2Title: "رسالتنا",
aboutAccordion2Text:
  "تتمثل رسالتنا في تسهيل تنظيم إقامتكم ومساعدتكم على التحضير لمختلف المراحل: التواصل الأولي، وتنسيق المواعيد، وتنظيم التنقلات، والبحث عن إقامة مناسبة لاحتياجاتكم.",

aboutAccordion3Title: "إدارة الخدمات المرتبطة بالإقامة العلاجية",
aboutAccordion3Text:
  "نعمل على تسهيل تنسيق الخدمات المرتبطة برعايتكم وربطكم بالمهنيين والمؤسسات الصحية المعنية. أما تقييم حالتكم الصحية واختيار العلاجات واتخاذ القرارات الطبية، فهي من اختصاص المهنيين الصحيين المؤهلين.",

aboutAccordion4Title: "قيمنا والتزاماتنا",
aboutAccordion4Text:
  "نحرص على حسن الإصغاء ووضوح المعلومات والتوفر وتقديم مرافقة تتناسب مع كل طلب. هدفنا هو تسهيل التنظيم العملي لإقامتكم مع احترام خصوصيتكم ودور المهنيين الصحيين.",
aboutCTA: "مساركم الصحي",
/*reeducation*/
rehabEyebrow: "إعادة التأهيل والتعافي",
rehabTitle: "تعافٍ أفضل",
rehabAccent: " بعد العملية الجراحية.",
rehabDescription: "يشكل التعافي الجيد جزءاً أساسياً من رحلة العلاج. تتولى Glomed Group تنسيق خدمات إعادة التأهيل والتعافي والنقاهة وفقاً لتوصيات الفريق الطبي.",
rehabStep: "المرحلة",
rehabStep1Title: "المتابعة بعد العملية",
rehabStep1Text: "تنسيق الفحوصات والمواعيد مع الفريق الطبي خلال الأيام التي تلي العملية الجراحية.",
rehabStep2Title: "إعادة التأهيل الوظيفي",
rehabStep2Text: "تنظيم جلسات العلاج الطبيعي التي يصفها الطبيب لاستعادة الحركة والقوة تدريجياً.",
rehabStep3Title: "استعادة القدرة على الحركة",
rehabStep3Text: "مرافقتكم لاستعادة الأنشطة اليومية تدريجياً وفق البرنامج الذي يحدده المختصون في الرعاية الصحية.",
rehabStep4Title: "النقاهة والعودة",
rehabStep4Text: "تنظيم إقامة مناسبة خلال فترة التعافي، ثم التحضير للعودة ومواعيد المتابعة.",
rehabImageAlt: "جلسة إعادة تأهيل بعد عملية جراحية",
rehabBadgeTitle: "تعافٍ تحت الإشراف",
rehabBadgeText: "وفقاً للبرنامج الذي يحدده طبيبكم",
rehabGoal1: "تخفيف الألم",
rehabGoal2: "استعادة الحركة",
rehabGoal3: "استئناف الأنشطة اليومية",
rehabDisclaimer: "يحدد المختصون في الرعاية الصحية برنامج إعادة التأهيل ومدته والتمارين المناسبة بعد تقييم كل حالة على حدة. وتتولى Glomed Group تنسيق الجوانب التنظيمية.",
rehabCTA: "تنظيم مرحلة التعافي",
/*testimonial*/
eyebrow: "آراء وتجارب المرضى",
    title: "لقد وضعوا",
    accent: "ثقتهم بنا",
    description:
      "اكتشفوا تجارب المرضى الذين رافقناهم في تنظيم رحلة علاجهم وإقامتهم في تونس.",
    starsLabel: "خمس نجوم",
           name: "Amine B.",
        country: "🇩🇿 الجزائر",
        service: "المرافقة الطبية",
        text: "أعجبتني سرعة استجابة الفريق والمعلومات التي قدموها لي للتحضير لإقامتي العلاجية في تونس.",
        image: "https://i.pravatar.cc/100?img=11",
        alt: "صورة توضيحية لرجل",
              name: "Fatou S.",
        country: "🇸🇳 السنغال",
        service: "تنظيم الإقامة",
        text: "ساعدني الفريق على فهم مختلف المراحل بشكل أفضل وتنظيم رحلتي إلى تونس.",
        image: "/images/profil-senegal.png",
        alt: "صورة امرأة سنغالية",
             name: "Ahmed K.",
        country: "🇸🇦 المملكة العربية السعودية",
        service: "تنسيق الرحلة العلاجية",
        text: "أعجبتني جودة التواصل والمرافقة التي قدمها الفريق خلال فترة التحضير لإقامتي.",
        image: "https://i.pravatar.cc/100?img=12",
        alt: "صورة توضيحية لرجل",
      
        name: "Mariam A.",
        country: "🇦🇪 الإمارات العربية المتحدة",
        service: "المساعدة والتنسيق",
        text: "فريق مهتم قدم لي معلومات مفيدة لتنظيم مختلف مراحل إقامتي في تونس.",
        image: "https://i.pravatar.cc/100?img=44",
        alt: "صورة توضيحية لامرأة",
             name: "Sophie M.",
        country: "🇫🇷 فرنسا",
        service: "تنظيم الإقامة",
        text: "أعجبتني وضوح المعلومات واستعداد الفريق للإجابة عن جميع استفساراتي.",
        image: "https://i.pravatar.cc/100?img=45",
        alt: "صورة توضيحية لامرأة",
              name: "Marc D.",
        country: "🇧🇪 بلجيكا",
        service: "المرافقة الشخصية",
        text: "كان التواصل سهلاً ومطمئناً، وتمكنت من الحصول على المعلومات اللازمة للتحضير لإقامتي.",
        image: "https://i.pravatar.cc/100?img=13",
        alt: "صورة توضيحية لرجل",
  },

it: {
  // TOPBAR
  topbarService: "Gestione dei servizi medici",
  topbarLocation: "Tunisia",
  topbarEmail: "Invia un'e-mail",
  topbarPhone: "Chiama Glomed Group",

  // NAVBAR
  navHome: "Home",
  navServices: "Servizi",
  navSurgery: "Specialità",
  navAbout: "Chi siamo",
  navContact: "Contatti",
  navCTA: "Organizza un soggiorno",

  navOrthopedics: "Ortopedia",
  navCardiology: "Cardiologia",
  navPneumology: "Pneumologia",
  navUrology: "Urologia",
  navPediatrics: "Pediatria",
  navGastro: "Gastroenterologia",
  navOphthalmology: "Oftalmologia",
  navGynecology: "Ginecologia",
  navOncology: "Oncologia",
  navHematology: "Ematologia",
  navENT: "Otorinolaringoiatria",
  navGeneralSurgery: "Chirurgia generale",
  navVascularSurgery: "Chirurgia vascolare",
  navOpen: "Apri il menu",
  navClose: "Chiudi il menu",
  navLabel: "Navigazione principale",

  // HERO
  hero1Alt: "Professionisti sanitari in un ambiente medico",
  hero1Eyebrow: "IL TUO PARTNER SANITARIO IN TUNISIA",
  hero1Title: "Glomed Group,",
  hero1Accent: "al tuo fianco in ogni fase.",
  hero1Text: "Glomed Group ti accompagna nell'organizzazione del tuo soggiorno medico in Tunisia: coordinamento, alloggio, trasferimenti e orientamento verso professionisti sanitari partner.",
  hero1Primary: "Percorso di cura",
  hero1Secondary: "Scopri i nostri servizi",

  hero2Alt: "Ambiente dedicato alle cure estetiche",
  hero2Eyebrow: "ESTETICA E BENESSERE",
  hero2Title: "Prenditi cura di te,",
  hero2Accent: "in tutta tranquillità.",
  hero2Text: "Ti aiutiamo a organizzare il tuo progetto di cure estetiche e a coordinare le diverse fasi del soggiorno con i professionisti interessati.",
  hero2Primary: "Scopri i nostri servizi",
  hero2Secondary: "Contattaci",

  hero3Alt: "Équipe medica in una struttura sanitaria",
  hero3Eyebrow: "IL TUO SOGGIORNO MEDICO ORGANIZZATO",
  hero3Title: "Dal tuo arrivo",
  hero3Accent: "fino alla tua assistenza.",
  hero3Text: "Alloggio, trasferimenti e coordinamento: ti aiutiamo a preparare il tuo soggiorno in Tunisia in base alla tua richiesta e alle tue esigenze.",
  hero3Primary: "Organizza un soggiorno",
  hero3Secondary: "Come funziona?",

  hero4Alt: "Équipe medica in una moderna sala operatoria",
  hero4Eyebrow: "CHIRURGIA E SOGGIORNO MEDICO IN TUNISIA",
  hero4Title: "Il tuo intervento chirurgico,",
  hero4Accent: "un soggiorno organizzato con cura.",
  hero4Text: "Glomed Group ti accompagna nella preparazione del tuo soggiorno chirurgico in Tunisia: coordinamento degli appuntamenti, organizzazione dei trasferimenti, alloggio e contatto con professionisti sanitari partner.",
  hero4Primary: "Organizza il mio soggiorno",
  hero4Secondary: "Scopri i nostri servizi",

  hero5Alt: "Ambiente medico moderno e assistenza ai pazienti",
  hero5Eyebrow: "GLOMED GROUP · IL TUO PARTNER SANITARIO IN TUNISIA",
  hero5Title: "Il tuo percorso sanitario,",
  hero5Accent: "un'assistenza in ogni fase.",
  hero5Text: "Esami medici, visite specialistiche, chirurgia, radiologia e riabilitazione: Glomed Group ti accompagna anche nell'organizzazione del tuo soggiorno in Tunisia, coordinando alloggio e trasferimenti con professionisti e strutture sanitarie partner.",
  hero5Primary: "Il tuo percorso sanitario",
  hero5Secondary: "Scopri i nostri servizi",

  heroTrustTitle: "Un'assistenza personalizzata",
  heroTrustText: "Dalla preparazione all'organizzazione del soggiorno",
  heroBottom1: "ASSISTENZA",
  heroBottom2: "COORDINAMENTO",
  heroBottom3: "SOGGIORNO MEDICO",
  heroLabel: "Presentazione di Glomed Group",
  heroDotsLabel: "Seleziona una diapositiva",
  heroDotLabel: "Mostra la diapositiva",
  heroPrevious: "Diapositiva precedente",
  heroNext: "Diapositiva successiva",

  // GALLERY
  galleryEyebrow: "GLOMED GROUP · TUNISIA",
  galleryTitle: "Cure specialistiche,",
  galleryAccent: "un'assistenza umana",
  galleryDescription: "Scopri le nostre specialità mediche e beneficia di un'assistenza personalizzata per il tuo percorso di cura in Tunisia.",
  galleryLabel: "Le nostre specialità mediche",
  galleryDiscover: "Scopri la specialità",

  galleryUrology: "Urologia",
  galleryPediatrics: "Pediatria",
  galleryGastro: "Gastroenterologia",
  galleryPneumology: "Pneumologia",
  galleryCardiology: "Cardiologia",
  galleryOphthalmology: "Oftalmologia",
  galleryOrthopedics: "Ortopedia",
  galleryGynecology: "Ginecologia",

  galleryAltUrology: "Cure urologiche",
  galleryAltPediatrics: "Cure pediatriche",
  galleryAltGastro: "Cure gastroenterologiche",
  galleryAltPneumology: "Cure pneumologiche",
  galleryAltCardiology: "Cure cardiologiche",
  galleryAltOphthalmology: "Cure oftalmologiche",
  galleryAltOrthopedics: "Cure ortopediche",
  galleryAltGynecology: "Cure ginecologiche",

  // SERVICES
  services: {
    fr: {
      eyebrow: "I NOSTRI AMBITI DI ASSISTENZA",
      title: "Gestione dei servizi",
      accent: "medici.",
      description: "Glomed Group ti accompagna nell'organizzazione del tuo soggiorno medico in Tunisia, dalla prima richiesta agli aspetti pratici del tuo viaggio.",

      services: [
        {
          icon: "bi bi-heart-pulse",
          title: "Chirurgia estetica",
          text: "Organizzazione e coordinamento del tuo progetto con professionisti sanitari partner, in base alla tua richiesta.",
        },
        {
          icon: "bi bi-person-hearts",
          title: "Medicina estetica",
          text: "Assistenza per le tue richieste di trattamenti estetici e orientamento verso i professionisti interessati.",
        },
        {
          icon: "bi bi-scissors",
          title: "Trapianto di capelli",
          text: "Supporto nell'organizzazione del soggiorno e nel contatto con professionisti specializzati.",
        },
        {
          icon: "bi bi-emoji-smile",
          title: "Impianti dentali",
          text: "Coordinamento della tua richiesta di cure odontoiatriche e organizzazione pratica del soggiorno.",
        },
        {
          icon: "bi bi-activity",
          title: "Altre specialità mediche",
          text: "Valutazione della tua richiesta e orientamento verso professionisti o strutture adeguate, in base alle possibilità disponibili.",
        },
        {
          icon: "bi bi-clipboard2-pulse",
          title: "Follow-up e appuntamenti",
          text: "Supporto nel coordinamento degli appuntamenti e delle informazioni necessarie per preparare il soggiorno.",
        },
      ],

      note: "Le cure, le indicazioni mediche, i trattamenti e i risultati attesi vengono valutati dai professionisti sanitari competenti. Ogni intervento dipende dal loro parere e dalla tua situazione individuale.",

      processEyebrow: "UN PERCORSO IN 6 FASI",
      processTitle: "Dalla tua richiesta",
      processAccent: "al tuo soggiorno in Tunisia.",
      processDescription: "Ogni fase viene preparata insieme a te per rendere l'organizzazione del soggiorno più chiara e semplice.",

      steps: [
        {
          icon: "bi bi-chat-dots",
          title: "La tua richiesta",
          text: "Ci presenti il tuo progetto, le tue aspettative e le cure che desideri prendere in considerazione.",
        },
        {
          icon: "bi bi-file-earmark-medical",
          title: "Orientamento medico",
          text: "Con il tuo consenso, facilitiamo la trasmissione delle informazioni necessarie ai professionisti sanitari interessati. Il medico valuta la tua situazione.",
        },
        {
          icon: "bi bi-calendar-check",
          title: "Organizzazione del soggiorno",
          text: "Ti aiutiamo a coordinare gli appuntamenti, le date previste e gli aspetti pratici del soggiorno.",
        },
        {
          icon: "bi bi-airplane",
          title: "Accoglienza e trasferimenti",
          text: "In base alla formula concordata, organizziamo l'accoglienza e i trasferimenti tra aeroporto, alloggio e luoghi degli appuntamenti.",
        },
        {
          icon: "bi bi-building",
          title: "Alloggio",
          text: "Ti assistiamo nella ricerca o nella prenotazione di un alloggio adatto alla durata prevista del soggiorno.",
        },
        {
          icon: "bi bi-heart",
          title: "Assistenza sul posto",
          text: "Facilitiamo il coordinamento pratico durante il soggiorno. Le decisioni e le cure mediche restano sotto la responsabilità dei professionisti sanitari.",
        },
      ],

      ctaEyebrow: "IL TUO PROGETTO INIZIA QUI",
      ctaTitle: "Stai pensando a un soggiorno medico in Tunisia?",
      ctaText: "Presentaci la tua richiesta per discutere le possibilità di assistenza e le prossime fasi.",
      ctaButton: "Organizza un soggiorno",
    },
  },

  // PARTNERSHIPS
  partnersEyebrow: "LA NOSTRA APERTURA INTERNAZIONALE",
  partnersTitle: "Una rete internazionale,",
  partnersAccent: "una destinazione: la Tunisia.",
  partnersDescription: "Dall'Africa, dai Paesi del Golfo e dall'Europa, Glomed Group accompagna i pazienti nell'organizzazione del loro percorso di cura in Tunisia, facilitando il coordinamento con professionisti e strutture sanitarie partner.",
  partnersRegionAfrica: "Africa",
  partnersRegionGulf: "Golfo",
  partnersRegionEurope: "Europa",
  partnersDestination: "Una destinazione: la Tunisia.",
  partnersBottomText: "Un'assistenza pensata intorno alle esigenze di ogni paziente.",
  partnersCTA: "Parliamo delle tue cure",
  partnersFlag: "Bandiera",

  // COUNTRIES
  countryAlgeria: "Algeria",
  countryLibya: "Libia",
  countryMauritania: "Mauritania",
  countryIvoryCoast: "Costa d'Avorio",
  countryBurkinaFaso: "Burkina Faso",
  countryNiger: "Niger",
  countryCameroon: "Camerun",
  countryGabon: "Gabon",
  countrySaudiArabia: "Arabia Saudita",
  countryUAE: "Emirati Arabi Uniti",
  countryQatar: "Qatar",
  countryKuwait: "Kuwait",
  countryBahrain: "Bahrein",
  countryOman: "Oman",
  countryFrance: "Francia",
  countryItaly: "Italia",
  countryGermany: "Germania",

  // ABOUT
  aboutLabel: "CHI SIAMO?",
  aboutTitle: "Il coordinamento al servizio del",
  aboutAccent: "tuo soggiorno medico.",
  aboutDescription: "Glomed Group ti accompagna nell'organizzazione dei servizi legati al tuo soggiorno medico in Tunisia, con un approccio personalizzato, chiaro e attento alle tue esigenze.",

  aboutImageAlt: "Professionista sanitario in un ambiente medico",
  aboutBadgeTitle: "Un soggiorno meglio organizzato",
  aboutBadgeText: "Un'assistenza adeguata alle tue esigenze.",

  aboutEyebrow: "LA NOSTRA IDENTITÀ E LA NOSTRA MISSIONE",
  aboutHeading: "Il tuo partner per organizzare il tuo soggiorno medico in Tunisia.",
  aboutIntro: "Glomed Group è un'agenzia specializzata nella gestione e nel coordinamento dei servizi legati al soggiorno medico. Facilitiamo l'organizzazione del tuo viaggio in Tunisia e ti assistiamo negli aspetti pratici del soggiorno.",

  aboutAccordion1Title: "Chi siamo?",
  aboutAccordion1Text: "Glomed Group accompagna le persone che desiderano organizzare un soggiorno medico in Tunisia. Il nostro ruolo è facilitare il coordinamento tra le richieste dei pazienti, i professionisti sanitari interessati e i fornitori di servizi necessari all'organizzazione del soggiorno.",

  aboutAccordion2Title: "La nostra missione",
  aboutAccordion2Text: "La nostra missione è semplificare l'organizzazione del tuo soggiorno aiutandoti a preparare le diverse fasi: primo contatto, coordinamento degli appuntamenti, organizzazione degli spostamenti e ricerca di un alloggio adatto alle tue esigenze.",

  aboutAccordion3Title: "Gestione dei servizi legati al soggiorno medico",
  aboutAccordion3Text: "Facilitiamo il coordinamento dei servizi legati alle tue cure e il contatto con i professionisti o le strutture sanitarie interessate. La valutazione del tuo stato di salute, la scelta dei trattamenti e le decisioni mediche spettano ai professionisti sanitari competenti.",

  aboutAccordion4Title: "I nostri valori e i nostri impegni",
  aboutAccordion4Text: "Diamo priorità all'ascolto, alla chiarezza delle informazioni, alla disponibilità e a un'assistenza adeguata a ogni richiesta. Il nostro obiettivo è facilitare l'organizzazione pratica del tuo soggiorno, nel rispetto della tua riservatezza e del ruolo dei professionisti sanitari.",
  aboutCTA: "Il tuo percorso sanitario",

  // REHABILITATION
  rehabEyebrow: "RIABILITAZIONE E RECUPERO",
  rehabTitle: "Recuperare al meglio",
  rehabAccent: "dopo l'intervento.",
  rehabDescription: "Un buon recupero fa parte del percorso di cura. Glomed Group coordina per te la riabilitazione, il recupero funzionale e la convalescenza, secondo le raccomandazioni dell'équipe medica.",
  rehabStep: "Fase",
  rehabStep1Title: "Follow-up post-operatorio",
  rehabStep1Text: "Coordinamento dei controlli e degli appuntamenti con l'équipe medica nei giorni successivi all'intervento.",
  rehabStep2Title: "Riabilitazione funzionale",
  rehabStep2Text: "Organizzazione delle sedute di fisioterapia prescritte dal medico per recuperare gradualmente mobilità e forza.",
  rehabStep3Title: "Recupero funzionale",
  rehabStep3Text: "Assistenza per riprendere gradualmente le attività quotidiane, secondo il programma definito dai professionisti sanitari.",
  rehabStep4Title: "Convalescenza e rientro",
  rehabStep4Text: "Alloggio adeguato durante il recupero, seguito dalla preparazione del rientro e degli appuntamenti di controllo.",
  rehabImageAlt: "Seduta di riabilitazione dopo un intervento",
  rehabBadgeTitle: "Un recupero seguito",
  rehabBadgeText: "Secondo il programma del tuo medico",
  rehabGoal1: "Alleviare il dolore",
  rehabGoal2: "Recuperare la mobilità",
  rehabGoal3: "Riprendere le proprie attività",
  rehabDisclaimer: "Il programma di riabilitazione, la sua durata e gli esercizi vengono definiti dai professionisti sanitari dopo una valutazione individuale. Glomed Group coordina l'organizzazione pratica.",
  rehabCTA: "Organizza il mio recupero",

  // TESTIMONIALS
  eyebrow: "TESTIMONIANZE",
  title: "Si sono affidati a noi",
  accent: "con fiducia",
  description: "Scopri le esperienze dei pazienti accompagnati nell'organizzazione del loro percorso di cura in Tunisia.",
  starsLabel: "5 stelle",

  name: "Amine B.",
  country: "🇩🇿 Algeria",
  service: "Assistenza medica",
  text: "Ho apprezzato la disponibilità del team e le informazioni ricevute per preparare il mio soggiorno medico in Tunisia.",
  image: "https://i.pravatar.cc/100?img=11",
  alt: "Ritratto illustrativo di un uomo",

  name: "Fatou S.",
  country: "🇸🇳 Senegal",
  service: "Organizzazione del soggiorno",
  text: "Il team mi ha aiutata a comprendere meglio le diverse fasi e a organizzare il mio viaggio in Tunisia.",
  image: "/images/profil-senegal.png",
  alt: "Ritratto di una donna senegalese",

  name: "Ahmed K.",
  country: "🇸🇦 Arabia Saudita",
  service: "Coordinamento del percorso",
  text: "Ho apprezzato la qualità degli scambi e l'assistenza offerta durante tutta la preparazione del mio soggiorno.",
  image: "https://i.pravatar.cc/100?img=12",
  alt: "Ritratto illustrativo di un uomo",

  name: "Mariam A.",
  country: "🇦🇪 Emirati Arabi Uniti",
  service: "Assistenza e coordinamento",
  text: "Un team attento che mi ha fornito informazioni utili per organizzare le diverse fasi del mio soggiorno.",
  image: "https://i.pravatar.cc/100?img=44",
  alt: "Ritratto illustrativo di una donna",

  name: "Sophie M.",
  country: "🇫🇷 Francia",
  service: "Organizzazione del soggiorno",
  text: "Ho apprezzato la chiarezza delle informazioni e la disponibilità del team nel rispondere alle mie domande.",
  image: "https://i.pravatar.cc/100?img=45",
  alt: "Ritratto illustrativo di una donna",

  name: "Marc D.",
  country: "🇧🇪 Belgio",
  service: "Assistenza personalizzata",
  text: "Gli scambi sono stati semplici e rassicuranti. Ho potuto ottenere le informazioni necessarie per preparare il mio soggiorno.",
  image: "https://i.pravatar.cc/100?img=13",
  alt: "Ritratto illustrativo di un uomo",
},

de: {
  // TOPBAR
  topbarService: "Organisation medizinischer Dienstleistungen",
  topbarLocation: "Tunesien",
  topbarEmail: "E-Mail senden",
  topbarPhone: "Glomed Group anrufen",

  // NAVBAR
  navHome: "Startseite",
  navServices: "Dienstleistungen",
  navSurgery: "Fachgebiete",
  navAbout: "Über uns",
  navContact: "Kontakt",
  navCTA: "Aufenthalt organisieren",

  navOrthopedics: "Orthopädie",
  navCardiology: "Kardiologie",
  navPneumology: "Pneumologie",
  navUrology: "Urologie",
  navPediatrics: "Pädiatrie",
  navGastro: "Gastroenterologie",
  navOphthalmology: "Augenheilkunde",
  navGynecology: "Gynäkologie",
  navOncology: "Onkologie",
  navHematology: "Hämatologie",
  navENT: "HNO",
  navGeneralSurgery: "Allgemeinchirurgie",
  navVascularSurgery: "Gefäßchirurgie",
  navOpen: "Menü öffnen",
  navClose: "Menü schließen",
  navLabel: "Hauptnavigation",

  // HERO
  hero1Alt: "Gesundheitsfachkräfte in einer medizinischen Umgebung",
  hero1Eyebrow: "IHR GESUNDHEITSPARTNER IN TUNESIEN",
  hero1Title: "Glomed Group,",
  hero1Accent: "an Ihrer Seite bei jedem Schritt.",
  hero1Text: "Glomed Group begleitet Sie bei der Organisation Ihres medizinischen Aufenthalts in Tunesien: Koordination, Unterkunft, Transfers und Vermittlung an medizinische Partner.",
  hero1Primary: "Ihr Behandlungsweg",
  hero1Secondary: "Unsere Dienstleistungen entdecken",

  hero2Alt: "Umgebung für ästhetische Behandlungen",
  hero2Eyebrow: "ÄSTHETIK UND WOHLBEFINDEN",
  hero2Title: "Kümmern Sie sich um sich selbst,",
  hero2Accent: "ganz entspannt.",
  hero2Text: "Wir helfen Ihnen, Ihr Projekt für ästhetische Behandlungen zu organisieren und die verschiedenen Schritte Ihres Aufenthalts mit den zuständigen Fachkräften zu koordinieren.",
  hero2Primary: "Unsere Dienstleistungen entdecken",
  hero2Secondary: "Kontaktieren Sie uns",

  hero3Alt: "Medizinisches Team in einer Gesundheitseinrichtung",
  hero3Eyebrow: "IHR ORGANISIERTER MEDIZINISCHER AUFENTHALT",
  hero3Title: "Von Ihrer Ankunft",
  hero3Accent: "bis zu Ihrer Betreuung.",
  hero3Text: "Unterkunft, Transfers und Koordination: Wir helfen Ihnen, Ihren Aufenthalt in Tunesien entsprechend Ihrer Anfrage und Ihren Bedürfnissen vorzubereiten.",
  hero3Primary: "Aufenthalt organisieren",
  hero3Secondary: "Wie funktioniert es?",

  hero4Alt: "Medizinisches Team in einem modernen Operationssaal",
  hero4Eyebrow: "CHIRURGIE UND MEDIZINISCHER AUFENTHALT IN TUNESIEN",
  hero4Title: "Ihr chirurgischer Eingriff,",
  hero4Accent: "ein sorgfältig organisierter Aufenthalt.",
  hero4Text: "Glomed Group begleitet Sie bei der Vorbereitung Ihres chirurgischen Aufenthalts in Tunesien: Koordination der Termine, Organisation der Transfers, Unterkunft und Kontaktvermittlung zu medizinischen Partnern.",
  hero4Primary: "Meinen Aufenthalt organisieren",
  hero4Secondary: "Unsere Dienstleistungen entdecken",

  hero5Alt: "Moderne medizinische Umgebung und Patientenbetreuung",
  hero5Eyebrow: "GLOMED GROUP · IHR GESUNDHEITSPARTNER IN TUNESIEN",
  hero5Title: "Ihr Gesundheitsweg,",
  hero5Accent: "Begleitung bei jedem Schritt.",
  hero5Text: "Medizinische Untersuchungen, Facharzttermine, Chirurgie, Radiologie und Rehabilitation: Glomed Group unterstützt Sie auch bei der Organisation Ihres Aufenthalts in Tunesien und koordiniert Unterkunft und Transfers mit medizinischen Fachkräften und Partnereinrichtungen.",
  hero5Primary: "Ihr Gesundheitsweg",
  hero5Secondary: "Unsere Dienstleistungen entdecken",

  heroTrustTitle: "Persönliche Betreuung",
  heroTrustText: "Von der Vorbereitung bis zur Organisation Ihres Aufenthalts",
  heroBottom1: "BETREUUNG",
  heroBottom2: "KOORDINATION",
  heroBottom3: "MEDIZINISCHER AUFENTHALT",
  heroLabel: "Vorstellung von Glomed Group",
  heroDotsLabel: "Folie auswählen",
  heroDotLabel: "Folie anzeigen",
  heroPrevious: "Vorherige Folie",
  heroNext: "Nächste Folie",

  // GALLERY
  galleryEyebrow: "GLOMED GROUP · TUNESIEN",
  galleryTitle: "Spezialisierte Behandlungen,",
  galleryAccent: "menschliche Betreuung",
  galleryDescription: "Entdecken Sie unsere medizinischen Fachgebiete und profitieren Sie von einer persönlichen Begleitung auf Ihrem Behandlungsweg in Tunesien.",
  galleryLabel: "Unsere medizinischen Fachgebiete",
  galleryDiscover: "Fachgebiet entdecken",

  galleryUrology: "Urologie",
  galleryPediatrics: "Pädiatrie",
  galleryGastro: "Gastroenterologie",
  galleryPneumology: "Pneumologie",
  galleryCardiology: "Kardiologie",
  galleryOphthalmology: "Augenheilkunde",
  galleryOrthopedics: "Orthopädie",
  galleryGynecology: "Gynäkologie",

  galleryAltUrology: "Urologische Versorgung",
  galleryAltPediatrics: "Pädiatrische Versorgung",
  galleryAltGastro: "Gastroenterologische Versorgung",
  galleryAltPneumology: "Pneumologische Versorgung",
  galleryAltCardiology: "Kardiologische Versorgung",
  galleryAltOphthalmology: "Augenärztliche Versorgung",
  galleryAltOrthopedics: "Orthopädische Versorgung",
  galleryAltGynecology: "Gynäkologische Versorgung",

  // SERVICES
  services: {
    fr: {
      eyebrow: "UNSERE BEREICHE DER BETREUUNG",
      title: "Organisation medizinischer",
      accent: "Dienstleistungen.",
      description: "Glomed Group begleitet Sie bei der Organisation Ihres medizinischen Aufenthalts in Tunesien – von Ihrer ersten Anfrage bis hin zu den praktischen Aspekten Ihrer Reise.",

      services: [
        {
          icon: "bi bi-heart-pulse",
          title: "Ästhetische Chirurgie",
          text: "Organisation und Koordination Ihres Vorhabens mit medizinischen Partnern entsprechend Ihrer Anfrage.",
        },
        {
          icon: "bi bi-person-hearts",
          title: "Ästhetische Medizin",
          text: "Betreuung Ihrer Anfragen zu ästhetischen Behandlungen und Vermittlung an die zuständigen Fachkräfte.",
        },
        {
          icon: "bi bi-scissors",
          title: "Haartransplantation",
          text: "Unterstützung bei der Organisation Ihres Aufenthalts und bei der Kontaktaufnahme mit spezialisierten Fachkräften.",
        },
        {
          icon: "bi bi-emoji-smile",
          title: "Zahnimplantate",
          text: "Koordination Ihrer Anfrage zu Zahnbehandlungen und Organisation der praktischen Aspekte Ihres Aufenthalts.",
        },
        {
          icon: "bi bi-activity",
          title: "Weitere medizinische Fachgebiete",
          text: "Prüfung Ihrer Anfrage und Vermittlung an geeignete Fachkräfte oder Einrichtungen entsprechend den verfügbaren Möglichkeiten.",
        },
        {
          icon: "bi bi-clipboard2-pulse",
          title: "Nachsorge und Termine",
          text: "Unterstützung bei der Koordination von Terminen und den Informationen, die zur Vorbereitung Ihres Aufenthalts benötigt werden.",
        },
      ],

      note: "Medizinische Versorgung, Indikationen, Behandlungen und erwartete Ergebnisse werden von den zuständigen Gesundheitsfachkräften beurteilt. Jeder Eingriff hängt von deren Einschätzung und Ihrer individuellen Situation ab.",

      processEyebrow: "EIN ABLAUF IN 6 SCHRITTEN",
      processTitle: "Von Ihrer Anfrage",
      processAccent: "bis zu Ihrem Aufenthalt in Tunesien.",
      processDescription: "Jeder Schritt wird gemeinsam mit Ihnen vorbereitet, damit die Organisation Ihres Aufenthalts klarer und einfacher wird.",

      steps: [
        {
          icon: "bi bi-chat-dots",
          title: "Ihre Anfrage",
          text: "Sie stellen uns Ihr Vorhaben, Ihre Erwartungen und die Behandlungen vor, die Sie in Betracht ziehen möchten.",
        },
        {
          icon: "bi bi-file-earmark-medical",
          title: "Medizinische Orientierung",
          text: "Mit Ihrer Zustimmung erleichtern wir die Übermittlung der erforderlichen Informationen an die zuständigen Gesundheitsfachkräfte. Der Arzt beurteilt Ihre Situation.",
        },
        {
          icon: "bi bi-calendar-check",
          title: "Organisation des Aufenthalts",
          text: "Wir helfen Ihnen bei der Koordination der Termine, der geplanten Reisedaten und der praktischen Aspekte Ihres Aufenthalts.",
        },
        {
          icon: "bi bi-airplane",
          title: "Empfang und Transfers",
          text: "Je nach vereinbartem Angebot organisieren wir Ihren Empfang und Ihre Transfers zwischen Flughafen, Unterkunft und den Orten Ihrer Termine.",
        },
        {
          icon: "bi bi-building",
          title: "Unterkunft",
          text: "Wir unterstützen Sie bei der Suche oder Buchung einer Unterkunft, die zur geplanten Dauer Ihres Aufenthalts passt.",
        },
        {
          icon: "bi bi-heart",
          title: "Betreuung vor Ort",
          text: "Wir erleichtern die praktische Koordination während Ihres Aufenthalts. Medizinische Entscheidungen und Behandlungen liegen weiterhin in der Verantwortung der Gesundheitsfachkräfte.",
        },
      ],

      ctaEyebrow: "IHR VORHABEN BEGINNT HIER",
      ctaTitle: "Planen Sie einen medizinischen Aufenthalt in Tunesien?",
      ctaText: "Teilen Sie uns Ihre Anfrage mit, damit wir die Betreuungsmöglichkeiten und die nächsten Schritte besprechen können.",
      ctaButton: "Aufenthalt organisieren",
    },
  },

  // PARTNERSHIPS
  partnersEyebrow: "UNSERE INTERNATIONALE AUSRICHTUNG",
  partnersTitle: "Ein internationales Netzwerk,",
  partnersAccent: "ein Reiseziel: Tunesien.",
  partnersDescription: "Aus Afrika, den Golfstaaten und Europa begleitet Glomed Group Patienten bei der Organisation ihres Behandlungswegs in Tunesien und erleichtert die Koordination mit medizinischen Fachkräften und Partnereinrichtungen.",
  partnersRegionAfrica: "Afrika",
  partnersRegionGulf: "Golfstaaten",
  partnersRegionEurope: "Europa",
  partnersDestination: "Ein Reiseziel: Tunesien.",
  partnersBottomText: "Eine Betreuung, die auf die Bedürfnisse jedes Patienten abgestimmt ist.",
  partnersCTA: "Sprechen wir über Ihre Behandlung",
  partnersFlag: "Flagge",

  // COUNTRIES
  countryAlgeria: "Algerien",
  countryLibya: "Libyen",
  countryMauritania: "Mauretanien",
  countryIvoryCoast: "Elfenbeinküste",
  countryBurkinaFaso: "Burkina Faso",
  countryNiger: "Niger",
  countryCameroon: "Kamerun",
  countryGabon: "Gabun",
  countrySaudiArabia: "Saudi-Arabien",
  countryUAE: "Vereinigte Arabische Emirate",
  countryQatar: "Katar",
  countryKuwait: "Kuwait",
  countryBahrain: "Bahrain",
  countryOman: "Oman",
  countryFrance: "Frankreich",
  countryItaly: "Italien",
  countryGermany: "Deutschland",

  // ABOUT
  aboutLabel: "WER SIND WIR?",
  aboutTitle: "Koordination im Dienste Ihres",
  aboutAccent: "medizinischen Aufenthalts.",
  aboutDescription: "Glomed Group begleitet Sie bei der Organisation der Dienstleistungen rund um Ihren medizinischen Aufenthalt in Tunesien – mit einem persönlichen, transparenten und auf Ihre Bedürfnisse abgestimmten Ansatz.",

  aboutImageAlt: "Gesundheitsfachkraft in einer medizinischen Umgebung",
  aboutBadgeTitle: "Ein besser organisierter Aufenthalt",
  aboutBadgeText: "Eine Betreuung, die auf Ihre Bedürfnisse abgestimmt ist.",

  aboutEyebrow: "UNSERE IDENTITÄT UND UNSERE MISSION",
  aboutHeading: "Ihr Partner für die Organisation Ihres medizinischen Aufenthalts in Tunesien.",
  aboutIntro: "Glomed Group ist eine Agentur, die auf die Verwaltung und Koordination von Dienstleistungen rund um medizinische Aufenthalte spezialisiert ist. Wir erleichtern die Organisation Ihrer Reise nach Tunesien und unterstützen Sie bei den praktischen Aspekten Ihres Aufenthalts.",

  aboutAccordion1Title: "Wer sind wir?",
  aboutAccordion1Text: "Glomed Group begleitet Menschen, die einen medizinischen Aufenthalt in Tunesien organisieren möchten. Unsere Aufgabe ist es, die Koordination zwischen den Anfragen der Patienten, den zuständigen Gesundheitsfachkräften und den für die Organisation des Aufenthalts erforderlichen Dienstleistern zu erleichtern.",

  aboutAccordion2Title: "Unsere Mission",
  aboutAccordion2Text: "Unsere Mission ist es, die Organisation Ihres Aufenthalts zu vereinfachen und Sie bei den verschiedenen Schritten zu unterstützen: Kontaktaufnahme, Koordination der Termine, Organisation der Fahrten und Suche nach einer Unterkunft, die Ihren Bedürfnissen entspricht.",

  aboutAccordion3Title: "Organisation der Dienstleistungen rund um den medizinischen Aufenthalt",
  aboutAccordion3Text: "Wir erleichtern die Koordination der mit Ihrer Behandlung verbundenen Dienstleistungen und die Kontaktvermittlung zu den zuständigen Fachkräften oder Gesundheitseinrichtungen. Die Beurteilung Ihres Gesundheitszustands, die Wahl der Behandlungen und medizinische Entscheidungen liegen in der Verantwortung der zuständigen Gesundheitsfachkräfte.",

  aboutAccordion4Title: "Unsere Werte und Verpflichtungen",
  aboutAccordion4Text: "Wir legen Wert auf Zuhören, klare Informationen, Verfügbarkeit und eine Betreuung, die auf jede Anfrage abgestimmt ist. Unser Ziel ist es, die praktische Organisation Ihres Aufenthalts unter Wahrung Ihrer Privatsphäre und der Zuständigkeiten der Gesundheitsfachkräfte zu erleichtern.",
  aboutCTA: "Ihr Gesundheitsweg",

  // REHABILITATION
  rehabEyebrow: "REHABILITATION UND WIEDERHERSTELLUNG",
  rehabTitle: "Gut genesen",
  rehabAccent: "nach Ihrer Operation.",
  rehabDescription: "Eine gute Genesung ist Teil des Behandlungswegs. Glomed Group koordiniert für Sie Rehabilitation, funktionelle Wiederherstellung und Erholungsphase gemäß den Empfehlungen des medizinischen Teams.",
  rehabStep: "Schritt",
  rehabStep1Title: "Nachoperative Betreuung",
  rehabStep1Text: "Koordination der Kontrolluntersuchungen und Termine mit dem medizinischen Team in den Tagen nach dem Eingriff.",
  rehabStep2Title: "Funktionelle Rehabilitation",
  rehabStep2Text: "Organisation der vom Arzt verordneten Physiotherapiesitzungen, um Beweglichkeit und Kraft schrittweise wiederzuerlangen.",
  rehabStep3Title: "Wiederherstellung der Selbstständigkeit",
  rehabStep3Text: "Unterstützung bei der schrittweisen Wiederaufnahme alltäglicher Aktivitäten gemäß dem von den Gesundheitsfachkräften festgelegten Programm.",
  rehabStep4Title: "Genesung und Rückreise",
  rehabStep4Text: "Eine geeignete Unterkunft während der Genesungsphase sowie die Vorbereitung der Rückreise und der Nachsorgetermine.",
  rehabImageAlt: "Rehabilitationssitzung nach einer Operation",
  rehabBadgeTitle: "Begleitete Genesung",
  rehabBadgeText: "Gemäß dem Behandlungsplan Ihres Arztes",
  rehabGoal1: "Schmerzen lindern",
  rehabGoal2: "Beweglichkeit wiedererlangen",
  rehabGoal3: "Aktivitäten wieder aufnehmen",
  rehabDisclaimer: "Das Rehabilitationsprogramm, seine Dauer und die Übungen werden nach einer individuellen Beurteilung von den Gesundheitsfachkräften festgelegt. Glomed Group koordiniert die praktische Organisation.",
  rehabCTA: "Meine Genesung organisieren",

  // TESTIMONIALS
  eyebrow: "ERFAHRUNGSBERICHTE",
  title: "Sie haben uns",
  accent: "ihr Vertrauen geschenkt",
  description: "Entdecken Sie die Erfahrungen von Patienten, die bei der Organisation ihres Behandlungswegs in Tunesien begleitet wurden.",
  starsLabel: "5 Sterne",

  name: "Amine B.",
  country: "🇩🇿 Algerien",
  service: "Medizinische Betreuung",
  text: "Ich habe die Verfügbarkeit des Teams und die Informationen geschätzt, die ich zur Vorbereitung meines medizinischen Aufenthalts in Tunesien erhalten habe.",
  image: "https://i.pravatar.cc/100?img=11",
  alt: "Symbolisches Porträt eines Mannes",

  name: "Fatou S.",
  country: "🇸🇳 Senegal",
  service: "Organisation des Aufenthalts",
  text: "Das Team hat mir geholfen, die verschiedenen Schritte besser zu verstehen und meine Reise nach Tunesien zu organisieren.",
  image: "/images/profil-senegal.png",
  alt: "Porträt einer senegalesischen Frau",

  name: "Ahmed K.",
  country: "🇸🇦 Saudi-Arabien",
  service: "Koordination des Behandlungswegs",
  text: "Ich habe die Qualität der Kommunikation und die Unterstützung während der gesamten Vorbereitung meines Aufenthalts geschätzt.",
  image: "https://i.pravatar.cc/100?img=12",
  alt: "Symbolisches Porträt eines Mannes",

  name: "Mariam A.",
  country: "🇦🇪 Vereinigte Arabische Emirate",
  service: "Unterstützung und Koordination",
  text: "Ein aufmerksames Team, das mir hilfreiche Informationen zur Organisation der verschiedenen Schritte meines Aufenthalts gegeben hat.",
  image: "https://i.pravatar.cc/100?img=44",
  alt: "Symbolisches Porträt einer Frau",

  name: "Sophie M.",
  country: "🇫🇷 Frankreich",
  service: "Organisation des Aufenthalts",
  text: "Ich habe die klaren Informationen und die Verfügbarkeit des Teams bei der Beantwortung meiner Fragen sehr geschätzt.",
  image: "https://i.pravatar.cc/100?img=45",
  alt: "Symbolisches Porträt einer Frau",

  name: "Marc D.",
  country: "🇧🇪 Belgien",
  service: "Persönliche Betreuung",
  text: "Die Kommunikation war unkompliziert und beruhigend. Ich konnte alle notwendigen Informationen erhalten, um meinen Aufenthalt vorzubereiten.",
  image: "https://i.pravatar.cc/100?img=13",
  alt: "Symbolisches Porträt eines Mannes",
},

es: {
  // TOPBAR
  topbarService: "Gestión de servicios médicos",
  topbarLocation: "Túnez",
  topbarEmail: "Enviar un correo electrónico",
  topbarPhone: "Llamar a Glomed Group",

  // NAVBAR
  navHome: "Inicio",
  navServices: "Servicios",
  navSurgery: "Especialidades",
  navAbout: "Quiénes somos",
  navContact: "Contacto",
  navCTA: "Organizar una estancia",

  navOrthopedics: "Ortopedia",
  navCardiology: "Cardiología",
  navPneumology: "Neumología",
  navUrology: "Urología",
  navPediatrics: "Pediatría",
  navGastro: "Gastroenterología",
  navOphthalmology: "Oftalmología",
  navGynecology: "Ginecología",
  /* nuevas especialidades */
  navOncology: "Oncología",
  navHematology: "Hematología",
  navENT: "Otorrinolaringología",
  navGeneralSurgery: "Cirugía general",
  navVascularSurgery: "Cirugía vascular",
  navOpen: "Abrir el menú",
  navClose: "Cerrar el menú",
  navLabel: "Navegación principal",

  /* HERO */
  hero1Alt: "Profesionales sanitarios en un entorno médico",
  hero1Eyebrow: "TU ALIADO EN SALUD EN TÚNEZ",
  hero1Title: "Glomed Group,",
  hero1Accent: "a tu lado en cada etapa.",
  hero1Text: "Glomed Group te acompaña en la organización de tu estancia médica en Túnez: coordinación, alojamiento, traslados y orientación hacia profesionales sanitarios colaboradores.",
  hero1Primary: "Tu recorrido asistencial",
  hero1Secondary: "Descubrir nuestros servicios",

  hero2Alt: "Entorno de tratamientos estéticos",
  hero2Eyebrow: "ESTÉTICA Y BIENESTAR",
  hero2Title: "Cuida de ti,",
  hero2Accent: "con total tranquilidad.",
  hero2Text: "Te ayudamos a organizar tu proyecto de tratamientos estéticos y a coordinar las diferentes etapas de tu estancia con los profesionales correspondientes.",
  hero2Primary: "Descubrir nuestros servicios",
  hero2Secondary: "Contactar con nosotros",

  hero3Alt: "Equipo médico en un centro sanitario",
  hero3Eyebrow: "TU ESTANCIA MÉDICA ORGANIZADA",
  hero3Title: "Desde tu llegada",
  hero3Accent: "hasta tu acompañamiento.",
  hero3Text: "Alojamiento, traslados y coordinación: te ayudamos a preparar tu estancia en Túnez según tu solicitud y tus necesidades.",
  hero3Primary: "Organizar una estancia",
  hero3Secondary: "¿Cómo funciona?",

  hero4Alt: "Equipo médico en un quirófano moderno",
  hero4Eyebrow: "CIRUGÍA Y ESTANCIA MÉDICA EN TÚNEZ",
  hero4Title: "Tu cirugía,",
  hero4Accent: "una estancia organizada con cuidado.",
  hero4Text: "Glomed Group te acompaña en la preparación de tu estancia quirúrgica en Túnez: coordinación de citas, organización de traslados, alojamiento y contacto con profesionales sanitarios colaboradores.",
  hero4Primary: "Organizar mi estancia",
  hero4Secondary: "Descubrir nuestros servicios",

  hero5Alt: "Entorno médico moderno y acompañamiento a los pacientes",
  hero5Eyebrow: "GLOMED GROUP · TU ALIADO EN SALUD EN TÚNEZ",
  hero5Title: "Tu recorrido de salud,",
  hero5Accent: "acompañamiento en cada etapa.",
  hero5Text: "Chequeos médicos, consultas especializadas, cirugía, radiología y rehabilitación: Glomed Group también te acompaña en la organización de tu estancia en Túnez, coordinando alojamiento y traslados con profesionales y centros sanitarios colaboradores.",
  hero5Primary: "Tu recorrido de salud",
  hero5Secondary: "Descubrir nuestros servicios",

  heroTrustTitle: "Acompañamiento personalizado",
  heroTrustText: "Desde la preparación hasta la organización de tu estancia",
  heroBottom1: "ACOMPAÑAMIENTO",
  heroBottom2: "COORDINACIÓN",
  heroBottom3: "ESTANCIA MÉDICA",
  heroLabel: "Presentación de Glomed Group",
  heroDotsLabel: "Elegir una diapositiva",
  heroDotLabel: "Mostrar la diapositiva",
  heroPrevious: "Diapositiva anterior",
  heroNext: "Diapositiva siguiente",

  /* GALLERY */
  galleryEyebrow: "GLOMED GROUP · TÚNEZ",
  galleryTitle: "Atención médica especializada,",
  galleryAccent: "un acompañamiento humano",
  galleryDescription: "Descubre nuestras especialidades médicas y recibe un acompañamiento personalizado para tu recorrido asistencial en Túnez.",
  galleryLabel: "Nuestras especialidades médicas",
  galleryDiscover: "Descubrir la especialidad",

  galleryUrology: "Urología",
  galleryPediatrics: "Pediatría",
  galleryGastro: "Gastroenterología",
  galleryPneumology: "Neumología",
  galleryCardiology: "Cardiología",
  galleryOphthalmology: "Oftalmología",
  galleryOrthopedics: "Ortopedia",
  galleryGynecology: "Ginecología",

  galleryAltUrology: "Atención médica en urología",
  galleryAltPediatrics: "Atención médica en pediatría",
  galleryAltGastro: "Atención médica en gastroenterología",
  galleryAltPneumology: "Atención médica en neumología",
  galleryAltCardiology: "Atención médica en cardiología",
  galleryAltOphthalmology: "Atención médica en oftalmología",
  galleryAltOrthopedics: "Atención médica en ortopedia",
  galleryAltGynecology: "Atención médica en ginecología",

  /* SERVICES */
  eyebrow: "NUESTROS ÁMBITOS DE ACOMPAÑAMIENTO",
  title: "Gestión de servicios",
  accent: "médicos.",
  description:
    "Glomed Group te acompaña en la organización de tu estancia médica en Túnez, desde tu primera solicitud hasta los aspectos prácticos de tu viaje.",

  services: [
    {
      icon: "bi bi-heart-pulse",
      title: "Cirugía estética",
      text: "Organización y coordinación de tu proyecto con profesionales sanitarios colaboradores, según tu solicitud.",
    },
    {
      icon: "bi bi-person-hearts",
      title: "Medicina estética",
      text: "Acompañamiento para tus solicitudes de tratamientos estéticos y orientación hacia los profesionales correspondientes.",
    },
    {
      icon: "bi bi-scissors",
      title: "Trasplante capilar",
      text: "Ayuda para organizar tu estancia y contactar con profesionales especializados.",
    },
    {
      icon: "bi bi-emoji-smile",
      title: "Implantes dentales",
      text: "Coordinación de tu solicitud de atención dental y organización práctica de tu estancia.",
    },
    {
      icon: "bi bi-activity",
      title: "Otras especialidades médicas",
      text: "Estudio de tu solicitud y orientación hacia los profesionales o centros adecuados, según las posibilidades disponibles.",
    },
    {
      icon: "bi bi-clipboard2-pulse",
      title: "Seguimiento y citas médicas",
      text: "Ayuda para coordinar las citas y reunir la información necesaria para preparar tu estancia.",
    },
  ],

  note:
    "Los tratamientos, las indicaciones médicas, las terapias y los resultados esperados son evaluados por los profesionales sanitarios competentes. Cualquier intervención depende de su valoración y de tu situación individual.",

  processEyebrow: "UN RECORRIDO EN 6 ETAPAS",
  processTitle: "Desde tu solicitud",
  processAccent: "hasta tu estancia en Túnez.",
  processDescription:
    "Preparamos cada etapa contigo para que la organización de tu estancia sea más clara y sencilla.",

  steps: [
    {
      icon: "bi bi-chat-dots",
      title: "Tu solicitud",
      text: "Nos explicas tu proyecto, tus expectativas y los tratamientos que deseas considerar.",
    },
    {
      icon: "bi bi-file-earmark-medical",
      title: "Orientación médica",
      text: "Con tu autorización, facilitamos la transmisión de la información necesaria a los profesionales sanitarios correspondientes. El médico evalúa tu situación.",
    },
    {
      icon: "bi bi-calendar-check",
      title: "Organización de la estancia",
      text: "Te ayudamos a coordinar las citas, las fechas previstas y los aspectos prácticos de tu estancia.",
    },
    {
      icon: "bi bi-airplane",
      title: "Recepción y traslados",
      text: "Según el servicio acordado, organizamos tu recepción y los traslados entre el aeropuerto, el alojamiento y los lugares de tus citas.",
    },
    {
      icon: "bi bi-building",
      title: "Alojamiento",
      text: "Te ayudamos a buscar o reservar un alojamiento adecuado a la duración prevista de tu estancia.",
    },
    {
      icon: "bi bi-heart",
      title: "Acompañamiento durante tu estancia",
      text: "Facilitamos la coordinación práctica durante tu estancia. Las decisiones y la atención médica siguen siendo responsabilidad de los profesionales sanitarios.",
    },
  ],

  ctaEyebrow: "TU PROYECTO EMPIEZA AQUÍ",
  ctaTitle: "¿Estás pensando en realizar una estancia médica en Túnez?",
  ctaText:
    "Cuéntanos tu solicitud para hablar sobre las posibilidades de acompañamiento y los siguientes pasos.",
  ctaButton: "Organizar una estancia",

  /* PARTNERSHIPS */
  partnersEyebrow: "NUESTRA PROYECCIÓN INTERNACIONAL",
  partnersTitle: "Una red internacional,",
  partnersAccent: "un destino: Túnez.",
  partnersDescription:
    "Desde África, los países del Golfo y Europa, Glomed Group acompaña a los pacientes en la organización de su recorrido asistencial en Túnez, facilitando la coordinación con profesionales y centros sanitarios colaboradores.",
  partnersRegionAfrica: "África",
  partnersRegionGulf: "Golfo",
  partnersRegionEurope: "Europa",
  partnersDestination: "Un destino: Túnez.",
  partnersBottomText:
    "Un acompañamiento pensado en función de las necesidades de cada paciente.",
  partnersCTA: "Hablemos de tu atención médica",
  partnersFlag: "Bandera",

  // PAÍSES
  countryAlgeria: "Argelia",
  countryLibya: "Libia",
  countryMauritania: "Mauritania",
  countryIvoryCoast: "Costa de Marfil",
  countryBurkinaFaso: "Burkina Faso",
  countryNiger: "Níger",
  countryCameroon: "Camerún",
  countryGabon: "Gabón",
  countrySaudiArabia: "Arabia Saudí",
  countryUAE: "Emiratos Árabes Unidos",
  countryQatar: "Catar",
  countryKuwait: "Kuwait",
  countryBahrain: "Baréin",
  countryOman: "Omán",
  countryFrance: "Francia",
  countryItaly: "Italia",
  countryGermany: "Alemania",

  /* ABOUT */
  aboutLabel: "¿QUIÉNES SOMOS?",
  aboutTitle: "La coordinación al servicio de",
  aboutAccent: "tu estancia médica.",
  aboutDescription:
    "Glomed Group te acompaña en la organización de los servicios relacionados con tu estancia médica en Túnez, con un enfoque personalizado, claro y atento a tus necesidades.",

  aboutImageAlt: "Profesional sanitario en un entorno médico",
  aboutBadgeTitle: "Una estancia mejor organizada",
  aboutBadgeText: "Un acompañamiento adaptado a tus necesidades.",

  aboutEyebrow: "NUESTRA IDENTIDAD Y MISIÓN",
  aboutHeading: "Tu aliado para organizar tu estancia médica en Túnez.",
  aboutIntro:
    "Glomed Group es una agencia especializada en la gestión y coordinación de los servicios relacionados con las estancias médicas. Facilitamos la organización de tu viaje a Túnez y te acompañamos en los aspectos prácticos de tu estancia.",

  aboutAccordion1Title: "¿Quiénes somos?",
  aboutAccordion1Text:
    "Glomed Group acompaña a las personas que desean organizar una estancia médica en Túnez. Nuestro papel consiste en facilitar la coordinación entre las solicitudes de los pacientes, los profesionales sanitarios correspondientes y los proveedores necesarios para organizar la estancia.",

  aboutAccordion2Title: "Nuestra misión",
  aboutAccordion2Text:
    "Nuestra misión es simplificar la organización de tu estancia ayudándote a preparar cada etapa: contacto inicial, coordinación de citas, organización de desplazamientos y búsqueda de un alojamiento adaptado a tus necesidades.",

  aboutAccordion3Title: "Gestión de servicios relacionados con la estancia médica",
  aboutAccordion3Text:
    "Facilitamos la coordinación de los servicios relacionados con tu atención y el contacto con los profesionales o centros sanitarios correspondientes. La evaluación de tu estado de salud, la elección de los tratamientos y las decisiones médicas corresponden a los profesionales sanitarios competentes.",

  aboutAccordion4Title: "Nuestros valores y compromisos",
  aboutAccordion4Text:
    "Damos prioridad a la escucha, la claridad de la información, la disponibilidad y un acompañamiento adaptado a cada solicitud. Nuestro objetivo es facilitar la organización práctica de tu estancia, respetando tu privacidad y el papel de los profesionales sanitarios.",

  aboutCTA: "Tu recorrido de salud",

  /* REHABILITATION */
  rehabEyebrow: "REHABILITACIÓN Y READAPTACIÓN",
  rehabTitle: "Recupérate bien",
  rehabAccent: "después de tu operación.",
  rehabDescription: "Una buena recuperación forma parte del proceso asistencial. Glomed Group coordina la rehabilitación, la readaptación y la convalecencia según las recomendaciones del equipo médico.",
  rehabStep: "Etapa",
  rehabStep1Title: "Seguimiento postoperatorio",
  rehabStep1Text: "Coordinación de los controles y las citas con el equipo médico durante los días posteriores a la intervención.",
  rehabStep2Title: "Rehabilitación funcional",
  rehabStep2Text: "Organización de las sesiones de fisioterapia prescritas por el médico para recuperar progresivamente la movilidad y la fuerza.",
  rehabStep3Title: "Readaptación",
  rehabStep3Text: "Acompañamiento para recuperar poco a poco las actividades cotidianas, según el programa establecido por los profesionales sanitarios.",
  rehabStep4Title: "Convalecencia y regreso",
  rehabStep4Text: "Alojamiento adecuado durante la recuperación, seguido de la preparación del regreso y de las citas de seguimiento.",
  rehabImageAlt: "Sesión de rehabilitación después de una operación",
  rehabBadgeTitle: "Una recuperación supervisada",
  rehabBadgeText: "Según el programa de tu médico",
  rehabGoal1: "Aliviar el dolor",
  rehabGoal2: "Recuperar la movilidad",
  rehabGoal3: "Retomar las actividades",
  rehabDisclaimer: "El programa de rehabilitación, su duración y los ejercicios son establecidos por los profesionales sanitarios tras una evaluación individual. Glomed Group coordina la organización práctica.",
  rehabCTA: "Organizar mi recuperación",

  /* TESTIMONIALS */
  eyebrow: "TESTIMONIOS",
  title: "Han confiado",
  accent: "en nosotros",
  description:
    "Descubre las experiencias de pacientes acompañados en la organización de su recorrido asistencial en Túnez.",
  starsLabel: "5 estrellas",

  name: "Amine B.",
  country: "🇩🇿 Argelia",
  service: "Acompañamiento médico",
  text: "Me gustó la disponibilidad del equipo y la información recibida para preparar mi estancia médica en Túnez.",
  image: "https://i.pravatar.cc/100?img=11",
  alt: "Retrato ilustrativo de un hombre",

  name: "Fatou S.",
  country: "🇸🇳 Senegal",
  service: "Organización de la estancia",
  text: "El equipo me ayudó a comprender mejor las diferentes etapas y a organizar mi viaje a Túnez.",
  image: "/images/profil-senegal.png",
  alt: "Retrato de una mujer senegalesa",

  name: "Ahmed K.",
  country: "🇸🇦 Arabia Saudí",
  service: "Coordinación del recorrido asistencial",
  text: "Valoré la calidad de la comunicación y el acompañamiento ofrecido durante toda la preparación de mi estancia.",
  image: "https://i.pravatar.cc/100?img=12",
  alt: "Retrato ilustrativo de un hombre",

  name: "Mariam A.",
  country: "🇦🇪 Emiratos Árabes Unidos",
  service: "Asistencia y coordinación",
  text: "Un equipo atento que me proporcionó información útil para organizar las diferentes etapas de mi estancia.",
  image: "https://i.pravatar.cc/100?img=44",
  alt: "Retrato ilustrativo de una mujer",

  name: "Sophie M.",
  country: "🇫🇷 Francia",
  service: "Organización de la estancia",
  text: "Me gustó la claridad de la información y la disponibilidad del equipo para responder a mis preguntas.",
  image: "https://i.pravatar.cc/100?img=45",
  alt: "Retrato ilustrativo de una mujer",

  name: "Marc D.",
  country: "🇧🇪 Bélgica",
  service: "Acompañamiento personalizado",
  text: "La comunicación fue sencilla y tranquilizadora. Pude obtener la información necesaria para preparar mi estancia.",
  image: "https://i.pravatar.cc/100?img=13",
  alt: "Retrato ilustrativo de un hombre",
},


};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("fr");

  const changeLanguage = (lang) => {
    if (["fr", "en", "ar", "it", "de", "es"].includes(lang)) {
      setLanguage(lang);
    }
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  const t = (key) => {
    return translations[language]?.[key] || translations.fr[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: changeLanguage, t, dir }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
