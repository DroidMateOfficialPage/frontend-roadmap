import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { MapPin, Clock, Tag } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/dogadjaji")({
  head: () => ({
    meta: [
      { title: "Događaji i kalendar — Ski Klub RIS" },
      { name: "description", content: "Kalendar takmičenja, kampova i događaja Ski Kluba RIS za sezonu 2026." },
      { property: "og:title", content: "Događaji — Ski Klub RIS" },
      { property: "og:description", content: "Sve aktivnosti i takmičenja u sezoni." },
      { property: "og:url", content: "/dogadjaji" },
    ],
    links: [{ rel: "canonical", href: "/dogadjaji" }],
  }),
  component: Events,
});

const events = [
  { d: "15", m: "DEC", y: "2025", t: "Otvaranje sezone", l: "Jahorina", time: "10:00", cat: "Event" },
  { d: "20", m: "DEC", y: "2025", t: "Trening kamp — pripreme", l: "Bjelašnica", time: "Cijeli dan", cat: "Kamp" },
  { d: "12", m: "JAN", y: "2026", t: "RIS Kup — Veleslalom", l: "Kupres", time: "09:00", cat: "Takmičenje" },
  { d: "26", m: "JAN", y: "2026", t: "Memorijal Branka Ćopića", l: "Jahorina", time: "10:00", cat: "Takmičenje" },
  { d: "08", m: "FEB", y: "2026", t: "Dječji ski kamp — 7 dana", l: "Bjelašnica", time: "Vikend", cat: "Kamp" },
  { d: "15", m: "FEB", y: "2026", t: "Slalom liga BiH — 3. kolo", l: "Vlašić", time: "10:30", cat: "Takmičenje" },
  { d: "22", m: "FEB", y: "2026", t: "Republičko prvenstvo RS", l: "Jahorina", time: "09:00", cat: "Takmičenje" },
  { d: "08", m: "MAR", y: "2026", t: "Žensko skijaško druženje", l: "Kupres", time: "11:00", cat: "Druženje" },
  { d: "15", m: "MAR", y: "2026", t: "Porodični vikend", l: "Vlašić", time: "Vikend", cat: "Druženje" },
  { d: "22", m: "MAR", y: "2026", t: "Državno prvenstvo BiH", l: "Jahorina", time: "09:00", cat: "Takmičenje" },
  { d: "30", m: "MAR", y: "2026", t: "Zatvaranje sezone & dodjela", l: "Banja Luka", time: "19:00", cat: "Ceremonija" },
];

const categories = ["Sve", "Takmičenje", "Kamp", "Druženje", "Event", "Ceremonija"];

function Events() {
  const [filter, setFilter] = useState("Sve");
  const filtered = filter === "Sve" ? events : events.filter((e) => e.cat === filter);

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Sezona 2025/26</span>
          <h1 className="font-display text-6xl md:text-8xl mt-4 mb-6">Kalendar <span className="text-gradient-ice">događaja</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Pratite sve naše aktivnosti — od takmičenja do porodičnih druženja.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button key={c} onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider transition-all ${
                  filter === c ? "bg-accent text-accent-foreground" : "glass hover:bg-primary/20"
                }`}>{c}</button>
            ))}
          </div>

          <div className="space-y-3">
            {filtered.map((e, i) => (
              <article key={i}
                className="group grid md:grid-cols-[140px_1fr_auto] gap-6 items-center p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all">
                <div className="text-center md:border-r md:border-border md:pr-6">
                  <div className="font-display text-5xl text-gradient-ice leading-none">{e.d}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{e.m} {e.y}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-[10px] uppercase tracking-[0.2em] px-2 py-1 rounded-full bg-accent/20 text-accent">
                      <Tag className="w-3 h-3 inline mr-1" />{e.cat}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl group-hover:text-primary transition-colors">{e.t}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" />{e.l}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" />{e.time}</span>
                  </div>
                </div>
                <button className="px-5 py-2 rounded-full border border-primary/40 hover:bg-primary hover:text-primary-foreground transition-all uppercase text-xs tracking-wider">
                  Detalji
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
