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
  {
    name: "48 Projects",
    role: "Organisation Member — K48",
    period: "Jul 2025 – Nov 2025",
    type: "Community",
    description: [
      "Contributed to an organisation to build five full-stack web apps.",
    ],
    tech: ["Next.js", "TypeScript", "TailwindCSS", "MongoDB", "Prisma ORM", "GitHub"],
    subProjects: [
      { name: "Grade Management System", url: "https://grady48.vercel.app/" },
      { name: "Internship Management System", url: "https://stagelink-cameroon.vercel.app/" },
      { name: "Registration Management System", url: "https://mongo48.vercel.app/" },
      { name: "Clinical Management System", url: "https://belvicare.vercel.app/" },
    ],
  },
  {
    name: "Blur App",
    role: "Project Owner | Community Builder | Contributor",
    period: "Aug 2025 – Feb 2026",
    type: "Personal",
    description: [],
    tech: [],
    url: "https://blur-delta.vercel.app/",
  },
];
