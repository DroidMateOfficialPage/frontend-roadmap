import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { I18nContext, translations, type Lang } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Story } from "@/components/site/Story";
import { Collection } from "@/components/site/Collection";
import { Experiences } from "@/components/site/Experiences";
import { Reviews } from "@/components/site/Reviews";
import { Footer } from "@/components/site/Footer";
import { BookingModal } from "@/components/site/BookingModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vinarija Tasovac · Žrnovo, Korčula — Luksuzno kušanje vina" },
      { name: "description", content: "Obiteljska vinarija u Žrnovu na otoku Korčuli. Pošip, Plavac Mali i craft pivo Pagvan. Intimna kušanja i romantične večere pod zvijezdama." },
      { property: "og:title", content: "Vinarija Tasovac · Žrnovo, Korčula" },
      { property: "og:description", content: "Tradicija u svakoj kapi, strast u svakom trenutku. Rezervirajte privatno kušanje vina na otoku Korčuli." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [lang, setLang] = useState<Lang>("hr");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingExp, setBookingExp] = useState(0);
  useReveal();

  const openBooking = (idx: number = 0) => {
    setBookingExp(idx);
    setBookingOpen(true);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      <div className="bg-ivory text-espresso min-h-screen">
        <Navbar onBook={openBooking} />
        <main>
          <Hero onBook={() => openBooking(0)} />
          <Story />
          <Collection />
          <Experiences onBook={openBooking} />
          <Reviews />
        </main>
        <Footer />
        <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} initialExperience={bookingExp} />
      </div>
    </I18nContext.Provider>
  );
}
