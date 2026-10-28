import { useState } from "react";
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
import type { City } from "@/components/site/cities";
import { useReveal } from "@/hooks/use-reveal";

const Index = ({ city }: { city: City }) => {
  const [bookOpen, setBookOpen] = useState(false);
  const openBook = () => setBookOpen(true);
  useReveal(city.slug);

  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      <Hero onBook={openBook} city={city} />
      <Documents />
      <Services onBook={openBook} city={city} />
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
