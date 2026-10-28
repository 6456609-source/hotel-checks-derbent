import type { City } from "./cities";
import { DAGESTAN, cityPath } from "./cities";
import { HOTEL_NAME, PHONE_HREF } from "./data";
import { getSeo } from "./seo";
import { getFaq } from "./Faq";

export const SITE = "https://kassovie-cheki-original.ru";

export const cityHead = (city: City) => {
  const { title, description, keywords, image } = getSeo(city);
  const url = `${SITE}${cityPath(city)}`;
  const org = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${HOTEL_NAME} — гостиничные чеки ${city.name}`,
    description,
    url,
    image,
    telephone: PHONE_HREF.replace("tel:", ""),
    priceRange: "₽₽",
    areaServed: city.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: city.region ?? DAGESTAN,
      addressCountry: "RU",
      ...(city.mapText && city.address ? { streetAddress: city.address } : {}),
    },
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: getFaq(city).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { name: "twitter:image", content: image },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(org) },
      { type: "application/ld+json", children: JSON.stringify(faq) },
    ],
  };
};
