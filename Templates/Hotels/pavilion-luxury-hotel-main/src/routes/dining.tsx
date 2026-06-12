import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import diningImg from "@/assets/dining.jpg";
import lobbyImg from "@/assets/lobby.jpg";
import poolImg from "@/assets/pool.jpg";

export const Route = createFileRoute("/dining")({
  head: () => ({
    meta: [
      { title: "Dining — The Pavilion · Michelin-Starred Cuisine" },
      { name: "description", content: "Three distinct restaurants, one Michelin star. Chef Lorenzo Marchetti reads the seasons through coastal harvest and hearth fire." },
      { property: "og:title", content: "Dining — The Pavilion" },
      { property: "og:description", content: "Three distinct restaurants, one Michelin star." },
      { property: "og:image", content: diningImg },
    ],
  }),
  component: DiningPage,
});

const venues = [
  {
    name: "Marea",
    style: "Michelin-Starred · Modern Mediterranean",
    hours: "Dinner · 19:00 — 23:00",
    chef: "Chef Lorenzo Marchetti",
    desc: "An eight-course tasting menu that reads the coast like a season — wild fennel, line-caught branzino, slow-rendered lamb. The cellar holds two thousand labels.",
    img: diningImg,
  },
  {
    name: "Cortile",
    style: "Garden Trattoria · Wood-Fired Hearth",
    hours: "All day · 07:00 — 23:00",
    chef: "Chef Anna Vukčević",
    desc: "An open courtyard beneath the cypress with a wood-fired hearth at its heart. Breakfast pastries, midday salads of garden vegetables, late-night pasta cooked to order.",
    img: lobbyImg,
  },
  {
    name: "Salon Noir",
    style: "Late-Night Bar · Curated Spirits & Jazz",
    hours: "Evenings · 18:00 — late",
    chef: "Head Sommelier · Marko Stojanović",
    desc: "A dim, mahogany-clad bar with a vinyl listening collection and a curated library of rare spirits. Cocktails composed at the bar; live jazz on Thursdays.",
    img: poolImg,
  },
];

function DiningPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <PageHero
        eyebrow="Culinary"
        title="A table set"
        italic="in candlelight."
        subtitle="One Michelin star. Three distinct kitchens. A single hand."
        image={diningImg}
        height="tall"
      />

      <section className="py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-[1400px] space-y-32">
          {venues.map((v, i) => (
            <article key={v.name} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="aspect-[4/5] overflow-hidden">
                <img src={v.img} alt={v.name} loading="lazy" width={1200} height={1500} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="eyebrow mb-4">{v.style}</p>
                <h2 className="font-display text-5xl md:text-6xl mb-6">{v.name}</h2>
                <div className="gold-rule w-16 mb-6" />
                <p className="text-muted-foreground font-light leading-relaxed text-lg mb-8">{v.desc}</p>
                <dl className="space-y-3 mb-10 text-sm">
                  <div className="flex gap-6">
                    <dt className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground w-24">Hours</dt>
                    <dd className="font-light">{v.hours}</dd>
                  </div>
                  <div className="flex gap-6">
                    <dt className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground w-24">Kitchen</dt>
                    <dd className="font-light">{v.chef}</dd>
                  </div>
                </dl>
                <Link to="/contact" className="inline-block px-6 py-3 border hairline text-[11px] tracking-[0.32em] uppercase text-gold hover:bg-gold hover:text-primary-foreground transition-colors">
                  Reserve a Table
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 border-t hairline text-center">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-6">✦ Private Dining ✦</p>
          <h2 className="font-display text-4xl md:text-5xl mb-8">
            For <span className="italic text-gold-soft">private occasions.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
            The wine cellar, the rooftop, the cypress courtyard — three private rooms for parties of six to forty. Composed with the chef in advance, served only for you.
          </p>
          <Link to="/contact" className="px-8 py-4 bg-gold text-primary-foreground text-[11px] tracking-[0.32em] uppercase hover:bg-gold-soft transition-colors inline-block">
            Enquire
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
