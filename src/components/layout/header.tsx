'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

import { LanguageToggle } from "@/components/language-toggle";
import { useI18n } from "@/lib/i18n";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition ${
        scrolled ? "backdrop-blur-md bg-black/30 border-b border-border/40" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-yellow-300/80 to-amber-200/80 p-[2px]">
            <div className="flex h-full w-full items-center justify-center rounded-md bg-background text-lg font-semibold text-primary">
              <Image src={"/logo.png"} alt="Arcforgelab logo" width={24} height={24} />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold">Arcforgelab</p>
            <p className="text-xs text-muted-foreground">{t.common.role}</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-3 md:flex">
          {t.common.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/80" asChild>
            <Link href="#contact">{t.common.contactCta}</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-border bg-background/95">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <SheetDescription className="sr-only">Mobile navigation</SheetDescription>
            <div className="mb-4 flex items-center justify-between">
              <p className="font-semibold">Arcforgelab</p>
              <LanguageToggle />
            </div>
            <div className="flex flex-col space-y-3">
              {t.common.nav.map((item) => (
                <SheetClose key={item.href} asChild>
                  <Link href={item.href} className="text-muted-foreground hover:text-foreground">
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/80" asChild>
                  <Link href="/#contact">{t.common.contactCta}</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
