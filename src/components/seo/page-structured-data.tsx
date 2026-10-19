import { headers } from "next/headers";
import { siteUrl } from "@/lib/site-url";
import type { ServicePageFaq } from "@/lib/service-pages";

/**
 * Page-level markup. The business and WebSite nodes stay in the root layout
 * because they are true everywhere; breadcrumbs and FAQ only belong to the page
 * that actually renders them.
 */
export async function PageStructuredData({
  path,
  name,
  faqs,
}: {
  path: string;
  name: string;
  faqs?: readonly ServicePageFaq[];
}) {
  const headerList = await headers();
  const nonce = headerList.get("x-nonce") ?? undefined;
  const url = new URL(path, siteUrl).href;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: new URL("/", siteUrl).href,
        },
        ...(path === "/"
          ? []
          : [{ "@type": "ListItem", position: 2, name, item: url }]),
      ],
    },
  ];

  if (faqs && faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faqpage`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    });
  }

  const schema = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
