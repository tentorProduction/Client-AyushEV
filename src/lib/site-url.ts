// Set SITE_URL to the public HTTPS origin when deploying.
export const siteUrl = new URL(process.env.SITE_URL || "http://localhost:3000").origin;
