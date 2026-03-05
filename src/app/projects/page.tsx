import type { Metadata } from "next";
import { ProjectsAccordion } from "@/components/projects-accordion";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects and applications built by Vincent Youmssi.",
};

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
        Projects
      </h1>
      <ProjectsAccordion items={projects} />
    </section>
  );
}
