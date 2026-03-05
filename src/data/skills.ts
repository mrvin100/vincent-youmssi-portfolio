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
      "Node.js",
      "Strapi CMS",
      "PostgreSQL",
      "MySQL",
      "Prisma",
      "Jest",
      "Cypress",
      "Docker",
      "Git",
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
