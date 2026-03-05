import type { Metadata } from "next";
import { CertificationsAccordion } from "@/components/certifications-accordion";
import { certificationGroups } from "@/data/certifications";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Professional certifications and qualifications earned by Vincent Youmssi.",
};

export default function CertificationsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
        Certifications
      </h1>
      <CertificationsAccordion groups={certificationGroups} />
    </section>
  );
}
