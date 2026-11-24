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

it: {
  eyebrow: "I NOSTRI SERVIZI DI ASSISTENZA",
  title: "Gestione dei servizi",
  accent: "medici.",
  description:
    "Glomed Group vi accompagna nell'organizzazione del vostro soggiorno medico in Tunisia, dalla prima richiesta agli aspetti pratici del vostro viaggio.",

  services: [
    {
      icon: "bi bi-heart-pulse",
      title: "Chirurgia estetica",
      text: "Organizzazione e coordinamento del vostro progetto con professionisti sanitari partner, in base alle vostre esigenze.",
    },
    {
      icon: "bi bi-person-hearts",
      title: "Medicina estetica",
      text: "Assistenza per le vostre richieste di trattamenti estetici e orientamento verso i professionisti competenti.",
    },
    {
      icon: "bi bi-scissors",
      title: "Trapianto di capelli",
      text: "Supporto nell'organizzazione del vostro soggiorno e nel contatto con professionisti specializzati.",
    },
    {
      icon: "bi bi-emoji-smile",
      title: "Impianti dentali",
      text: "Coordinamento della vostra richiesta di cure dentali e organizzazione pratica del vostro soggiorno.",
    },
    {
      icon: "bi bi-activity",
      title: "Altre specialità mediche",
      text: "Valutazione della vostra richiesta e orientamento verso i professionisti o le strutture più adatte, in base alle possibilità disponibili.",
    },
    {
      icon: "bi bi-clipboard2-pulse",
      title: "Assistenza e appuntamenti",
      text: "Supporto nel coordinamento degli appuntamenti e nella raccolta delle informazioni necessarie per preparare il vostro soggiorno.",
    },
  ],

  note:
    "Le cure, le indicazioni mediche, i trattamenti e i risultati attesi vengono valutati dai professionisti sanitari competenti. Ogni intervento dipende dal loro parere e dalla vostra situazione individuale.",

  processEyebrow: "UN PERCORSO IN 6 FASI",
  processTitle: "Dalla vostra richiesta",
  processAccent: "al vostro soggiorno in Tunisia.",
  processDescription:
    "Ogni fase viene preparata insieme a voi per rendere l'organizzazione del vostro soggiorno più chiara e semplice.",

  steps: [
    {
      icon: "bi bi-chat-dots",
      title: "La vostra richiesta",
      text: "Ci presentate il vostro progetto, le vostre aspettative e i trattamenti che desiderate prendere in considerazione.",
    },
    {
      icon: "bi bi-file-earmark-medical",
      title: "Orientamento medico",
      text: "Con il vostro consenso, facilitiamo la trasmissione delle informazioni necessarie ai professionisti sanitari interessati. Il medico valuta la vostra situazione.",
    },
    {
      icon: "bi bi-calendar-check",
      title: "Organizzazione del soggiorno",
      text: "Vi aiutiamo a coordinare gli appuntamenti, le date previste e gli aspetti pratici del vostro soggiorno.",
    },
    {
      icon: "bi bi-airplane",
      title: "Accoglienza e trasferimenti",
      text: "In base al servizio concordato, organizziamo la vostra accoglienza e i trasferimenti tra l'aeroporto, l'alloggio e i luoghi degli appuntamenti.",
    },
    {
      icon: "bi bi-building",
      title: "Alloggio",
      text: "Vi assistiamo nella ricerca o nella prenotazione di un alloggio adatto alla durata prevista del vostro soggiorno.",
    },
    {
      icon: "bi bi-heart",
      title: "Assistenza sul posto",
      text: "Facilitiamo il coordinamento pratico durante il vostro soggiorno. Le decisioni e le cure mediche restano sotto la responsabilità dei professionisti sanitari.",
    },
  ],

  ctaEyebrow: "IL VOSTRO PROGETTO INIZIA QUI",
  ctaTitle: "State pensando a un soggiorno medico in Tunisia?",
  ctaText:
    "Presentateci la vostra richiesta per discutere le possibilità di assistenza e le prossime fasi.",
  ctaButton: "Organizzare un soggiorno",
},

de: {
  eyebrow: "UNSERE BETREUUNGSBEREICHE",
  title: "Organisation medizinischer",
  accent: "Dienstleistungen.",
  description:
    "Glomed Group begleitet Sie bei der Organisation Ihres medizinischen Aufenthalts in Tunesien – von Ihrer ersten Anfrage bis hin zu den praktischen Aspekten Ihrer Reise.",

  services: [
    {
      icon: "bi bi-heart-pulse",
      title: "Ästhetische Chirurgie",
      text: "Organisation und Koordination Ihres Vorhabens mit unseren medizinischen Partnern, entsprechend Ihren Wünschen.",
    },
    {
      icon: "bi bi-person-hearts",
      title: "Ästhetische Medizin",
      text: "Unterstützung bei Ihren Anfragen zu ästhetischen Behandlungen und Vermittlung an die zuständigen Fachkräfte.",
    },
    {
      icon: "bi bi-scissors",
      title: "Haartransplantation",
      text: "Unterstützung bei der Organisation Ihres Aufenthalts und bei der Kontaktaufnahme mit spezialisierten Fachkräften.",
    },
    {
      icon: "bi bi-emoji-smile",
      title: "Zahnimplantate",
      text: "Koordination Ihrer Anfrage zu zahnmedizinischen Behandlungen und praktische Organisation Ihres Aufenthalts.",
    },
    {
      icon: "bi bi-activity",
      title: "Weitere medizinische Fachgebiete",
      text: "Prüfung Ihrer Anfrage und Vermittlung an geeignete Fachkräfte oder Einrichtungen entsprechend den verfügbaren Möglichkeiten.",
    },
    {
      icon: "bi bi-clipboard2-pulse",
      title: "Betreuung und Termine",
      text: "Unterstützung bei der Koordination von Terminen und den Informationen, die zur Vorbereitung Ihres Aufenthalts erforderlich sind.",
    },
  ],

  note:
    "Medizinische Leistungen, Indikationen, Behandlungen und erwartete Ergebnisse werden von den zuständigen medizinischen Fachkräften beurteilt. Jeder Eingriff hängt von deren Einschätzung und Ihrer individuellen Situation ab.",

  processEyebrow: "IHR ABLAUF IN 6 SCHRITTEN",
  processTitle: "Von Ihrer Anfrage",
  processAccent: "bis zu Ihrem Aufenthalt in Tunesien.",
  processDescription:
    "Jeder Schritt wird gemeinsam mit Ihnen vorbereitet, damit die Organisation Ihres Aufenthalts klarer und einfacher wird.",

  steps: [
    {
      icon: "bi bi-chat-dots",
      title: "Ihre Anfrage",
      text: "Sie stellen uns Ihr Vorhaben, Ihre Erwartungen und die Behandlungen vor, die Sie in Betracht ziehen.",
    },
    {
      icon: "bi bi-file-earmark-medical",
      title: "Medizinische Beratung",
      text: "Mit Ihrer Zustimmung erleichtern wir die Übermittlung der erforderlichen Informationen an die zuständigen medizinischen Fachkräfte. Der Arzt beurteilt Ihre Situation.",
    },
    {
      icon: "bi bi-calendar-check",
      title: "Organisation des Aufenthalts",
      text: "Wir unterstützen Sie bei der Koordination der Termine, der geplanten Reisedaten und der praktischen Aspekte Ihres Aufenthalts.",
    },
    {
      icon: "bi bi-airplane",
      title: "Empfang und Transfer",
      text: "Je nach vereinbarter Leistung organisieren wir Ihren Empfang und Ihre Transfers zwischen Flughafen, Unterkunft und den Orten Ihrer Termine.",
    },
    {
      icon: "bi bi-building",
      title: "Unterkunft",
      text: "Wir unterstützen Sie bei der Suche oder Buchung einer Unterkunft, die zur geplanten Dauer Ihres Aufenthalts passt.",
    },
    {
      icon: "bi bi-heart",
      title: "Betreuung vor Ort",
      text: "Wir erleichtern die organisatorische Koordination während Ihres Aufenthalts. Medizinische Entscheidungen und Behandlungen liegen weiterhin in der Verantwortung der medizinischen Fachkräfte.",
    },
  ],

  ctaEyebrow: "IHR VORHABEN BEGINNT HIER",
  ctaTitle: "Planen Sie einen medizinischen Aufenthalt in Tunesien?",
  ctaText:
    "Teilen Sie uns Ihre Anfrage mit, damit wir die Betreuungsmöglichkeiten und die nächsten Schritte besprechen können.",
  ctaButton: "Aufenthalt organisieren",
},

es: {
  eyebrow: "NUESTROS ÁMBITOS DE ACOMPAÑAMIENTO",
  title: "Gestión de servicios",
  accent: "médicos.",
  description:
    "Glomed Group te acompaña en la organización de tu estancia médica en Túnez, desde tu primera solicitud hasta todos los aspectos prácticos de tu viaje.",

  services: [
    {
      icon: "bi bi-heart-pulse",
      title: "Cirugía estética",
      text: "Organización y coordinación de tu proyecto con profesionales sanitarios asociados, según tus necesidades.",
    },
    {
      icon: "bi bi-person-hearts",
      title: "Medicina estética",
      text: "Acompañamiento para tus solicitudes de tratamientos estéticos y orientación hacia los profesionales correspondientes.",
    },
    {
      icon: "bi bi-scissors",
      title: "Trasplante capilar",
      text: "Ayuda en la organización de tu estancia y en el contacto con profesionales especializados.",
    },
    {
      icon: "bi bi-emoji-smile",
      title: "Implantes dentales",
      text: "Coordinación de tu solicitud de atención odontológica y organización práctica de tu estancia.",
    },
    {
      icon: "bi bi-activity",
      title: "Otras especialidades médicas",
      text: "Estudio de tu solicitud y orientación hacia los profesionales o centros sanitarios adecuados, según las posibilidades disponibles.",
    },
    {
      icon: "bi bi-clipboard2-pulse",
      title: "Seguimiento y citas médicas",
      text: "Ayuda en la coordinación de las citas médicas y de la información necesaria para preparar tu estancia.",
    },
  ],

  note:
    "Los cuidados, las indicaciones médicas, los tratamientos y los resultados esperados son evaluados por los profesionales sanitarios competentes. Cualquier intervención depende de su valoración y de tu situación individual.",

  processEyebrow: "UN PROCESO EN 6 ETAPAS",
  processTitle: "Desde tu solicitud",
  processAccent: "hasta tu estancia en Túnez.",
  processDescription:
    "Cada etapa se prepara contigo para que la organización de tu estancia sea más clara y sencilla.",

  steps: [
    {
      icon: "bi bi-chat-dots",
      title: "Tu solicitud",
      text: "Nos presentas tu proyecto, tus expectativas y los tratamientos que deseas considerar.",
    },
    {
      icon: "bi bi-file-earmark-medical",
      title: "Orientación médica",
      text: "Con tu consentimiento, facilitamos la transmisión de la información necesaria a los profesionales sanitarios correspondientes. El médico evalúa tu situación.",
    },
    {
      icon: "bi bi-calendar-check",
      title: "Organización de la estancia",
      text: "Te ayudamos a coordinar las citas médicas, las fechas previstas y los aspectos prácticos de tu estancia.",
    },
    {
      icon: "bi bi-airplane",
      title: "Recepción y traslado",
      text: "Según el servicio acordado, organizamos tu recepción y tus traslados entre el aeropuerto, el alojamiento y los lugares de las citas médicas.",
    },
    {
      icon: "bi bi-building",
      title: "Alojamiento",
      text: "Te ayudamos a buscar o reservar un alojamiento adecuado a la duración prevista de tu estancia.",
    },
    {
      icon: "bi bi-heart",
      title: "Acompañamiento durante tu estancia",
      text: "Facilitamos la coordinación práctica durante tu estancia. Las decisiones y los tratamientos médicos siguen siendo responsabilidad de los profesionales sanitarios.",
    },
  ],

  ctaEyebrow: "TU PROYECTO COMIENZA AQUÍ",
  ctaTitle: "¿Estás pensando en realizar una estancia médica en Túnez?",
  ctaText:
    "Cuéntanos qué necesitas para hablar sobre las posibilidades de acompañamiento y los próximos pasos.",
  ctaButton: "Organizar una estancia",
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