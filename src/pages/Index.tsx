import { useState } from "react";
import Hero from "@/components/site/Hero";
import Documents from "@/components/site/Documents";
import Services from "@/components/site/Services";
import Reviews from "@/components/site/Reviews";
import Contacts from "@/components/site/Contacts";
import Faq from "@/components/site/Faq";
import Footer from "@/components/site/Footer";
import BookingDialog from "@/components/site/BookingDialog";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  const [bookOpen, setBookOpen] = useState(false);
  const openBook = () => setBookOpen(true);
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      <Hero onBook={openBook} />
      <Documents />
      <Services onBook={openBook} />
      <Reviews />
      <Contacts />
      <Faq />
      <Footer onBook={openBook} />
      <BookingDialog open={bookOpen} onOpenChange={setBookOpen} />
    </div>
  );
};

export default Index;
