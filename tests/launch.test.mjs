import assert from "node:assert/strict";
import test from "node:test";

const origin = process.env.TEST_ORIGIN ?? "http://localhost:3000";
const publicOrigin = "https://aayushevcharging.site";

test("public pages have working navigation, search metadata and privacy defaults", async () => {
  for (const path of ["/", "/privacy", "/terms"]) {
    const response = await fetch(new URL(path, origin));
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(html, /<title>[^<]+<\/title>/);
    assert.match(html, /name="description" content="[^"]+"/);
    assert.match(html, /rel="canonical"/);
    const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
    assert.equal(new URL(canonical).href, new URL(path, publicOrigin).href);
    assert.doesNotMatch(html, /https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?/, "public metadata must never reference a local server");
    assert.match(html, /property="og:image"/);
    assert.match(html, /id="main-content"/);
    assert.match(html, /href="\/privacy"/);
    assert.match(html, /href="\/terms"/);
    assert.doesNotMatch(html, /<iframe\b/, "maps must wait for explicit consent");
    for (const [, href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
      if (!href.startsWith("/") && !href.startsWith("#")) continue;
      const target = new URL(href, new URL(path, origin));
      const linkedResponse = await fetch(target);
      assert.equal(linkedResponse.status, 200, `broken link: ${href}`);
      if (target.hash) assert.ok((await linkedResponse.text()).includes(`id="${target.hash.slice(1)}"`), `missing anchor: ${href}`);
    }
  }
});

test("search routes, social preview and favicon are delivered", async () => {
  const robots = await fetch(new URL("/robots.txt", origin));
  assert.equal(robots.status, 200);
  assert.ok((await robots.text()).includes(`Sitemap: ${publicOrigin}/sitemap.xml`));
  const sitemap = await fetch(new URL("/sitemap.xml", origin));
  assert.equal(sitemap.status, 200);
  const xml = await sitemap.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(urls.sort(), ["/", "/privacy", "/terms"].map((path) => new URL(path, publicOrigin).href).sort());
  for (const path of ["/social-card", "/favicon-signature.png"]) {
    const response = await fetch(new URL(path, origin));
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get("content-type") ?? "", /image\/png/);
    assert.ok((await response.arrayBuffer()).byteLength > 100);
  }
});
