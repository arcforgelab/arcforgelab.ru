import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/arcforgelab", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arcforgelab", icon: Linkedin },
  { label: "Twitter/X", href: "https://twitter.com/arcforgelab", icon: Twitter },
  { label: "Email", href: "mailto:hello@arcforgelab.com", icon: Mail },
];

export const skills = {
  backend: [
    "Node.js + TypeScript",
    "NestJS / tRPC",
    "GraphQL (schema-first)",
    "PostgreSQL / MySQL / SQLite",
    "Redis / RabbitMQ",
    "WebSockets / SSE",
    "Аутентификация и RBAC",
    "Prisma ORM",
    "Проектирование API и контрактов",
  ],
  devops: [
    "Docker / Docker Compose",
    "Kubernetes (k8s)",
    "CI/CD (GitHub Actions)",
    "AWS / Cloudflare / Vercel",
    "Observability / OpenTelemetry",
    "Система фич-флагов и плавных выкладок",
    "SSO / OAuth2",
    "Helm / Terraform (база)",
    "Мониторинг и алертинг",
  ],
  frontend: [
    "Next.js (App Router)",
    "React (серверные компоненты)",
    "TypeScript",
    "Tailwind CSS",
    "Проектирование клиентской архитектуры",
    "Оптимизация рендера / кэширование",
    "Edge-рендеринг",
    "Базовые принципы доступности (a11y)",
    "Интеграция с API / BFF / tRPC",
  ],
  tools: [
    "OpenAPI / GraphQL схемы",
    "Тестирование (Playwright / Vitest)",
    "Профилирование и оптимизация производительности",
    "Моделирование данных и миграции",
    "Системы разработки (DX tooling)",
    "Runbooks и процессы реагирования на инциденты",
    "Документация и стандарты команды",
    "Наблюдаемость (логирование / трассировка)",
  ],
};

export const services = [
  {
    title: "Индивидуальная разработка",
    description:
      "Реализация приложений, API, админок, инфраструктурных решений. Использую лучшие практики: покрытие тестами, code review, автоматизация развёртывания",
    tags: ["Node.js", "Bun", "ElysiaJS", "Fastify", "Express", "Python", "Django", "PHP", "Laravel", "PostgreSQL", "MongoDB", "MySQL", "SQLite", "Prisma", "pg", "MSSQL", "Docker", "Docker Compose", "Nginx", "CI/CD", "GitLab Actions", "RabbitMQ", "Sockets", "HTTP/2", "Sessions", "JWT", "React", "Next.js", "HTML5", "Tailwind", "Sass", "TypeScript",],
    accent: "from-yellow-300/45 via-amber-300/30 to-orange-200/30",
  },
  {
    title: "Технический аудит ПО",
    description:
      "Провожу аудит кода, инфраструктуры и процессов с целью выявления узких мест, рисков и потенциальных точек роста. Подготовлю рекомендации по повышению надёжности и снижению издержек.",
    tags: ["Postman", "Hoppscotch", "Swagger", "GraphQL", "REST API", "Ubuntu 20.04/22.04", "Windows 10/11", "tRPC", "YooKassa", "Auth", "RBAC", "Passport", "Microservices", "Clear Architecture", "BFF", "Integration layer",],
    accent: "from-slate-200/60 via-yellow-200/20 to-slate-100/10",
  },
  {
    title: "Технологическое консультирование",
    description:
      "Помогу определить технологический стек, архитектурные решения и организационные практики, которые обеспечат рост и устойчивость продукта. Поддержка CTO, тимлидов и продакт-менеджеров.",
    tags: ["Kubernetes", "Docker", "CI/CD", "Cloudflare", "Vercel", "AWS", "Caching", "Feature flags", "Resilience", "Security", "Nginx", "OpenAPI", "Design tokens", "Notion", "Trello"],
    accent: "from-emerald-200/50 via-lime-200/30 to-yellow-100/20",
  },
  {
    title: "Обучение и развитие команд",
    description:
        "Провожу обучение разработчиков и команд: от адаптации под новые технологии до внедрения лучших инженерных практик (CI/CD, SRE, DevOps и др.). Работаю с реальными кейсами и задачами компании.",
    tags: ["WebStorm", "VS Code", "Visual Studio", "PyCharm", "Android Studio", "CI/CD", "SRE", "DevOps", "Observability", "Monitoring", "Alerting", "JavaScript", "Python", "Dart", "C#", "PHP", "SQL", "Git", "Agile", "Lean"],
    accent: "from-emerald-200/50 via-lime-200/30 to-yellow-100/20",
  },
  {
    title: "Системное проектирование",
    description:
        "Разработка технической документации, спецификаций API, схем взаимодействия микросервисов и модулей. Поддержка на этапе пресейла, MVP и масштабирования.",
    tags: ["Microservices", "Clean architecture", "REST", "GraphQL", "OpenAPI", "Swagger", "UML", "Sequence diagrams", "PostgreSQL", "MongoDB", "MySQL", "Kubernetes", "Docker", "Nginx",],
    accent: "from-emerald-200/50 via-lime-200/30 to-yellow-100/20",
  },
  {
    title: "Технический менеджмент",
    description:
        "Формирование команды, контроль эффективности, внедрение Agile/Lean. Строю управляемый процесс разработки с минимумом техдолга.",
    tags: ["Agile", "Scrum", "Kanban", "Lean", "Notion", "Trello", "Slack", "Figma", "Lunacy", "Code review", "Automation", "CI/CD", "OKR", "Roadmapping", "Monitoring", "On-call", "Incident response",],
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
  screens: { title: string; img: string }[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "hoppo",
    title: "Hoppo",
    description: "Мобильное приложение якутского видеохостинга для детей.",
    longDescription:
        "Разработано приложение с безопасной медиаплатформой для детского контента. Реализована система рекомендаций, возрастные ограничения, локальный кэш медиа и адаптивный видеостриминг. Обеспечена стабильная работа на слабых устройствах.",
    tech: ["React Native", "ElysiaJS", "Bun", "Docker", "RabbitMQ", "Redis", ""],
    stack: ["Flutter client", "Firebase auth", "Streaming API", "Parental features"],
    role: "Senior Backend разработчик",
    type: "Мультимедиа",
    link: "https://www.rustore.ru/catalog/app/com.smartom.sakhahoppokidstube",
    year: "2025",
    favorite: true,
    screens: [
      {title: "Главный экран", img: "/cases/hoppo/games_screen.jpg"}
    ]
  }
];

export const clients = [
  {
    name: "Технопарк Якутия",
    logo: "/clients/itp.png",
    hue: "from-yellow-200/60 to-amber-200/70",
    link: "https://tpykt.ru"
  },
  {
    name: "Фонд развития инноваций",
    logo: "/clients/fri.png",
    hue: "from-slate-200/60 to-stone-100/80",
    link: "https://innovationfund14.ru"
  },
];
