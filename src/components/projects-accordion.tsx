"use client";

import { Accordion } from "@/components/ui/accordion";
import { ProjectItem } from "@/components/project-item";
import type { Project } from "@/data/projects";

export function ProjectsAccordion({ items }: { items: Project[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item) => (
        <ProjectItem key={item.name} item={item} />
      ))}
    </Accordion>
  );
}
