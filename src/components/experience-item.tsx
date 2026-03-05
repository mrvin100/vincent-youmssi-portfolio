"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/data/experience";

export function ExperienceItem({ item }: { item: Experience }) {
  return (
    <AccordionItem value={item.company + item.period}>
      <AccordionTrigger className="hover:no-underline">
        <div className="flex flex-col items-start gap-1 text-left">
          <p className="font-semibold text-neutral-900">
            {item.role}{" "}
            <span className="font-normal text-neutral-500">
              @ {item.company}
            </span>
          </p>
          <p className="text-sm text-neutral-500">
            {item.period} · {item.type} · {item.location}
          </p>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        {item.description.length > 0 && (
          <ul className="mb-3 list-inside list-disc space-y-1 text-neutral-600">
            {item.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}
        {item.tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.tech.map((t) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>
        )}
      </AccordionContent>
    </AccordionItem>
  );
}
