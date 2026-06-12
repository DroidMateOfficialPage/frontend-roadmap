import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/vitis/Nav";
import { Hero } from "@/components/vitis/Hero";
import { Story } from "@/components/vitis/Story";
import { Wines } from "@/components/vitis/Wines";
import { Experience } from "@/components/vitis/Experience";
import { Testimonials } from "@/components/vitis/Testimonials";
import { Footer } from "@/components/vitis/Footer";
import { BookingModal } from "@/components/vitis/BookingModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vitis Winery — Lumbarda, Korčula · Indigenous Grk & Plavac Mali" },
      {
        name: "description",
        content:
          "A family winery on Korčula's sandy southern shore. Romantic tastings of indigenous Grk, Plavac Mali, and Rosé overlooking the Adriatic.",
      },
      { property: "og:title", content: "Vitis Winery — Lumbarda, Korčula" },
      {
        property: "og:description",
        content: "Rooted in tradition, crafted with passion. Book a sunset wine tasting on Korčula.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const open = () => setBookingOpen(true);

  return (
    <div className="bg-cream overflow-x-hidden">
      <Nav onBook={open} />
      <main>
        <Hero onBook={open} />
        <Story />
        <Wines />
        <Experience onBook={open} />
        <Testimonials />
      </main>
      <Footer />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
