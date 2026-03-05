# Vincent Youmssi — Portfolio

Personal portfolio website for Vincent Youmssi, Software Engineer based in Yaoundé, Cameroon.

Built with Next.js, TypeScript, TailwindCSS, and shadcn/ui. Minimal, text-first design inspired by [leerob.com](https://leerob.com).

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4 + shadcn/ui (neutral theme)
- **Font**: Geist Sans
- **Deployment**: Vercel

## Routes

| Route | Description |
|---|---|
| `/` | Home — name, title, bio, navigation |
| `/about` | Bio, stats, positions, languages, hobbies |
| `/experience` | Work history with tech stacks (accordion) |
| `/projects` | Personal, freelance, and community projects (accordion) |
| `/education` | Academic background |
| `/certifications` | Grouped by trainer: freeCodeCamp, Openclassrooms, Hackathons, Microsoft Learn (accordion) |
| `/contact` | Cal.com booking + social links |

## Project Structure

```
src/
├── app/                    # Pages (App Router)
│   ├── layout.tsx          # Root layout, nav, footer, JSON-LD
│   ├── page.tsx            # Home
│   ├── about/
│   ├── experience/
│   ├── projects/
│   ├── education/
│   ├── certifications/
│   └── contact/
├── components/             # Reusable components
│   ├── nav.tsx
│   ├── footer.tsx
│   ├── experience-item.tsx
│   ├── project-item.tsx
│   ├── certification-item.tsx
│   ├── skill-group.tsx
│   └── ui/                 # shadcn/ui components
├── data/                   # Content data files
│   ├── personal.ts
│   ├── experience.ts
│   ├── projects.ts
│   ├── education.ts
│   ├── certifications.ts
│   └── skills.ts
└── lib/
    └── utils.ts
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Editing Content

All portfolio content lives in `src/data/`. Edit these files to update:

- `personal.ts` — name, bio, social links, cal.com link
- `experience.ts` — work experience entries
- `projects.ts` — projects with type badges (Personal/Freelance/Community)
- `education.ts` — academic background
- `certifications.ts` — grouped certifications by trainer
- `skills.ts` — position profiles

## SEO

- Title template: `%s | Vincent Youmssi`
- OpenGraph + Twitter card metadata per page
- `schema.org/Person` JSON-LD in root layout
- `robots.txt` + `sitemap.xml` in `public/`

## License

MIT
