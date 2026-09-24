import Icon from "@/components/ui/icon";
import { ROOM_PHOTO } from "./data";

const DOCS = [
  { icon: "FileText", title: "Счёт на оплату", text: "Выставляем на реквизиты вашей компании до заезда — бухгалтерия оплачивает заранее." },
  { icon: "Receipt", title: "Кассовый чек", text: "Фискальный чек по 54-ФЗ. Пробиваем при оплате, отправляем на почту или отдаём на руки." },
  { icon: "FileCheck", title: "Акт выполненных работ", text: "С подписью и печатью. Реальные даты заезда и выезда, количество ночей, стоимость." },
  { icon: "FileSignature", title: "Договор", text: "Заключаем договор с организацией — для разовых и регулярных командировок." },
];

const STEPS = [
  { n: "01", title: "Заявка", text: "Оставляете заявку с датами и реквизитами компании." },
  { n: "02", title: "Счёт", text: "Присылаем счёт и договор в течение часа." },
  { n: "03", title: "Оплата", text: "Компания платит по безналу, или вы — наличными либо картой на месте." },
  { n: "04", title: "Документы", text: "При выезде получаете полный комплект для отчёта." },
];

const Documents = () => {
  return (
    <section id="documents" className="px-4 md:px-6 py-20 md:py-28 scroll-mt-4">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-end mb-14 reveal">
        <h2 className="section-title">
          Документы для бухгалтерии,
          <span className="text-primary"> безнал и&nbsp;наличный расчёт</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
          Документы выдаём только за фактическое проживание — с реальными датами заезда и выезда. Всё чисто:
          авансовый отчёт принимают с первого раза.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {DOCS.map((d, i) => (
          <article
            key={d.title}
            className="reveal group rounded-lg border-2 border-foreground/15 p-6 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="w-12 h-12 rounded-full bg-foreground text-background grid place-items-center mb-10 group-hover:bg-background group-hover:text-foreground">
              <Icon name={d.icon} size={22} fallback="FileText" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 leading-tight">{d.title}</h3>
            <p className="text-muted-foreground group-hover:text-primary-foreground/80">{d.text}</p>
          </article>
        ))}
      </div>

      <div className="grid lg:grid-cols-[468px_1fr] gap-4">
        <div className="reveal rounded-lg overflow-hidden min-h-[320px]">
          <img src={ROOM_PHOTO} alt="Номер для командированных" className="w-full h-full object-cover" />
        </div>
        <div className="reveal rounded-lg bg-primary text-primary-foreground p-6 md:p-10">
          <p className="uppercase font-bold text-2xl md:text-3xl leading-[0.95] tracking-tight mb-10 max-w-lg">
            Как оплатить от компании — четыре шага
          </p>
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
            {STEPS.map((s) => (
              <li key={s.n} className="border-t-2 border-primary-foreground pt-4">
                <span className="font-heading font-extrabold text-4xl">{s.n}</span>
                <h3 className="font-bold uppercase text-lg mt-2">{s.title}</h3>
                <p className="text-primary-foreground/80 mt-1">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Documents;