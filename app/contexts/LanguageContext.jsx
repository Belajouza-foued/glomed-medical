
"use client";

import { createContext, useContext, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("fr");

  const changeLanguage = (lang) => {
    if (lang === "fr" || lang === "en") {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}
