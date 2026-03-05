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
    type: "Internship",
    company: "ADAF Foundation",
    location: "Nouvelle route Bastos, Yaoundé",
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
    location: "Tradex Emana, Yaoundé",
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
    location: "Tradex Emana, Yaoundé",
    period: "Nov 2023 – May 2024",
    description: [
      "Worked at a marketing and web agency where I managed client appointments for commercial purposes and was also responsible for validating the quality of projects ready for delivery, both technically and non-technically.",
    ],
    tech: [],
  },
];
