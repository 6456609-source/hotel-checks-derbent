import Icon from "@/components/ui/icon";
import type { City } from "./cities";
import { HOTEL_NAME, LOGO_URL, NAV, PHONE, PHONE_HREF, scrollToId } from "./data";

interface Props {
  onBook: () => void;
  city: City;
}

const Footer = ({ onBook, city }: Props) => {
  return (
    <footer className="px-4 md:px-6 pt-4">
      <div className="rounded-t-lg bg-primary text-primary-foreground p-6 md:p-10 overflow-hidden relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 relative z-10">
          <div>
            <p className="uppercase font-bold text-3xl md:text-5xl leading-[0.92] tracking-tight max-w-2xl">
              Командировка в&nbsp;{city.to} — без проблем с&nbsp;отчётом
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <button
                type="button"
                onClick={onBook}
                className="h-[52px] px-7 rounded-full bg-background text-foreground font-medium inline-flex items-center gap-3 hover:translate-x-1 transition-transform"
              >
                Оставить заявку <Icon name="ArrowRight" size={18} />
              </button>
              <a
                href={PHONE_HREF}
                className="h-[52px] px-7 rounded-full border-2 border-primary-foreground font-medium inline-flex items-center gap-3 hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                <Icon name="Phone" size={18} /> {PHONE}
              </a>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 font-medium">
            {NAV.map((n) => (
              <button key={n.id} type="button" onClick={() => scrollToId(n.id)} className="hover:underline underline-offset-4">
                {n.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-12 pt-6 border-t-2 border-primary-foreground/30 text-sm relative z-10">
          <div className="flex items-center gap-3">
            <span className="bg-foreground rounded-lg p-[3px]">
              <img src={LOGO_URL} alt={HOTEL_NAME} className="h-8 w-auto block" />
            </span>
            <span className="max-w-[260px]">{HOTEL_NAME}</span>
          </div>
          <span>© {new Date().getFullYear()} {city.name}, Республика Дагестан</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
