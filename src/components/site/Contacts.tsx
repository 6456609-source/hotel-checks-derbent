import Icon from "@/components/ui/icon";
import { PHONE, PHONE_HREF } from "./data";
import { DAGESTAN, type City } from "./cities";

const getRoutes = (city: City) => [
  { icon: "Plane", title: city.airportFrom ?? "Из аэропорта Махачкалы", text: `${city.airport} на машине. Закажите трансфер — встретим у выхода.` },
  { icon: "TrainFront", title: "С вокзала или автостанции", text: "Встретим и довезём на такси или нашем трансфере." },
  city.mapText
    ? { icon: "Car", title: "На своей машине", text: "Бесплатная парковка во дворе гостиницы." }
    : { icon: "Car", title: "Встреча в городе", text: "Подъедем к вам или встретимся в удобном месте." },
];

const BASE_CONTACTS: { icon: string; label: string; value: string; href?: string }[] = [
  { icon: "Phone", label: "Телефон", value: PHONE, href: PHONE_HREF },
  { icon: "MessageCircle", label: "WhatsApp / Telegram", value: PHONE, href: PHONE_HREF },
  { icon: "Mail", label: "Почта для счетов", value: "6456609@gmail.com", href: "mailto:6456609@gmail.com" },
];

const Contacts = ({ city }: { city: City }) => {
  const ROUTES = getRoutes(city);
  const CONTACTS = [...BASE_CONTACTS, ...(city.hotel ? [{ icon: "Hotel", label: "Гостиница", value: city.hotel }] : []), city.mapText
      ? { icon: "MapPin", label: "Адрес", value: city.address ?? "" }
      : { icon: "MapPin", label: `${city.region ?? DAGESTAN}, г. ${city.name}`, value: "Работаем по всему городу — встретимся в центре или привезём документы к вам" }];
  return (
    <section id="contacts" className="px-4 md:px-6 py-20 md:py-28 bg-card scroll-mt-4">
      <h2 className="section-title mb-14 reveal">Как добраться и&nbsp;контакты</h2>
      <div className="grid lg:grid-cols-[1fr_1fr] gap-4">
        <div className="grid gap-4">
          <div className="reveal rounded-lg bg-background p-6 md:p-8">
            <ul className="divide-y divide-border">
              {CONTACTS.map((c) => (
                <li key={c.label} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                  <span className="w-11 h-11 rounded-full bg-primary text-primary-foreground grid place-items-center shrink-0">
                    <Icon name={c.icon} size={20} fallback="Info" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-lg font-medium hover:text-primary transition-colors break-words">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium">{c.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal rounded-lg border-2 border-foreground/15 p-6 md:p-8">
            <p className="uppercase font-bold text-xl mb-5">Дорога до нас</p>
            <ul className="grid gap-5">
              {ROUTES.map((r) => (
                <li key={r.title} className="flex gap-4">
                  <Icon name={r.icon} size={22} className="text-primary shrink-0 mt-0.5" fallback="Navigation" />
                  <div>
                    <p className="font-bold">{r.title}</p>
                    <p className="text-muted-foreground">{r.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="reveal rounded-lg overflow-hidden min-h-[420px] bg-muted">
          <iframe
            title={`Карта: ${city.name}`}
            src={city.mapText ? `https://yandex.ru/map-widget/v1/?ll=${city.ll}&z=16&mode=search&text=${encodeURIComponent(city.mapText)}` : `https://yandex.ru/map-widget/v1/?ll=${city.ll}&z=13`}
            className="w-full h-full min-h-[420px] border-0 grayscale-[30%]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Contacts;