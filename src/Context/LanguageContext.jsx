import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(null); // 👈 start null
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLanguage") || "en";
    setLanguage(savedLang);
    setReady(true); // ✅ language loaded
  }, []);

  useEffect(() => {
    if (language) {
      localStorage.setItem("selectedLanguage", language);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, ready }}>
      {children}
    </LanguageContext.Provider>
  );
};