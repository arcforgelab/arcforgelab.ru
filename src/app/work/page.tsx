'use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, ArrowUpRight, Filter, Search, X } from "lucide-react";
import {
  portfolioItems,
  type PortfolioItem,
} from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

gsap.registerPlugin(ScrollTrigger);

type FilterState = {
  role: string;
  type: string;
  tech: string;
  search: string;
};

const unique = (arr: string[]) => Array.from(new Set(arr));

export default function WorkPage() {
  const [filters, setFilters] = useState<FilterState>({
    role: "все",
    type: "все",
    tech: "все",
    search: "",
  });
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const [slide, setSlide] = useState(0);

  const roles = useMemo(() => ["все", ...unique(portfolioItems.map((item) => item.role))], []);
  const types = useMemo(() => ["все", ...unique(portfolioItems.map((item) => item.type))], []);
  const techs = useMemo(() => ["все", ...unique(portfolioItems.flatMap((item) => item.tech))], []);

  const filtered = portfolioItems.filter((item) => {
    const roleMatch = filters.role === "все" || item.role === filters.role;
    const typeMatch = filters.type === "все" || item.type === filters.type;
    const techMatch = filters.tech === "все" || item.tech.includes(filters.tech);
    const searchText = `${item.title} ${item.description} ${item.longDescription} ${item.tech.join(" ")} ${item.stack.join(" ")}`.toLowerCase();
    const searchMatch = searchText.includes(filters.search.toLowerCase());
    return roleMatch && typeMatch && techMatch && searchMatch;
  });

  useGSAP(() => {
    gsap.from(".work-card", {
      scrollTrigger: { trigger: ".work-grid", start: "top 85%" },
      y: 36,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.08,
    });
  }, [filters]);

  const setFilter = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const openDetails = (item: PortfolioItem) => {
    setSelected(item);
    setSlide(0);
  };

  const nextSlide = () => {
    if (!selected) return;
    setSlide((prev) => (prev + 1) % selected.screens.length);
  };

  const prevSlide = () => {
    if (!selected) return;
    setSlide((prev) => (prev - 1 + selected.screens.length) % selected.screens.length);
  };

  return (
    <div className="relative min-h-screen bg-background">
      <div className="grid-overlay" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-20 pt-24">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-sm uppercase tracking-[0.3em] text-primary/90">Все проекты</p>
            <h1 className="text-3xl font-semibold sm:text-4xl">Каталог работ с фильтрами и поиском.</h1>
          </div>
          <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
            <Link href="/">На главную</Link>
          </Button>
        </div>

        <Card className="floating-card border-border/80 bg-card/80 p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-border bg-white/70 px-3 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                aria-label="Поиск по проектам"
                placeholder="Поиск по названию, стеку или описанию"
                className="border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
                value={filters.search}
                onChange={(e) => setFilter("search", e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
              <Filter className="h-4 w-4" />
              Быстрая фильтрация
            </div>
          </div>
          <Separator className="my-4 bg-black/5" />
          <div className="flex flex-col gap-4">
            <FilterGroup
              label="Роль"
              options={roles}
              active={filters.role}
              onChange={(val) => setFilter("role", val)}
            />
            <FilterGroup
              label="Тип проекта"
              options={types}
              active={filters.type}
              onChange={(val) => setFilter("type", val)}
            />
            <FilterGroup
              label="Технологии"
              options={techs}
              active={filters.tech}
              onChange={(val) => setFilter("tech", val)}
            />
          </div>
        </Card>

        <div className="work-grid grid gap-6 md:grid-cols-2">
          {filtered.map((item) => (
            <Card
              key={item.id}
              className="work-card floating-card group relative overflow-hidden border-border/80 bg-card/80 p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100/60 via-transparent to-yellow-50/70 opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.type}</p>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <Badge variant="outline" className="border-black/5 bg-white/80 text-xs">
                    {item.year}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/70 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2">
                  <Badge variant="outline" className="border-primary/30 bg-primary/10 text-xs text-primary">
                    {item.role}
                  </Badge>
                  <div className="flex items-center gap-3">
                    <Button variant="ghost" className="px-0 text-primary hover:text-primary" asChild>
                      <Link href={item.link} target="_blank">
                        Сайт
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="secondary" size="sm" onClick={() => openDetails(item)}>
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Sheet open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <SheetContent className="w-full overflow-y-auto border-border bg-background sm:max-w-3xl">
          <SheetHeader className="flex flex-row items-start justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{selected?.type}</p>
              <SheetTitle className="text-2xl">{selected?.title}</SheetTitle>
              {selected ? (
                <Badge variant="outline" className="border-primary/30 bg-primary/10 text-xs text-primary">
                  {selected.role}
                </Badge>
              ) : null}
            </div>
            <Button variant="ghost" size="icon" onClick={() => setSelected(null)}>
              <X className="h-5 w-5" />
            </Button>
          </SheetHeader>
          {selected && (
            <div className="mt-6 space-y-4">
              <p className="text-muted-foreground">{selected.longDescription}</p>
              <Separator className="bg-black/5" />
              <div className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Стек</h3>
                <div className="flex flex-wrap gap-2">
                  {selected.stack.map((item) => (
                    <Badge key={item} variant="secondary" className="bg-secondary/70 text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Скриншоты
                  </h3>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" onClick={prevSlide}>
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={nextSlide}>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-xl border border-border bg-secondary/60 p-4">
                  {selected.screens.map((screen, idx) => (
                    <div
                      key={screen.title}
                      className={`absolute inset-0 rounded-lg bg-gradient-to-br ${screen.bg} p-4 transition-all duration-500 ${
                        idx === slide ? "opacity-100 translate-y-0" : "pointer-events-none translate-y-4 opacity-0"
                      }`}
                    >
                      <div className="flex h-full items-end justify-between">
                        <p className="text-lg font-semibold text-gray-800">{screen.title}</p>
                        <Badge variant="outline" className="border-black/10 bg-white/80 text-xs text-gray-700">
                          {idx + 1}/{selected.screens.length}
                        </Badge>
                      </div>
                    </div>
                  ))}
                  <div className="h-48 sm:h-56" />
                </div>
              </div>
              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/80"
                asChild
              >
                <Link href={selected.link} target="_blank">
                  Перейти на сайт проекта
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

type FilterGroupProps = {
  label: string;
  options: string[];
  active: string;
  onChange: (value: string) => void;
};

function FilterGroup({ label, options, active, onChange }: FilterGroupProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <Badge
            key={opt}
            variant={active === opt ? "default" : "secondary"}
            onClick={() => onChange(opt)}
            className={`cursor-pointer ${active === opt ? "bg-primary text-primary-foreground" : "bg-secondary/70"}`}
          >
            {opt}
          </Badge>
        ))}
      </div>
    </div>
  );
}
