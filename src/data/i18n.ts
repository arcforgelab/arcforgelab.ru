import { Github, Gitlab, Mail, Newspaper, Send, type LucideIcon } from "lucide-react";

import { Language } from "@/lib/i18n-config";

type LocalizedString = Record<Language, string>;

type LocalizedSocialLink = {
  label: LocalizedString;
  href: string;
  icon: LucideIcon;
};

type ServiceItem = {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  accent: string;
};

export type LocalizedPortfolioItem = {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  longDescription: LocalizedString;
  tech: string[];
  stack: string[];
  role: LocalizedString;
  type: LocalizedString;
  link: string;
  year: string;
  favorite?: boolean;
  screens: { title: LocalizedString; img: string }[];
};

const socialLinks: LocalizedSocialLink[] = [
  { label: { en: "Email", ru: "Почта" }, href: "mailto:hello@arcforgelab.com", icon: Mail },
  { label: { en: "GitHub", ru: "GitHub" }, href: "https://github.com/arcforgelab", icon: Github },
  { label: { en: "GitLab", ru: "GitLab" }, href: "https://git.smartom.dev/arcforgelab", icon: Gitlab },
  { label: { en: "Habr", ru: "Хабр" }, href: "https://habr.com/ru/users/ArcForgeLab", icon: Newspaper },
  { label: { en: "Telegram", ru: "Телеграм" }, href: "https://t.me/arcforgelab_dev", icon: Send },
];

const skillStacks = {
  backend: [
    "Node.js / Bun",
    "ElysiaJS / ExpressJS / FastifyJS",
    "REST API / GraphQL / gRPC / tRPC",
    "RabbitMQ / S3",
    "WebSockets / SSE / WebPush",
    "FCM / Telegram Bot API",
    "RBAC / OAuth2 / JWT / Sessions"
  ],
  mobileAndDesktop: [
    "React Native",
    "Flutter",
    "Tauri / Electron",
    "C# / WPF",
    "Kotlin / Java Native"
  ],
  databases: [
    "SQL / NoSQL",
    "ORM / TypeORM / Prisma / Drizzle",
    "PostgreSQL / MySQL / SQLite / MSSQL",
    "CLickHouse",
    "OpenSearch",
    "MongoDB / Redis",
  ],
  devops: [
    "containerd / Docker / Compose",
    "Kubernetes (k8s) / Helm",
    "CI/CD, GitLab PipeLine / Harbor",
    "Cloudflare / AWS Tools",
    "Observability / Monitoring / Alerting",
    "OpenTelemetry / PLG Stack / Umami / Sentry",
    "SSO / OAuth2",
    "Vault",
    "SMTP",
    "Jmeter",
    "Minio S3",
    "Nginx / Traefik / CertBot",
    "systemctl/ cron / ufw / net-tools"
  ],
  frontend: [
    "React / Next.js",
    "Pug / Gulp",
    "Framer Motion / GSAP",
    "Tailwind CSS / BEM / SASS",
    "Bootstrap / Shadcn/UI",
    "Vite / rsbuild / Webpack",
    "Tanstack-Stack / Zustand",
  ]
};

const servicesContent: ServiceItem[] = [
  {
    id: "backend",
    title: {
      en: "Custom development",
      ru: "Индивидуальная разработка",
    },
    description: {
      en: "I build applications, APIs, dashboards, and infrastructure components. I apply best engineering practices: tests, code review, automation, and reliable deployments.",
      ru: "Реализация приложений, API, админок, инфраструктурных решений. Использую лучшие практики: покрытие тестами, code review, автоматизация развёртывания.",
    },
    accent: "from-yellow-300/45 via-amber-300/30 to-orange-200/30",
  },
  {
    id: "audit",
    title: {
      en: "Technical audit",
      ru: "Технический аудит ПО",
    },
    description: {
      en: "I analyze code, infrastructure, and processes to find bottlenecks, risks, and growth points. I prepare recommendations to improve reliability and reduce costs.",
      ru: "Провожу аудит кода, инфраструктуры и процессов с целью выявления узких мест, рисков и потенциальных точек роста. Подготовлю рекомендации по повышению надёжности и снижению издержек.",
    },
    accent: "from-slate-200/60 via-yellow-200/20 to-slate-100/10",
  },
  {
    id: "infrastructure",
    title: {
      en: "Technology consulting",
      ru: "Технологическое консультирование",
    },
    description: {
      en: "I help choose tech stacks, architecture, and workflow practices that support product growth and stability. I assist CTOs, leads, and product managers.",
      ru: "Помогу определить технологический стек, архитектурные решения и организационные практики, которые обеспечат рост и устойчивость продукта. Поддержка CTO, тимлидов и продакт-менеджеров.",
    },
    accent: "from-emerald-200/50 via-lime-200/30 to-yellow-100/20",
  },
  {
    id: "process",
    title: {
      en: "Training and team development",
      ru: "Обучение и развитие команд",
    },
    description: {
      en: "I train engineers and teams: migrations to new tech, CI/CD, SRE, DevOps, and more. Work is based on real cases and company-specific tasks.",
      ru: "Провожу обучение разработчиков и команд: от адаптации под новые технологии до внедрения лучших инженерных практик (CI/CD, SRE, DevOps и др.). Работаю с реальными кейсами.",
    },
    accent: "from-emerald-200/50 via-lime-200/30 to-yellow-100/20",
  },
  {
    id: "architecture",
    title: {
      en: "System design",
      ru: "Системное проектирование",
    },
    description: {
      en: "I prepare documentation, API specs, architecture diagrams, and service interaction models. Useful for presale, MVP, and scaling phases.",
      ru: "Разработка технической документации, спецификаций API, схем взаимодействия микросервисов. Поддержка на этапе пресейла, MVP и масштабирования.",
    },
    accent: "from-emerald-200/50 via-lime-200/30 to-yellow-100/20",
  },
  {
    id: "product",
    title: {
      en: "Technical management",
      ru: "Технический менеджмент",
    },
    description: {
      en: "I help form teams, maintain performance, and introduce Agile/Lean practices. I build predictable development workflows with minimal technical debt.",
      ru: "Формирование команды, контроль эффективности, внедрение Agile/Lean. Строю управляемый процесс разработки с минимумом техдолга.",
    },
    accent: "from-emerald-200/50 via-lime-200/30 to-yellow-100/20",
  },
];

const portfolioContent: LocalizedPortfolioItem[] = [
  {
    id: "hoppo",
    title: {
      en: "Hoppo",
      ru: "Хоппо",
    },
    description: {
      en: "A curated video platform for children with parental controls.",
      ru: "Детская видеоплатформа для семей Якутии для повышения интереса к якутскому языку.",
    },
    longDescription: {
      en: "Built and operated the backend for a mobile kids video app: content ingestion pipeline, moderation, auth, parental controls, analytics, and operational dashboards. Delivered streaming-friendly APIs, rollout strategy, and on-call routines for the team.",
      ru: "Отвечал за общую API-систему (авторизация, работа с видео, профили детей, файлы). В рамках нагрузочного тестирования увеличил пропускную способность API с 140 до 5000 запросов в секунду за счёт улучшения системы кэширования. Благодаря применению сервис-ориентированного подхода, настройке CI/CD пайплайнов через Docker и интеграции с k8s, время вывода новых фич сократилось до 5 минут в полностью автоматическом режиме. Также в рамках сотрудничества с техническим отделом Кэскил, мы произвели интеграцию с их мультимедийной системой для работы вертикальных видео + связь пользователей разных систем друг с другом. Для ускоренной разработки административной панели, я использовал готовые компоненты от Shadcn/UI, значительно переработав и упростив многие аспекты, внедрив также и универсальные таблицы с широкой возможностью кастомизации",
    },
    tech: ["ElysiaJS", "Bun", "Docker", "RabbitMQ", "Redis", "PostgreSQL", "GraphQL", "Kubernetes", "Sentry", "Prometheus", "Grafana", "SMTP", "S3", "Shadcn/UI", "TailwindCSS", "Traefik", "Prisma", "NextJS"],
    stack: ["ElysiaJS", "Bun", "Docker", "RabbitMQ", "Redis", "PostgreSQL", "GraphQL", "Kubernetes", "Sentry", "Prometheus", "Grafana", "SMTP", "S3", "Shadcn/UI", "TailwindCSS", "Traefik", "Prisma", "NextJS"],
    role: {
      en: "Senior Backend Engineer",
      ru: "Senior backend-инженер",
    },
    type: {
      en: "api with admin",
      ru: "API + Админка",
    },
    link: "https://www.rustore.ru/catalog/app/com.smartom.sakhahoppokidstube",
    year: "2025",
    favorite: true,
    screens: [
      {
        title: {
          en: "Featured screen",
          ru: "Общий экран",
        },
        img: "/cases/hoppo/main_screen.jpg",
      },
      {
        title: {
          en: "player screen",
          ru: "Плеер",
        },
        img: "/cases/hoppo/player_screen.jpg",
      },
      {
        title: {
          en: "games screen",
          ru: "Игры внутри приложения",
        },
        img: "/cases/hoppo/games_screen.jpg",
      },
    ],
  },
  {
    id: "uzorutum",
    title: {
      en: "UzorUtum",
      ru: "УзорУтум",
    },
    description: {
      en: "A curated video platform for children with parental controls.",
      ru: "Интернет-магазин ювелирной компании.",
    },
    longDescription: {
      en: "Built and operated the backend for a mobile kids video app: content ingestion pipeline, moderation, auth, parental controls, analytics, and operational dashboards. Delivered streaming-friendly APIs, rollout strategy, and on-call routines for the team.",
      ru: "Являлся одним из первых коммерческих проектов. За две недели реализовал всё серверное API на Express, применяя DDD-подход и интегрировав ЮКассу, как платежный шлюз. Спустя полгода провёл модернизацию архитектуры и миграцию на ElysiaJS, что снизило количество ошибок и клиентских жалоб, связанных с API, на 35%, а также позволило поднять SLA до 99,67% за первый год работы.\n\nПосле оптимизации Docker-образа, перехода на Bun и перенастройки Prisma на нативную версию, размер сборки сократился с 122,27 МБ до 49,58 МБ. Впервые внедрил cron-задачи для автоматической отправки писем о предстоящей доставке, реализовал систему зон доставки с индивидуальными тарифами и автоматическим определением зоны по координатам. Для административной части использовал собственную универсальную админ-панель, разработанную в Hoppo, доработав для работы в формате PWA.",
    },
    tech: ["ElysiaJS", "Bun", "ExpressJS", "Docker", "RabbitMQ", "Redis", "PostgreSQL", "Prometheus", "Grafana", "SMTP", "S3", "ЮКасса", "Shadcn/UI", "TailwindCSS", "Traefik", "OpenAPI", "PWA", "Prisma", "NextJS"],
    stack: ["ElysiaJS", "Bun", "ExpressJS", "Docker", "RabbitMQ", "Redis", "PostgreSQL", "Prometheus", "Grafana", "SMTP", "S3", "ЮКасса", "Shadcn/UI", "TailwindCSS", "Traefik", "OpenAPI", "PWA", "Prisma", "NextJS"],
    role: {
      en: "Senior Backend Engineer",
      ru: "Senior backend-инженер",
    },
    type: {
      en: "api with admin",
      ru: "API + Админка",
    },
    link: "https://uzorutum.ru",
    year: "2024",
    favorite: true,
    screens: [
      {
        title: {
          en: "Api docs",
          ru: "Документация API",
        },
        img: "/cases/uzorutum/api_docs.png",
      },
      {
        title: {
          en: "Catalog",
          ru: "Каталог",
        },
        img: "/cases/uzorutum/catalog.png",
      },
      {
        title: {
          en: "admin",
          ru: "Админ панель",
        },
        img: "/cases/uzorutum/admin.png",
      },
    ],
  },
  {
    id: "core",
    title: {
      en: "Core",
      ru: "Core",
    },
    description: {
      en: "A curated video platform for children with parental controls.",
      ru: "Локальный центр предоставления различного мультимедийного контента для отдаленных районов республики с ограниченным интернетом.",
    },
    longDescription: {
      en: "Built and operated the backend for a mobile kids video app: content ingestion pipeline, moderation, auth, parental controls, analytics, and operational dashboards. Delivered streaming-friendly APIs, rollout strategy, and on-call routines for the team.",
      ru: "Интересный проект по концепции. Участвовал как бекенд и фронтенд разработчик. Моя зона ответственности - это система форума в виде чатов, а также Push уведомления. Это было первый раз, когда я работал с сокетами на PHP. В итоге принцип оказался такой же, как и с Socket.IO",
    },
    tech: ["PHP", "Laravel", "Laravel Reverb", "Laravel Echo" , "Nginx", "Docker", "PostgreSQL", "Redis", "Minio", "S3", "ReactJS", "Zustand", "Tanstack Query", "Tanstack Router", "rsbuild", "TailwindCSS"],
    stack: ["PHP", "Laravel", "Laravel Reverb", "Laravel Echo" , "Nginx", "Docker", "PostgreSQL", "Redis", "Minio S3", "React", "Zustand", "Tanstack Query", "Tanstack Router", "rsbuild", "TailwindCSS"],
    role: {
      en: "Senior Backend Engineer",
      ru: "Senior backend-инженер",
    },
    type: {
      en: "fullstack",
      ru: "Fullstack",
    },
    link: "https://uzorutum.ru",
    year: "2024",
    screens: [
      {
        title: {
          en: "Main page",
          ru: "Главная",
        },
        img: "/cases/core/main.png",
      },
      {
        title: {
          en: "Chat",
          ru: "Чат",
        },
        img: "/cases/core/chat.png",
      }
    ],
  },
];

export type TranslationDictionary = {
  common: {
    languageLabel: string;
    nav: { label: string; href: string }[];
    role: string;
    cta: string;
    contactCta: string;
  };
  hero: {
    badge: string;
    status: string;
    highlights: string[];
    ctaPrimary: string;
    socialLabel: string;
    aboutTitle: string;
    aboutBody: string;
    metrics: { value: string; label: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    cta: string;
    items: (Omit<ServiceItem, "title" | "description"> & { title: string; description: string })[];
  };
  skills: {
    eyebrow: string;
    title: string;
    badge: string;
    categories: { id: keyof typeof skillStacks; title: string; tone: string }[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    viewAll: string;
    linkLabel: string;
    items: LocalizedPortfolioItem[];
  };
  clients: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    badges: string[];
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      projectLabel: string;
      projectPlaceholder: string;
      submit: string;
      submitting: string;
    };
    validation: {
      name: string;
      email: string;
      project: string;
    };
    toast: {
      sendingTitle: string;
      sendingDescription: (name: string) => string;
      successTitle: string;
      successDescription: (email: string) => string;
    };
  };
  work: {
    eyebrow: string;
    title: string;
    backLink: string;
    searchPlaceholder: string;
    filterLabel: string;
    filters: {
      role: string;
      type: string;
      tech: string;
      any: string;
    };
    caseLink: string;
    viewDetails: string;
    stackLabel: string;
    galleryLabel: string;
    openCase: string;
  };
  socialLinks: (Omit<LocalizedSocialLink, "label"> & { label: string })[];
  skillStacks: typeof skillStacks;
  servicesRaw: ServiceItem[];
  portfolioRaw: LocalizedPortfolioItem[];
};

export const dictionaries: Record<Language, TranslationDictionary> = {
  en: {
    common: {
      languageLabel: "Language",
      nav: [
        { label: "Home", href: "/" },
        { label: "Skills", href: "/#skills" },
        { label: "Services", href: "/#services" },
        { label: "Work", href: "/work" },
        { label: "Clients", href: "/#clients" },
        { label: "Contact", href: "/#contact" },
      ],
      role: "Fullstack developer",
      cta: "Hire",
      contactCta: "Discuss",
    },
    hero: {
      badge: "Available for hire",
      status: "Websites / Apps / More",
      highlights: [
        "Lead engineer with 8+ years of experience.",
        "Adapt quickly to team pace, support a healthy culture, respect and follow company values.",
      ],
      ctaPrimary: "View my work",
      socialLabel: "Ship faster. Fewer incidents. Better sleep.",
      aboutTitle: "What do I do?",
      aboutBody:
          "I design APIs, databases, and backend services, prepare environments, and ensure stable system operation. I care about speed, security, and predictable delivery.",
      metrics: [
        { label: "Services maintained", value: "50+" },
        { label: "Average pipeline time", value: "1.3min" },
        { label: "Average SLA", value: "99.9%" },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Backend, Frontend, DevOps.",
      cta: "Work formats",
      items: servicesContent.map((service) => ({
        ...service,
        title: service.title.en,
        description: service.description.en,
      })),
    },
    skills: {
      eyebrow: "Skills",
      title: "Backend comes first. Everything else exists to make the service stable and evolving.",
      badge: "Senior/lead expertise",
      categories: [
        { id: "backend", title: "Backend development", tone: "from-indigo-300/60 via-violet-200/50 to-slate-100/40" },
        { id: "databases", title: "Database administration", tone: "from-emerald-300/60 via-lime-200/50 to-amber-100/40" },
        { id: "devops", title: "DevOps & reliability", tone: "from-teal-300/60 via-cyan-200/50 to-blue-100/40" },
        { id: "frontend", title: "Client-side development", tone: "from-amber-300/60 via-yellow-200/50 to-orange-100/40" },
        { id: "mobileAndDesktop", title: "Mobile & desktop apps", tone: "from-rose-300/50 via-pink-200/50 to-slate-100/40" },
      ],
    },
    portfolio: {
      eyebrow: "Work",
      title: "Cases, systems, and outcomes for teams.",
      viewAll: "View all work",
      linkLabel: "Open case",
      items: portfolioContent,
    },
    clients: {
      eyebrow: "Clients",
      title: "Teams and partners I’ve worked with.",
      subtitle: "From backend to full-stack delivery.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell me about your product.",
      description:
          "I help with backend, frontend, infrastructure, DevOps, integrations, security, observability, and stable delivery. Strong in APIs, data pipelines, auth/billing, and reliable releases.",
      badges: [
        "API & platform engineering",
        "From MVP to scale without regressions",
        "Observability, CI/CD, and on-call",
      ],
      form: {
        nameLabel: "Name",
        namePlaceholder: "How should I address you?",
        emailLabel: "Email",
        emailPlaceholder: "you@company.com",
        projectLabel: "Request / project",
        projectPlaceholder: "What do you need?",
        submit: "Send",
        submitting: "Sending...",
      },
      validation: {
        name: "Name is required",
        email: "Enter a valid email",
        project: "Add a few details about the task",
      },
      toast: {
        sendingTitle: "Sending...",
        sendingDescription: (name) => `Thanks, ${name}. I'll reply soon.`,
        successTitle: "Sent!",
        successDescription: (email) => `I'll contact you at ${email}.`,
      },
    },
    work: {
      eyebrow: "Portfolio",
      title: "Systems, products, and platform work.",
      backLink: "Back to homepage",
      searchPlaceholder: "Search by stack, domain, or deliverable",
      filterLabel: "Fine-tune filters",
      filters: {
        role: "Role",
        type: "Type",
        tech: "Tech",
        any: "Any",
      },
      caseLink: "Open case",
      viewDetails: "Details",
      stackLabel: "Stack",
      galleryLabel: "Screens",
      openCase: "View project",
    },
    socialLinks: socialLinks.map((link) => ({ ...link, label: link.label.en })),
    skillStacks,
    servicesRaw: servicesContent,
    portfolioRaw: portfolioContent,
  },
  ru: {
    common: {
      languageLabel: "Язык",
      nav: [
        { label: "Главная", href: "/" },
        { label: "Навыки", href: "/#skills" },
        { label: "Услуги", href: "/#services" },
        { label: "Проекты", href: "/work" },
        { label: "Клиенты", href: "/#clients" },
        { label: "Связаться", href: "/#contact" },
      ],
      role: "Fullstack-разработчик",
      cta: "Нанять",
      contactCta: "Обсудить",
    },
    hero: {
      badge: "Доступен для заказов",
      status: "Сайты / Приложения / Прочее",
      highlights: [
        "Ведущий разработчик с 8-летним опытом в IT.",
        "Быстро подстраиваюсь под темп работы, поддерживаю атмосферу в коллективе, уважаю и соблюдаю ценности компании",
      ],
      ctaPrimary: "Посмотреть мои работы",
      socialLabel: "Выпускать быстрее. Меньше инцидентов. Больше сна.",
      aboutTitle: "Что я делаю?",
      aboutBody:
        "Проектирую API, базы данных и сервисы, настраиваю окружения и обеспечиваю стабильную работу backend-систем. Забочусь о скорости, безопасности и предсказуемости продукта.",
      metrics: [
        { label: "Сервисов в обслуживании", value: "50+" },
        { label: "Среднее время работы пайплайна", value: "1,3мин" },
        { label: "Среднее время SLA", value: "99,9%" },
      ],
    },
    services: {
      eyebrow: "Услуги",
      title: "Backend, Frontend, DevOps.",
      cta: "Формат работ",
      items: servicesContent.map((service) => ({
        ...service,
        title: service.title.ru,
        description: service.description.ru,
      })),
    },
    skills: {
      eyebrow: "Навыки",
      title:
        "Backend — в основе. Всё остальное — чтобы сервис действительно работал и развивался.",
      badge: "Сеньор/лид экспертиза",
      categories: [
        { id: "backend", title: "Серверная разработка", tone: "from-indigo-300/60 via-violet-200/50 to-slate-100/40" },
        { id: "databases", title: "Администрирование баз данных", tone: "from-emerald-300/60 via-lime-200/50 to-amber-100/40" },
        { id: "devops", title: "DevOps и надёжность", tone: "from-teal-300/60 via-cyan-200/50 to-blue-100/40" },
        { id: "frontend", title: "Клиентская часть", tone: "from-amber-300/60 via-yellow-200/50 to-orange-100/40" },
        { id: "mobileAndDesktop", title: "Разработка mobile/desktop приложений", tone: "from-rose-300/50 via-pink-200/50 to-slate-100/40" },
      ],
    },
    portfolio: {
      eyebrow: "Проекты",
      title: "Кейсы, системы и результаты для команд.",
      viewAll: "Все проекты",
      linkLabel: "Открыть проект",
      items: portfolioContent,
    },
    clients: {
      eyebrow: "Клиенты",
      title: "Команды и партнеры, с которым работал.",
      subtitle: "От backend, до fullstack работ.",
    },
    contact: {
      eyebrow: "Связаться",
      title: "Расскажите о продукте.",
      description:
        "Помогаю с backend, frontend, инфраструктурой, DevOps, интеграциями, безопасностью, наблюдаемостью и стабильной доставкой. Сильен в API, потоках данных, авторизации/биллинге и безотказных релизах.",
      badges: [
        "Инжиниринг API и платформ",
        "От MVP до масштаба без регрессий",
        "Наблюдаемость, CI/CD и on-call",
      ],
      form: {
        nameLabel: "Имя",
        namePlaceholder: "Как к вам обращаться?",
        emailLabel: "Email",
        emailPlaceholder: "you@company.com",
        projectLabel: "Запрос / проект",
        projectPlaceholder: "Что вам нужно?",
        submit: "Отправить",
        submitting: "Отправляю...",
      },
      validation: {
        name: "Имя обязательно",
        email: "Введите корректный email",
        project: "Добавьте пару строк о задаче",
      },
      toast: {
        sendingTitle: "Отправляю...",
        sendingDescription: (name: string) => `Спасибо, ${name}. Скоро отвечу.`,
        successTitle: "Доставлено!",
        successDescription: (email: string) => `Свяжусь с вами на ${email}.`,
      },
    },
    work: {
      eyebrow: "Портфолио",
      title: "Системы, продукты и платформы.",
      backLink: "Назад на главную",
      searchPlaceholder: "Ищите по стеку, домену или результату",
      filterLabel: "Уточнить выбор",
      filters: {
        role: "Роль",
        type: "Тип",
        tech: "Технология",
        any: "Любая",
      },
      caseLink: "Открыть кейс",
      viewDetails: "Подробнее",
      stackLabel: "Стек",
      galleryLabel: "Скриншоты",
      openCase: "Перейти в проект",
    },
    socialLinks: socialLinks.map((link) => ({ ...link, label: link.label.ru })),
    skillStacks,
    servicesRaw: servicesContent,
    portfolioRaw: portfolioContent,
  },
};
