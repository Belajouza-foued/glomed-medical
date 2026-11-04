
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
