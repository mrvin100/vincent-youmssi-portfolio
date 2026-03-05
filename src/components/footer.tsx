import { personal } from "@/data/personal";

export function Footer() {
  return (
    <footer className="py-8 text-sm text-neutral-500">
      <div className="flex items-center justify-between">
        <p>&copy; {new Date().getFullYear()} {personal.name}</p>
        <div className="flex gap-4">
          <a
            href={`https://github.com/${personal.social.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-900"
          >
            GitHub
          </a>
          <a
            href={`https://linkedin.com/in/${personal.social.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-900"
          >
            LinkedIn
          </a>
          <a
            href={`https://youtube.com/${personal.social.youtube}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-900"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}
