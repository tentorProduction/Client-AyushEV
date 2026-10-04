import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Wordmark } from "@/components/ui/wordmark";

export function LegalPage({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return <>
    <header className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-6">
      <a href="/" aria-label="Aayush EV home"><Wordmark /></a>
      <a href="/" className="text-sm text-ink-soft underline underline-offset-4">Back to home</a>
    </header>
    <main id="main-content" className="mx-auto max-w-3xl px-6 pb-24 pt-16 sm:pt-24">
      <p className="eyebrow text-ink-soft">Aayush EV · Updated 3 October 2026</p>
      <h1 className="display mt-5 text-[42px] text-ink sm:text-[64px]">{title}</h1>
      <p className="mt-6 text-lg leading-relaxed text-ink-soft">{description}</p>
      <div className="legal-copy mt-12 space-y-10">{children}</div>
    </main>
    <Footer />
  </>;
}
