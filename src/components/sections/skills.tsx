'use client';

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { skills } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { id: "frontend", title: "Frontend", tone: "from-cyan-400/30 to-blue-500/30" },
  { id: "backend", title: "Backend / API", tone: "from-indigo-400/30 to-purple-500/30" },
  { id: "devops", title: "DevOps", tone: "from-emerald-400/30 to-teal-500/30" },
  { id: "tools", title: "DX & Craft", tone: "from-amber-300/30 to-orange-500/30" },
] as const;

export function SkillsSection() {
  const scope = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(scope.current?.querySelectorAll(".skill-card"), {
        scrollTrigger: {
          trigger: scope.current,
          start: "top 78%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
      });
    },
    { scope }
  );

  return (
    <section ref={scope} id="skills" className="relative mx-auto max-w-6xl px-6 pb-20">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-primary/80">Capabilities</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Front to back, production-ready.</h2>
        </div>
        <Badge variant="outline" className="hidden border-primary/40 bg-primary/10 text-primary sm:inline-flex">
          Full-stack + DevOps
        </Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((group) => (
          <Card
            key={group.id}
            className="skill-card floating-card relative overflow-hidden border-border/70 bg-card/80 p-6"
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${group.tone} opacity-60`}
            />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{group.title}</h3>
                <Badge variant="outline" className="border-white/10 bg-white/5 text-xs uppercase tracking-wide">
                  Motion-aware
                </Badge>
              </div>
              <Separator className="bg-white/10" />
              <div className="flex flex-wrap gap-2">
                {skills[group.id].map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="bg-secondary/70 text-secondary-foreground hover:-translate-y-0.5 hover:bg-secondary transition-transform"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
