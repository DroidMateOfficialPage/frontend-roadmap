import { motion } from "framer-motion";
import grk from "@/assets/wine-grk.jpg";
import plavac from "@/assets/wine-plavac.jpg";
import rose from "@/assets/wine-rose.jpg";
import { ArrowUpRight } from "lucide-react";

const wines = [
  {
    name: "Grk",
    type: "Indigenous White",
    vintage: "2022",
    img: grk,
    notes: "Stone fruit · sea salt · honeysuckle",
    pairing: "Adriatic oysters, grilled white fish",
    body: "A rare white grown only in Lumbarda's sand. Crisp, mineral, and quietly profound.",
  },
  {
    name: "Plavac Mali",
    type: "Estate Red",
    vintage: "2019",
    img: plavac,
    notes: "Dark cherry · fig · Mediterranean herbs",
    pairing: "Lamb peka, aged hard cheeses",
    body: "Sun-drenched and structured. The soul of the Dalmatian coast in a glass.",
  },
  {
    name: "Rosé",
    type: "Plavac Rosé",
    vintage: "2023",
    img: rose,
    notes: "Wild strawberry · rose petal · citrus zest",
    pairing: "Summer evenings, ripe peaches",
    body: "Delicate and luminous. The colour of a Korčula sunset at the seventh hour.",
  },
];

export function Wines() {
  return (
    <section id="wines" className="relative bg-secondary py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-20 flex flex-col items-center text-center">
          <span className="eyebrow mb-6">
            <span className="hairline mr-4" />
            The Collection
            <span className="hairline ml-4" />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-burgundy-deep max-w-3xl leading-[1.1]">
            Three expressions of a single
            <em className="italic"> place</em>.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-14">
          {wines.map((w, i) => (
            <motion.article
              key={w.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-cream">
                <img
                  src={w.img}
                  alt={`${w.name} ${w.vintage}`}
                  width={800}
                  height={1100}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
                {/* Hover detail card */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-burgundy-deep via-burgundy-deep/85 to-transparent p-8 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="text-cream space-y-3 translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                    <div>
                      <div className="eyebrow !text-gold mb-1">Tasting Notes</div>
                      <p className="font-serif italic text-lg">{w.notes}</p>
                    </div>
                    <div>
                      <div className="eyebrow !text-gold mb-1">Pairs With</div>
                      <p className="text-sm font-light">{w.pairing}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-start justify-between">
                <div>
                  <div className="eyebrow !text-burgundy/70">
                    {w.type} · {w.vintage}
                  </div>
                  <h3 className="mt-2 font-serif text-3xl text-burgundy-deep">{w.name}</h3>
                  <p className="mt-3 text-sm text-espresso/70 leading-relaxed max-w-xs">
                    {w.body}
                  </p>
                </div>
              </div>

              <a
                href="#experience"
                className="mt-6 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-burgundy-deep group/link"
              >
                <span className="border-b border-burgundy-deep/30 pb-1 transition-all group-hover/link:border-burgundy-deep">
                  Explore Details
                </span>
                <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
