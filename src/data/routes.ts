export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  EXPERIENCE: "/experience",
  PROJECTS: "/projects",
  EDUCATION: "/education",
  CERTIFICATIONS: "/certifications",
  CONTACT: "/contact",
} as const;

export const NAV_LINKS = [
  { href: ROUTES.HOME, label: "Home" },
  { href: ROUTES.ABOUT, label: "About" },
  { href: ROUTES.EXPERIENCE, label: "Experience" },
  { href: ROUTES.PROJECTS, label: "Projects" },
  { href: ROUTES.EDUCATION, label: "Education" },
  { href: ROUTES.CONTACT, label: "Contact" },
] as const;

export const HOME_NAV_ITEMS = [
  { href: ROUTES.ABOUT, label: "About me" },
  { href: ROUTES.EXPERIENCE, label: "Work experience" },
  { href: ROUTES.PROJECTS, label: "Projects" },
  { href: ROUTES.EDUCATION, label: "Education" },
  { href: ROUTES.CERTIFICATIONS, label: "Certifications" },
  { href: ROUTES.CONTACT, label: "Get in touch" },
] as const;

export const SITEMAP_ROUTES = [
  ROUTES.HOME,
  ROUTES.ABOUT,
  ROUTES.EXPERIENCE,
  ROUTES.PROJECTS,
  ROUTES.EDUCATION,
  ROUTES.CERTIFICATIONS,
  ROUTES.CONTACT,
] as const;
