import type { Metadata } from "next";
import { ProjectsAccordion } from "@/components/projects-accordion";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects, contributions, and applications built by Vincent Youmssi.",
};

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Projects
      </h1>
      <ProjectsAccordion items={projects} />
    </section>
  );
}
