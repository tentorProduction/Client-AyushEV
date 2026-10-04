# Aayush EV launch checklist

Approved scope: implement the user's twenty-item launch reference on the existing website, retaining the approved typography and transparent plug logo.

1. Add Privacy and Terms pages, footer navigation, map consent and keyboard access improvements.
2. Add canonical/social metadata, a social image, robots and sitemap; preserve existing CTA, FAQ, responsive design, favicon and 404.
3. Verify production routes, links, security, branding, consent, mobile layout and dependency advisories. Package the source for handoff.

Acceptance: production build and lint succeed; internal pages/anchors work; maps require consent; legal pages contain business-specific information; dependencies have no known advisories at verification time.

Deployment configuration: owner must supply the public domain and any analytics account. Forms are not applicable to this phone/directions website.

GSD reference: https://github.com/gsd-build/get-shit-done/blob/main/commands/gsd/quick.md
Adaptation: GSD SDK and installed GSD agent types are absent; use the existing Codex tools to track plan, implementation and verification. This directory is not a Git repository, so no atomic Git commit is possible. No global installer was executed.
