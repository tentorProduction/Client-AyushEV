import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";
import { servicePageList } from "@/lib/service-pages";

// Vercel sets this at build time, so lastmod reflects the real content change
// instead of claiming every URL was modified on each request.
const lastmod = process.env.VERCEL_GIT_COMMIT_TIMESTAMP
  ? new Date(process.env.VERCEL_GIT_COMMIT_TIMESTAMP)
  : new Date();

const paths = [
  "/",
  ...servicePageList.map((page) => `/${page.slug}`),
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: new URL(path, siteUrl).href,
    lastModified: lastmod,
  }));
}
