import type { Metadata } from "next";
import { ExperienceAccordion } from "@/components/experience-accordion";
import { RelatedNav } from "@/components/related-nav";
import { experience } from "@/data/experience";
import { ROUTES } from "@/data/routes";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Vincent Youmssi: Software Engineer at Afriland First Bank (RTGS middleware, Core Banking Systems), Project Manager & Teacher at 48Org, DevOps & Full Stack Developer at 48Projects, and frontend engineering roles across Africa and Europe.",
  alternates: {
    canonical: ROUTES.EXPERIENCE,
  },
};

export default function ExperiencePage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Experience
      </h1>
      <ExperienceAccordion items={experience} />
      <RelatedNav
        links={[
          { href: ROUTES.PROJECTS, label: "Projects" },
          { href: ROUTES.CERTIFICATIONS, label: "Certifications" },
        ]}
      />
    </section>
  );
}
