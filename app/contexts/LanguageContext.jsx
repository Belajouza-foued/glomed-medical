
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
