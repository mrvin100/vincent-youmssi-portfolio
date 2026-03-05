"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Project } from "@/data/projects";

export function ProjectItem({ item }: { item: Project }) {
  return (
    <AccordionItem value={item.name}>
      <AccordionTrigger className="hover:no-underline">
        <div className="flex flex-col items-start gap-1 text-left">
          <p className="font-semibold text-neutral-900">
            {item.name}{" "}
            <span className="font-normal text-neutral-500">
              — {item.client}
            </span>
          </p>
          <p className="text-sm text-neutral-500">
            {item.period} · {item.location}
          </p>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <ul className="mb-3 list-inside list-disc space-y-1 text-neutral-600">
          {item.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        <div className="flex gap-4">
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 underline underline-offset-4 hover:text-blue-800"
            >
              Live Site
            </a>
          )}
          {item.github && (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 underline underline-offset-4 hover:text-blue-800"
            >
              GitHub
            </a>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
