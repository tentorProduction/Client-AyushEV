# Aayush EV security review

Review date: 3 October 2026. Scope: website source, direct/transitive dependencies, and production response headers. Hosting accounts, operating-system security, and Google Maps infrastructure are outside this source review.

## Dependency remediation

The initial full npm audit reported five affected packages, all tracing to the lint tooling’s `braces` dependency (GHSA-vfj7-8cjw-p6xm). This was a development dependency, not a confirmed exploitable application path. The advisory has no patched release, so the affected lint stack was replaced with ESLint, TypeScript ESLint and React Hooks linting. TypeScript and the production build continue to check Next.js application code.

Next.js was updated from 16.3.6 to 16.3.8, the patched version in the [September 2026 security release](https://nextjs.org/blog/september-2026-security-release). React and React DOM remain pinned to 19.2.8. The updated lockfile audit reported zero known vulnerabilities across production and development dependencies. Rerun `npm audit` as advisory databases evolve; this result is a dated snapshot, not a guarantee against unknown issues.

## Application review and protections

No high-confidence vulnerabilities identified in application code. The site has no login, uploads, database, form submissions or server actions. Business data and external map destinations come from source-controlled constants, not visitor input. React escapes the page’s text. The site does not use unsafe HTML rendering or runtime scripts from animation CDNs. SVG branding is original, local, and contains no scripts or external references.

Production pages use a fresh cryptographically random nonce and a strict script policy. Incoming nonce and CSP headers are replaced. Arbitrary inline scripts and eval are blocked. Inline style attributes remain allowed for React’s navigation measurements, map dimensions and draggable menu; this does not permit inline JavaScript. The script policy is relaxed for eval only during local development.

Responses include MIME-sniffing protection, anti-framing headers, a limited referrer policy, restrictions on camera/microphone/geolocation, and HSTS for HTTPS visitors. Page responses disable caching so script nonces cannot be separated from their corresponding HTML. Google Maps frames are explicitly allowed; general third-party frames, plugins, forms and base-tag overrides are blocked.

## Verification

Verified on 3 October 2026: production build and lint passed; all three HTTP security integration tests passed. Responsive checks at 390px found no horizontal overflow. The mobile menu trapped keyboard focus and restored it on Escape; FAQ expansion worked, the map frame loaded, and the browser console reported no warnings or errors during these checks.

Run `npm run lint` and `npm run build`. Start the production server with `npm start`, then run `npm run test:security`. The integration tests check strict script policy, anti-framing protections, fresh nonces, replacement of attacker-supplied nonce headers, matching nonces on Next.js scripts, no-store HTML, and protection on error pages. Review the browser console for CSP violations and verify menu and FAQ interaction after changes.

## Deployment

Deploy with HTTPS on a supported Node.js version using `npm start`, never the development server. Do not override the CSP or cache HTML at an upstream proxy/CDN. Preserve the response security headers. Keep dependencies and the host runtime patched. Add hosting-level request limits if required by your provider. The local `node_modules-pre-security-update` folder is a recoverable backup of the previous damaged dependencies, excluded from lint, type checking and delivery archives; it is not used by the application.

References: [Next.js CSP guidance](https://nextjs.org/docs/app/guides/content-security-policy), [braces advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm).
