import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/arcforgelab", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arcforgelab", icon: Linkedin },
  { label: "Twitter/X", href: "https://twitter.com/arcforgelab", icon: Twitter },
  { label: "Почта", href: "mailto:hello@arcforgelab.com", icon: Mail },
];

export const skills = {
  frontend: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui + shadcnblocks",
    "GSAP & ScrollTrigger",
    "Edge Rendering",
    "Доступность (A11y)",
  ],
  backend: [
    "Node.js",
    "NestJS",
    "GraphQL",
    "tRPC",
    "PostgreSQL",
    "Кэш Redis",
    "WebSockets",
    "Prisma ORM",
  ],
  devops: [
    "Docker & Compose",
    "Kubernetes",
    "CI/CD (GitHub Actions)",
    "AWS / Cloudflare / Vercel",
    "Наблюдаемость (OpenTelemetry)",
    "Feature flags",
    "Безопасность и SSO",
    "Каталоги helm/terraform",
  ],
  tools: [
    "Storybook",
    "Playwright / Vitest",
    "Figma-to-code",
    "Design tokens",
    "Профилирование Web Vitals",
    "Data visualization",
    "DX tooling",
    "Документация и UX-рисерч",
  ],
};

export const services = [
  {
    title: "Продуктовая разработка",
    description:
      "С нуля до продакшена: SaaS, платформы, биллинг, авторизация, аналитика и миграции.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    accent: "from-yellow-300/45 via-amber-300/30 to-orange-200/30",
  },
  {
    title: "Фронтенд-системы",
    description:
      "Дизайн-системы на shadcn/ui + shadcnblocks, библиотека компонентов, анимации на GSAP.",
    tags: ["Design tokens", "GSAP", "Доступность", "Storybook"],
    accent: "from-slate-200/60 via-yellow-200/20 to-slate-100/10",
  },
  {
    title: "Производительность и DevOps",
    description:
      "Наблюдаемость, CI/CD, оптимизация бандлов, катастрофоустойчивость и безопасность.",
    tags: ["Kubernetes", "Observability", "CI/CD", "Web Vitals"],
    accent: "from-emerald-200/50 via-lime-200/30 to-yellow-100/20",
  },
];

export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  stack: string[];
  role: string;
  type: string;
  link: string;
  year: string;
  favorite?: boolean;
  screens: { title: string; bg: string }[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "neon-analytics",
    title: "Neon Analytics",
    description:
      "Реалтайм-аналитика с потоковой обработкой, дашбордами и воспроизведением сценариев.",
    longDescription:
      "Проектировал архитектуру событийной шины, внедрил прогрессивный рендеринг, сделал хореографию анимаций на GSAP и построил гибкую схему ролей.",
    tech: ["Next.js", "PostgreSQL", "ClickHouse", "GSAP"],
    stack: ["Next.js App Router", "Prisma + ClickHouse ingest", "Edge middleware", "GSAP choreography"],
    role: "Ведущий инженер",
    type: "SaaS",
    link: "https://arcforgelab.com/work/neon",
    year: "2025",
    favorite: true,
    screens: [
      { title: "Дашборд показателей", bg: "from-yellow-200/80 to-amber-200/60" },
      { title: "Потоки событий", bg: "from-slate-200/80 to-stone-100/80" },
      { title: "Сегменты и роли", bg: "from-amber-100/80 to-yellow-100/70" },
    ],
  },
  {
    id: "layered-commerce",
    title: "Layered Commerce",
    description:
      "Композиционный коммёрс с headless-чекаутом, CMS-контентом и 3D-раскадровкой товаров.",
    longDescription:
      "Собрал headless-стек с Stripe, внедрил динамический поиск, настроил CDN-оптимизацию изображений и анимировал карточки товаров с ScrollTrigger.",
    tech: ["React", "tRPC", "Stripe", "Three.js"],
    stack: ["Next.js ISR", "Stripe Billing", "Three.js hero", "tRPC router"],
    role: "Фулстек",
    type: "E-commerce",
    link: "https://arcforgelab.com/work/layered",
    year: "2024",
    favorite: true,
    screens: [
      { title: "Главная витрина", bg: "from-yellow-100/70 to-white" },
      { title: "Детали товара", bg: "from-stone-100/80 to-slate-100/70" },
      { title: "Чекаут", bg: "from-amber-100/70 to-yellow-200/60" },
    ],
  },
  {
    id: "signal-ops",
    title: "Signal Ops",
    description:
      "Операционная консоль с RBAC, алертингом и AI-подсказками для сменных команд.",
    longDescription:
      "Реализовал GraphQL API для агрегирования метрик, оснастил интерфейс GSAP-анимациями для статусов и построил панель прав с granular-доступом.",
    tech: ["Next.js", "NestJS", "GraphQL", "Docker"],
    stack: ["NestJS GraphQL", "Next.js streaming", "Redis pub/sub", "GSAP status cues"],
    role: "Техлид",
    type: "Platform",
    link: "https://arcforgelab.com/work/signal",
    year: "2025",
    screens: [
      { title: "Мониторинг", bg: "from-slate-200/80 to-gray-100/70" },
      { title: "Роли и доступы", bg: "from-amber-100/70 to-yellow-50/60" },
      { title: "AI-подсказки", bg: "from-stone-100/80 to-slate-50/70" },
    ],
  },
  {
    id: "northwind-xr",
    title: "Northwind XR",
    description:
      "Иммерсивный storytelling с многослойным параллаксом и WebGL-сценами.",
    longDescription:
      "Настроил GSAP ScrollTrigger для синхронных сцен, оптимизировал WebGL меши и добавил ленивую загрузку текстур с fallbacks.",
    tech: ["Next.js", "GSAP", "WebGL", "Tailwind"],
    stack: ["GSAP timelines", "WebGL layers", "Progressive hydration", "Scroll-driven story"],
    role: "Creative Dev",
    type: "Experience",
    link: "https://arcforgelab.com/work/northwind",
    year: "2024",
    screens: [
      { title: "XR сцена", bg: "from-amber-100/70 to-amber-200/50" },
      { title: "Переходы", bg: "from-stone-100/80 to-slate-50/70" },
      { title: "Навигация", bg: "from-yellow-200/60 to-amber-100/70" },
    ],
  },
  {
    id: "pulse-ui-kit",
    title: "Pulse UI Kit",
    description:
      "Дизайн-система на shadcnblocks с документацией, токенами и motion-пресетами.",
    longDescription:
      "Построил библиотеку компонентов, добавил режим предпросмотра анимаций GSAP и экспорт токенов в Figma/Storybook.",
    tech: ["shadcn/ui", "Storybook", "Radix", "GSAP"],
    stack: ["Design tokens", "Storybook docs", "Radix primitives", "GSAP presets"],
    role: "Design Engineer",
    type: "Design System",
    link: "https://arcforgelab.com/work/pulse",
    year: "2023",
    screens: [
      { title: "Каталог компонентов", bg: "from-slate-100/80 to-stone-100/80" },
      { title: "Анимации", bg: "from-yellow-100/80 to-amber-50/70" },
      { title: "Темы", bg: "from-stone-50/80 to-white" },
    ],
  },
  {
    id: "aether-research",
    title: "Aether Research",
    description:
      "Датастори для климатических метрик с картами, фильтрами и адаптивными нарративами.",
    longDescription:
      "Собрал слой визуализации на D3/Mapbox, добавил серверный поиск и плавные скролл-истории с точечными подсказками.",
    tech: ["Next.js", "D3.js", "Mapbox", "Edge"],
    stack: ["SSR + Edge", "Mapbox GL", "D3 charts", "ScrollTrigger narration"],
    role: "Frontend Lead",
    type: "Data Viz",
    link: "https://arcforgelab.com/work/aether",
    year: "2023",
    screens: [
      { title: "Карта показателей", bg: "from-yellow-50/80 to-white" },
      { title: "Графики", bg: "from-stone-100/80 to-slate-50/70" },
      { title: "Сторителлинг", bg: "from-amber-100/70 to-yellow-50/70" },
    ],
  },
];

export const clients = [
  { name: "Helios Labs", initials: "HL", tagline: "AI safety", hue: "from-yellow-200/60 to-amber-200/70" },
  { name: "Vertex Ops", initials: "VO", tagline: "Cloud infra", hue: "from-slate-200/60 to-stone-100/80" },
  { name: "Kinetic", initials: "KN", tagline: "Mobility", hue: "from-amber-100/70 to-yellow-200/60" },
  { name: "Northwind", initials: "NW", tagline: "Energy", hue: "from-stone-100/70 to-white" },
  { name: "Lumenary", initials: "LM", tagline: "Healthcare", hue: "from-yellow-100/70 to-amber-50/60" },
  { name: "Atlas", initials: "AT", tagline: "Fintech", hue: "from-slate-100/80 to-stone-50/70" },
  { name: "Quanta", initials: "QT", tagline: "Edge AI", hue: "from-amber-100/70 to-yellow-200/60" },
  { name: "Orion", initials: "OR", tagline: "Aerospace", hue: "from-slate-200/60 to-stone-100/80" },
];
