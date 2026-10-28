import { Link } from "react-router-dom";
import { CITIES, cityPath, type City } from "./cities";

const CityLinks = ({ city }: { city: City }) => {
  return (
    <section id="cities" className="px-4 md:px-6 py-20 md:py-24 scroll-mt-4">
      <h2 className="section-title mb-4 reveal">Работаем по&nbsp;югу России</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mb-10 reveal">
        Те же услуги и тот же комплект отчётных документов — в каждом городе. Выберите свой.
      </p>
      <div className="flex flex-wrap gap-3 reveal">
        {CITIES.map((c) => (
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
    </section>
  );
};

export default CityLinks;
