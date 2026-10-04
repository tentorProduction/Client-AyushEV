import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import sharp from "sharp";

test("brand mark renders as black artwork with transparent surrounding space", async () => {
  const artwork = await readFile(new URL("../public/aayush-signature.png", import.meta.url));
  const { data, info } = await sharp(artwork).resize(256, 256).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  assert.equal(data[3], 0, "top-left background must be transparent");
  assert.equal(data[data.length - 1], 0, "bottom-right background must be transparent");
  let visiblePixels = 0;
  for (let offset = 0; offset < data.length; offset += info.channels) {
    if (data[offset + 3] > 0) {
      visiblePixels++;
      assert.ok(data[offset] <= 8, "visible artwork must be near-black, allowing antialiased edges");
      assert.ok(data[offset + 1] <= 8);
      assert.ok(data[offset + 2] <= 8);
    }
  }
  assert.ok(visiblePixels > 1000, "logo must not be an empty transparent image");
  assert.ok(visiblePixels < 256 * 256 / 2, "artwork needs surrounding clear space");
});
