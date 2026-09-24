import fs from "fs";
import path from "path";
import type { Plugin, ResolvedConfig } from "vite";
import { CITIES, DEFAULT_CITY } from "./src/components/site/cities";
import { getSeo } from "./src/components/site/seo";

export const SITE_URL = "https://kassovie-cheki-original.ru";

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
        const pageUrl = city.slug === DEFAULT_CITY.slug ? `${SITE_URL}/` : `${SITE_URL}/${city.slug}`;
        html = html.replace(/\s*<link rel="canonical"[^>]*>/, "").replace(/\s*<meta property="og:url"[^>]*>/, "");
        html = html.replace("</head>", `  <link rel="canonical" href="${pageUrl}">\n    <meta property="og:url" content="${pageUrl}">\n  </head>`);

        if (city.slug === DEFAULT_CITY.slug) {
          fs.writeFileSync(indexPath, html);
          continue;
        }
        fs.mkdirSync(path.join(outDir, city.slug), { recursive: true });
        fs.writeFileSync(path.join(outDir, city.slug, "index.html"), html);
        fs.writeFileSync(path.join(outDir, `${city.slug}.html`), html);
      }

      const today = new Date().toISOString().slice(0, 10);
      const ordered = [DEFAULT_CITY, ...CITIES.filter((c) => c.slug !== DEFAULT_CITY.slug)];
      const urls = ordered.map((city) => {
        const isMain = city.slug === DEFAULT_CITY.slug;
        const loc = isMain ? `${SITE_URL}/` : `${SITE_URL}/${city.slug}`;
        return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${isMain ? "1.0" : "0.8"}</priority>\n  </url>`;
      });
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
      fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemap);
    },
  };
}
