import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { SkillGroup } from "@/components/skill-group";
import { personal } from "@/data/personal";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${personal.name}, a software engineer focused on web development, based in ${personal.location}.`,
};

export default function AboutPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          About
        </h1>
        <p className="text-neutral-500">{personal.location}</p>
      </div>

      <p className="leading-relaxed text-neutral-600">{personal.bio}</p>

      <div className="flex gap-8 text-sm">
        <div>
          <p className="text-2xl font-bold text-neutral-900">2+</p>
          <p className="text-neutral-500">Years experience</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-neutral-900">5+</p>
          <p className="text-neutral-500">Projects</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-neutral-900">3+</p>
          <p className="text-neutral-500">Companies</p>
        </div>
      </div>

      <Separator />

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-neutral-900">Skills</h2>
        {skills.map((group) => (
          <SkillGroup key={group.category} group={group} />
        ))}
      </div>
    </section>
  );
}
