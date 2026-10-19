import { siteData } from "@/lib/site-data";
import { servicePageList, servicePages, type ServicePageSlug } from "@/lib/service-pages";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Contact } from "@/components/sections/contact";
import { Location } from "@/components/sections/location";
import { StickyActionBar } from "@/components/ui/sticky-action-bar";
import { PageStructuredData } from "@/components/seo/page-structured-data";

export function ServicePage({ slug }: { slug: ServicePageSlug }) {
  const data = servicePages[slug];
  const related = servicePageList.filter((page) => page.slug !== slug);

  return (
    <>
      <Header anchorPrefix="/" />
      <main id="main-content">
        <PageStructuredData path={`/${data.slug}`} name={data.title} faqs={data.faqs} />

        <Section id="top" className="bg-canvas-alt">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-soft">
              <li>
                <a href="/" className="underline-offset-4 hover:text-ink hover:underline">
                  Aayush EV
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                {data.title}
              </li>
            </ol>
          </nav>

          <SectionHeader
            label={data.eyebrow}
            title={
              <>
                {data.h1}
                <br />
                <span className="display-italic">{data.h1Accent}</span>
              </>
            }
            description={data.intro}
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.facts.map((fact) => (
              <div key={fact.label} className="border-t border-hairline pt-5">
                <p className="eyebrow text-ink-soft">{fact.label}</p>
                <p className="mt-3 text-[16px] leading-relaxed text-ink">{fact.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button href={`tel:${siteData.rawPhone}`} withArrow>
              Call {siteData.phone}
            </Button>
            <Button href={siteData.whatsapp} variant="secondary">
              Message on WhatsApp
            </Button>
            <Button href={siteData.location.directionsUrl} variant="secondary">
              Get directions
            </Button>
          </div>
        </Section>

        <Section id="details">
          <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
            <div className="space-y-12">
              {data.blocks.map((block) => (
                <article key={block.heading}>
                  <h2 className="display text-[26px] text-ink sm:text-[30px]">{block.heading}</h2>
                  <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">{block.body}</p>
                </article>
              ))}
            </div>

            <aside className="border-t border-hairline pt-7">
              <h2 className="text-xl font-medium text-ink">{data.checklist.title}</h2>
              <ul className="mt-5 space-y-4">
                {data.checklist.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Section>

        <Section id="faq" className="bg-canvas-alt">
          <SectionHeader
            label="Questions"
            title={<>Asked before <span className="display-italic">they visit.</span></>}
          />
          <dl className="mt-12 grid gap-10 md:grid-cols-2">
            {data.faqs.map((faq) => (
              <div key={faq.q} className="border-t border-hairline pt-6">
                <dt className="text-[18px] font-medium text-ink">{faq.q}</dt>
                <dd className="mt-3 text-[16px] leading-relaxed text-ink-soft">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="more-services">
          <h2 className="display text-[26px] text-ink sm:text-[30px]">
            More from Aayush EV in Janakpur Dham
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((page) => (
              <a
                key={page.slug}
                href={`/${page.slug}`}
                className="group flex flex-col border-t border-hairline pt-5 hover:text-ink"
              >
                <p className="eyebrow text-ink-soft">{page.eyebrow}</p>
                <h3 className="mt-3 text-[19px] font-medium text-ink">{page.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{page.intro}</p>
                <span className="mt-4 text-[15px] text-ink underline-offset-4 group-hover:underline">
                  Read more
                </span>
              </a>
            ))}
          </div>
        </Section>

        <Location />
        <Contact />
      </main>
      <StickyActionBar />
      <Footer />
    </>
  );
}
