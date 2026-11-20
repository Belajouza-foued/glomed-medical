"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import "./css/AboutCards.css";

const CARDS = [
  { icon: "bi bi-car-front", image: "/images/aeroport.avif", hoverImage: "/images/aeropert-1.avif", tone: "default" },
  { icon: "bi bi-building", image: "/images/hebergement-1.avif", hoverImage: "/images/hotel-5-etoiles.avif", tone: "default" },
  { icon: "bi bi-heart-pulse", image: "/images/conva.avif", hoverImage: "/images/conva-3.avif", tone: "default" },
  { icon: "bi bi-airplane", image: "/images/accueil-1.avif", hoverImage: "/images/accueil.avif", tone: "default" },
  { icon: "bi bi-translate", image: "/images/linguise.jpg", hoverImage: "/images/linguise-1.webp", tone: "default" },
  { icon: "bi bi-telephone-inbound", image: "/images/suivi.jpg", hoverImage: "/images/suivi-1.jpg", tone: "default" },
  // --- nouvelles cartes ---
  { icon: "bi bi-activity", image: "/images/plane.avif", hoverImage: "/images/ambulance.avif", tone: "red" },
  { icon: "bi bi-gem", image: "/images/acces-vip.avif", hoverImage: "/images/acces-vip-1.avif", tone: "gold" },
  { icon: "bi bi-compass", image: "/images/culture.avif", hoverImage: "/images/sahara.webp", tone: "green" },
];

const translations = {
  fr: {
    eyebrow: "À PROPOS · NOS SERVICES GLOMED",
    title: "Votre séjour,",
    accent: "organisé de A à Z.",
    description:
      "En plus de la coordination médicale, Glomed Group s’occupe de tout ce qui rend votre séjour en Tunisie plus simple et plus confortable.",
    readMore: "Lire la suite",
    readLess: "Lire moins",
    cards: [
      {
        title: "Transport et transferts",
        text: "Transferts entre l’aéroport, votre hébergement et les lieux de rendez-vous, selon la formule convenue.",
        more: ["Trajets entre l’aéroport, votre hébergement et les cliniques", "Véhicules confortables avec chauffeur", "Horaires adaptés à vos rendez-vous médicaux"],
      },
      {
        title: "Hébergement",
        tag: "3★ · 4★ · 5★",
        text: "Aide à la recherche et à la réservation d’un hébergement adapté à la durée de votre séjour.",
        more: [
          "Hôtels 3 étoiles : un confort essentiel à un tarif maîtrisé",
          "Hôtels 4 étoiles : chambres spacieuses et services complets",
          "Hôtels 5 étoiles : prestations haut de gamme et suites",
          "Suites et appartements avec espace salon, pratiques pour les longs séjours ou les accompagnants",
          "Hébergement proche des cliniques et des lieux de rendez-vous",
        ],
      },
      {
        title: "Convalescence",
        text: "Organisation de votre repos après les soins, dans un cadre adapté aux recommandations de l’équipe médicale.",
        more: ["Un cadre calme et confortable pour récupérer", "Un séjour adapté aux consignes de votre médecin", "Possibilité d’être accompagné par un proche"],
      },
      {
        title: "Accueil à l’aéroport",
        text: "Une prise en charge dès votre arrivée en Tunisie, pour un début de séjour plus serein.",
        more: ["Accueil personnalisé à votre arrivée", "Aide pour les bagages et les formalités pratiques", "Transfert direct vers votre hébergement"],
      },
      {
        title: "Assistance linguistique",
        text: "Aide à la communication avec les équipes médicales et les différents interlocuteurs pendant votre séjour.",
        more: ["Aide à la communication avec les équipes médicales", "Explication des informations pratiques de votre séjour", "Accompagnement lors des rendez-vous, selon la formule choisie"],
      },
      {
        title: "Suivi après le séjour",
        text: "Coordination des informations et des rendez-vous de suivi lorsque les professionnels de santé les recommandent.",
        more: ["Coordination des documents et des comptes rendus", "Aide à l’organisation des rendez-vous de contrôle", "Échanges avec les professionnels de santé concernés"],
      },
      {
        title: "Transport médicalisé et urgences",
        tag: "Urgence",
        text: "Ambulance et transfert aérien sanitaire en urgence lorsque votre état le nécessite, en lien avec l’équipe médicale.",
        more: [
          "Ambulance pour les transferts entre l’aéroport, l’hôpital et votre hébergement",
          "Organisation d’un avion sanitaire en cas d’urgence, selon l’avis médical et les disponibilités",
          "Coordination avec l’équipe médicale avant, pendant et après le transfert",
          "Aide pour les formalités liées au déplacement",
        ],
      },
      {
        title: "Service VIP",
        tag: "VIP",
        text: "Un accompagnement haut de gamme pour un séjour discret, confortable et entièrement sur mesure.",
        more: [
          "Accueil personnalisé à l’aéroport, avec salon VIP selon disponibilité",
          "Location de voitures de luxe, avec ou sans chauffeur",
          "Hôtels de prestige et suites haut de gamme",
          "Discrétion et confidentialité de votre séjour",
          "Interlocuteur dédié, selon la formule choisie",
        ],
      },
      {
        title: "Tourisme et découvertes",
        tag: "Tourisme",
        text: "Découvrez la Tunisie avec des guides et des services touristiques, avant ou après vos soins.",
        more: [
          "Excursions dans le Sahara : Douz, dunes et nuit en camp",
          "Visites guidées des médinas et des sites historiques (Carthage, Kairouan, Djerba…)",
          "Circuits culturels et découverte de la gastronomie locale",
          "Guides parlant plusieurs langues",
          "Programmes adaptés à votre état de santé et aux recommandations médicales",
        ],
      },
    ],
    cta: "Parler à notre équipe",
  },

  en: {
    eyebrow: "ABOUT US · GLOMED SERVICES",
    title: "Your stay,",
    accent: "organized from A to Z.",
    description:
      "In addition to medical coordination, Glomed Group takes care of everything that makes your stay in Tunisia easier and more comfortable.",
    readMore: "Read more",
    readLess: "Read less",
    cards: [
      {
        title: "Transport and Transfers",
        text: "Transfers between the airport, your accommodation and appointment locations, according to the agreed arrangement.",
        more: ["Trips between the airport, your accommodation and clinics", "Comfortable vehicles with a driver", "Schedules adapted to your medical appointments"],
      },
      {
        title: "Accommodation",
        tag: "3★ · 4★ · 5★",
        text: "Assistance with finding and booking accommodation suited to the length of your stay.",
        more: [
          "3-star hotels: essential comfort at a controlled price",
          "4-star hotels: spacious rooms and full services",
          "5-star hotels: premium services and suites",
          "Suites and apartments with a living area, practical for long stays or companions",
          "Accommodation close to clinics and appointment locations",
        ],
      },
      {
        title: "Recovery and Convalescence",
        text: "Organization of your recovery period in an environment suited to the recommendations of your medical team.",
        more: ["A calm, comfortable setting to recover", "A stay adapted to your doctor’s instructions", "Option to be accompanied by a relative"],
      },
      {
        title: "Airport Reception",
        text: "Assistance from the moment you arrive in Tunisia, helping you start your stay with peace of mind.",
        more: ["Personalized welcome on arrival", "Help with luggage and practical formalities", "Direct transfer to your accommodation"],
      },
      {
        title: "Language Assistance",
        text: "Help with communication between you, medical teams and other contacts throughout your stay.",
        more: ["Help communicating with medical teams", "Explanation of the practical information for your stay", "Support during appointments, depending on the chosen package"],
      },
      {
        title: "Post-Stay Follow-up",
        text: "Coordination of information and follow-up appointments when recommended by healthcare professionals.",
        more: ["Coordination of documents and medical reports", "Help organizing check-up appointments", "Exchanges with the healthcare professionals concerned"],
      },
      {
        title: "Medical Transport and Emergencies",
        tag: "Emergency",
        text: "Ambulance and emergency air medical transfer when your condition requires it, in coordination with the medical team.",
        more: [
          "Ambulance for transfers between the airport, the hospital and your accommodation",
          "Arrangement of an air ambulance in an emergency, depending on medical advice and availability",
          "Coordination with the medical team before, during and after the transfer",
          "Help with travel-related formalities",
        ],
      },
      {
        title: "VIP Service",
        tag: "VIP",
        text: "Premium support for a discreet, comfortable and fully tailored stay.",
        more: [
          "Personalized airport welcome, with VIP lounge subject to availability",
          "Luxury car rental, with or without a driver",
          "Prestige hotels and high-end suites",
          "Discretion and confidentiality throughout your stay",
          "A dedicated contact, depending on the chosen package",
        ],
      },
      {
        title: "Tourism and Discovery",
        tag: "Tourism",
        text: "Discover Tunisia with guides and tourist services, before or after your care.",
        more: [
          "Sahara excursions: Douz, dunes and a night in a desert camp",
          "Guided visits of medinas and historic sites (Carthage, Kairouan, Djerba…)",
          "Cultural tours and discovery of local cuisine",
          "Multilingual guides",
          "Programs adapted to your health and medical recommendations",
        ],
      },
    ],
    cta: "Talk to our team",
  },

  ar: {
    eyebrow: "من نحن · خدمات GLOMED",
    title: "إقامتكم،",
    accent: "منظمة من البداية إلى النهاية.",
    description:
      "إلى جانب التنسيق الطبي، تتولى Glomed Group تنظيم كل ما يجعل إقامتكم في تونس أكثر سهولة وراحة.",
    readMore: "اقرأ المزيد",
    readLess: "اقرأ أقل",
    cards: [
      {
        title: "النقل والتنقلات",
        text: "تنظيم التنقل بين المطار ومكان الإقامة ومواقع المواعيد الطبية، وفقًا للاتفاق المسبق.",
        more: ["رحلات بين المطار ومكان الإقامة والعيادات", "سيارات مريحة مع سائق", "مواعيد تتلاءم مع مواعيدكم الطبية"],
      },
      {
        title: "الإقامة",
        tag: "3★ · 4★ · 5★",
        text: "المساعدة في البحث عن مكان إقامة مناسب وحجزه وفقًا لمدة إقامتكم.",
        more: [
          "فنادق 3 نجوم: راحة أساسية بسعر مناسب",
          "فنادق 4 نجوم: غرف واسعة وخدمات متكاملة",
          "فنادق 5 نجوم: خدمات راقية وأجنحة فاخرة",
          "أجنحة وشقق مع غرفة جلوس، مناسبة للإقامات الطويلة أو للمرافقين",
          "إقامة قريبة من العيادات ومواقع المواعيد",
        ],
      },
      {
        title: "فترة النقاهة",
        text: "تنظيم فترة الراحة بعد العلاج في مكان يتناسب مع توصيات الفريق الطبي.",
        more: ["مكان هادئ ومريح للتعافي", "إقامة تتماشى مع تعليمات طبيبكم", "إمكانية أن يرافقكم أحد أقاربكم"],
      },
      {
        title: "الاستقبال في المطار",
        text: "استقبالكم ومرافقتكم منذ وصولكم إلى تونس لضمان بداية إقامة أكثر راحة واطمئنانًا.",
        more: ["استقبال شخصي عند وصولكم", "مساعدة في الأمتعة والإجراءات العملية", "نقل مباشر إلى مكان إقامتكم"],
      },
      {
        title: "المساعدة اللغوية",
        text: "المساعدة على التواصل مع الفرق الطبية ومختلف الأطراف المعنية طوال فترة إقامتكم.",
        more: ["مساعدة على التواصل مع الفرق الطبية", "شرح المعلومات العملية الخاصة بإقامتكم", "مرافقة أثناء المواعيد، بحسب الصيغة المختارة"],
      },
      {
        title: "المتابعة بعد الإقامة",
        text: "تنسيق المعلومات ومواعيد المتابعة عندما يوصي بها المهنيون الصحيون.",
        more: ["تنسيق الوثائق والتقارير الطبية", "المساعدة في تنظيم مواعيد المراقبة", "التواصل مع المهنيين الصحيين المعنيين"],
      },
      {
        title: "النقل الطبي والحالات الطارئة",
        tag: "طوارئ",
        text: "سيارة إسعاف ونقل جوي طبي عاجل عندما تتطلب حالتكم ذلك، بالتنسيق مع الفريق الطبي.",
        more: [
          "سيارة إسعاف للتنقل بين المطار والمستشفى ومكان الإقامة",
          "ترتيب طائرة إسعاف في الحالات الطارئة، بحسب الرأي الطبي والتوفر",
          "التنسيق مع الفريق الطبي قبل النقل وأثناءه وبعده",
          "المساعدة في الإجراءات المرتبطة بالسفر",
        ],
      },
      {
        title: "خدمة كبار الشخصيات (VIP)",
        tag: "VIP",
        text: "مرافقة راقية لإقامة متكتمة ومريحة ومصممة حسب الطلب بالكامل.",
        more: [
          "استقبال شخصي في المطار، مع صالة VIP بحسب التوفر",
          "كراء سيارات فاخرة، مع سائق أو دونه",
          "فنادق راقية وأجنحة فاخرة",
          "سرية وخصوصية طوال إقامتكم",
          "مرافق مخصص، بحسب الصيغة المختارة",
        ],
      },
      {
        title: "السياحة والاكتشاف",
        tag: "سياحة",
        text: "اكتشفوا تونس مع مرشدين وخدمات سياحية، قبل علاجكم أو بعده.",
        more: [
          "رحلات إلى الصحراء: دوز والكثبان وليلة في مخيم صحراوي",
          "زيارات مرشدة للمدن العتيقة والمواقع التاريخية (قرطاج، القيروان، جربة…)",
          "جولات ثقافية واكتشاف المطبخ المحلي",
          "مرشدون يتحدثون عدة لغات",
          "برامج تتناسب مع حالتكم الصحية والتوصيات الطبية",
        ],
      },
    ],
    cta: "تواصلوا مع فريقنا",
  },

it: {
  eyebrow: "CHI SIAMO · I SERVIZI GLOMED",
  title: "Il vostro soggiorno,",
  accent: "organizzato dalla A alla Z.",
  description:
    "Oltre al coordinamento medico, Glomed Group si occupa di tutto ciò che rende il vostro soggiorno in Tunisia più semplice e confortevole.",
  readMore: "Leggi di più",
  readLess: "Leggi meno",
  cards: [
    {
      title: "Trasporto e trasferimenti",
      text: "Trasferimenti tra l'aeroporto, il vostro alloggio e i luoghi degli appuntamenti, secondo il servizio concordato.",
      more: [
        "Spostamenti tra l'aeroporto, il vostro alloggio e le cliniche",
        "Veicoli confortevoli con autista",
        "Orari adattati ai vostri appuntamenti medici",
      ],
    },
    {
      title: "Alloggio",
      tag: "3★ · 4★ · 5★",
      text: "Assistenza nella ricerca e nella prenotazione di un alloggio adatto alla durata del vostro soggiorno.",
      more: [
        "Hotel a 3 stelle: comfort essenziale a un prezzo conveniente",
        "Hotel a 4 stelle: camere spaziose e servizi completi",
        "Hotel a 5 stelle: servizi di alta gamma e suite",
        "Suite e appartamenti con soggiorno, ideali per soggiorni lunghi o per gli accompagnatori",
        "Alloggi vicino alle cliniche e ai luoghi degli appuntamenti",
      ],
    },
    {
      title: "Convalescenza",
      text: "Organizzazione del vostro riposo dopo le cure, in un ambiente adeguato alle raccomandazioni dell'équipe medica.",
      more: [
        "Un ambiente tranquillo e confortevole per il recupero",
        "Un soggiorno conforme alle indicazioni del vostro medico",
        "Possibilità di essere accompagnati da una persona cara",
      ],
    },
    {
      title: "Accoglienza in aeroporto",
      text: "Assistenza personalizzata fin dal vostro arrivo in Tunisia, per iniziare il soggiorno in tutta tranquillità.",
      more: [
        "Accoglienza personalizzata al vostro arrivo",
        "Assistenza con i bagagli e le formalità pratiche",
        "Trasferimento diretto al vostro alloggio",
      ],
    },
    {
      title: "Assistenza linguistica",
      text: "Supporto nella comunicazione con le équipe mediche e con i diversi interlocutori durante il vostro soggiorno.",
      more: [
        "Assistenza nella comunicazione con le équipe mediche",
        "Spiegazione delle informazioni pratiche relative al vostro soggiorno",
        "Accompagnamento durante gli appuntamenti, secondo il servizio scelto",
      ],
    },
    {
      title: "Assistenza dopo il soggiorno",
      text: "Coordinamento delle informazioni e degli appuntamenti di controllo quando raccomandati dai professionisti sanitari.",
      more: [
        "Coordinamento dei documenti e dei referti medici",
        "Assistenza nell'organizzazione degli appuntamenti di controllo",
        "Comunicazione con i professionisti sanitari interessati",
      ],
    },
    {
      title: "Trasporto medicalizzato ed emergenze",
      tag: "Emergenza",
      text: "Ambulanza e trasferimento aereo sanitario in caso di emergenza, quando le condizioni del paziente lo richiedono, in coordinamento con l'équipe medica.",
      more: [
        "Ambulanza per i trasferimenti tra aeroporto, ospedale e alloggio",
        "Organizzazione di un aereo sanitario in caso di emergenza, secondo il parere medico e la disponibilità",
        "Coordinamento con l'équipe medica prima, durante e dopo il trasferimento",
        "Assistenza per le formalità relative al trasferimento",
      ],
    },
    {
      title: "Servizio VIP",
      tag: "VIP",
      text: "Un'assistenza di alto livello per un soggiorno discreto, confortevole e completamente personalizzato.",
      more: [
        "Accoglienza personalizzata in aeroporto, con accesso alla sala VIP secondo disponibilità",
        "Noleggio di auto di lusso, con o senza autista",
        "Hotel di prestigio e suite di alta gamma",
        "Discrezione e riservatezza durante il vostro soggiorno",
        "Un referente dedicato, secondo il servizio scelto",
      ],
    },
    {
      title: "Turismo e scoperte",
      tag: "Turismo",
      text: "Scoprite la Tunisia con guide e servizi turistici, prima o dopo le vostre cure.",
      more: [
        "Escursioni nel Sahara: Douz, dune e pernottamento in un campo nel deserto",
        "Visite guidate delle medine e dei siti storici (Cartagine, Kairouan, Djerba…)",
        "Itinerari culturali e scoperta della gastronomia locale",
        "Guide che parlano diverse lingue",
        "Programmi adattati alle vostre condizioni di salute e alle raccomandazioni mediche",
      ],
    },
  ],
  cta: "Parlate con il nostro team",
},

de: {
  eyebrow: "ÜBER UNS · UNSERE GLOMED-DIENSTLEISTUNGEN",
  title: "Ihr Aufenthalt,",
  accent: "von A bis Z organisiert.",
  description:
    "Neben der medizinischen Koordination kümmert sich Glomed Group um alles, was Ihren Aufenthalt in Tunesien einfacher und angenehmer macht.",
  readMore: "Mehr erfahren",
  readLess: "Weniger anzeigen",
  cards: [
    {
      title: "Transport und Transfers",
      text: "Transfers zwischen dem Flughafen, Ihrer Unterkunft und den Orten Ihrer Termine, entsprechend der vereinbarten Leistung.",
      more: [
        "Fahrten zwischen dem Flughafen, Ihrer Unterkunft und den Kliniken",
        "Komfortable Fahrzeuge mit Fahrer",
        "An Ihre Arzttermine angepasste Fahrzeiten",
      ],
    },
    {
      title: "Unterkunft",
      tag: "3★ · 4★ · 5★",
      text: "Unterstützung bei der Suche und Buchung einer Unterkunft, die zur Dauer Ihres Aufenthalts passt.",
      more: [
        "3-Sterne-Hotels: grundlegender Komfort zu einem angemessenen Preis",
        "4-Sterne-Hotels: geräumige Zimmer und umfassende Dienstleistungen",
        "5-Sterne-Hotels: gehobener Service und luxuriöse Suiten",
        "Suiten und Apartments mit Wohnbereich, ideal für längere Aufenthalte oder Begleitpersonen",
        "Unterkünfte in der Nähe von Kliniken und Terminen",
      ],
    },
    {
      title: "Genesungszeit",
      text: "Organisation Ihrer Erholungszeit nach den Behandlungen in einer Umgebung, die den Empfehlungen des medizinischen Teams entspricht.",
      more: [
        "Eine ruhige und komfortable Umgebung zur Erholung",
        "Ein Aufenthalt entsprechend den Anweisungen Ihres Arztes",
        "Möglichkeit, von einer nahestehenden Person begleitet zu werden",
      ],
    },
    {
      title: "Empfang am Flughafen",
      text: "Persönliche Betreuung ab Ihrer Ankunft in Tunesien für einen entspannten Beginn Ihres Aufenthalts.",
      more: [
        "Persönlicher Empfang bei Ihrer Ankunft",
        "Unterstützung beim Gepäck und bei praktischen Formalitäten",
        "Direkter Transfer zu Ihrer Unterkunft",
      ],
    },
    {
      title: "Sprachliche Unterstützung",
      text: "Unterstützung bei der Kommunikation mit den medizinischen Teams und verschiedenen Ansprechpartnern während Ihres Aufenthalts.",
      more: [
        "Unterstützung bei der Kommunikation mit den medizinischen Teams",
        "Erläuterung der praktischen Informationen zu Ihrem Aufenthalt",
        "Begleitung zu Terminen, je nach gewähltem Leistungspaket",
      ],
    },
    {
      title: "Nachbetreuung nach dem Aufenthalt",
      text: "Koordination von Informationen und Kontrollterminen, sofern diese von den medizinischen Fachkräften empfohlen werden.",
      more: [
        "Koordination von Dokumenten und medizinischen Berichten",
        "Unterstützung bei der Organisation von Kontrollterminen",
        "Austausch mit den zuständigen medizinischen Fachkräften",
      ],
    },
    {
      title: "Medizinischer Transport und Notfälle",
      tag: "Notfall",
      text: "Krankenwagentransport und medizinischer Lufttransport im Notfall, wenn Ihr Gesundheitszustand dies erfordert, in Abstimmung mit dem medizinischen Team.",
      more: [
        "Krankenwagentransfers zwischen Flughafen, Krankenhaus und Unterkunft",
        "Organisation eines Ambulanzflugzeugs im Notfall, entsprechend der ärztlichen Einschätzung und der Verfügbarkeit",
        "Koordination mit dem medizinischen Team vor, während und nach dem Transport",
        "Unterstützung bei den erforderlichen Transportformalitäten",
      ],
    },
    {
      title: "VIP-Service",
      tag: "VIP",
      text: "Erstklassige Betreuung für einen diskreten, komfortablen und vollständig auf Ihre Bedürfnisse abgestimmten Aufenthalt.",
      more: [
        "Persönlicher Empfang am Flughafen mit Zugang zur VIP-Lounge, je nach Verfügbarkeit",
        "Vermietung von Luxusfahrzeugen mit oder ohne Chauffeur",
        "Exklusive Hotels und hochwertige Suiten",
        "Diskretion und Vertraulichkeit während Ihres Aufenthalts",
        "Ein persönlicher Ansprechpartner, je nach gewähltem Leistungspaket",
      ],
    },
    {
      title: "Tourismus und Entdeckungen",
      tag: "Tourismus",
      text: "Entdecken Sie Tunesien mit Reiseleitern und touristischen Angeboten vor oder nach Ihren Behandlungen.",
      more: [
        "Ausflüge in die Sahara: Douz, Sanddünen und Übernachtung in einem Wüstencamp",
        "Geführte Besichtigungen der Medinas und historischen Stätten (Karthago, Kairouan, Djerba…)",
        "Kulturelle Rundreisen und Entdeckung der lokalen Gastronomie",
        "Mehrsprachige Reiseleiter",
        "An Ihren Gesundheitszustand und die medizinischen Empfehlungen angepasste Programme",
      ],
    },
  ],
  cta: "Sprechen Sie mit unserem Team",
},

};

export default function AboutCards() {
  const { language, dir } = useLanguage();
  const code = String(language || "fr").toLowerCase().slice(0, 2);
  const content = translations[code] || translations.fr;
  const rtl = code === "ar";

  const sectionRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const [swapped, setSwapped] = useState(null); // carte dont l'image est changée au toucher
  const [open, setOpen] = useState({});         // cartes dépliées (Lire la suite)

  useEffect(() => {
    setReady(true);
    const node = sectionRef.current;
    if (!node) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const toggle = (index) => setOpen((prev) => ({ ...prev, [index]: !prev[index] }));

  return (
    <section
      id="services-glomed"
      ref={sectionRef}
      dir={dir || (rtl ? "rtl" : undefined)}
      className={`gabout ${ready ? "is-ready" : ""} ${visible ? "is-visible" : ""}`}
    >
      <div className="gabout-container">
        <div className="gabout-heading">
          <span className="gabout-eyebrow">
            <span className="gabout-dot" />
            {content.eyebrow}
          </span>
          <h2>
            {content.title} <span>{content.accent}</span>
          </h2>
          <p>{content.description}</p>
        </div>

        <div className="gabout-grid">
          {CARDS.map((card, index) => {
            const c = content.cards[index];
            const isOpen = !!open[index];

            return (
              <article
                className={`gabout-card gabout-tone-${card.tone} ${isOpen ? "is-open" : ""} ${swapped === index ? "is-swapped" : ""}`}
                key={card.image}
                style={{ "--i": index }}
              >
                {/* IMAGE (2e image au survol / au toucher) */}
                <div className="gabout-media" onClick={() => setSwapped(swapped === index ? null : index)}>
                  <span className="gabout-media-fallback" aria-hidden="true">
                    <i className={card.icon} />
                  </span>

                  <img
                    src={card.image}
                    alt={c.title}
                    loading="lazy"
                    className="gabout-img"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <img
                    src={card.hoverImage}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="gabout-img gabout-img-hover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  <span className="gabout-icon">
                    <i className={card.icon} aria-hidden="true" />
                  </span>
                  {c.tag && <span className="gabout-tag">{c.tag}</span>}
                  <h3 className="gabout-title">{c.title}</h3>
                </div>

                {/* TEXTE + LIRE LA SUITE */}
                <div className="gabout-body">
                  <p className="gabout-text">{c.text}</p>

                  <div className={`gabout-more ${isOpen ? "is-open" : ""}`} id={`gabout-more-${index}`}>
                    <div className="gabout-more-inner">
                      <ul>
                        {c.more.map((item) => (
                          <li key={item}>
                            <i className="bi bi-check-circle-fill" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="gabout-toggle"
                    aria-expanded={isOpen}
                    aria-controls={`gabout-more-${index}`}
                    onClick={() => toggle(index)}
                  >
                    {isOpen ? content.readLess : content.readMore}
                    <i className="bi bi-chevron-down" aria-hidden="true" />
                  </button>
                </div>

                <span className="gabout-line" aria-hidden="true" />
              </article>
            );
          })}
        </div>

        <div className="gabout-footer">
          <Link href="/#contact" className="gabout-cta">
            {content.cta} <span aria-hidden="true">{rtl ? "←" : "→"}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}