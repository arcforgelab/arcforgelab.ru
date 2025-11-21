'use client';

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { socialLinks } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const highlight = [
  "Фулстек-разработчик, который соединяет минималистичный UI с живой анимацией.",
  "Работаю на shadcn/ui + shadcnblocks, анимация через GSAP и ScrollTrigger.",
];

const metrics = [
  { label: "Запусков в прод", value: "35+" },
  { label: "Средний perf score", value: "98" },
  { label: "Опыт", value: "SaaS · E-com · XR · Data Viz" },
];

export function HeroSection() {
  const scope = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-title", { y: 40, opacity: 0, duration: 1 })
        .from(".hero-highlight", { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".hero-actions", { y: 20, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".hero-metric", { y: 20, opacity: 0, stagger: 0.08, duration: 0.6 }, "-=0.2");

      gsap.utils.toArray<HTMLElement>(".hero-floating").forEach((el, idx) => {
        gsap.to(el, {
          yPercent: idx % 2 === 0 ? 8 : -6,
          xPercent: idx % 2 === 0 ? -6 : 6,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    { scope }
  );

  return (
    <section ref={scope} className="relative overflow-hidden pb-24 pt-12 sm:pt-16 lg:pt-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow hero-floating left-[12%] top-10 h-64 w-64 rounded-full bg-yellow-300/30" />
        <div className="glow hero-floating right-[16%] top-20 h-72 w-72 rounded-full bg-amber-200/40" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex items-center justify-between gap-6">
          <Badge variant="outline" className="border-yellow-400/60 bg-yellow-200/40 text-yellow-900">
            Доступен для избранных проектов
          </Badge>
          <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            motion + системная инженерия
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div className="space-y-6">
            <div className="hero-title relative inline-block text-balance text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Arcforgelab
            </div>

            <div className="hero-highlight space-y-3 text-lg text-muted-foreground sm:text-xl">
              {highlight.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="hero-actions flex flex-wrap items-center gap-4">
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/80" asChild>
                <Link href="/work">
                  Смотреть все проекты
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <Link key={link.label} href={link.href} target="_blank" className="hover:scale-[1.02] transition">
                    <Button
                      variant="outline"
                      className="border-secondary bg-secondary/60 text-secondary-foreground hover:bg-secondary"
                    >
                      <link.icon className="mr-2 h-4 w-4" />
                      {link.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Card className="floating-card relative overflow-hidden border-primary/30 bg-gradient-to-br from-white via-secondary to-amber-50 p-6 shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(248,211,58,0.2),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(255,226,119,0.28),transparent_34%)]" />
            <div className="relative space-y-6">
              <p className="text-sm uppercase tracking-[0.25em] text-primary/90">Что делаем</p>
              <p className="text-lg text-muted-foreground">
                Проектируем минималистичный интерфейс с акцентом на движение. Собираем бэкенд и DevOps, чтобы релизы
                оставались стабильными, а UI — живым за счёт GSAP и ScrollTrigger.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="hero-metric rounded-xl border border-black/5 bg-white/70 px-3 py-4">
                    <div className="text-2xl font-semibold text-primary">{metric.value}</div>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
