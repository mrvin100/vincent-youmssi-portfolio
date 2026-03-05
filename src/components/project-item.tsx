"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

const badgeVariant: Record<Project["type"], "default" | "secondary" | "outline"> = {
  Personal: "default",
  Freelance: "secondary",
  Community: "outline",
};

export function ProjectItem({ item }: { item: Project }) {
  return (
    <AccordionItem value={item.name}>
      <AccordionTrigger className="hover:no-underline">
        <div className="flex flex-col items-start gap-1 text-left">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-foreground">{item.name}</p>
            <Badge variant={badgeVariant[item.type]}>{item.type}</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            {item.role} · {item.period}
          </p>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-3">
          {item.description.length > 0 && (
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}

          {item.tech.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.tech.map((t) => (
                <Badge key={t} variant="secondary" className="text-xs">
                  {t}
                </Badge>
              ))}
            </div>
          )}

          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              Demo
            </a>
          )}

          {item.subProjects && item.subProjects.length > 0 && (
            <div className="pt-2">
              <p className="mb-2 text-sm font-medium text-foreground/80">
                Projects
              </p>
              <ul className="space-y-1">
                {item.subProjects.map((sub) => (
                  <li key={sub.name} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{sub.name}</span>
                    {sub.url && (
                      <a
                        href={sub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground underline underline-offset-4 hover:text-foreground"
                      >
                        Demo
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
