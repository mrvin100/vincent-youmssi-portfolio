export interface Certification {
  name: string;
  summary?: string;
  url?: string;
}

export interface CertificationGroup {
  trainer: string;
  url?: string;
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
    trainer: "Hackathons",
    certifications: [
      {
        name: "EastHacks 2024 Participation",
        summary: "Participated in EastHacks 2024 and created a project relating to sustainability.",
        url: "https://ibb.co/dP3J35k",
      },
      {
        name: "Cameroon International Tech Summit 2024 (CITS24)",
        summary: "72-hour national hackathon at Hotel Franco Yaoundé. Represented the Centre Region among 350 innovators, showcasing creativity and teamwork to drive technology and innovation in Cameroon.",
        url: "https://drive.google.com/file/d/11pG-CDpd9d8Hl96exMRKuBM2yN7KgTlZ/view?usp=sharing",
      },
    ],
  },
  {
    trainer: "Microsoft Learn",
    url: "https://learn.microsoft.com/fr-fr/users/mrvin100/",
    certifications: [
      { name: "Build JavaScript Applications Using TypeScript", summary: "Complete learning path." },
      { name: "Organize Code Using TypeScript Namespaces" },
      { name: "Access External Libraries from TypeScript" },
      { name: "Define Generics in TypeScript" },
      { name: "Declare and Instantiate Classes in TypeScript" },
      { name: "Develop Typed Functions Using TypeScript" },
      { name: "Implement Interfaces in TypeScript" },
      { name: "Declare Variable Types in TypeScript" },
      { name: "Get Started with TypeScript" },
    ],
  },
];
