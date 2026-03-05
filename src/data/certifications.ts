export interface Certification {
  name: string;
  summary?: string;
  url?: string;
}

export interface CertificationGroup {
  trainer: string;
  certifications: Certification[];
}

export const certificationGroups: CertificationGroup[] = [
  {
    trainer: "freeCodeCamp",
    certifications: [
      {
        name: "Relational Database",
        summary: "PostgreSQL, Bash scripting, Git.",
        url: "https://www.freecodecamp.org/certification/mrvin100/relational-database-v8",
      },
      {
        name: "JavaScript Algorithms and Data Structures",
        summary: "ES6, data structures, algorithm scripting, OOP, functional programming.",
        url: "https://www.freecodecamp.org/certification/mrvin100/javascript-algorithms-and-data-structures-v8",
      },
      {
        name: "JavaScript Algorithms and Data Structures (Legacy)",
        summary: "Palindrome checker, Roman numeral converter, Caesar cipher, cash register.",
        url: "https://www.freecodecamp.org/certification/mrvin100/javascript-algorithms-and-data-structures",
      },
      {
        name: "Responsive Web Design",
        summary: "HTML5, CSS3, Flexbox, Grid, accessibility, responsive design.",
        url: "https://www.freecodecamp.org/certification/mrvin100/responsive-web-design",
      },
    ],
  },
  {
    trainer: "Openclassrooms",
    certifications: [
      { name: "Understand How Algorithms Work" },
      { name: "Understand the Web" },
      { name: "Build Your Website with HTML5 and CSS3" },
      { name: "Learn to Program with JavaScript" },
      { name: "Create Dynamic Web Pages with JavaScript" },
      { name: "Use the Command Line in a Terminal" },
      { name: "Get Started with React" },
      { name: "Get Started with Linux" },
      { name: "Manage Code with Git and GitHub" },
      { name: "Understand Your Audience with Google Analytics" },
      { name: "Get Started with Digital Marketing" },
      { name: "Set Up an Information Monitoring System" },
    ],
  },
  {
    trainer: "Google",
    certifications: [
      {
        name: "Google Digital Marketing & E-commerce",
        summary: "Marketing strategy, SEO, SEM, social media, email marketing, e-commerce analytics.",
        url: "https://www.credly.com/badges/example-vincent-youmssi",
      },
    ],
  },
];
