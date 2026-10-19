import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/privacy", "/terms"].map((path) => ({
    url: new URL(path, siteUrl).href,
  }));
}
