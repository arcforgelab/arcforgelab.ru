'use client';

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { dictionaries, type TranslationDictionary } from "@/data/i18n";
import { fallbackLanguage, Language, languages } from "@/lib/i18n-config";

type I18nContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return fallbackLanguage;
    const stored = window.localStorage.getItem("arcforgelab:lang");
    if (stored && languages.includes(stored as Language)) {
      return stored as Language;
    }
    const prefersRussian = navigator.language?.toLowerCase().startsWith("ru");
    return prefersRussian ? "ru" : fallbackLanguage;
  });

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("arcforgelab:lang", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage,
      t: dictionaries[language],
    }),
    [language]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside <I18nProvider>");
  }
  return context;
}
