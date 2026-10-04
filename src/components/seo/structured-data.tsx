import { headers } from "next/headers";
import { siteData } from "@/lib/site-data";
import { siteUrl } from "@/lib/site-url";
import { faqData } from "@/lib/faq-data";

export async function StructuredData() {
  const headerList = await headers();
  const nonce = headerList.get("x-nonce") ?? undefined;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": [
          "ElectricVehicleChargingStation",
          "AutoRepair",
          "LocalBusiness",
        ],
        "@id": `${siteUrl}/#chargingstation`,
        name: "Aayush EV Charging Station & Vehicle Care (Ayush EV)",
        alternateName: siteData.alternateNames,
        description: siteData.description,
        url: siteUrl,
        telephone: siteData.rawPhone,
        priceRange: "Rs 16.50 / kWh",
        image: `${siteUrl}/social-card`,
        logo: `${siteUrl}/apple-touch-icon.png`,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteData.address.full,
          addressLocality: siteData.address.city,
          addressRegion: siteData.address.state,
          postalCode: siteData.address.postalCode,
          addressCountry: "NP",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteData.geo.latitude,
          longitude: siteData.geo.longitude,
        },
        hasMap: siteData.location.directionsUrl,
        areaServed: [
          {
            "@type": "City",
            name: "Janakpur Dham",
          },
          {
            "@type": "AdministrativeArea",
            name: "Dhanusha District",
          },
          {
            "@type": "AdministrativeArea",
            name: "Madhesh Pradesh",
          },
          {
            "@type": "Country",
            name: "Nepal",
          },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
            description: "Active DC fast charging and route assistance 7 days a week.",
          },
        ],
        amenityFeature: siteData.amenitiesList.map((amenity) => ({
          "@type": "LocationFeatureSpecification",
          name: amenity,
          value: true,
        })),
        paymentAccepted: siteData.paymentMethods.join(", "),
        currenciesAccepted: "NPR",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "EV Charging and Vehicle Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "120kW DC Fast EV Charging (GB/T)",
                description:
                  "Ultra fast DC charging for GB/T compatible electric vehicles such as BYD Atto 3, Dolphin, Deepal, Neta, Seres at Medical Chowk, Janakpur.",
              },
              price: "16.50",
              priceCurrency: "NPR",
              unitText: "per kWh",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "80kW DC Fast EV Charging (CCS2)",
                description:
                  "High speed DC fast charging for CCS2 electric vehicles including Tata Nexon EV, Punch EV, MG ZS EV, Hyundai Ioniq 5 in Janakpur.",
              },
              price: "16.50",
              priceCurrency: "NPR",
              unitText: "per kWh",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Professional EV Car Wash",
                description:
                  "High-pressure exterior foam wash and vehicle detailing while your EV charges at Aayush EV Janakpur.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Electric Vehicle Servicing & Inspection",
                description:
                  "EV tire pressure check, brake check, coolant level inspection, and routine EV maintenance in Dhanusha.",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faqpage`,
        mainEntity: faqData.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Aayush EV — Fast EV Charging Station Janakpur Dham",
        alternateName: ["Ayush Ev", "Ayush EV Janakpur", "Aayush EV Nepal"],
        description: siteData.description,
        inLanguage: ["en-US", "ne-NP"],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "EV Chargers",
            item: `${siteUrl}#charging`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Pricing",
            item: `${siteUrl}#pricing`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Calculator",
            item: `${siteUrl}#calculator`,
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Compatibility",
            item: `${siteUrl}#compatibility`,
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Location",
            item: `${siteUrl}#location`,
          },
          {
            "@type": "ListItem",
            position: 7,
            name: "FAQ",
            item: `${siteUrl}#faq`,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
