import type { SkillGroup as SkillGroupType } from "@/data/skills";

export function SkillGroup({ group }: { group: SkillGroupType }) {
  return (
    <div>
      <h3 className="mb-2 font-semibold text-foreground">
        {group.category}
      </h3>
      <ul className="list-inside list-disc space-y-1 text-muted-foreground">
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
