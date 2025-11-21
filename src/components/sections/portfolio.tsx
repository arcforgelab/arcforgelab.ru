'use client';

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Filter } from "lucide-react";
import { portfolioItems } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

gsap.registerPlugin(ScrollTrigger);

type FilterState = {
  role: string;
  type: string;
  tech: string;
};

const unique = (arr: string[]) => Array.from(new Set(arr));

export function PortfolioSection() {
  const [filters, setFilters] = useState<FilterState>({
    role: "all",
    type: "all",
    tech: "all",
  });
  const scope = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(scope.current?.querySelectorAll(".portfolio-card"), {
        scrollTrigger: {
          trigger: scope.current,
          start: "top 80%",
        },
        y: 44,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
      });
    },
    { scope, dependencies: [filters] }
  );

  const roles = useMemo(() => ["all", ...unique(portfolioItems.map((item) => item.role))], []);
  const types = useMemo(() => ["all", ...unique(portfolioItems.map((item) => item.type))], []);
  const allTech = useMemo(
    () => ["all", ...unique(portfolioItems.flatMap((item) => item.tech))],
    []
  );

  const filtered = portfolioItems.filter((item) => {
    const roleMatch = filters.role === "all" || item.role === filters.role;
    const typeMatch = filters.type === "all" || item.type === filters.type;
    const techMatch = filters.tech === "all" || item.tech.includes(filters.tech);
    return roleMatch && typeMatch && techMatch;
  });

  const handleFilter = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section ref={scope} id="work" className="mx-auto max-w-6xl px-6 pb-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-primary/80">Selected work</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Built to ship and scale.</h2>
        </div>
        <Button variant="secondary" className="border border-border/70 bg-secondary/70">
          <Filter className="mr-2 h-4 w-4" />
          Refine
        </Button>
      </div>

      <Card className="floating-card mb-6 border-border/70 bg-card/70 p-4">
        <Tabs defaultValue="role" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-secondary/60 text-muted-foreground">
            <TabsTrigger value="role">Role</TabsTrigger>
            <TabsTrigger value="type">Project type</TabsTrigger>
            <TabsTrigger value="tech">Tech</TabsTrigger>
          </TabsList>
          <TabsContent value="role" className="mt-4">
            <div className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <Badge
                  key={role}
                  variant={filters.role === role ? "default" : "secondary"}
                  onClick={() => handleFilter("role", role)}
                  className={`cursor-pointer ${filters.role === role ? "bg-primary text-primary-foreground" : "bg-secondary/70"}`}
                >
                  {role}
                </Badge>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="type" className="mt-4">
            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <Badge
                  key={type}
                  variant={filters.type === type ? "default" : "secondary"}
                  onClick={() => handleFilter("type", type)}
                  className={`cursor-pointer ${filters.type === type ? "bg-primary text-primary-foreground" : "bg-secondary/70"}`}
                >
                  {type}
                </Badge>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="tech" className="mt-4">
            <div className="flex flex-wrap gap-2">
              {allTech.map((tech) => (
                <Badge
                  key={tech}
                  variant={filters.tech === tech ? "default" : "secondary"}
                  onClick={() => handleFilter("tech", tech)}
                  className={`cursor-pointer ${filters.tech === tech ? "bg-primary text-primary-foreground" : "bg-secondary/70"}`}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((item) => (
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
                <Badge variant="outline" className="border-white/10 bg-white/5 text-xs">
                  {item.year}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <Separator className="bg-white/10" />
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
                  View project
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
