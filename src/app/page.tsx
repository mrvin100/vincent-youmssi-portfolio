import Link from "next/link";
import { personal } from "@/data/personal";

const navItems = [
  { href: "/about", label: "About me" },
  { href: "/experience", label: "Work experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Get in touch" },
];

export default function Home() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {personal.name}
        </h1>
        <p className="text-muted-foreground">{personal.title}</p>
      </div>
      <p className="leading-relaxed text-muted-foreground">{personal.bio}</p>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </section>
  );
}
