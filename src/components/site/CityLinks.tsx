import { Link } from "@/lib/router-compat";
import { CITIES, DAGESTAN, KRAI, STAV, ROSTOV, CRIMEA, cityPath, type City } from "./cities";

const REGIONS = [DAGESTAN, KRAI, STAV, ROSTOV, CRIMEA];

const CityLinks = ({ city }: { city: City }) => {
  return (
    <section id="cities" className="px-4 md:px-6 py-20 md:py-24 scroll-mt-4">
      <h2 className="section-title mb-4 reveal">Работаем по&nbsp;югу России</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mb-10 reveal">
        Те же услуги и тот же комплект отчётных документов — в каждом городе. Выберите свой.
      </p>
      <div className="grid gap-8 md:grid-cols-2 reveal">
        {REGIONS.map((region) => {
          const list = CITIES.filter((c) => (c.region ?? DAGESTAN) === region);
          if (!list.length) return null;
          return (
            <div key={region}>
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">{region}</h3>
              <div className="flex flex-wrap gap-3">
                {list.map((c) => (
                  <Link
                    key={c.slug}
                    to={cityPath(c)}
                    onClick={() => window.scrollTo({ top: 0 })}
                    className={`pill ${c.slug === city.slug ? "is-on" : ""}`}
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CityLinks;