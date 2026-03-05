import type { Certification } from "@/data/certifications";

export function CertificationItem({ item }: { item: Certification }) {
  return (
    <li className="flex flex-col gap-1 py-3">
      <p className="font-semibold text-neutral-900">{item.name}</p>
      <p className="text-sm text-neutral-500">{item.organization}</p>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-600 underline underline-offset-4 hover:text-blue-800"
      >
        Verify
      </a>
    </li>
  );
}
