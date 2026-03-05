export interface Project {
  name: string;
  role: string;
  period: string;
  description: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    name: "48 Projects",
    role: "Organisation Member — K48",
    period: "Jul 2025 – Nov 2025",
    description: [
      "Contributed to an organisation to build five full-stack web apps (Grade, internship, clinical, and registration).",
    ],
  },
  {
    name: "Blur App",
    role: "Project Owner | Community Builder | Contributor",
    period: "Aug 2025 – Feb 2026",
    description: [],
  },
];
