'use client';

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { portfolioItems } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

gsap.registerPlugin(ScrollTrigger);

export function PortfolioSection() {
  const scope = useRef<HTMLDivElement | null>(null);
  const favorites = portfolioItems.filter((item) => item.favorite);

  useGSAP(
    () => {
      gsap.from(scope.current?.querySelectorAll(".portfolio-card"), {
        scrollTrigger: {
          trigger: scope.current,
          start: "top 80%",
        },
        y: 38,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
      });
    },
    { scope }
  );

  return (
    <section ref={scope} id="work" className="mx-auto max-w-6xl px-6 pb-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-primary/80">Работы</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Проекты, в котором я участвовал в разработке.</h2>
        </div>
        <Button variant="secondary" className="border border-border/70 bg-secondary/70" asChild>
          <Link href="/work">
            Изучить все
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {favorites.map((item) => (
          <Card
            key={item.title}
            className="portfolio-card floating-card group relative overflow-hidden border-border/70 bg-card/80 p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/30 opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="relative flex flex-col gap-4">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.type}</p>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <Badge variant="outline" className="border-black/5 bg-white/60 text-xs">
                  {item.year}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <Separator className="bg-black/5" />
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
                <Link href={item.link} target="_blank" className="inline-flex items-center text-primary hover:underline">
                  Открыть кейс
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
