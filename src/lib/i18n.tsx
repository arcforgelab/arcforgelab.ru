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
  const [mounted, setMounted] = useState(false);
  const [language, setLanguageState] = useState<Language>(fallbackLanguage);

  useEffect(() => {
    setMounted(true);

    const stored = window.localStorage.getItem("arcforgelab:lang");
    if (stored && languages.includes(stored as Language)) {
      setLanguageState(stored as Language);
      return;
    }

    const prefersRussian = navigator.language?.toLowerCase().startsWith("ru");
    setLanguageState(prefersRussian ? "ru" : fallbackLanguage);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = language;
    window.localStorage.setItem("arcforgelab:lang", language);
  }, [language, mounted]);

  if (!mounted) {
    // пока клиент не смонтирован — рендерим fallback,
    // но на клиенте он не отличается от SSR
    return null;
  }

  return (
      <I18nContext.Provider
          value={{
            language,
            setLanguage: setLanguageState,
            t: dictionaries[language],
          }}
      >
        {children}
      </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside <I18nProvider>");
  }
  return context;
}
