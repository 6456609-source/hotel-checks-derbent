import { CITIES, type City } from "./cities";

const SeoText = ({ city }: { city: City }) => {
  const others = CITIES.filter((c) => c.slug !== city.slug && !c.region).map((c) => c.in).join(", ");
  const paragraphs = city.seoText ?? [
    `Едете в командировку в ${city.to}? Мы берём на себя оформление документов за проживание в гостинице, чтобы вы без лишних вопросов отчитались перед бухгалтерией. Выдаём полный комплект: кассовый чек, счёт на оплату, акт об оказании услуг и договор.`,
    `Гостиничные чеки в ${city.in} оформляем за фактическое проживание с реальными датами заезда и выезда. Документы подходят для авансового отчёта и подтверждения командировочных расходов.`,
    "Оплатить проживание можно наличными или по безналичному расчёту на реквизиты компании. Счёт пришлём заранее, а закрывающие документы — сразу после выезда.",
    `Кроме проживания, оформим отчётные документы за трансфер, аренду автомобиля и переговорную. Работаем в ${city.in} и других городах Дагестана: ${others}, а также в Белогорске (Крым).`,
  ];
  const finalNote = city.region ? ` Также работаем в городах Дагестана: ${others}.` : "";
  const half = Math.ceil(paragraphs.length / 2);
  return (
    <section id="about" className="px-4 md:px-6 py-20 md:py-24 bg-card scroll-mt-4">
      <h2 className="section-title mb-10 reveal">
        Оформление документов за&nbsp;проживание в&nbsp;{city.in}
      </h2>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 text-lg text-muted-foreground leading-relaxed reveal">
        {[paragraphs.slice(0, half), paragraphs.slice(half)].map((col, ci) => (
          <div key={ci} className="space-y-5">
            {col.map((p, i) => (
              <p key={i}>
                {p}
                {ci === 1 && i === col.length - 1 ? finalNote : ""}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeoText;
