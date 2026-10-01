import { MetadataRoute } from "next";

const routes = ["", "/about", "/doctor", "/services", "/appointments", "/contact", "/faq", "/privacy", "/terms", "/admin/login"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rahulcareclinic.example";
  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
  }));
}
