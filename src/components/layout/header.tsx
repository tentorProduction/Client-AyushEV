"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { siteData } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { LiveStatus } from "@/components/ui/live-status";
import { Sheet } from "@/components/ui/sheet";
import { Wordmark } from "@/components/ui/wordmark";

const links = [
  { label: "Chargers", href: "#charging" },
  { label: "Calculator", href: "#calculator" },
  { label: "Compatibility", href: "#compatibility" },
  { label: "Pricing", href: "#pricing" },
  { label: "Location", href: "#location" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const [hovered, setHovered] = useState<number | null>(null);
  const [active, setActive] = useState(-1);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((element): element is Element => element !== null);

    if (sections.length === 0) return;

    const visible = new Map<Element, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          visible.set(entry.target, entry.isIntersecting)
        );
        setActive(sections.findIndex((section) => visible.get(section)));
      },
      { rootMargin: "-48% 0px -48% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const target = hovered ?? active;
  useLayoutEffect(() => {
    const measure = () => {
      const element = itemRefs.current[target];
      const nav = navRef.current;
      if (!element || !nav || target < 0) {
        setIndicator((current) => ({ ...current, width: 0 }));
        return;
      }
      const elementRect = element.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      setIndicator({
        left: elementRect.left - navRect.left,
        width: elementRect.width,
      });
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [target, scrolled]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <span
          aria-hidden="true"
          className="nav-material"
          data-on={scrolled || menuOpen}
        />

        <div
          className={`bar-row relative z-10 mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled ? "h-14" : "h-20"
          }`}
        >
          <div className="flex min-w-0 items-center gap-3">
            <a
              href="#top"
              aria-label={`${siteData.businessName} - Home`}
              className="brand-lockup brand-lockup-bar flex min-w-0 items-center text-ink"
            >
              <Wordmark
                nameClassName={`tracking-[-0.02em] ${
                  scrolled ? "text-[17px]" : "text-[19px]"
                }`}
              />
            </a>

            <span className="hidden items-center rounded-full border border-hairline px-3 py-1.5 text-[12px] font-medium text-ink-soft xl:inline-flex">
              <LiveStatus compact />
            </span>
          </div>

          <nav
            ref={navRef}
            aria-label="Main Navigation"
            onMouseLeave={() => setHovered(null)}
            className="relative hidden items-center lg:flex"
          >
            <span
              aria-hidden="true"
              className="nav-pill"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.width > 0 ? 1 : 0,
              }}
            />
            {links.map((link, index) => (
              <a
                key={link.href}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                href={link.href}
                aria-current={active === index ? "true" : undefined}
                onMouseEnter={() => setHovered(index)}
                onFocus={() => setHovered(index)}
                onBlur={() => setHovered(null)}
                className={`relative rounded-full px-3 py-2 text-[13.5px] font-medium transition-colors duration-300 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                  active === index ? "text-ink" : "text-ink-soft"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              href={siteData.location.directionsUrl}
              size="sm"
              className="max-sm:hidden"
            >
              Directions
            </Button>
            <Button
              href={`tel:${siteData.phone}`}
              variant="secondary"
              size="sm"
              className="max-md:hidden"
            >
              Call {siteData.phone}
            </Button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              className="group/menu flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-ink transition-colors duration-300 hover:bg-ink/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:hidden"
            >
              <span className="relative block h-3.5 w-[18px]">
                <span className="absolute inset-x-0 top-1 h-px bg-current transition-[top] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/menu:top-[5px]" />
                <span className="absolute inset-x-0 bottom-1 h-px bg-current transition-[bottom] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/menu:bottom-[5px]" />
              </span>
            </button>
          </div>
        </div>

        <span
          aria-hidden="true"
          className="nav-progress"
          data-on={scrolled}
        />
      </header>

      <Sheet
        open={menuOpen}
        onClose={closeMenu}
        title={siteData.businessName}
      >
        <div className="mt-1 flex flex-col">
          <p
            className="sheet-item eyebrow flex items-center gap-2 text-ink-soft"
            style={{ animationDelay: "80ms" }}
          >
            <LiveStatus />
          </p>
          <p
            className="sheet-item mt-3 text-[14.5px] leading-relaxed text-ink-soft"
            style={{ animationDelay: "140ms" }}
          >
            {siteData.address.full}
          </p>
        </div>

        <div className="mt-6 flex flex-col">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ animationDelay: `${170 + index * 45}ms` }}
              className="sheet-item display border-b border-hairline py-3.5 text-[24px] text-ink transition-opacity duration-300 active:opacity-50"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div
          className="sheet-item mt-6 flex flex-col gap-3"
          style={{ animationDelay: `${170 + links.length * 45}ms` }}
        >
          <Button
            href={siteData.location.directionsUrl}
            size="lg"
            withArrow
            className="w-full"
          >
            Get Directions (Google Maps)
          </Button>
          <Button
            href={`tel:${siteData.phone}`}
            variant="secondary"
            size="lg"
            className="w-full"
          >
            Call {siteData.phone}
          </Button>
        </div>
      </Sheet>
    </>
  );
}
