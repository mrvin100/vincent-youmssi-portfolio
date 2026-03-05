import type { Metadata } from "next";
import { education } from "@/data/education";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Academic background and education of Vincent Youmssi.",
};

export default function EducationPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
        Education
      </h1>
      <div className="divide-y divide-neutral-200">
        {education.map((item) => (
          <article key={item.institution} className="flex flex-col gap-1 py-4">
            <h3 className="font-semibold text-neutral-900">{item.degree}</h3>
            <p className="text-neutral-600">{item.institution}</p>
            <p className="text-sm text-neutral-500">
              {item.location} · Graduated {item.graduationDate}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
