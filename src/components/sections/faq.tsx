"use client";

import { useState } from "react";
import { faqData } from "@/lib/faq-data";
import { Section, SectionHeader } from "@/components/ui/section";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <SectionHeader
        label="Frequently Asked Questions"
        title="Everything you need to know."
        description="Quick answers about charging speeds, pricing per kWh, vehicle compatibility, car wash, and location in Janakpur Dham."
        align="center"
      />

      <div className="mx-auto mt-14 max-w-3xl">
        {faqData.map((faq, index) => {
          const isOpen = open === index;

          return (
            <div key={faq.q} className="border-b border-hairline">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                <span className="text-[18px] font-medium text-ink sm:text-[19px]">
                  {faq.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-ink-soft transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className="accordion-body"
                data-open={isOpen}
                aria-hidden={!isOpen}
              >
                <div>
                  <p className="max-w-2xl pb-7 pr-10 text-[15.5px] leading-relaxed text-ink-soft">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
