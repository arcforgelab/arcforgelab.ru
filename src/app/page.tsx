import { ClientsSection } from "@/components/sections/clients";
import { ContactSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { PortfolioSection } from "@/components/sections/portfolio";
import { ServicesSection } from "@/components/sections/services";
import { SkillsSection } from "@/components/sections/skills";
import { Header } from "@/components/layout/header";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="grid-overlay" />
      <div className="glow left-10 top-40 h-10 w-10 bg-primary/30" />
      <div className="glow right-10 bottom-10 h-12 w-12 bg-indigo-400/30" />
      <Header />
      <main className="relative pt-20 sm:pt-24">
        <HeroSection />
        <ServicesSection />
        <SkillsSection />
        <PortfolioSection />
        <ClientsSection />
        <ContactSection />
      </main>
    </div>
  );
}
