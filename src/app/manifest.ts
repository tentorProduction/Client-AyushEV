import type { MetadataRoute } from "next";
import { siteData } from "@/lib/site-data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteData.businessName} — Fast EV Charging Station Janakpur`,
    short_name: siteData.businessName,
    description: siteData.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f5f4f0",
    theme_color: "#171917",
    icons: [
      {
        src: "/favicon-signature.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
