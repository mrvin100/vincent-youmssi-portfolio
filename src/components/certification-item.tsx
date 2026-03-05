"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { CertificationGroup } from "@/data/certifications";

export function CertificationGroupItem({ group }: { group: CertificationGroup }) {
  const count = group.certifications.length;

  return (
    <AccordionItem value={group.trainer}>
      <AccordionTrigger className="hover:no-underline">
        <div className="flex flex-col items-start gap-1 text-left">
          <p className="font-semibold text-foreground">{group.trainer}</p>
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">
              {count} {count === 1 ? "certificate" : "certificates"}
            </p>
            {group.url && (
              <a
                href={group.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
                onClick={(e) => e.stopPropagation()}
              >
                Verify
              </a>
            )}
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <ul className="space-y-3">
          {group.certifications.map((cert) => (
            <li key={cert.name} className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground/90">
                  {cert.name}
                </span>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
                  >
                    Verify
                  </a>
                )}
              </div>
              {cert.summary && (
                <p className="text-sm text-muted-foreground">{cert.summary}</p>
              )}
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}
