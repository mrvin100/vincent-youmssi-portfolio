"use client";

import { Accordion } from "@/components/ui/accordion";
import { CertificationGroupItem } from "@/components/certification-item";
import type { CertificationGroup } from "@/data/certifications";

export function CertificationsAccordion({ groups }: { groups: CertificationGroup[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {groups.map((group) => (
        <CertificationGroupItem key={group.trainer} group={group} />
      ))}
    </Accordion>
  );
}
