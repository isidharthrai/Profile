import type { MetadataRoute } from "next";

const BASE_URL = "https://sidharthrai.com";

// Required for `output: 'export'` — render this route at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
