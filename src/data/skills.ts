export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Engineering",
    items: [
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "shadcn/ui",
      "Redux.js",
      "HTML5",
      "CSS3",
      "Node.js",
      "PostgreSQL",
      "MySQL",
      "Prisma",
      "SSR",
      "Docker",
      "Git",
      "Cypress",
      "SonarQube",
    ],
  },
  {
    category: "Digital Marketing",
    items: [
      "Marketing Strategy",
      "Social Media",
      "Google Ads",
      "CRM (Mautic)",
      "Conversion Optimization",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Problem Solving",
      "Communication",
      "Team Collaboration",
      "Team Leadership",
      "Adaptability",
      "Project Management",
    ],
  },
];
