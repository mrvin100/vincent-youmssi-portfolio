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
          <p className="font-semibold text-neutral-900">{group.trainer}</p>
          <p className="text-sm text-neutral-500">
            {count} {count === 1 ? "certificate" : "certificates"}
          </p>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <ul className="space-y-3">
          {group.certifications.map((cert) => (
            <li key={cert.name} className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-neutral-800">
                  {cert.name}
                </span>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 underline underline-offset-4 hover:text-blue-800"
                  >
                    Verify
                  </a>
                )}
              </div>
              {cert.summary && (
                <p className="text-sm text-neutral-500">{cert.summary}</p>
              )}
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}
