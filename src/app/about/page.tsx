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
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          About
        </h1>
        <p className="text-muted-foreground">{personal.location}</p>
      </div>

      <p className="leading-relaxed text-muted-foreground">{personal.aboutBio}</p>

      <div className="flex gap-8 text-sm">
        <div>
          <p className="text-2xl font-bold text-foreground">
            {personal.yearsOfExp}
          </p>
          <p className="text-muted-foreground">Years experience</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-foreground">6+</p>
          <p className="text-muted-foreground">Companies</p>
        </div>
      </div>

      <Separator />

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-foreground">
          Positions & Profiles
        </h2>
        {skills.map((group) => (
          <SkillGroup key={group.category} group={group} />
        ))}
      </div>

      <Separator />

      <div className="flex gap-12 text-sm">
        <div>
          <h2 className="mb-2 font-semibold text-foreground">Languages</h2>
          <ul className="space-y-1 text-muted-foreground">
            {personal.languages.map((lang) => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-2 font-semibold text-foreground">Hobbies</h2>
          <ul className="space-y-1 text-muted-foreground">
            {personal.hobbies.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-sm text-muted-foreground/60">
        <a
          href={personal.cvLink}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-muted-foreground"
        >
          Resume
        </a>
      </p>
    </section>
  );
}
