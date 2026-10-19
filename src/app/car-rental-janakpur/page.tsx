import type { Metadata } from "next";
import { ServicePage } from "@/components/layout/service-page";
import { servicePages } from "@/lib/service-pages";
import { siteData } from "@/lib/site-data";

const page = servicePages["car-rental-janakpur"];

export const metadata: Metadata = {
  title: page.title,
  description: page.metaDescription,
  alternates: { canonical: `/${page.slug}` },
  openGraph: {
    title: `${page.title} | ${siteData.businessName}`,
    description: page.metaDescription,
    url: `/${page.slug}`,
    images: [
      {
        url: "/social-card",
        width: 1200,
        height: 630,
        alt: `${page.title} — ${siteData.address.full}`,
      },
    ],
  },
};

export default function Page() {
  return <ServicePage slug="car-rental-janakpur" />;
}
