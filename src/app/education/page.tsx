import type { Metadata } from "next";
import { RelatedNav } from "@/components/related-nav";
import { education } from "@/data/education";
import { ROUTES } from "@/data/routes";

export const metadata: Metadata = {
  title: "Education",
  description: "Academic background and education of Vincent Youmssi.",
  alternates: {
    canonical: ROUTES.EDUCATION,
  },
};

export default function EducationPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Education
      </h1>
      <div className="divide-y divide-border">
        {education.map((item) => (
          <article key={item.institution} className="flex flex-col gap-1 py-4">
            <h3 className="font-semibold text-foreground">{item.degree}</h3>
            <p className="text-muted-foreground">{item.institution}</p>
            <p className="text-sm text-muted-foreground/70">
              {item.location}
              {item.period && ` · ${item.period}`}
            </p>
          </article>
        ))}
      </div>
      <RelatedNav
        links={[
          { href: ROUTES.CERTIFICATIONS, label: "Certifications" },
          { href: ROUTES.ABOUT, label: "About" },
        ]}
      />
    </section>
  );
}
