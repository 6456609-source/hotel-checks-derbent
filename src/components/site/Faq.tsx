import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = [
  {
    q: "Какие документы я получу для отчёта?",
    a: "Счёт на оплату, кассовый чек, акт и договор с организацией. Все документы — с печатью и подписью, по фактическим датам проживания.",
  },
  {
    q: "Можно ли получить документы на другие даты?",
    a: "Нет. Мы выдаём документы только за фактическое проживание с реальными датами заезда и выезда. Это защищает и вас, и вашу компанию при проверке.",
  },
  {
    q: "Как оплатить от компании по безналу?",
    a: "Пришлите реквизиты организации и даты — мы выставим счёт и договор. После оплаты бронь подтверждается, а закрывающие документы вы получаете при выезде.",
  },
  {
    q: "Можно заплатить самому, а компания компенсирует?",
    a: "Да. Оплачиваете картой или наличными на месте, получаете кассовый чек и все документы для авансового отчёта.",
  },
  {
    q: "Трансфер и аренда авто тоже с документами?",
    a: "Да, по дополнительным услугам — трансферу, аренде авто и переговорной — выдаём отдельные чеки и акты.",
  },
  {
    q: "Есть ли в номерах рабочее место и Wi‑Fi?",
    a: "Во всех номерах есть рабочий стол, быстрый Wi‑Fi и тишина — всё, чтобы работать вечером после объекта.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className="px-4 md:px-6 py-20 md:py-28 scroll-mt-4">
      <div className="grid lg:grid-cols-[468px_1fr] gap-10 lg:gap-8">
        <div className="reveal">
          <h2 className="section-title">Частые вопросы</h2>
          <p className="text-muted-foreground mt-6 max-w-sm">
            Не нашли ответ? Позвоните — объясним, как оформить командировку, за пару минут.
          </p>
        </div>
        <Accordion type="single" collapsible defaultValue="item-0" className="reveal">
          {FAQ.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-b-2 border-foreground/15">
              <AccordionTrigger className="text-left text-lg md:text-xl font-bold py-6 hover:no-underline hover:text-primary [&[data-state=open]]:text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-muted-foreground pb-6 max-w-3xl">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
