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
  "Full-stack product engineer pairing motion-first UI with reliable systems.",
  "Building interfaces with shadcn/ui + shadcnblocks, orchestrated with GSAP.",
];

const metrics = [
  { label: "Production launches", value: "35+" },
  { label: "Avg. perf score", value: "98" },
  { label: "Platforms delivered", value: "SaaS · XR · Data viz" },
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
        <div className="glow hero-floating left-[10%] top-10 h-64 w-64 rounded-full bg-cyan-500/20" />
        <div className="glow hero-floating right-[16%] top-20 h-72 w-72 rounded-full bg-indigo-500/25" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex items-center justify-between gap-6">
          <Badge variant="outline" className="border-cyan-300/60 bg-cyan-500/10 text-cyan-100">
            Available for select collaborations
          </Badge>
          <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            Motion-crafted experiences
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div className="space-y-6">
            <div className="hero-title relative inline-block text-balance text-4xl leading-tight text-primary sm:text-5xl lg:text-6xl">
              Arcforgelab
              <span className="ml-3 inline-flex items-center rounded-full bg-secondary/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary-foreground">
                Full-stack Studio
              </span>
            </div>

            <div className="hero-highlight space-y-3 text-lg text-muted-foreground sm:text-xl">
              {highlight.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="hero-actions flex flex-wrap items-center gap-4">
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/80">
                View featured work
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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

          <Card className="floating-card relative overflow-hidden border-primary/20 bg-gradient-to-br from-primary/10 via-secondary to-background p-6 shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,240,255,0.2),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(127,156,255,0.22),transparent_34%)]" />
            <div className="relative space-y-6">
              <p className="text-sm uppercase tracking-[0.25em] text-primary/70">What we do</p>
              <p className="text-lg text-muted-foreground">
                We design and engineer interactive products where performance, reliability, and visual polish move together.
                Every component is built with shadcn/ui primitives and choreographed with GSAP & ScrollTrigger.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="hero-metric rounded-xl border border-white/5 bg-white/5 px-3 py-4">
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
