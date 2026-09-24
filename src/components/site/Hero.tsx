import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { HOTEL_NAME, LOGO_URL, NAV, scrollToId } from "./data";
import type { City } from "./cities";

interface HeroProps {
  onBook: () => void;
  city: City;
}

const HERO_PILLS = NAV.filter((n) => ["documents", "reviews", "contacts"].includes(n.id));

const Hero = ({ onBook, city }: HeroProps) => {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), 150);
  };

  return (
    <main className="hero-stage" id="top">
      <figure className="hero-photo">
        <img src={city.photo} alt={city.photoAlt} />
      </figure>

      <section className="hero-text">
        <header className="hero-top">
          <a className="hero-logo" href="#top" aria-label={HOTEL_NAME}>
            <img src={LOGO_URL} alt={HOTEL_NAME} />
          </a>
          <nav className="hero-pills flex gap-3" aria-label="Разделы">
            {HERO_PILLS.map((n, i) => (
              <button
                key={n.id}
                type="button"
                onClick={() => scrollToId(n.id)}
                className={`pill ${i === 0 ? "is-on" : ""}`}
              >
                {n.label}
              </button>
            ))}
          </nav>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Открыть меню"
                className="pill !px-3 min-[901px]:hidden"
              >
                <Icon name="Menu" size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border">
              <SheetTitle className="font-heading text-xl mb-8">Разделы</SheetTitle>
              <div className="flex flex-col gap-3">
                {NAV.map((n) => (
                  <button key={n.id} type="button" onClick={() => go(n.id)} className="pill justify-center">
                    {n.label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    onBook();
                  }}
                  className="mt-4 h-[52px] rounded-full bg-primary text-primary-foreground font-medium"
                >
                  Оставить заявку
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </header>
        <h1 className="hero-h1">Выгодная командировка в&nbsp;{city.to}</h1>
      </section>

      <section className="hero-cta" aria-label="Бронирование">
        <div className="hero-giant" aria-hidden="true">
          Чеки
        </div>
        <p className="hero-lead">Все отчётные документы. Оплата по&nbsp;безналу и&nbsp;наличный расчёт.</p>
        <ul className="hero-docs">
          <li>Счёт</li>
          <li>Кассовый чек</li>
          <li>Акт</li>
          <li>Договор</li>
        </ul>
        <button type="button" className="hero-book" onClick={onBook}>
          Оставить заявку
          <Icon name="ArrowRight" size={18} />
        </button>
        <div className="hero-chips" aria-hidden="true">
          <span className="hero-chip">
            <Icon name="FileText" size={17} />
          </span>
          <span className="hero-chip">
            <Icon name="CreditCard" size={17} />
          </span>
          <span className="hero-chip">
            <Icon name="Send" size={17} />
          </span>
        </div>
      </section>
    </main>
  );
};

export default Hero;