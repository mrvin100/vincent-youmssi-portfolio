import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { CertificationItem } from "@/components/certification-item";
import { certifications } from "@/data/certifications";

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
      <ul className="divide-y divide-neutral-200">
        {certifications.map((item) => (
          <CertificationItem key={item.name} item={item} />
        ))}
      </ul>
      <Separator />
    </section>
  );
}
