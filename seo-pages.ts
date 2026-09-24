import fs from "fs";
import path from "path";
import type { Plugin, ResolvedConfig } from "vite";
import { CITIES, DEFAULT_CITY } from "./src/components/site/cities";
import { getSeo } from "./src/components/site/seo";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const setTag = (html: string, re: RegExp, value: string) =>
  html.replace(re, (_m, start: string, end: string) => `${start}${esc(value)}${end}`);

export function seoPages(): Plugin {
  let config: ResolvedConfig;
  return {
    name: "seo-city-pages",
    apply: "build",
    configResolved(c) {
      config = c;
    },
    closeBundle() {
      const outDir = path.resolve(config.root, config.build.outDir);
      const indexPath = path.join(outDir, "index.html");
      if (!fs.existsSync(indexPath)) return;
      const base = fs.readFileSync(indexPath, "utf-8");

      for (const city of CITIES) {
        const seo = getSeo(city);
        let html = base;
        html = setTag(html, /(<title>)[^<]*(<\/title>)/, seo.title);
        html = setTag(html, /(<meta name="description" content=")[^"]*(")/, seo.description);
        html = setTag(html, /(<meta name="keywords" content=")[^"]*(")/, seo.keywords);
        html = setTag(html, /(<meta property="og:title" content=")[^"]*(")/, seo.title);
        html = setTag(html, /(<meta property="og:description" content=")[^"]*(")/, seo.description);
        html = setTag(html, /(<meta property="og:image" content=")[^"]*(")/, seo.image);
        html = setTag(html, /(<meta name="twitter:image" content=")[^"]*(")/, seo.image);

        if (city.slug === DEFAULT_CITY.slug) {
          fs.writeFileSync(indexPath, html);
          continue;
        }
        fs.mkdirSync(path.join(outDir, city.slug), { recursive: true });
        fs.writeFileSync(path.join(outDir, city.slug, "index.html"), html);
        fs.writeFileSync(path.join(outDir, `${city.slug}.html`), html);
      }
    },
  };
}
