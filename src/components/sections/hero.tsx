'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { socialLinks } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const highlight = [
  "Ведущий разработчик с 8-летним опытом в IT.",
  "Быстро подстраиваюсь под темп работы, поддерживаю атмосферу в коллективе, уважаю и соблюдаю ценности компании",
];

const metrics = [
  { label: "Сервисов в обслуживании", value: "50+" },
  { label: "Среднее время работы пайплайна", value: "1,3мин" },
  { label: "Среднее время SLA", value: "99,9%" },
];

export function HeroSection() {
  const scope = useRef<HTMLDivElement | null>(null);

  // Duck mechanics
  const duckOriginRef = useRef<{ x: number; y: number } | null>(null);
  const duckIntervalRef = useRef<number | null>(null);
  const duckStaticRef = useRef<HTMLDivElement | null>(null); // place in title
  const duckFloatingRef = useRef<HTMLDivElement | null>(null); // absolute overlay
  const duckRef = useRef<HTMLDivElement | null>(null);
  const [isDuckRunning, setDuckRunning] = useState(false);

  const clearDuckInterval = () => {
    if (duckIntervalRef.current) {
      window.clearInterval(duckIntervalRef.current);
      duckIntervalRef.current = null;
    }
  };

  const moveDuckRandomly = () => {
    if (!scope.current || !duckRef.current) return;

    const containerRect = scope.current.getBoundingClientRect();
    const duckRect = duckRef.current.getBoundingClientRect();

    const maxX = containerRect.width - duckRect.width;
    const maxY = containerRect.height - duckRect.height;

    const targetX = Math.random() * maxX;
    const targetY = Math.random() * maxY;

    gsap.to(duckRef.current, {
      left: `${targetX}px`,
      top: `${targetY}px`,
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  const startDuckRun = () => {
    if (isDuckRunning) return;
    setDuckRunning(true);

    if (duckFloatingRef.current && duckRef.current) {
      duckFloatingRef.current.appendChild(duckRef.current);

      gsap.killTweensOf(duckRef.current);
      duckRef.current.style.transform = "none";

      duckRef.current.style.position = "absolute";
      duckRef.current.style.zIndex = "70";
      duckRef.current.style.left = "0px";
      duckRef.current.style.top = "0px";
    }

    moveDuckRandomly();
    duckIntervalRef.current = window.setInterval(moveDuckRandomly, 900);
  };

  const stopDuckRun = () => {
    clearDuckInterval();
    setDuckRunning(false);

    if (!duckRef.current || !duckStaticRef.current) return;

    // 1) Убиваем ВСЕ GSAP-анимации
    gsap.killTweensOf(duckRef.current);

    // 2) Сбрасываем gsap internal transform state
    gsap.set(duckRef.current, { clearProps: "all" });

    // 3) Сбрасываем CSS-позиционирование
    duckRef.current.style.position = "relative";
    duckRef.current.style.left = "0px";
    duckRef.current.style.top = "0px";
    duckRef.current.style.transform = "none";
    duckRef.current.style.zIndex = "auto";

    // 4) Удаляем origin, чтобы новое движение началось корректно
    duckOriginRef.current = null;

    // 5) Возвращаем утку обратно
    duckStaticRef.current.appendChild(duckRef.current);
  };

  const handleDuckClick = () => {
    isDuckRunning ? stopDuckRun() : startDuckRun();
  };

  // Animations
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

  useEffect(() => {
    return () => clearDuckInterval();
  }, []);

  return (
      <section ref={scope} className="relative overflow-hidden pb-24 pt-12 sm:pt-16 lg:pt-24">
        <div ref={duckFloatingRef} className="absolute inset-0 z-30 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="glow hero-floating left-[12%] top-10 h-10 w-10 bg-yellow-300/30" />
          <div className="glow hero-floating right-[16%] top-20 h-12 w-12 bg-amber-200/40" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 z-10">
          <div className="flex items-center justify-between gap-6">
            <Badge variant="outline" className="border-yellow-400/60 bg-yellow-200/40 text-yellow-900">
              Доступен для заказов
            </Badge>
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              Сайты / Приложения / Прочее
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div className="space-y-6">
              <div className="relative flex items-center gap-4">
                <div ref={duckStaticRef} className="cursor-pointer select-none">
                  <div
                      ref={duckRef}
                      className="pointer-events-auto"   // <-- ключевой момент
                      onClick={handleDuckClick}
                  >
                    <Image
                        src={"/logo.png"}
                        alt="Arcforgelab duck"
                        width={90}
                        height={90}
                        draggable={false}
                    />
                  </div>
                </div>
                <div className="hero-title inline-block text-4xl sm:text-5xl lg:text-6xl">
                  Arcforgelab
                </div>
              </div>

            <div className="hero-highlight space-y-3 text-lg text-muted-foreground sm:text-xl">
              {highlight.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="hero-actions flex flex-wrap items-center gap-4">
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/80" asChild>
                <Link href="/work">
                  Посмотреть мои работы
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

          <Card className="floating-card relative overflow-hidden border-primary/40 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(255,250,230,0.9))] p-6 backdrop-blur-sm">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(248,211,58,0.2),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(255,226,119,0.2),transparent_34%),linear-gradient(120deg,rgba(255,255,255,0.25),transparent_45%)]" />
            <div className="relative space-y-6">
              <p className="text-sm uppercase tracking-[0.25em] text-primary/90">Что я делаю?</p>
              <p className="text-lg text-muted-foreground">
                Проектирую API, базы данных и сервисы, настраиваю окружения и обеспечиваю стабильную работу backend-систем. Забочусь о скорости, безопасности и предсказуемости продукта.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="hero-metric rounded-lg border border-dashed border-primary/40 bg-white/90 px-3 py-4 backdrop-blur-sm">
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
