import type { MetadataRoute } from "next";
import { SITEMAP_ROUTES, ROUTES } from "@/data/routes";

const baseUrl = "https://vincent-youmssi-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_ROUTES.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-04-23"),
    changeFrequency: "monthly" as const,
    priority: route === ROUTES.HOME ? 1 : 0.8,
  }));
}
