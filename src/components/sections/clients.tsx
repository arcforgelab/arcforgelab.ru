'use client';

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { clients } from "@/data/content";
import { Card } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

export function ClientsSection() {
  const scope = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".client-card");
      cards.forEach((card, idx) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          delay: idx * 0.04,
        });

        gsap.to(card, {
          rotate: idx % 2 === 0 ? 0.8 : -0.6,
          y: idx % 2 === 0 ? -6 : 6,
          duration: 4 + idx * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    { scope }
  );

  return (
    <section ref={scope} id="clients" className="mx-auto max-w-6xl px-6 pb-20">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-primary/80">Клиенты</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Команды и компании, с которыми я работал.</h2>
        </div>
        <p className="hidden text-sm text-muted-foreground md:block">От backend, до fullstack работ.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {clients.map((client) => (
            <a
                key={client.name}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
            >
              <Card
                  className="client-card floating-card relative overflow-hidden border-border/60 bg-card/80 p-4 cursor-pointer transition hover:scale-[1.015]"
              >
                <div
                    className={`absolute inset-0 bg-gradient-to-br ${client.hue} opacity-60`}
                />

                <div className="relative flex items-center justify-center">
                  <img
                      src={client.logo}
                      alt={client.name}
                      className="h-12 w-auto object-contain drop-shadow-sm"
                  />
                </div>
              </Card>
            </a>
        ))}
      </div>
    </section>
  );
}
