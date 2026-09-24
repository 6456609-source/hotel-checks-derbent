import { useState } from "react";
import Icon from "@/components/ui/icon";

const REVIEWS = [
  {
    name: "Андрей Ковалёв",
    role: "Инженер-наладчик, Санкт-Петербург",
    text: "Жил 12 ночей на объекте. Счёт компании выставили в тот же день, при выезде отдали акт и чек — бухгалтерия приняла отчёт без единого вопроса.",
  },
  {
    name: "Марина Соколова",
    role: "Бухгалтер, Москва",
    text: "Оформляем сюда сотрудников уже полгода. Договор, счёт, закрывающие — всё приходит вовремя и с правильными датами. Для нас это главное.",
  },
  {
    name: "Руслан Гаджиев",
    role: "Руководитель проекта, Краснодар",
    text: "Взяли переговорную на полдня для встречи с подрядчиками и авто на неделю. Удобно, что всё в одном месте и по одному договору.",
  },
  {
    name: "Олег Смирнов",
    role: "Аудитор, Екатеринбург",
    text: "Встретили в аэропорту ночью, номер тихий, стол для работы нормальный. Чек за трансфер тоже дали — мелочь, а приятно.",
  },
];

const Reviews = () => {
  const [i, setI] = useState(0);
  const r = REVIEWS[i];
  const prev = () => setI((v) => (v - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setI((v) => (v + 1) % REVIEWS.length);

  return (
    <section id="reviews" className="px-4 md:px-6 py-20 md:py-28 scroll-mt-4">
      <div className="grid lg:grid-cols-[468px_1fr] gap-10 lg:gap-8">
        <div className="reveal flex flex-col justify-between gap-8">
          <h2 className="section-title">Отзывы гостей</h2>
          <div className="flex items-center gap-4">
            <span className="font-heading font-extrabold text-6xl text-primary">4,9</span>
            <div>
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Icon key={k} name="Star" size={18} className="fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-1">средняя оценка командированных</p>
            </div>
          </div>
        </div>

        <div className="reveal rounded-lg bg-primary text-primary-foreground p-6 md:p-10 flex flex-col min-h-[380px]">
          <Icon name="Quote" size={44} />
          <blockquote key={i} className="animate-fade-in text-2xl md:text-3xl font-bold leading-tight mt-6 flex-1">
            {r.text}
          </blockquote>
          <div className="flex flex-wrap items-end justify-between gap-6 mt-10">
            <div>
              <p className="font-heading font-bold text-lg">{r.name}</p>
              <p className="text-primary-foreground/75">{r.role}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-medium tabular-nums mr-2">
                {String(i + 1).padStart(2, "0")} / {String(REVIEWS.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={prev}
                aria-label="Предыдущий отзыв"
                className="w-12 h-12 rounded-full border-2 border-primary-foreground grid place-items-center hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                <Icon name="ArrowLeft" size={20} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Следующий отзыв"
                className="w-12 h-12 rounded-full bg-primary-foreground text-primary grid place-items-center hover:opacity-80 transition-opacity"
              >
                <Icon name="ArrowRight" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
