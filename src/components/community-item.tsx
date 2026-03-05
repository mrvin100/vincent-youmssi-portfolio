import type { CommunityEntry } from "@/data/community";

export function CommunityItem({ item }: { item: CommunityEntry }) {
  return (
    <article className="flex flex-col gap-1 py-3">
      <div className="flex items-baseline justify-between">
        <h3 className="font-semibold text-neutral-900">{item.name}</h3>
        <span className="text-sm text-neutral-500">{item.period}</span>
      </div>
      <p className="text-sm text-neutral-500">{item.role}</p>
      {item.location && (
        <p className="text-sm text-neutral-400">{item.location}</p>
      )}
      {item.description && (
        <p className="text-neutral-600">{item.description}</p>
      )}
    </article>
  );
}
