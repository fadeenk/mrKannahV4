/**
 * Social preview cards: static/img/og/<slug>.png, 1200x630, one per page a
 * visitor can reach from the homepage. Link previews (LinkedIn, Slack, text
 * messages) show these instead of one shared square portrait.
 *
 * Provenance. Rendered here from the site's own parts; no stock image:
 *   - Background drench forest #277148 with white type (DESIGN.md: 5.9:1).
 *   - Headline: Besley variable (latin) from @fontsource-variable/besley.
 *     The line under it is the system sans.
 *   - Mark: static/img/logoDark.svg with its fill set to white.
 *   - Portrait (home, about, card only): static/img/fadee-hero.webp, the
 *     grayscale 4:5 crop of static/img/fadee.jpg (provenance in
 *     src/components/ConsultingHero).
 *   - The tick run along the bottom is the release line: ticks that settle
 *     into one line. It is seeded, so a re-run draws the same picture.
 * Headlines are each page's own wording (CARDS below).
 *
 * Run (needs Chrome):
 *   npm i --no-save playwright-core && node scripts/og-cards.mjs
 * Set PLAYWRIGHT_CORE to a module path or file URL to use an install that
 * lives elsewhere, and CHROME_PATH to a browser other than the default Chrome.
 */
import { mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "static", "img", "og");

/** slug -> the card's headline and the line under it. */
const CARDS = [
  {
    slug: "home",
    headline: "Your roadmap is bigger than your team.",
    sub: "Senior engineering for SaaS teams",
    portrait: true,
  },
  {
    slug: "about",
    headline: "I built CourseKey’s platform. It exited for $30M.",
    sub: "Fadee Kannah",
    portrait: true,
  },
  {
    slug: "card",
    headline: "Fadee Kannah",
    sub: "Digital business card",
    portrait: true,
  },
  {
    slug: "case-studies",
    headline: "Case studies",
    sub: "Portico and American Growth Insurance",
  },
  {
    slug: "american-growth-insurance",
    headline: "A working AI assistant in 4 weeks",
    sub: "American Growth Insurance · Case study",
  },
  {
    slug: "portico-embedded-retainer",
    headline: "24 customer initiatives in 9 months",
    sub: "Portico · Case study",
  },
  {
    slug: "showcase",
    headline: "Four projects I built",
    sub: "AI assistant, agent platform, iFolio, MeetingHero.ai",
  },
  {
    slug: "ai-assistant",
    headline: "AI assistant for American Growth Insurance",
    sub: "Technical write-up · 4 weeks",
  },
  {
    slug: "agent-platform",
    headline: "One agent platform for four industries",
    sub: "Built in 8 days",
  },
  {
    slug: "ifolio",
    headline: "iFolio: a portfolio tracker in your browser",
    sub: "Built with AI agents in 48 days",
  },
  {
    slug: "meetinghero",
    headline: "MeetingHero.ai, and why I shut it down",
    sub: "Launched May 2025, shut down October 2025",
  },
];

const W = 1200;
const H = 630;
const PAD_X = 72;
const BAND = "#277148";

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** A small seeded PRNG (mulberry32), so every run draws the same ticks. */
function rng(seed) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Ticks that start disordered and settle into one 3px line with a pilot dot. */
function releaseLine(width, height) {
  const rand = rng(2008);
  const n = 36;
  const step = width / n;
  const settle = 0.6;
  const mid = height / 2;
  const parts = [];
  for (let i = 0; i < n * settle; i++) {
    const t = i / (n * settle);
    const spread = Math.pow(1 - t, 1.7) * 72;
    const angle = (rand() * 2 - 1) * spread;
    const x = i * step + step / 2;
    parts.push(
      `<line x1="${x}" y1="${mid - 13}" x2="${x}" y2="${mid + 13}" transform="rotate(${angle.toFixed(1)} ${x} ${mid})" stroke="rgba(255,255,255,0.55)" stroke-width="1.5" stroke-linecap="round"/>`,
    );
  }
  const startX = n * settle * step;
  parts.push(
    `<line x1="${startX}" y1="${mid}" x2="${width}" y2="${mid}" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`,
    `<circle cx="${width * 0.86}" cy="${mid}" r="6" fill="#fff"/>`,
  );
  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">${parts.join("")}</svg>`;
}

const font = readFileSync(
  join(root, "node_modules/@fontsource-variable/besley/files/besley-latin-wght-normal.woff2"),
).toString("base64");
// The file has no viewBox (it is 280x224 with the bars inset); crop to the bars.
const logo = readFileSync(join(root, "static/img/logoDark.svg"), "utf8")
  .replace(/#25c2a0/gi, "#ffffff")
  .replace(/width="280" height="224"/, 'viewBox="22 24 238 176"');
const portrait = `data:image/webp;base64,${readFileSync(join(root, "static/img/fadee-hero.webp")).toString("base64")}`;

function html(card) {
  const textWidth = card.portrait ? 688 : W - PAD_X * 2;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:"Besley";src:url(data:font/woff2;base64,${font}) format("woff2");font-weight:400 900;}
*{box-sizing:border-box}
html,body{margin:0;width:${W}px;height:${H}px;background:${BAND};color:#fff;overflow:hidden}
.card{position:relative;width:${W}px;height:${H}px;padding:60px ${PAD_X}px 52px;display:flex;flex-direction:column;justify-content:space-between;font-family:"Segoe UI",system-ui,-apple-system,Roboto,sans-serif}
.brand{display:flex;align-items:center;gap:14px;font-size:26px;font-weight:600;letter-spacing:0.01em}
.brand svg{width:52px;height:auto;display:block}
.main{max-width:${textWidth}px}
h1{margin:0;font-family:"Besley",Georgia,serif;font-weight:700;letter-spacing:-0.02em;line-height:1.06;text-wrap:balance}
.sub{margin:26px 0 0;font-size:30px;font-weight:500;line-height:1.3;color:rgba(255,255,255,0.94)}
.foot{display:flex;flex-direction:column;gap:10px}
.url{font-size:24px;font-weight:500;color:rgba(255,255,255,0.94);letter-spacing:0.02em}
.portrait{position:absolute;right:${PAD_X}px;top:60px;width:320px;height:400px;border-radius:16px;object-fit:cover;border:1px solid rgba(255,255,255,0.3)}
</style></head><body>
<div class="card">
  <div class="brand">${logo}<span>Mr. Kannah</span></div>
  <div class="main"><h1 id="h">${esc(card.headline)}</h1><p class="sub">${esc(card.sub)}</p></div>
  <div class="foot">${releaseLine(W - PAD_X * 2, 56)}<span class="url">mrkannah.com</span></div>
  ${card.portrait ? `<img class="portrait" alt="" src="${portrait}">` : ""}
</div></body></html>`;
}

async function loadChromium() {
  const spec = process.env.PLAYWRIGHT_CORE ?? "playwright-core";
  try {
    return (await import(spec)).chromium;
  } catch (error) {
    throw new Error(
      `Could not load playwright-core (${spec}). Run "npm i --no-save playwright-core" first. ${error.message}`,
    );
  }
}

const chromium = await loadChromium();
const browser = await chromium.launch(
  process.env.CHROME_PATH
    ? { executablePath: process.env.CHROME_PATH, headless: true }
    : { channel: "chrome", headless: true },
);
mkdirSync(outDir, { recursive: true });
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });

for (const card of CARDS) {
  await page.setContent(html(card), { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  // Largest headline that fits: 88px down in 2px steps until it is short enough.
  const size = await page.evaluate((limit) => {
    const h = document.getElementById("h");
    let px = 88;
    h.style.fontSize = px + "px";
    while (h.getBoundingClientRect().height > limit && px > 48) {
      px -= 2;
      h.style.fontSize = px + "px";
    }
    return px;
  }, 270);
  const file = join(outDir, `${card.slug}.png`);
  await page.screenshot({ path: file, type: "png" });
  console.log(`${card.slug.padEnd(28)} ${String(size).padStart(2)}px  ${(statSync(file).size / 1024).toFixed(0)} KB`);
}
await browser.close();
