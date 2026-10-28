import { CITIES, CRIMEA, DAGESTAN, KRAI, REGION_GEN, ROSTOV, STAV, type City } from "./cities";

const SeoText = ({ city }: { city: City }) => {
  const rest = CITIES.filter((c) => c.slug !== city.slug);
  const groups = [DAGESTAN, KRAI, STAV, ROSTOV, CRIMEA]
    .map((r) => ({ r, list: rest.filter((c) => (c.region ?? DAGESTAN) === r).map((c) => c.in) }))
    .filter((g) => g.list.length)
    .map((g) => `${REGION_GEN[g.r]}: ${g.list.join(", ")}`);
  const geo = `Работаем в ${city.in}, а также в городах ${groups.join("; ")}.`;
  const lastP = `Кроме проживания, оформим отчётные документы за трансфер, аренду автомобиля и переговорную. ${geo}`;
  const lead = `Нужны гостиничные чеки в ${city.in} для отчёта о командировке? Оформляем отчётные документы за проживание в ${city.in}: кассовый чек, счёт на оплату, акт об оказании услуг и договор. Полный комплект для бухгалтерии — быстро и официально.`;
  const paragraphs = city.seoText ? [lead, ...city.seoText] : [
    lead,
    `Едете в командировку в ${city.to}? Мы берём на себя оформление документов за проживание в гостинице, чтобы вы без лишних вопросов отчитались перед бухгалтерией. Выдаём полный комплект: кассовый чек, счёт на оплату, акт об оказании услуг и договор.`,
    `Гостиничные чеки в ${city.in} оформляем за фактическое проживание с реальными датами заезда и выезда. Документы подходят для авансового отчёта и подтверждения командировочных расходов.`,
    "Оплатить проживание можно наличными или по безналичному расчёту на реквизиты компании. Счёт пришлём заранее, а закрывающие документы — сразу после выезда.",
    lastP,
  ];
  const finalNote = city.seoText ? ` ${geo}` : "";
  const half = Math.ceil(paragraphs.length / 2);
  return (
    <section id="about" className="px-4 md:px-6 py-20 md:py-24 bg-card scroll-mt-4">
      <h2 className="section-title mb-10 reveal">
        Отчётные документы за&nbsp;проживание в&nbsp;{city.in}
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
