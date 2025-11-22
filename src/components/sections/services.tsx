'use client';

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Sparkles, Workflow } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useI18n } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function ServicesSection() {
  const scope = useRef<HTMLDivElement | null>(null);
  const { t } = useI18n();

  useGSAP(
    () => {
      const services = scope.current?.querySelectorAll(".service-card");
      if (!services) return;
      gsap.from(services, {
        scrollTrigger: {
          trigger: scope.current,
          start: "top 80%",
        },
        y: 36,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
      });
    },
    { scope }
  );

  return (
    <section ref={scope} id="services" className="mx-auto max-w-6xl px-6 pb-20">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-primary/80">{t.services.eyebrow}</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">{t.services.title}</h2>
        </div>
        <Button variant="outline" className="border-primary/40 bg-primary/10 text-primary">
          <Workflow className="mr-2 h-4 w-4" />
          {t.services.cta}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {t.services.items.map((service) => (
          <Card
            key={service.id}
            className="service-card floating-card relative overflow-hidden border-border/60 bg-card/80 p-6"
          >
            <div
              className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${service.accent} opacity-70`}
            />
            <div className="relative flex h-full flex-col space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">{service.description}</p>
              <Button
                variant="ghost"
                className="group mt-auto px-0 text-primary hover:text-primary hover:underline"
                onClick={() => {
                  gsap.to(window, {
                    duration: 1,
                    scrollTo: "#contact",
                    ease: "power2.out",
                  });
                }}
              >
                {t.common.contactCta}
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
