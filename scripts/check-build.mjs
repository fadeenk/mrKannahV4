// Checks for defects that typecheck and `docusaurus build` both miss.
// Run after `npm run build`: `npm run check:build`.
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const buildDir = "build";
if (!existsSync(buildDir)) {
  console.error("check:build: no build/ directory. Run `npm run build` first.");
  process.exit(1);
}

function* walk(dir, extension) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path, extension);
    else if (extension.test(entry.name)) yield path;
  }
}

const problems = [];

// Every `styles.name` must be a class the sibling CSS module exports.
// `:global(.name)` is not exported, so it is stripped before collecting names.
const moduleImport = /import\s+(\w+)\s+from\s+["'](\.[^"']*\.module\.css)["']/g;
for (const file of walk("src", /\.(tsx|ts|jsx|js)$/)) {
  const source = readFileSync(file, "utf8");
  for (const [, identifier, cssRelative] of source.matchAll(moduleImport)) {
    const cssPath = resolve(dirname(file), cssRelative);
    if (!existsSync(cssPath)) continue;
    const css = readFileSync(cssPath, "utf8").replace(/:global\([^)]*\)/g, "");
    const defined = new Set([...css.matchAll(/\.([A-Za-z_][\w-]*)/g)].map((m) => m[1]));
    const used = source.matchAll(new RegExp(`(?<![\\w./-])${identifier}\\.(?!module\\.css)([A-Za-z_]\\w*)`, "g"));
    for (const name of new Set([...used].map((m) => m[1]))) {
      if (!defined.has(name)) problems.push(`${file}: ${identifier}.${name} is not a class in ${cssRelative}`);
    }
  }
}

// A missing module class inside a template literal renders as the string "undefined".
const undefinedClass = /class="[^"]*\bundefined\b[^"]*"/g;
for (const file of walk(buildDir, /\.html$/)) {
  for (const match of new Set(readFileSync(file, "utf8").match(undefinedClass))) {
    problems.push(`${file}: ${match} (a CSS module class does not exist)`);
  }
}

// docs/ is published at /blog; planning docs under docs/superpowers must stay out.
const sitemap = join(buildDir, "sitemap.xml");
if (existsSync(sitemap) && readFileSync(sitemap, "utf8").includes("/superpowers")) {
  problems.push(`${sitemap}: lists /superpowers pages (check docs.exclude in docusaurus.config.ts)`);
}
if (existsSync(join(buildDir, "blog", "superpowers"))) {
  problems.push(`${join(buildDir, "blog", "superpowers")}: planning docs were published`);
}

if (problems.length > 0) {
  console.error(`check:build failed (${problems.length}):\n- ${problems.join("\n- ")}`);
  process.exit(1);
}
console.log("check:build passed.");
