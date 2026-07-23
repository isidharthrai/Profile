import type { MetadataRoute } from "next";

const BASE_URL = "https://sidharthrai.com";

// Required for `output: 'export'` — render this route at build time.
export const dynamic = "force-static";

// Single-page portfolio — the section anchors are surfaced so crawlers
// understand the site structure. `lastModified` reflects the build time.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const sections = [
    { path: "", priority: 1.0 },
    { path: "#about", priority: 0.8 },
    { path: "#services", priority: 0.8 },
    { path: "#portfolio", priority: 0.9 },
    { path: "#skills", priority: 0.7 },
    { path: "#experience", priority: 0.8 },
    { path: "#education", priority: 0.6 },
    { path: "#faq", priority: 0.6 },
    { path: "#contact", priority: 0.7 },
  ];

  return sections.map(({ path, priority }) => ({
    url: `${BASE_URL}/${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
