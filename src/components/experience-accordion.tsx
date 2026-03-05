"use client";

import { Accordion } from "@/components/ui/accordion";
import { ExperienceItem } from "@/components/experience-item";
import type { Experience } from "@/data/experience";

export function ExperienceAccordion({ items }: { items: Experience[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item) => (
        <ExperienceItem key={item.company + item.period} item={item} />
      ))}
    </Accordion>
  );
}
