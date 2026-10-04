# Aayush EV

Customer website for Aayush EV — charging, car wash and servicing at Medical Chowk, Ramdaiya Bhawadi-1, Janakpur Dham, Dhanusha, Nepal.
Two DC points (120 kW GB/T and 80 kW CCS2) serve up to four vehicles at once. Both cost Rs 16.50/kWh; percentage-based pricing varies by model. Administration: +977 9714099611.

```bash
npm ci
npm run dev
```

## Layout

- `src/lib/site-data.ts` — business details, chargers, rates, contact and Google Maps address.
- Opening hours remain unconfirmed; visitors are prompted to call administration.
- `src/components/sections/` — one file per page section, composed in `src/app/page.tsx`.
- `src/components/ui/` — Button, Sheet, Section, icons, live status.

## Scripts

- `npm run dev` — dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run test:security` — checks the running production server’s security headers and script nonces
- `npm run test:branding` — renders the logo and verifies black artwork with transparent surrounding space
- `npm run test:launch` — checks legal pages, internal links and anchors, metadata, consent defaults, sitemap, robots and share preview against the running server

## Branding and motion

The active logo is the supplied calligraphic A, edited with the built-in image tool to integrate a two-prong plug at the right end of its sweeping crossbar and remove the paper background. The high-resolution transparent source is `public/aayush-calligraphic-source.png`; the website uses `public/aayush-signature.png`. Matching icons are `public/favicon-signature.png`, `src/app/favicon.ico` and `public/apple-touch-icon.png`. Run `node scripts/generate-brand-icons.mjs` to regenerate the web sizes after installing dependencies. Older SVG concepts remain as unused alternatives. The website uses self-hosted assets and native CSS motion with reduced-motion support. Animation techniques were informed by [MDN’s scroll animation guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) and [reduced-motion guidance](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion).

The refined layout retains the original Fraunces display and Plus Jakarta Sans reading fonts, black artwork on transparent backgrounds, a white canvas and an 8px spacing rhythm. The hero focuses on the headline, location and two actions; the logo stays in the header rather than a large charger diagram. Inspiration comes from [Apple’s product presentation](https://www.apple.com/iphone/) and [layout guidance](https://developer.apple.com/design/human-interface-guidelines/layout), applied to spacing, navigation and motion without copying Apple branding or replacing the site's typography.

## Production handoff

Run `npm ci`, `npm run lint`, and `npm run build`, then `npm start` on a Node.js host. Use Node.js 20.9 or newer. Set `SITE_URL` to the final public origin before building to generate the sitemap. Serve the public site over HTTPS and use `npm start` for production.

The build fetches the configured Google Fonts; the resulting font files are self-hosted at runtime.

Pages render per request so each response can carry a fresh Content Security Policy nonce. Do not cache HTML at a CDN; nonce-bearing HTML and its headers must stay together. Native CSS animations require no third-party scripts. Google Maps is the only embedded third-party frame.

With the production server running, run `npm run test:security` (or set `TEST_ORIGIN` to its address) and `npm audit` to verify browser protections and known dependency vulnerabilities. See `docs/SECURITY.md` for scope and deployment notes.

Google Maps directions use the supplied street address. Confirm the map result with the owner before launch; replace the links in `site-data.ts` with a verified business pin when available. Confirm opening hours and model-specific percentage rates with administration. No email or WhatsApp account has been supplied.

## Launch checklist

Privacy and Terms pages are linked from the footer. The site includes clear call/directions actions, FAQs, a custom 404, a transparent logo and favicon, mobile layouts, keyboard focus indicators, a skip link, reduced-motion support, page titles/descriptions, canonical URLs, a generated 1200×630 sharing image, robots.txt and a sitemap covering all public pages. The map only loads after explicit consent; its local preference can be withdrawn below the map. This also avoids loading the third-party frame on the initial visit.

Set `SITE_URL` to the real public HTTPS domain **before the production build**; `.env.example` shows the development value. This controls canonical URLs, social URLs, robots and sitemap. The site is ready to configure for a domain, but no public domain has been supplied.

No contact forms, payment forms or accounts are present, so there are no form submissions to test. Contact actions use the phone dialer. No visitor analytics service is enabled: configure an owner-approved analytics account and update the privacy/consent controls before adding tracking. Hosting request logs can provide operational traffic information. Legal text describes current website behavior; the owner should confirm it matches their service-record practices before publication.
