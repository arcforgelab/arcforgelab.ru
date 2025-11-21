import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/arcforgelab", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arcforgelab", icon: Linkedin },
  { label: "Twitter/X", href: "https://twitter.com/arcforgelab", icon: Twitter },
  { label: "Email", href: "mailto:hello@arcforgelab.com", icon: Mail },
];

export const skills = {
  frontend: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "GSAP & ScrollTrigger",
    "Edge Rendering",
    "Accessibility-first UI",
  ],
  backend: [
    "Node.js",
    "NestJS",
    "GraphQL",
    "tRPC",
    "PostgreSQL",
    "Redis caching",
    "WebSockets",
    "Prisma ORM",
  ],
  devops: [
    "Docker & Compose",
    "Kubernetes",
    "CI/CD (GitHub Actions)",
    "AWS (ECS, Lambda, RDS)",
    "Vercel / Cloudflare",
    "Observability (OpenTelemetry)",
    "Feature flags",
    "Security hardening",
  ],
  tools: [
    "Storybook",
    "Playwright",
    "Vitest",
    "Figma-to-code",
    "Design tokens",
    "Performance profiling",
    "Data visualization",
    "DX tooling",
  ],
};

export const services = [
  {
    title: "Product Engineering",
    description:
      "From zero-to-one SaaS and platform builds with robust auth, billing, and analytics baked in.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    accent: "from-cyan-400/50 via-emerald-400/30 to-teal-300/30",
  },
  {
    title: "Frontend Systems",
    description:
      "Design systems, component libraries, and motion-rich experiences using shadcn/ui + GSAP.",
    tags: ["Design tokens", "GSAP", "Accessibility", "Storybook"],
    accent: "from-indigo-400/50 via-fuchsia-400/20 to-sky-300/20",
  },
  {
    title: "Performance & DevOps",
    description:
      "Observability, CI/CD, and infra to keep releases predictable, fast, and secure.",
    tags: ["Kubernetes", "Observability", "CI/CD", "Web Vitals"],
    accent: "from-amber-300/50 via-orange-400/30 to-rose-300/30",
  },
];

export const portfolioItems = [
  {
    title: "Neon Analytics",
    description:
      "Realtime product analytics suite with stream processing, actionable dashboards, and journey replays.",
    tech: ["Next.js", "PostgreSQL", "ClickHouse", "GSAP"],
    role: "Lead Engineer",
    type: "SaaS",
    link: "https://arcforgelab.com/work/neon",
    year: "2025",
  },
  {
    title: "Layered Commerce",
    description:
      "Composable commerce starter with headless checkout, CMS-driven merchandising, and 3D product reveals.",
    tech: ["React", "tRPC", "Stripe", "Three.js"],
    role: "Full-stack Dev",
    type: "E-commerce",
    link: "https://arcforgelab.com/work/layered",
    year: "2024",
  },
  {
    title: "Signal Ops",
    description:
      "Operational intelligence console with role-based access, dashboards, and AI-assisted workflows.",
    tech: ["Next.js", "NestJS", "GraphQL", "Docker"],
    role: "Tech Lead",
    type: "Platform",
    link: "https://arcforgelab.com/work/signal",
    year: "2025",
  },
  {
    title: "Northwind XR",
    description:
      "Immersive product storytelling with multi-layer parallax, scroll choreography, and WebGL scenes.",
    tech: ["Next.js", "GSAP", "WebGL", "Tailwind"],
    role: "Creative Dev",
    type: "Experience",
    link: "https://arcforgelab.com/work/northwind",
    year: "2024",
  },
  {
    title: "Pulse UI Kit",
    description:
      "Shadcnblocks-powered component system with usage docs, theming tokens, and motion presets.",
    tech: ["shadcn/ui", "Storybook", "Radix", "GSAP"],
    role: "Design Engineer",
    type: "Design System",
    link: "https://arcforgelab.com/work/pulse",
    year: "2023",
  },
  {
    title: "Aether Research",
    description:
      "Data storytelling site for climate metrics with map layers, filters, and responsive narratives.",
    tech: ["Next.js", "D3.js", "Mapbox", "Edge"],
    role: "Frontend Lead",
    type: "Data Viz",
    link: "https://arcforgelab.com/work/aether",
    year: "2023",
  },
];

export const clients = [
  { name: "Helios Labs", initials: "HL", tagline: "AI safety", hue: "from-cyan-400/30 to-blue-500/40" },
  { name: "Vertex Ops", initials: "VO", tagline: "Cloud infra", hue: "from-amber-300/30 to-orange-500/40" },
  { name: "Kinetic", initials: "KN", tagline: "Mobility", hue: "from-pink-400/30 to-fuchsia-500/40" },
  { name: "Northwind", initials: "NW", tagline: "Energy", hue: "from-emerald-300/30 to-teal-500/40" },
  { name: "Lumenary", initials: "LM", tagline: "Healthcare", hue: "from-indigo-400/30 to-purple-500/40" },
  { name: "Atlas", initials: "AT", tagline: "Fintech", hue: "from-sky-400/30 to-cyan-500/40" },
  { name: "Quanta", initials: "QT", tagline: "Edge AI", hue: "from-lime-300/30 to-emerald-500/40" },
  { name: "Orion", initials: "OR", tagline: "Aerospace", hue: "from-violet-400/30 to-blue-500/40" },
];
