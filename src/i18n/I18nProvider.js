"use client";

import React, { createContext, useState, useEffect } from "react";
import en from "./dictionaries/en.json";
import ru from "./dictionaries/ru.json";
import { Loader2 } from "lucide-react";

const STORAGE_KEY = "i18n_language";
const SUPPORTED_LANGUAGES = {
  en: en,
  ru: ru,
};

export const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const LANGUAGES = ["ru", "en"];
  const [language, setLanguage] = useState("en");
  const [nextLanguage, setNextLanguage] = useState("ru");
  const [isLoaded, setIsLoaded] = useState(false);

  // Load language from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem(STORAGE_KEY);
      const browserLanguage = navigator.language.split("-")[0];

      // Priority: stored > browser language > default (ru)
      const langToUse = storedLanguage || (SUPPORTED_LANGUAGES[browserLanguage] ? browserLanguage : "ru");

      setLanguage(langToUse);

      // Set next language for toggle
      const currentIndex = LANGUAGES.indexOf(langToUse);
      const nextIndex = (currentIndex + 1) % LANGUAGES.length;
      setNextLanguage(LANGUAGES[nextIndex]);

      setIsLoaded(true);
    }
  }, []);

  const changeLanguage = (lang) => {
    if (SUPPORTED_LANGUAGES[lang]) {
      setLanguage(lang);

      // Update next language
      const currentIndex = LANGUAGES.indexOf(lang);
      const nextIndex = (currentIndex + 1) % LANGUAGES.length;
      setNextLanguage(LANGUAGES[nextIndex]);

      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, lang);
      }
    }
  };

  const t = (key) => {
    const dict = SUPPORTED_LANGUAGES[language];
    const keys = key.split(".");
    let value = dict;

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  const value = {
    language,
    nextLanguage,
    changeLanguage,
    t,
    isLoaded,
    supportedLanguages: Object.keys(SUPPORTED_LANGUAGES),
  };

  if (!isLoaded) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-parrot-1100" />;
      </div>
    );
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};
