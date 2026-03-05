export interface Project {
  name: string;
  client: string;
  location: string;
  period: string;
  description: string[];
  url?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    name: "MyFlair",
    client: "Webinflu",
    location: "Lille, Saint-Martin-la-Pallu",
    period: "Jul 2024 – Nov 2024",
    description: [
      "Built essential app components including landing page, reservation calendar, and three user-specific dashboards (admin, professional, client).",
      "Collaborated effectively with a team of two developers on this project.",
      "Gained practical experience with Next.js and discovered innovative web development techniques.",
    ],
    url: "https://myflair.com",
  },
  {
    name: "Mappeos",
    client: "Mappeos",
    location: "Rue Boulevert Saint-Fargeau",
    period: "Aug 2024 – Nov 2024",
    description: [
      "Developed key frontend components including a client dashboard and a visitor overview.",
      "Worked effectively in a team of three developers and one manager, contributing to a web application.",
      "Gained valuable work experience and honed frontend development skills through this project.",
    ],
    url: "https://mappeos.com",
  },
];
