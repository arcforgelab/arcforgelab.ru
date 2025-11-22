'use client';

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useI18n } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

export function SkillsSection() {
  const scope = useRef<HTMLDivElement | null>(null);
  const { t } = useI18n();

  useGSAP(
    () => {
      const skills = scope.current?.querySelectorAll(".skill-card");
      if (!skills) return;
      gsap.from(skills, {
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
          <p className="text-sm uppercase tracking-[0.3em] text-primary/80">{t.skills.eyebrow}</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">{t.skills.title}</h2>
        </div>
        <Badge variant="outline" className="hidden border-primary/40 bg-primary/10 text-primary sm:inline-flex">
          {t.skills.badge}
        </Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {t.skills.categories.map((group) => (
          <Card
            key={group.id}
            className="skill-card floating-card relative overflow-hidden border-border/70 bg-card/80 p-6"
          >
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${group.tone} opacity-60`} />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{group.title}</h3>
              </div>
              <Separator className="bg-white/10" />
              <div className="flex flex-wrap gap-2">
                {t.skillStacks[group.id].map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="bg-secondary/70 text-secondary-foreground transition-transform hover:-translate-y-0.5 hover:bg-secondary"
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
