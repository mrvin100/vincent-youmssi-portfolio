import Link from "next/link";

interface RelatedLink {
  href: string;
  label: string;
}

interface RelatedNavProps {
  links: RelatedLink[];
}

export function RelatedNav({ links }: RelatedNavProps) {
  return (
    <nav className="flex gap-4 text-sm text-muted-foreground">
      <span>Related:</span>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="underline underline-offset-4 hover:text-foreground"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
