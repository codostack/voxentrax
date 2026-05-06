// LanguageContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext(null);

/**
 * Provides { language, setLanguage } to the entire tree.
 * Persists the choice to localStorage.
 * Children render immediately with the stored (or default) language.
 */
export function LanguageProvider({ children, defaultLanguage = "en" }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem("selectedLanguage") || defaultLanguage;
  });

  const setLanguage = (lang) => {
    if (!lang) return;
    localStorage.setItem("selectedLanguage", lang);
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Convenience hook — throws if used outside <LanguageProvider>.
 */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}

export { LanguageContext };