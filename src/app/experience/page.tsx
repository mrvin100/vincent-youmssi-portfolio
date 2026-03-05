import type { Metadata } from "next";
import { ExperienceAccordion } from "@/components/experience-accordion";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience and career history of Vincent Youmssi.",
};

export default function ExperiencePage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
        Experience
      </h1>
      <ExperienceAccordion items={experience} />
    </section>
  );
}
