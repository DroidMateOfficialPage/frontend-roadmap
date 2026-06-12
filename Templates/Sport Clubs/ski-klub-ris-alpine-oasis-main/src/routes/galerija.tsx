import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import hero from "@/assets/hero-ski.jpg";

export const Route = createFileRoute("/galerija")({
  head: () => ({
    meta: [
      { title: "Galerija — Ski Klub RIS" },
      { name: "description", content: "Najljepši trenuci iz života Ski Kluba RIS — treninzi, takmičenja i kampovi." },
      { property: "og:title", content: "Galerija — Ski Klub RIS" },
      { property: "og:description", content: "Fotografije sa staza, treninga i takmičenja." },
      { property: "og:url", content: "/galerija" },
    ],
    links: [{ rel: "canonical", href: "/galerija" }],
  }),
  component: Gallery,
});

const images: { src: string; c?: string }[] = [
  { src: hero, c: "row-span-2 col-span-2" },
  { src: g1 },
  { src: g2 },
  { src: g3, c: "col-span-2" },
  { src: g4, c: "row-span-2" },
  { src: g5 },
  { src: g6 },
  { src: g2, c: "col-span-2" },
  { src: g1 },
  { src: g4 },
];

function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Naša priča u slici</span>
          <h1 className="font-display text-6xl md:text-8xl mt-4 mb-6">Galerija</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Pogledajte najljepše trenutke iz života Ski Kluba RIS.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-3">
            {images.map((img, i) => (
              <button key={i} onClick={() => setOpen(img.src)}
                className={`relative overflow-hidden rounded-xl group ${img.c ?? ""}`}>
                <img src={img.src} alt="" loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {open && (
        <div onClick={() => setOpen(null)}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-lg grid place-items-center p-6 animate-fade-up">
          <button className="absolute top-6 right-6 p-2 rounded-full glass" onClick={() => setOpen(null)}>
            <X className="w-6 h-6" />
          </button>
          <img src={open} alt="" className="max-w-full max-h-[90vh] rounded-2xl" />
        </div>
      )}
    </Layout>
  );
}
