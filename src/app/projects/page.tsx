import type { Metadata } from "next";
import { ProjectsAccordion } from "@/components/projects-accordion";
import { RelatedNav } from "@/components/related-nav";
import { projects } from "@/data/projects";
import { ROUTES } from "@/data/routes";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio of full-stack projects by Vincent Youmssi, including 48Org (K48 ecosystem), 48ID Identity Provider (OAuth2, Spring Boot, Next.js), 48Hub alumni platform, and enterprise-grade community applications.",
  alternates: {
    canonical: ROUTES.PROJECTS,
  },
};

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Projects
      </h1>
      <ProjectsAccordion items={projects} />
      <RelatedNav
        links={[
          { href: ROUTES.EXPERIENCE, label: "Work Experience" },
          { href: ROUTES.CERTIFICATIONS, label: "Certifications" },
        ]}
      />
    </section>
  );
}
