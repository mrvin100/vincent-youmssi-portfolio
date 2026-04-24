export interface SubProject {
  name: string;
  url?: string;
}

export interface Project {
  name: string;
  role: string;
  period: string;
  type: "Personal" | "Freelance" | "Community";
  description: string[];
  tech: string[];
  url?: string;
  subProjects?: SubProject[];
}

export const projects: Project[] = [
  {
    name: "48Org",
    role: "Organisation Member — K48",
    period: "Jan 2026 – Present",
    type: "Community",
    description: [
      "Central organization owning the identity and alumni platforms for the K48 community.",
      "48ID: API-first Identity-as-a-Service (IDaaS) for the K48 ecosystem. Eliminates fragmented authentication by providing centralized identity, JWT/OAuth2 token issuance, RBAC, and SSO. Built with Spring Boot 3 (Spring Modulith), PostgreSQL, Redis, and Next.js 16 BFF admin portal.",
      "48Hub: Alumni directory and networking platform. Authenticates exclusively via 48ID (OAuth2). Verifies student identity before displaying profiles.",
      "Ecosystem role: Trust anchor for 48Hub, LP48, and future K48 apps. SSO-ready; student developers integrate auth in less than one day.",
    ],
    tech: [
      "Spring Boot 3", "Java 21", "Spring Modulith", "PostgreSQL", "Redis",
      "Next.js 16", "TypeScript", "TailwindCSS", "shadcn/ui", "TanStack Query",
      "Zustand", "React Hook Form", "Zod", "ky", "Docker", "Vercel",
      "OAuth2", "OpenID Connect", "JWT", "bcrypt",
    ],
    subProjects: [
      { name: "48ID", url: "https://48id.vercel.app/" },
      { name: "48Hub", url: "https://48hub.vercel.app/" },
    ],
  },
  {
    name: "48 Projects",
    role: "Organisation Member — K48",
    period: "Jul 2025 – Jan 2026",
    type: "Community",
    description: [
      "Contributed to an organisation to build five enterprise-grade full-stack web apps.",
    ],
    tech: [
      "Next.js", "shadcn/ui", "TanStack Query", "Axios", "Spring Boot",
      "MinIO", "Docker", "Render", "Vercel", "NextAuth", "Zod", "Stripe",
      "Chart.js", "PDF-Box", "eDrive", "FullCalendar", "WebSocket",
    ],
    subProjects: [
      { name: "Grade Management System", url: "https://grady48.vercel.app/" },
      { name: "Internship Management System", url: "https://stagelink-cameroon.vercel.app/" },
      { name: "Registration Management System", url: "https://mongo48.vercel.app/" },
      { name: "Clinical Management System", url: "https://belvicare.vercel.app/" },
    ],
  },
  {
    name: "Blur",
    role: "Community Builder | Contributor",
    period: "Aug 2025 – Feb 2026",
    type: "Community",
    description: [
      "Open-source racing event management platform. Modern web application for managing racing events, parties, and competitive gameplay with real-time race tracking and comprehensive user management.",
      "Features include party management, real-time race tracking, score system, map integration, car attribution, dark mode, and mobile-first responsive design.",
    ],
    tech: [
      "Next.js", "React", "TypeScript", "TailwindCSS", "Radix UI",
      "TanStack Query", "Zustand", "React Hook Form", "Zod", "Better Auth",
      "next-themes", "Sonner", "Lucide Icons",
      "Spring Boot", "Java", "PostgreSQL", "Spring Security", "JWT",
      "Hibernate", "Swagger", "MapStruct", "Docker",
    ],
    url: "https://blur-delta.vercel.app/",
  },
  {
    name: "MyFlair",
    role: "Lead Frontend Developer — Webinflu",
    period: "Jul 2024 – Jan 2026",
    type: "Freelance",
    description: [
      "Responsible for the complete frontend architecture and its development for the MyFlair project.",
    ],
    tech: ["Next.js", "TypeScript", "TailwindCSS", "shadcn/ui", "Prisma ORM", "Zustand", "TanStack Query", "Webhook", "v0", "Cursor"],
    url: "https://my-flair-six.vercel.app/",
  },
  {
    name: "Mappeos",
    role: "Frontend Web Developer — Freelance",
    period: "May 2024 – Dec 2024",
    type: "Freelance",
    description: [
      "Created web interfaces (dashboard, privacy pages) and managed the loading strategy and reusable components of the Mappeos web application.",
    ],
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Zustand", "React Hook Form", "Axios", "MDX", "GitHub", "shadcn/ui", "Kanban Board", "SSR"],
    url: "https://mappeos.com",
  },
];
