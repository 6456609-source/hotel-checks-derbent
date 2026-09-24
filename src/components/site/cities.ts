import { HERO_PHOTO } from "./data";

const CDN = "https://cdn.poehali.dev/projects/1d67e0a8-9168-4e61-9cd3-3ca4f56479f7/files/";

export interface City {
  slug: string;
  name: string;
  to: string;
  in: string;
  photo: string;
  photoAlt: string;
  airport: string;
  ll: string;
}

export const CITIES: City[] = [
  { slug: "buynaksk", name: "Буйнакск", in: "Буйнакске", to: "Буйнакск", photo: `${CDN}642f8adb-265d-4d29-a2d9-bab10f7b7d1b.jpg`, photoAlt: "Вид на Буйнакск и горы", airport: "≈ 1 час", ll: "47.117%2C42.819" },
  { slug: "dagestanskie-ogni", name: "Дагестанские Огни", in: "Дагестанских Огнях", to: "Дагестанские Огни", photo: `${CDN}9ec5c184-0758-4096-8977-1eb6c1475eda.jpg`, photoAlt: "Дагестанские Огни у Каспийского моря", airport: "≈ 2 часа", ll: "48.194%2C42.115" },
  { slug: "derbent", name: "Дербент", in: "Дербенте", to: "Дербент", photo: HERO_PHOTO, photoAlt: "Стены крепости Нарын-Кала в Дербенте", airport: "≈ 2 часа", ll: "48.289%2C42.057" },
  { slug: "izberbash", name: "Избербаш", in: "Избербаше", to: "Избербаш", photo: `${CDN}98c0932a-50e1-4d8a-84da-9382786d6170.jpg`, photoAlt: "Набережная Избербаша", airport: "≈ 1 час", ll: "47.871%2C42.566" },
  { slug: "kaspiysk", name: "Каспийск", in: "Каспийске", to: "Каспийск", photo: `${CDN}db970b0b-0bce-4068-88d2-bf3471759eeb.jpg`, photoAlt: "Набережная Каспийска", airport: "≈ 15 минут", ll: "47.638%2C42.881" },
  { slug: "kizilyurt", name: "Кизилюрт", in: "Кизилюрте", to: "Кизилюрт", photo: `${CDN}d141fe2b-8a4f-48d2-9777-176953b9a889.jpg`, photoAlt: "Река Сулак у Кизилюрта", airport: "≈ 1 час", ll: "47.119%2C43.203" },
  { slug: "kizlyar", name: "Кизляр", in: "Кизляре", to: "Кизляр", photo: `${CDN}8f96ea04-b5cf-486a-a579-0ed96f30c1ec.jpg`, photoAlt: "Улицы Кизляра", airport: "≈ 2,5 часа", ll: "46.713%2C43.847" },
  { slug: "makhachkala", name: "Махачкала", in: "Махачкале", to: "Махачкалу", photo: `${CDN}2ec76909-8b7e-4e06-b636-03b57bce206a.jpg`, photoAlt: "Центр Махачкалы", airport: "≈ 20 минут", ll: "47.505%2C42.983" },
  { slug: "khasavyurt", name: "Хасавюрт", in: "Хасавюрте", to: "Хасавюрт", photo: `${CDN}09f79e30-a2a7-4781-90b7-188056e2b836.jpg`, photoAlt: "Центр Хасавюрта", airport: "≈ 1,5 часа", ll: "46.588%2C43.250" },
  { slug: "yuzhno-sukhokumsk", name: "Южно-Сухокумск", in: "Южно-Сухокумске", to: "Южно-Сухокумск", photo: `${CDN}00c04c66-6620-40d2-aac3-10df2bc9d688.jpg`, photoAlt: "Южно-Сухокумск", airport: "≈ 4,5 часа", ll: "45.648%2C44.660" },
];

export const DEFAULT_CITY = CITIES.find((c) => c.slug === "derbent")!;

export const findCity = (slug?: string) => (slug ? CITIES.find((c) => c.slug === slug) : DEFAULT_CITY);

export const cityPath = (c: City) => (c.slug === DEFAULT_CITY.slug ? "/" : `/${c.slug}`);
