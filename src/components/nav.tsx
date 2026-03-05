import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <nav className="flex flex-wrap items-center gap-4 py-8 text-sm">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-neutral-500 transition-colors hover:text-neutral-900"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
