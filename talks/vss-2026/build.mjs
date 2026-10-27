// Builds the self-contained talk deck: inlines the Besley font, the
// screenshots and the QR code from ./assets into deck.src.html and writes
// vss-2026-deck.html, a single file that runs offline from a double-click.
//
//   node talks/vss-2026/build.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const asset = (name) => readFileSync(join(here, "assets", name));
const jpeg = (name) => `data:image/jpeg;base64,${asset(name).toString("base64")}`;

const qr = asset("qr-summit26.svg")
  .toString("utf8")
  .trim()
  .replace("<svg ", '<svg role="img" ');

const tokens = {
  BESLEY_WOFF2: asset("besley-latin-wght-normal.woff2").toString("base64"),
  IMG_HOME: jpeg("videoarchiver-home.jpg"),
  IMG_NEEDS_ATTENTION: jpeg("videoarchiver-needs-attention.jpg"),
  IMG_STORAGE: jpeg("videoarchiver-storage.jpg"),
  QR_SVG: qr,
};

let html = readFileSync(join(here, "deck.src.html"), "utf8");
for (const [token, value] of Object.entries(tokens)) {
  const marker = `{{${token}}}`;
  if (!html.includes(marker)) throw new Error(`deck.src.html has no ${marker}`);
  html = html.replaceAll(marker, value);
}
const left = html.match(/\{\{[A-Z_]+\}\}/);
if (left) throw new Error(`Unfilled token: ${left[0]}`);

const out = join(here, "vss-2026-deck.html");
writeFileSync(out, html);
console.log(`Wrote ${out} (${(Buffer.byteLength(html) / 1024).toFixed(0)} KB)`);
