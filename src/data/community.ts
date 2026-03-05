export interface CommunityEntry {
  name: string;
  role: string;
  period: string;
  location?: string;
  description: string;
}

export const community: CommunityEntry[] = [
  {
    name: "48 Projects",
    role: "Organisation Member — K48",
    period: "Jul 2025 – Nov 2025",
    location: "Tradex Emana, Yaoundé",
    description:
      "Contributed to an organisation to build five full-stack web apps (Grade, internship, clinical, and registration).",
  },
  {
    name: "Blur App",
    role: "Project Owner | Community Builder | Contributor",
    period: "Aug 2025 – Feb 2026",
    description: "",
  },
];
