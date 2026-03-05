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
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          {personal.name}
        </h1>
        <p className="text-neutral-500">{personal.title}</p>
      </div>
      <p className="leading-relaxed text-neutral-600">{personal.bio}</p>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-blue-600 underline underline-offset-4 hover:text-blue-800"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </section>
  );
}
