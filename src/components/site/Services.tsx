import Icon from "@/components/ui/icon";
import { MEETING_PHOTO } from "./data";

const SERVICES = [
  {
    icon: "Plane",
    title: "Трансфер",
    text: "Встретим в аэропорту Махачкалы или на вокзале Дербента, довезём до гостиницы и обратно. Чек на трансфер — отдельной строкой.",
  },
  {
    icon: "Car",
    title: "Аренда авто",
    text: "Автомобиль на время командировки — для поездок по объектам, в Махачкалу и район. С водителем или без.",
  },
  {
    icon: "Presentation",
    title: "Переговорная",
    text: "Комната на 8 человек: экран, Wi‑Fi, флипчарт, кофе-брейк. Почасовая аренда с закрывающими документами.",
  },
];

interface Props {
  onBook: () => void;
}

const Services = ({ onBook }: Props) => {
  return (
    <section id="services" className="px-4 md:px-6 py-20 md:py-28 bg-foreground text-background scroll-mt-4">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 reveal">
        <h2 className="section-title max-w-3xl">Всё для работы в&nbsp;командировке</h2>
        <button
          type="button"
          onClick={onBook}
          className="self-start md:self-auto h-[52px] px-7 rounded-full bg-background text-foreground font-medium inline-flex items-center gap-3 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Заказать услугу <Icon name="ArrowRight" size={18} />
        </button>
      </div>

      <div className="grid lg:grid-cols-[1fr_1fr] gap-4">
        <div className="grid gap-4">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="reveal flex gap-6 items-start rounded-lg border-2 border-background/15 p-6 hover:border-primary transition-colors"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="shrink-0 w-14 h-14 rounded-full bg-primary text-primary-foreground grid place-items-center">
                <Icon name={s.icon} size={24} fallback="Star" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl mb-2">{s.title}</h3>
                <p className="text-background/65">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="reveal relative rounded-lg overflow-hidden min-h-[360px]">
          <img src={MEETING_PHOTO} alt="Переговорная комната" className="absolute inset-0 w-full h-full object-cover" />
          <span className="absolute left-4 bottom-4 rounded-full bg-primary text-primary-foreground px-5 h-10 inline-flex items-center font-medium">
            Переговорная на 8 мест
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
