'use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Filter, Search } from "lucide-react";

import { type LocalizedPortfolioItem } from "@/data/i18n";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle} from "@/components/ui/sheet";
import { ScreensSlider } from "@/components/ui/screen-slider";
import { useI18n } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

type FilterState = {
  role: string;
  type: string;
  tech: string;
  search: string;
};

type FilterOption = { value: string; label: string };

const unique = (arr: string[]) => Array.from(new Set(arr));
const ANY_VALUE = "__any__";

export default function WorkPage() {
  const { t, language } = useI18n();
  const any = t.work.filters.any;
  const items = t.portfolio.items;

  const [filters, setFilters] = useState<FilterState>(() => ({
    role: ANY_VALUE,
    type: ANY_VALUE,
    tech: ANY_VALUE,
    search: "",
  }));
  const [selected, setSelected] = useState<LocalizedPortfolioItem | null>(null);

  const roleOptions: FilterOption[] = useMemo(() => {
    const values = unique(items.map((item) => item.role.en));
    return [
      { value: ANY_VALUE, label: any },
      ...values.map((value) => ({
        value,
        label: items.find((item) => item.role.en === value)?.role[language] ?? value,
      })),
    ];
  }, [any, items, language]);

  const typeOptions: FilterOption[] = useMemo(() => {
    const values = unique(items.map((item) => item.type.en));
    return [
      { value: ANY_VALUE, label: any },
      ...values.map((value) => ({
        value,
        label: items.find((item) => item.type.en === value)?.type[language] ?? value,
      })),
    ];
  }, [any, items, language]);

  const techOptions: FilterOption[] = useMemo(() => {
    const values = unique(items.flatMap((item) => item.tech));
    return [
      { value: ANY_VALUE, label: any },
      ...values.map((value) => ({ value, label: value })),
    ];
  }, [any, items]);

  const filtered = items.filter((item) => {
    const searchText = `${item.title[language]} ${item.description[language]} ${item.longDescription[language]} ${item.tech.join(" ")} ${item.stack.join(" ")}`.toLowerCase();

    const roleMatch = filters.role === ANY_VALUE || item.role.en === filters.role;
    const typeMatch = filters.type === ANY_VALUE || item.type.en === filters.type;
    const techMatch = filters.tech === ANY_VALUE || item.tech.includes(filters.tech);
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

  return (
    <div className="relative min-h-screen bg-background">
      <div className="grid-overlay" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-20 pt-24">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-sm uppercase tracking-[0.3em] text-primary/90">{t.work.eyebrow}</p>
            <h1 className="text-3xl font-semibold sm:text-4xl">{t.work.title}</h1>
          </div>
          <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
            <Link href="/">{t.work.backLink}</Link>
          </Button>
        </div>

        <Card className="floating-card border-border/80 bg-card/80 p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-border bg-white/70 px-3 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                aria-label={t.work.searchPlaceholder}
                placeholder={t.work.searchPlaceholder}
                className="border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
                value={filters.search}
                onChange={(e) => setFilter("search", e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
              <Filter className="h-4 w-4" />
              {t.work.filterLabel}
            </div>
          </div>
          <Separator className="my-4 bg-black/5" />
          <div className="flex flex-col gap-4">
            <FilterGroup
              label={t.work.filters.role}
              options={roleOptions}
              active={filters.role}
              onChange={(val) => setFilter("role", val)}
            />
            <FilterGroup
              label={t.work.filters.type}
              options={typeOptions}
              active={filters.type}
              onChange={(val) => setFilter("type", val)}
            />
            <FilterGroup
              label={t.work.filters.tech}
              options={techOptions}
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
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.type[language]}</p>
                    <h3 className="text-xl font-semibold">{item.title[language]}</h3>
                  </div>
                  <Badge variant="outline" className="border-black/5 bg-white/80 text-xs">
                    {item.year}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{item.description[language]}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/70 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2">
                  <Badge variant="outline" className="border-primary/30 bg-primary/10 text-xs text-primary">
                    {item.role[language]}
                  </Badge>
                  <div className="flex items-center gap-3">
                    <Button variant="ghost" className="px-0 text-primary hover:text-primary" asChild>
                      <Link href={item.link} target="_blank">
                        {t.work.caseLink}
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="secondary" size="sm" onClick={() => setSelected(item)}>
                      {t.work.viewDetails}
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
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{selected?.type[language]}</p>
              <SheetTitle className="text-2xl">{selected?.title[language]}</SheetTitle>
              {selected ? (
                <Badge variant="outline" className="border-primary/30 bg-primary/10 text-xs text-primary">
                  {selected.role[language]}
                </Badge>
              ) : null}
            </div>
          </SheetHeader>
          {selected && (
            <div className="mt-6 space-y-4 px-2">
              <p className="text-muted-foreground">{selected.longDescription[language]}</p>
              <Separator className="bg-black/5" />
              <div className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {t.work.stackLabel}
                </h3>
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
                    {t.work.galleryLabel}
                  </h3>
                </div>
                <div className="relative overflow-hidden rounded-xl border border-border bg-secondary/60 p-4">
                  <ScreensSlider
                    screens={selected.screens.map((screen) => ({
                      ...screen,
                      title: screen.title[language],
                    }))}
                  />
                </div>
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/80" asChild>
                <Link href={selected.link} target="_blank">
                  {t.work.openCase}
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
  options: FilterOption[];
  active: string;
  onChange: (value: string) => void;
};

function FilterGroup({ label, options, active, onChange }: FilterGroupProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const isActive = active === opt.value;
          return (
            <Badge
              key={opt.value}
              variant={isActive ? "default" : "secondary"}
              onClick={() => onChange(opt.value)}
              className={`cursor-pointer ${isActive ? "bg-primary text-primary-foreground" : "bg-secondary/70"}`}
            >
              {opt.label}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
