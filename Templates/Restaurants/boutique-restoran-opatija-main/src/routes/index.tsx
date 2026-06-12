import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { MenuPreview } from "@/components/MenuPreview";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { ReservationModal } from "@/components/ReservationModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Boutique Restaurant — Mediterranean Fine Dining in Opatija" },
      {
        name: "description",
        content:
          "An exclusive Mediterranean fine-dining journey on the Opatija coast. Adriatic seafood, Istrian truffles, and a curated wine cellar overlooking the sea.",
      },
      { property: "og:title", content: "Boutique Restaurant — Opatija, Croatia" },
      {
        property: "og:description",
        content: "Mediterranean fine dining where culinary artistry meets the Adriatic.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar onReserve={() => setOpen(true)} />
      <main>
        <Hero onReserve={() => setOpen(true)} />
        <Philosophy />
        <MenuPreview />
        <Experience />
      </main>
      <Footer onReserve={() => setOpen(true)} />
      <ReservationModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
