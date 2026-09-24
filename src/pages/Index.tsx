import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Hero from "@/components/site/Hero";
import Documents from "@/components/site/Documents";
import Services from "@/components/site/Services";
import Reviews from "@/components/site/Reviews";
import Contacts from "@/components/site/Contacts";
import Faq from "@/components/site/Faq";
import Footer from "@/components/site/Footer";
import CityLinks from "@/components/site/CityLinks";
import SeoText from "@/components/site/SeoText";
import BookingDialog from "@/components/site/BookingDialog";
import FloatingContacts from "@/components/site/FloatingContacts";
import { DEFAULT_CITY, findCity } from "@/components/site/cities";
import { getSeo } from "@/components/site/seo";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  const { city: slug } = useParams();
  const city = findCity(slug);
  const [bookOpen, setBookOpen] = useState(false);
  const openBook = () => setBookOpen(true);
  useReveal(city?.slug);

  useEffect(() => {
    if (!city) return;
    const { title, description, keywords, image } = getSeo(city);
    const setMeta = (attr: string, key: string, value: string) => {
      document.querySelector(`meta[${attr}="${key}"]`)?.setAttribute("content", value);
    };
    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "keywords", keywords);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", image);
  }, [city]);

  if (!city) return <Navigate to="/" replace />;
  if (slug === DEFAULT_CITY.slug) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      <Hero onBook={openBook} city={city} />
      <Documents />
      <Services onBook={openBook} />
      <Reviews />
      <Contacts city={city} />
      <Faq city={city} />
      <SeoText city={city} />
      <CityLinks city={city} />
      <Footer onBook={openBook} city={city} />
      <BookingDialog open={bookOpen} onOpenChange={setBookOpen} />
      <FloatingContacts />
    </div>
  );
};

export default Index;