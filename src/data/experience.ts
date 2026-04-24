export interface Experience {
  role: string;
  type: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tech: string[];
}

export const experience: Experience[] = [
    {
    role: "Software Engineer",
    type: "Full-time",
    company: "Afriland First Bank",
    location: "Coleah Conakry, Guinea",
    period: "Apr 2026 – Present",
    description: [
      "Contribute to the RTGS (Real Time Gross Settlement) middleware initiative: automating MT103/FT100 message flows to the Central Bank, eliminating manual double-entry across ALT Bank and the FTG platform.",
      "Develop programmatic APIs for the ALT Bank Core Banking System (CBS) to enable modern service integration.",
      "Architect a unified Monétique & Digitale resident that centralizes banking flows toward ALT Bank, replacing previously separated SARA and Monétique systems.",
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "Middleware Architecture", "Banking Protocols", "RTGS", "MT103", "FT100"],
  },
  {
    role: "Project Manager | Teacher",
    type: "Community",
    company: "48Org",
    location: "Yaoundé, Cameroon",
    period: "Jan 2026 – Present",
    description: [
      "Led architecture and delivery of the 48ID identity platform and 48Hub alumni portal.",
      "Defined API-first design philosophy (OAuth2, OIDC, JWT), built 4-phase roadmap, and mentored student developers on secure auth integration.",
      "Managed ecosystem-wide standards to eliminate duplicated login systems across K48 projects.",
    ],
    tech: [
      "Spring Boot", "Next.js", "OAuth2", "OpenID Connect", "JWT",
      "PostgreSQL", "Redis", "Docker", "Vercel",
    ],
  },
  {
    role: "DevOps | Full Stack Web Developer",
    type: "Community",
    company: "48Projects",
    location: "Yaoundé, Cameroon",
    period: "Jul 2025 – Jan 2026",
    description: [
      "Delivered four full-stack community platforms for the K48 ecosystem: an academic grade manager with automated averages and official PDF/Excel transcript generation; a registration portal with multi-step onboarding, secure document upload, integrated payments, and real-time status tracking; Cameroon's first student internship platform with profile-based matching and convention signing workflow; and a clinical management system with real-time scheduling, secure internal chat, patient records, billing, and role-based access.",
      "Implemented Docker containerization, zero-config Vercel deployments, and security hardening across all projects.",
    ],
    tech: [
      "Next.js", "shadcn/ui", "TanStack Query", "Axios", "Spring Boot",
      "MinIO", "Docker", "Render", "Vercel", "NextAuth", "Zod", "Stripe",
      "Chart.js", "PDF-Box", "eDrive", "FullCalendar", "WebSocket",
    ],
  },
  {
    role: "Software Engineer",
    type: "Internship",
    company: "ADAF Foundation",
    location: "Nouvelle route Bastos, Yaoundé Cameroon",
    period: "Jun 2025 – Sep 2025",
    description: [
      "Built the foundation's website (Home, About, Partners, Blog) on both frontend and backend using Next.js and Strapi CMS.",
    ],
    tech: ["Next.js", "Strapi CMS", "Cloudinary", "Neon", "Dokploy", "VPS", "SSG", "ISR"],
  },
  {
    role: "Software Engineer",
    type: "Remote",
    company: "Yaakyi LTD",
    location: "United Kingdom",
    period: "Jan 2025 – Jun 2025",
    description: [
      "Designed the new homepage for Deluxe Yachting Zurich, a yacht charter agency in Germany.",
      "Led the development of the Kelanie Designs project (\"Coming Soon\" page), an Italian luxury jewelry brand.",
    ],
    tech: ["Medusa.js", "Mautic CRM", "Strapi CMS", "vanilla-cookieconsent", "Google Analytics", "Docker", "SonarQube", "Cypress", "GitLab", "IntelliJ IDEA", "Jira", "Scrum", "Google Meet", "Confluence"],
  },
  {
    role: "Web Developer",
    type: "Internship",
    company: "PKFokam Research Center",
    location: "Tradex Emana, Yaoundé Cameroon",
    period: "Sep 2024 – Dec 2024",
    description: [
      "Developed a web application using React and explored all its basic concepts (hooks, states, props, context, etc.) and integrated tests (unit, integration, e2e) using Jest and Cypress.",
    ],
    tech: ["React.js", "Jest", "Cypress", "json-server", "Bash", "GitHub", "Vercel"],
  },
  {
    role: "Lead Frontend Developer",
    type: "Remote",
    company: "Webinflu | Flair",
    location: "Montfermeil, France",
    period: "Jul 2024 – Jan 2026",
    description: [
      "Responsible for the complete frontend architecture and its development for the MyFlair project.",
    ],
    tech: ["Next.js", "TypeScript", "TailwindCSS", "shadcn/ui", "Prisma ORM", "Zustand", "TanStack Query", "Webhook", "v0", "Cursor"],
  },
  {
    role: "Frontend Web Developer",
    type: "Remote",
    company: "Freelance | Mappeos",
    location: "Angers, France",
    period: "May 2024 – Dec 2024",
    description: [
      "Created web interfaces (dashboard, privacy pages) and managed the loading strategy and reusable components of the Mappeos web application.",
    ],
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Zustand", "React Hook Form", "Axios", "MDX", "GitHub", "shadcn/ui", "Kanban Board", "SSR"],
  },
  {
    role: "Coordinator / Manager",
    type: "On-site",
    company: "Team48",
    location: "Tradex Emana, Yaoundé Cameroon",
    period: "Nov 2023 – May 2024",
    description: [
      "Worked at a marketing and web agency where I managed client appointments for commercial purposes and was also responsible for validating the quality of projects ready for delivery, both technically and non-technically.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Font Awesome", "Boxicons", "Canvas", "Google Docs", "Google Meet", "Google Sheets", "Git", "GitHub"],
  },
];
