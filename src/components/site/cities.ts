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
  titleExtra?: string;
  region?: string;
  regionIn?: string;
  airportFrom?: string;
  airportOf?: string;
  hotel?: string;
  address?: string;
  mapText?: string;
  keywords?: string[];
  seoText?: string[];
}

export const DAGESTAN = "Республика Дагестан";
export const KRAI = "Краснодарский край";
export const STAV = "Ставропольский край";
export const ROSTOV = "Ростовская область";
export const CRIMEA = "Республика Крым";

export const REGION_GEN: Record<string, string> = {
  [DAGESTAN]: "Дагестана",
  [KRAI]: "Краснодарского края",
  [STAV]: "Ставропольского края",
  [ROSTOV]: "Ростовской области",
  [CRIMEA]: "Крыма",
};

export const CITIES: City[] = [
  { slug: "anapa", name: "Анапа", in: "Анапе", to: "Анапу", photo: `${CDN}8f31394b-c86d-40ab-a86f-efba965cbe04.jpg`, photoAlt: "Пляж и набережная Анапы", airport: "≈ 15 минут", ll: "37.317%2C44.894", airportFrom: "Из аэропорта Анапы", airportOf: "Анапы", address: "Краснодарский край, г. Анапа", region: KRAI, regionIn: "Краснодарскому краю", keywords: ["документы за проживание Краснодарский край"] },
  { slug: "armavir", name: "Армавир", in: "Армавире", to: "Армавир", photo: `${CDN}f2c36ccd-0df0-458b-b938-e11425dbb81d.jpg`, photoAlt: "Центральная улица Армавира", airport: "≈ 2 часа", ll: "41.123%2C44.999", airportFrom: "Из аэропорта Ставрополя", airportOf: "Ставрополя", address: "Краснодарский край, г. Армавир", region: KRAI, regionIn: "Краснодарскому краю", keywords: ["документы за проживание Краснодарский край"] },
  {
    slug: "belogorsk",
    name: "Белогорск",
    in: "Белогорске",
    to: "Белогорск",
    photo: `${CDN}04649a25-05b1-46ef-84a8-198e07ca6996.jpg`,
    photoAlt: "Белая скала Ак-Кая под Белогорском",
    airport: "≈ 40 минут",
    ll: "34.600%2C45.055",
    titleExtra: "Чеки Белогорск",
    region: CRIMEA,
    regionIn: "Крыму",
    airportFrom: "Из аэропорта Симферополя",
    airportOf: "Симферополя",
    hotel: "Отель «Ак-Каз»",
    address: "Республика Крым, г. Белогорск, ул. Шевченко, 40",
    mapText: "Белогорск, улица Шевченко, 40",
    keywords: [
      "отель Ак-Каз Белогорск",
      "гостиница Белогорск Крым",
      "документы за проживание Крым",
      "гостиничные чеки Крым",
      "командировка в Крым документы",
    ],
    seoText: [
      "Белогорск — небольшой город в центре Крыма, на трассе Симферополь — Феодосия. Сюда едут в командировки на стройки, агропредприятия, винодельни и объекты у Белой скалы. Мы селим командированных в отеле «Ак-Каз» на улице Шевченко, 40 и сразу выдаём полный комплект отчётных документов.",
      "Гостиничные чеки в Белогорске оформляем только за фактическое проживание: кассовый чек, счёт на оплату, акт об оказании услуг и договор с реальными датами заезда и выезда. Такой комплект принимают бухгалтерии для авансового отчёта и подтверждения командировочных расходов.",
      "Платить можно наличными, картой или по безналу на реквизиты компании. Счёт и договор пришлём заранее, закрывающие документы отдадим при выезде — не нужно ничего досылать почтой.",
      "Из аэропорта Симферополя до отеля около 40 минут на машине — организуем трансфер с отдельным чеком. Для поездок по объектам Крыма можно взять авто в аренду, а для встреч с партнёрами — переговорную с документами.",
    ],
  },
  { slug: "buynaksk", name: "Буйнакск", in: "Буйнакске", to: "Буйнакск", photo: `${CDN}642f8adb-265d-4d29-a2d9-bab10f7b7d1b.jpg`, photoAlt: "Вид на Буйнакск и горы", airport: "≈ 1 час", ll: "47.117%2C42.819" },
  { slug: "volgodonsk", name: "Волгодонск", in: "Волгодонске", to: "Волгодонск", photo: `${CDN}9db8d265-251c-4183-b57f-00f8ea81241b.jpg`, photoAlt: "Набережная Волгодонска", airport: "≈ 3 часа", ll: "42.152%2C47.513", airportFrom: "Из аэропорта Ростова-на-Дону", airportOf: "Ростова-на-Дону", address: "Ростовская область, г. Волгодонск", region: ROSTOV, regionIn: "Ростовской области", keywords: ["документы за проживание Ростовская область"] },
  { slug: "gelendzhik", name: "Геленджик", in: "Геленджике", to: "Геленджик", photo: `${CDN}1e75a267-9c36-4917-ac50-820fdc7f05e2.jpg`, photoAlt: "Набережная Геленджика", airport: "≈ 15 минут", ll: "38.077%2C44.562", airportFrom: "Из аэропорта Геленджика", airportOf: "Геленджика", address: "Краснодарский край, г. Геленджик", region: KRAI, regionIn: "Краснодарскому краю", keywords: ["документы за проживание Краснодарский край"] },
  { slug: "dagestanskie-ogni", name: "Дагестанские Огни", in: "Дагестанских Огнях", to: "Дагестанские Огни", photo: `${CDN}9ec5c184-0758-4096-8977-1eb6c1475eda.jpg`, photoAlt: "Дагестанские Огни у Каспийского моря", airport: "≈ 2 часа", ll: "48.194%2C42.115" },
  { slug: "derbent", name: "Дербент", in: "Дербенте", to: "Дербент", photo: HERO_PHOTO, photoAlt: "Стены крепости Нарын-Кала в Дербенте", airport: "≈ 2 часа", ll: "48.289%2C42.057" },
  { slug: "essentuki", name: "Ессентуки", in: "Ессентуках", to: "Ессентуки", photo: `${CDN}c65b9cdf-e324-4183-967b-41669e77ab1c.jpg`, photoAlt: "Курортный парк Ессентуков", airport: "≈ 30 минут", ll: "42.857%2C44.044", airportFrom: "Из аэропорта Минеральных Вод", airportOf: "Минеральных Вод", address: "Ставропольский край, г. Ессентуки", region: STAV, regionIn: "Ставропольскому краю", keywords: ["документы за проживание Ставропольский край"] },
  { slug: "izberbash", name: "Избербаш", in: "Избербаше", to: "Избербаш", photo: `${CDN}98c0932a-50e1-4d8a-84da-9382786d6170.jpg`, photoAlt: "Набережная Избербаша", airport: "≈ 1 час", ll: "47.871%2C42.566" },
  { slug: "kaspiysk", name: "Каспийск", in: "Каспийске", to: "Каспийск", photo: `${CDN}db970b0b-0bce-4068-88d2-bf3471759eeb.jpg`, photoAlt: "Набережная Каспийска", airport: "≈ 15 минут", ll: "47.638%2C42.881" },
  { slug: "kislovodsk", name: "Кисловодск", in: "Кисловодске", to: "Кисловодск", photo: `${CDN}bbf06d0f-e758-452e-95d0-0f27aa4d18c2.jpg`, photoAlt: "Курортный бульвар Кисловодска", airport: "≈ 1 час", ll: "42.716%2C43.905", airportFrom: "Из аэропорта Минеральных Вод", airportOf: "Минеральных Вод", address: "Ставропольский край, г. Кисловодск", region: STAV, regionIn: "Ставропольскому краю", keywords: ["документы за проживание Ставропольский край"] },
  { slug: "kizilyurt", name: "Кизилюрт", in: "Кизилюрте", to: "Кизилюрт", photo: `${CDN}d141fe2b-8a4f-48d2-9777-176953b9a889.jpg`, photoAlt: "Река Сулак у Кизилюрта", airport: "≈ 1 час", ll: "47.119%2C43.203" },
  { slug: "kizlyar", name: "Кизляр", in: "Кизляре", to: "Кизляр", photo: `${CDN}8f96ea04-b5cf-486a-a579-0ed96f30c1ec.jpg`, photoAlt: "Улицы Кизляра", airport: "≈ 2,5 часа", ll: "46.713%2C43.847" },
  { slug: "krasnodar", name: "Краснодар", in: "Краснодаре", to: "Краснодар", photo: `${CDN}e9502a92-85a4-45ba-8a48-e3ab88f880d0.jpg`, photoAlt: "Улица Красная в Краснодаре", airport: "≈ 30 минут", ll: "38.975%2C45.035", airportFrom: "Из аэропорта Краснодара", airportOf: "Краснодара", address: "Краснодарский край, г. Краснодар", region: KRAI, regionIn: "Краснодарскому краю", keywords: ["документы за проживание Краснодарский край"] },
  { slug: "makhachkala", name: "Махачкала", in: "Махачкале", to: "Махачкалу", photo: `${CDN}2ec76909-8b7e-4e06-b636-03b57bce206a.jpg`, photoAlt: "Центр Махачкалы", airport: "≈ 20 минут", ll: "47.505%2C42.983" },
  { slug: "novorossiysk", name: "Новороссийск", in: "Новороссийске", to: "Новороссийск", photo: `${CDN}961dbca9-135f-492e-966b-c6d981afee86.jpg`, photoAlt: "Набережная Новороссийска", airport: "≈ 1 час", ll: "37.768%2C44.723", airportFrom: "Из аэропорта Анапы", airportOf: "Анапы", address: "Краснодарский край, г. Новороссийск", region: KRAI, regionIn: "Краснодарскому краю", keywords: ["документы за проживание Краснодарский край"] },
  { slug: "novocherkassk", name: "Новочеркасск", in: "Новочеркасске", to: "Новочеркасск", photo: `${CDN}ba06c8ee-cefc-48b0-a28c-594aa4f6409a.jpg`, photoAlt: "Вознесенский собор в Новочеркасске", airport: "≈ 50 минут", ll: "40.093%2C47.411", airportFrom: "Из аэропорта Ростова-на-Дону", airportOf: "Ростова-на-Дону", address: "Ростовская область, г. Новочеркасск", region: ROSTOV, regionIn: "Ростовской области", keywords: ["документы за проживание Ростовская область"] },
  { slug: "pyatigorsk", name: "Пятигорск", in: "Пятигорске", to: "Пятигорск", photo: `${CDN}c89b5ca7-0602-4956-818b-7643d0237a79.jpg`, photoAlt: "Пятигорск и гора Машук", airport: "≈ 30 минут", ll: "43.059%2C44.049", airportFrom: "Из аэропорта Минеральных Вод", airportOf: "Минеральных Вод", address: "Ставропольский край, г. Пятигорск", region: STAV, regionIn: "Ставропольскому краю", keywords: ["документы за проживание Ставропольский край"] },
  { slug: "rostov-na-donu", name: "Ростов-на-Дону", in: "Ростове-на-Дону", to: "Ростов-на-Дону", photo: `${CDN}61378854-6ef0-46b2-bd22-7d57fd1bede8.jpg`, photoAlt: "Набережная Дона в Ростове-на-Дону", airport: "≈ 40 минут", ll: "39.711%2C47.222", airportFrom: "Из аэропорта Ростова-на-Дону", airportOf: "Ростова-на-Дону", address: "Ростовская область, г. Ростов-на-Дону", region: ROSTOV, regionIn: "Ростовской области", keywords: ["документы за проживание Ростовская область"] },
  { slug: "sochi", name: "Сочи", in: "Сочи", to: "Сочи", photo: `${CDN}d8da35b7-9f44-4c93-9330-354407a035e5.jpg`, photoAlt: "Морской вокзал Сочи", airport: "≈ 40 минут", ll: "39.723%2C43.585", airportFrom: "Из аэропорта Сочи", airportOf: "Сочи", address: "Краснодарский край, г. Сочи", region: KRAI, regionIn: "Краснодарскому краю", keywords: ["документы за проживание Краснодарский край"] },
  { slug: "stavropol", name: "Ставрополь", in: "Ставрополе", to: "Ставрополь", photo: `${CDN}43c530e1-7593-4c46-86e0-98d5a6f6269f.jpg`, photoAlt: "Центр Ставрополя", airport: "≈ 20 минут", ll: "41.969%2C45.044", airportFrom: "Из аэропорта Ставрополя", airportOf: "Ставрополя", address: "Ставропольский край, г. Ставрополь", region: STAV, regionIn: "Ставропольскому краю", keywords: ["документы за проживание Ставропольский край"] },
  { slug: "taganrog", name: "Таганрог", in: "Таганроге", to: "Таганрог", photo: `${CDN}1023257b-6dd1-43e7-90fb-a5ca8a9917aa.jpg`, photoAlt: "Пушкинская набережная Таганрога", airport: "≈ 1,5 часа", ll: "38.897%2C47.209", airportFrom: "Из аэропорта Ростова-на-Дону", airportOf: "Ростова-на-Дону", address: "Ростовская область, г. Таганрог", region: ROSTOV, regionIn: "Ростовской области", keywords: ["документы за проживание Ростовская область"] },
  { slug: "khasavyurt", name: "Хасавюрт", in: "Хасавюрте", to: "Хасавюрт", photo: `${CDN}09f79e30-a2a7-4781-90b7-188056e2b836.jpg`, photoAlt: "Центр Хасавюрта", airport: "≈ 1,5 часа", ll: "46.588%2C43.250" },
  { slug: "yuzhno-sukhokumsk", name: "Южно-Сухокумск", in: "Южно-Сухокумске", to: "Южно-Сухокумск", photo: `${CDN}00c04c66-6620-40d2-aac3-10df2bc9d688.jpg`, photoAlt: "Южно-Сухокумск", airport: "≈ 4,5 часа", ll: "45.648%2C44.660" },
];

export const DEFAULT_CITY = CITIES.find((c) => c.slug === "derbent")!;

export const findCity = (slug?: string) => (slug ? CITIES.find((c) => c.slug === slug) : DEFAULT_CITY);

export const cityPath = (c: City) => (c.slug === DEFAULT_CITY.slug ? "/" : `/${c.slug}`);
