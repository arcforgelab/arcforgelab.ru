'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import Image from "next/image";

const navItems = [
  { label: "Главная", href: "/" },
  { label: "Навыки", href: "/#skills" },
  { label: "Услуги", href: "/#services" },
  { label: "Работы", href: "/work" },
  { label: "Клиенты", href: "/#clients" },
  { label: "Контакты", href: "/#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

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
            <p className="text-xs text-muted-foreground">Fullstack-разработчик</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary">
            Работа в команде/одиночка
          </Badge>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/80" asChild>
            <Link href="#contact">Начать проект</Link>
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
            <SheetTitle className="sr-only">Меню</SheetTitle>
            <SheetDescription className="sr-only">
              Панель навигации
            </SheetDescription>
            <div className="mb-4 flex items-center justify-between">
              <p className="font-semibold">Arcforgelab</p>
            </div>
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <SheetClose key={item.href} asChild>
                  <Link href={item.href} className="text-muted-foreground hover:text-foreground">
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/80" asChild>
                  <Link href="/#contact">Начать проект</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
