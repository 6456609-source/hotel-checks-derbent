export const LOGO_URL =
  "https://cdn.poehali.dev/projects/1d67e0a8-9168-4e61-9cd3-3ca4f56479f7/bucket/cc85ed15-0a50-40d1-99e8-d17ace3de7a8.jpg";

export const HERO_PHOTO =
  "https://cdn.poehali.dev/projects/1d67e0a8-9168-4e61-9cd3-3ca4f56479f7/files/91163f3f-2b39-4054-a446-227b5e7736a3.jpg";

export const ROOM_PHOTO =
  "https://cdn.poehali.dev/projects/1d67e0a8-9168-4e61-9cd3-3ca4f56479f7/files/da7dce18-dc3f-45b0-a046-0addd25702cc.jpg";

export const MEETING_PHOTO =
  "https://cdn.poehali.dev/projects/1d67e0a8-9168-4e61-9cd3-3ca4f56479f7/files/c234f630-2d2f-4d98-b4f4-fb4e53b68fa0.jpg";

export const HOTEL_NAME = "Выгодная командировка с отчетными документами";

export const PHONE = "+7 (996) 532-32-43";
export const PHONE_HREF = "tel:+79965323243";

export const NAV = [
  { id: "documents", label: "Документы" },
  { id: "services", label: "Услуги" },
  { id: "reviews", label: "Отзывы" },
  { id: "contacts", label: "Контакты" },
  { id: "faq", label: "Вопросы" },
];

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}