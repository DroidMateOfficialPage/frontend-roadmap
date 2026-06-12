import seafood from "@/assets/dish-seafood.jpg";
import truffle from "@/assets/dish-truffle.jpg";
import wine from "@/assets/dish-wine.jpg";

const pillars = [
  {
    n: "I",
    img: seafood,
    title: "Kvarner Catch",
    text: "The freshest Adriatic fish, scampi, and shellfish, drizzled with premium local olive oil.",
  },
  {
    n: "II",
    img: truffle,
    title: "Terroir & Truffles",
    text: "Handcrafted pasta infused with black and white truffles, paired with premium cuts of meat.",
  },
  {
    n: "III",
    img: wine,
    title: "The Wine Cellar",
    text: "A curated collection balancing prestigious regional Malvazija and Teran with world-class international labels.",
  },
];

export function MenuPreview() {
  return (
    <section id="menu" className="relative bg-ocean py-28 text-ocean-foreground lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="eyebrow text-ocean-foreground/60">02 — The Menu</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
              Three pillars of our <em className="italic text-gold">cuisine</em>.
            </h2>
          </div>
          <p className="max-w-sm text-ocean-foreground/70">
            A seasonal tasting shaped by sea, soil, and the slow craft of Istrian tradition.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          {pillars.map((p, i) => (
            <article key={p.title} className="group flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className={`h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 ${
                    i === 1 ? "md:translate-y-12" : ""
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                <span className="absolute left-5 top-5 font-display text-lg italic text-gold">{p.n}</span>
              </div>
              <h3 className="mt-7 font-display text-3xl tracking-tight">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ocean-foreground/70">{p.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href="#menu"
            className="group inline-flex items-center gap-4 border-b border-gold/60 pb-3 text-xs uppercase tracking-[0.32em] text-gold transition hover:border-ivory hover:text-ivory"
          >
            View Full Menu
            <span className="transition-transform duration-500 group-hover:translate-x-2">⟶</span>
          </a>
        </div>
      </div>
    </section>
  );
}
