import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import { DEFAULT_CITY } from "@/components/site/cities";
import { cityHead } from "@/components/site/head";

export const Route = createFileRoute("/")({
  head: () => cityHead(DEFAULT_CITY),
  component: Home,
});

function Home() {
  return <Index city={DEFAULT_CITY} />;
}
