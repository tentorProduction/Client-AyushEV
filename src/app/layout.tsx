import type { Metadata, Viewport } from "next";
import { connection } from "next/server";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { siteData } from "@/lib/site-data";
import { siteUrl } from "@/lib/site-url";
import { StructuredData } from "@/components/seo/structured-data";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { Analytics } from "@/components/ui/analytics";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
    languages: {
      "en-NP": "/",
      "ne-NP": "/",
    },
  },
  title: {
    default: `${siteData.businessName} — Fast EV Charging Station Janakpur Dham | 120kW DC Charger & Car Wash`,
    template: `%s | ${siteData.businessName}`,
  },
  description: siteData.description,
  keywords: [
    "Ayush Ev",
    "Aayush EV",
    "ev charging janakpur",
    "charging janakpur",
    "ev charging station janakpur",
    "electric vehicle charging Janakpur",
    "120kW DC fast charger Janakpur",
    "80kW CCS2 charger Janakpur",
    "GB/T fast charger Nepal",
    "Medical Chowk EV charging",
    "Ramdaiya Bhawadi EV station",
    "Dhanusha EV charging station",
    "Janakpur-Dhalkebar highway EV charging",
    "Car wash Janakpur",
    "EV servicing Janakpur",
    "BYD charging Janakpur",
    "Tata Nexon EV charging Janakpur",
    "MG ZS EV charging Janakpur",
    "आयुष ईभी",
    "जनकपुर ईभी चार्जिङ",
  ],
  authors: [{ name: siteData.businessName, url: siteUrl }],
  creator: siteData.businessName,
  publisher: siteData.businessName,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_NP",
    url: "/",
    siteName: `${siteData.businessName} (Ayush EV)`,
    title: `${siteData.businessName} — Fast EV Charging Station Janakpur Dham | 120kW DC Fast Charger & Car Wash`,
    description: siteData.description,
    images: [
      {
        url: "/social-card",
        width: 1200,
        height: 630,
        alt: "Aayush EV (Ayush EV) — 120kW & 80kW DC Fast EV Charging Station, Car Wash and Servicing at Medical Chowk, Janakpur Dham, Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.businessName} — Fast EV Charging Station Janakpur Dham`,
    description: siteData.description,
    images: ["/social-card"],
  },
  icons: {
    icon: [
      { url: "/favicon-signature.png", sizes: "64x64", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png?v=signature",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: siteData.businessName,
    statusBarStyle: "default",
  },
  other: {
    "geo.region": siteData.geo.region,
    "geo.placename": siteData.geo.placename,
    "geo.position": `${siteData.geo.latitude};${siteData.geo.longitude}`,
    ICBM: `${siteData.geo.latitude}, ${siteData.geo.longitude}`,
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#171917",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // A fresh render ensures each page uses the request's CSP nonce.
  await connection();
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-ink selection:bg-ink selection:text-white">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="flex-1">{children}</div>
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
