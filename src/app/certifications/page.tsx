import type { Metadata } from "next";
import { CertificationsAccordion } from "@/components/certifications-accordion";
import { RelatedNav } from "@/components/related-nav";
import { certificationGroups } from "@/data/certifications";
import { ROUTES } from "@/data/routes";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Professional certifications of Vincent Youmssi, including AWS AI & ML Scholars 2026 (Future AWS Agentic Engineer), freeCodeCamp, Microsoft Learn TypeScript paths, and hackathon participations.",
  alternates: {
    canonical: ROUTES.CERTIFICATIONS,
  },
};

export default function CertificationsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Certifications
      </h1>
      <CertificationsAccordion groups={certificationGroups} />
      <RelatedNav
        links={[
          { href: ROUTES.EDUCATION, label: "Education" },
          { href: ROUTES.PROJECTS, label: "Projects" },
        ]}
      />
    </section>
  );
}
