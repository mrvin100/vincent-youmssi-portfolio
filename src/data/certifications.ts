export interface Certification {
  name: string;
  summary: string;
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
        name: "Responsive Web Design",
        summary: "HTML5, CSS3, Flexbox, Grid, accessibility, responsive design principles.",
        url: "https://www.freecodecamp.org/certification/mrvin100/responsive-web-design",
      },
      {
        name: "JavaScript Algorithms and Data Structures",
        summary: "ES6, regular expressions, debugging, data structures, algorithm scripting, OOP, functional programming.",
        url: "https://www.freecodecamp.org/certification/mrvin100/javascript-algorithms-and-data-structures-v8",
      },
      {
        name: "Front End Development Libraries",
        summary: "Bootstrap, jQuery, SASS, React, Redux.",
        url: "https://www.freecodecamp.org/certification/mrvin100/front-end-development-libraries",
      },
      {
        name: "Back End Development and APIs",
        summary: "Node.js, Express, MongoDB, Mongoose, REST APIs.",
        url: "https://www.freecodecamp.org/certification/mrvin100/back-end-development-and-apis",
      },
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
