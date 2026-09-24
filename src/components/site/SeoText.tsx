import { CITIES, type City } from "./cities";

const SeoText = ({ city }: { city: City }) => {
  const others = CITIES.filter((c) => c.slug !== city.slug).map((c) => c.in).join(", ");
  return (
    <section id="about" className="px-4 md:px-6 py-20 md:py-24 bg-card scroll-mt-4">
      <h2 className="section-title mb-10 reveal">
        Оформление документов за&nbsp;проживание в&nbsp;{city.in}
      </h2>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 text-lg text-muted-foreground leading-relaxed reveal">
        <div className="space-y-5">
          <p>
            Едете в командировку в {city.to}? Мы берём на себя оформление документов за проживание в гостинице, чтобы
            вы без лишних вопросов отчитались перед бухгалтерией. Выдаём полный комплект: кассовый чек, счёт на
            оплату, акт об оказании услуг и договор.
          </p>
          <p>
            Гостиничные чеки в {city.in} оформляем за фактическое проживание с реальными датами заезда и выезда.
            Документы подходят для авансового отчёта и подтверждения командировочных расходов.
          </p>
        </div>
        <div className="space-y-5">
          <p>
            Оплатить проживание можно наличными или по безналичному расчёту на реквизиты компании. Счёт пришлём
            заранее, а закрывающие документы — сразу после выезда.
          </p>
          <p>
            Кроме проживания, оформим отчётные документы за трансфер, аренду автомобиля и переговорную. Работаем в{" "}
            {city.in} и других городах Дагестана: {others}.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeoText;
