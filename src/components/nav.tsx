import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { NAV_LINKS } from "@/data/routes";

export function Nav() {
  return (
    <nav className="flex flex-wrap items-center gap-4 py-8 text-sm">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          {link.label}
        </Link>
      ))}
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </nav>
  );
}
