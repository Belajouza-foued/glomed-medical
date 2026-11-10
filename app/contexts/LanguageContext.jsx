
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



};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("fr");

  const changeLanguage = (lang) => {
    if (["fr", "en", "ar"].includes(lang)) {
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
