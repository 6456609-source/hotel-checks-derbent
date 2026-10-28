import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import Index from "@/pages/Index";
import { DEFAULT_CITY, findCity } from "@/components/site/cities";
import { cityHead } from "@/components/site/head";

export const Route = createFileRoute("/$city")({
  beforeLoad: ({ params }) => {
    if (params.city === DEFAULT_CITY.slug) throw redirect({ to: "/", statusCode: 301 });
  },
  loader: ({ params }) => {
    const city = findCity(params.city);
    if (!city) throw notFound();
    return { slug: city.slug };
  },
  head: ({ loaderData }) => {
    const city = loaderData ? findCity(loaderData.slug) : undefined;
    return city ? cityHead(city) : {};
  },
  component: CityPage,
});

function CityPage() {
  const { slug } = Route.useLoaderData();
  const city = findCity(slug) ?? DEFAULT_CITY;
  return <Index city={city} />;
}