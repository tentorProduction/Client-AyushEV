import assert from "node:assert/strict";
import test from "node:test";

const origin = process.env.TEST_ORIGIN ?? "http://localhost:3000";

test("production pages prohibit untrusted scripts and embedding", async () => {
  const response = await fetch(origin);
  assert.equal(response.status, 200);
  const csp = response.headers.get("content-security-policy") ?? "";
  assert.match(csp, /script-src[^;]*'nonce-[A-Za-z0-9+/=]+'/);
  assert.match(csp, /script-src[^;]*'strict-dynamic'/);
  assert.doesNotMatch(csp.split(";").find((part) => part.trim().startsWith("script-src")) ?? "", /unsafe-inline|unsafe-eval/);
  assert.match(csp, /frame-ancestors 'none'/);
  assert.match(csp, /object-src 'none'/);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "DENY");
  assert.equal(response.headers.get("x-powered-by"), null);
});

test("every request gets a fresh nonce and Next scripts use it", async () => {
  const first = await fetch(origin, { headers: { "x-nonce": "attacker-chosen", "content-security-policy": "script-src *" } });
  const second = await fetch(origin);
  const nonceFor = (response) => response.headers.get("content-security-policy")?.match(/'nonce-([^']+)'/)?.[1];
  const nonce = nonceFor(first);
  assert.ok(nonce && Buffer.from(nonce, "base64").length >= 16, "nonce must be random and sufficiently long");
  assert.notEqual(nonce, "attacker-chosen");
  assert.notEqual(nonce, nonceFor(second));
  const html = await first.text();
  const scripts = [...html.matchAll(/<script\b([^>]*)>/g)];
  assert.ok(scripts.length > 0);
  for (const [, attributes] of scripts) {
    assert.ok(attributes.includes(`nonce="${nonce}"`), "each script must match the response nonce");
  }
  assert.match(first.headers.get("cache-control") ?? "", /no-store/);
});

test("error pages carry the same browser protections", async () => {
  const response = await fetch(new URL("/missing-security-test-page", origin));
  assert.equal(response.status, 404);
  assert.match(response.headers.get("content-security-policy") ?? "", /frame-ancestors 'none'/);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
});
