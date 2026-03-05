export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Engineering",
    items: [
      "Software Engineer",
      "Frontend Developer",
      "Full-Stack Developer",
      "Web Developer",
      "Lead Frontend Developer",
    ],
  },
  {
    category: "Digital Marketing",
    items: [
      "Content Creator",
      "Campaign Strategist",
      "Associate Marketing Strategist",
      "Social Media Manager",
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
