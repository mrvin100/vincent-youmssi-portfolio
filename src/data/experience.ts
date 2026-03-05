export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tech: string[];
}

export const experience: Experience[] = [
  {
    role: "ReactJS Developer",
    company: "PKFokam Research Center",
    location: "Yaoundé",
    period: "Sep 2024 – Present",
    description: [
      "Developed a web application utilizing ReactJS, TailwindCSS, TypeScript, and ShadcnUI to create a visually appealing and user-friendly interface for increased user engagement.",
      "Implemented state management with Redux.js and utilized Axios for managing requests, resulting in a seamless and efficient app experience with minimal delays.",
      "Led a team of developers using Microsoft Teams to successfully collaborate on the project, resulting in the completion of the project ahead of schedule and under budget.",
    ],
    tech: ["React.js", "TypeScript", "TailwindCSS", "shadcn/ui", "Redux.js", "Axios"],
  },
  {
    role: "NextJS Developer",
    company: "Freelance",
    location: "Yaoundé",
    period: "May 2024 – Nov 2024",
    description: [
      "Implemented API consumption best practices for routing, caching, and data fetching in NextJS application, resulting in a 40% decrease in page load times.",
      "Developed and implemented SSR (Server-Side Rendering) techniques in NextJS application, leading to a 50% increase in SEO performance metrics.",
      "Utilized best architecture practices to optimize the source app router functionality, resulting in a 30% improvement in overall application performance.",
    ],
    tech: ["Next.js", "TypeScript", "SSR", "App Router"],
  },
  {
    role: "Frontend Web Developer",
    company: "Team48",
    location: "Yaoundé",
    period: "Nov 2023 – May 2024",
    description: [
      "Developed and optimized landing page websites using HTML5, CSS3, and Javascript, resulting in a 30% increase in site traffic and a 20% decrease in bounce rate.",
      "Implemented icon libraries such as Boxicons and Font Awesome to enhance the user experience, leading to a 15% increase in click-through rates on landing pages.",
      "Managed a team of developers using Microsoft Teams, organizing regular communication meetings via Google Meet to ensure project deadlines were met efficiently.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Boxicons", "Font Awesome"],
  },
];
