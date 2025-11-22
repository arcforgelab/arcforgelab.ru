'use client';

import { Globe } from "lucide-react";

import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { languages } from "@/lib/i18n-config";

export function LanguageToggle() {
  const { language, setLanguage, t } = useI18n();

  return (
    <div className="flex items-center gap-1 rounded-full border border-border/60 bg-background/80 px-2 py-1 text-xs backdrop-blur">
      <Globe className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
      {languages.map((lang) => {
        const active = language === lang;
        return (
          <Button
            key={lang}
            variant={active ? "default" : "ghost"}
          size="sm"
          className={`h-7 px-2 text-[11px] ${active ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
          onClick={() => setLanguage(lang)}
          aria-pressed={active}
          aria-label={`${t.common.languageLabel}: ${lang.toUpperCase()}`}
        >
          {lang.toUpperCase()}
        </Button>
      );
    })}
    </div>
  );
}
