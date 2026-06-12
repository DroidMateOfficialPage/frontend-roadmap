import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SUITES } from "@/data/suites";
import heroImg from "@/assets/hero.jpg";
import diningImg from "@/assets/dining.jpg";
import spaImg from "@/assets/spa.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Pavilion — A Five-Star Sanctuary on the Adriatic" },
      { name: "description", content: "An intimate luxury hotel where every stay is composed as a private story. Suites, fine dining, spa & wellness on the Adriatic coast." },
      { property: "og:title", content: "The Pavilion — A Five-Star Sanctuary" },
      { property: "og:description", content: "An intimate luxury hotel where every stay is composed as a private story." },
    ],
  }),
  component: Index,
});

const press = [
  "Condé Nast Traveler — Gold List 2025",
  "Travel + Leisure — World's Best",
  "Michelin Guide — One Star",
  "Forbes — Five Star Award",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <img src={heroImg} alt="The Pavilion exterior at golden hour" className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 animate-fade-up">
          <p className="eyebrow mb-8">✦ Established MMXXIV · Adriatic Coast ✦</p>
          <h1 className="font-display text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.95] tracking-tight max-w-5xl">
            The <span className="italic text-gold-soft">Pavilion</span>
          </h1>
          <div className="gold-rule w-32 my-10" />
          <p className="font-display italic text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            A sanctuary where every stay is composed —<br />
            quietly, and only for you.
          </p>
          <div className="mt-14 flex flex-wrap gap-4 justify-center">
            <Link to="/reserve" className="px-8 py-4 bg-gold text-primary-foreground text-[11px] tracking-[0.32em] uppercase hover:bg-gold-soft transition-colors">
              Reserve a Stay
            </Link>
            <Link to="/suites" className="px-8 py-4 border hairline text-[11px] tracking-[0.32em] uppercase text-foreground hover:border-gold hover:text-gold transition-colors">
              Discover the Suites
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 text-[10px] tracking-[0.4em] uppercase">Scroll</div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-32 px-6 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-8">✦ Philosophy ✦</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.1] mb-10">
            Hospitality is not a service.<br />
            <span className="italic text-gold-soft">It is a quiet conversation.</span>
          </h2>
          <div className="gold-rule w-24 mx-auto mb-10" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto">
            For nearly a century, The Pavilion has welcomed travellers seeking more than a room.
            We orchestrate the dialogue between your intent and our intimate knowledge of place —
            so each stay becomes a chapter written together, night by night.
          </p>
        </div>
      </section>

      {/* STAT BAND */}
      <section className="border-y hairline">
        <div className="mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-4 divide-x hairline">
          {[
            { k: "42", l: "Suites & Residences" },
            { k: "3", l: "Restaurants & Bars" },
            { k: "1,800 m²", l: "Spa & Hammam" },
            { k: "24h", l: "Private Concierge" },
          ].map((s) => (
            <div key={s.l} className="py-14 px-6 text-center">
              <div className="font-display text-4xl md:text-5xl text-gold mb-3">{s.k}</div>
              <div className="text-[10px] tracking-[0.32em] uppercase text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED SUITES */}
      <section className="py-32 px-6 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
            <div>
              <p className="eyebrow mb-6">✦ Accommodations ✦</p>
              <h2 className="font-display text-5xl md:text-7xl leading-[1]">
                The <span className="italic text-gold-soft">Suites</span>
              </h2>
            </div>
            <Link to="/suites" className="text-[11px] tracking-[0.28em] uppercase text-gold border-b hairline pb-1 self-start md:self-end">View all residences →</Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {SUITES.slice(0, 3).map((s) => (
              <Link key={s.slug} to="/suites/$slug" params={{ slug: s.slug }} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden mb-6">
                  <img src={s.img} alt={s.name} loading="lazy" width={800} height={1000} className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  <div className="absolute top-5 right-5 text-[10px] tracking-[0.32em] uppercase text-gold bg-background/60 backdrop-blur px-3 py-2">{s.size}</div>
                </div>
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-display text-3xl group-hover:text-gold transition-colors">{s.name}</h3>
                  <div className="text-[11px] tracking-[0.28em] uppercase text-gold">from €{s.rate}</div>
                </div>
                <p className="text-muted-foreground font-light leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DINING SPLIT */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="eyebrow mb-6">✦ Dining ✦</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.05] mb-8">
              A table set<br />
              <span className="italic text-gold-soft">in candlelight.</span>
            </h2>
            <div className="gold-rule w-20 mb-8" />
            <p className="text-muted-foreground font-light leading-relaxed text-lg mb-10">
              Three distinct restaurants, one Michelin star. Our cuisine reads the seasons through the hands of Chef Lorenzo Marchetti — coastal harvest, hearth fire, and a cellar of two thousand labels.
            </p>
            <Link to="/dining" className="inline-block px-8 py-4 border hairline text-[11px] tracking-[0.32em] uppercase text-gold hover:bg-gold hover:text-primary-foreground transition-colors">
              Discover Dining
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden">
            <img src={diningImg} alt="Marea dining room" loading="lazy" width={1200} height={1500} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SPA FULL BLEED */}
      <section className="relative h-[80vh] overflow-hidden">
        <img src={spaImg} alt="The hammam" loading="lazy" width={1920} height={1200} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/50" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">✦ Spa & Wellness ✦</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.05] mb-8">
              A <span className="italic text-gold-soft">ritual</span> of stillness.
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
              An 1,800 m² subterranean sanctuary — marble hammam, vitality pool, salt cave, and eight treatment suites drawing on Levantine and Adriatic traditions.
            </p>
            <Link to="/spa" className="px-8 py-4 bg-gold text-primary-foreground text-[11px] tracking-[0.32em] uppercase hover:bg-gold-soft transition-colors inline-block">
              Enter the Spa
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-32 px-6 lg:px-12 border-y hairline">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-10">✦ Guest Note ✦</p>
          <blockquote className="font-display italic text-3xl md:text-5xl leading-[1.25] text-foreground">
            "I have stayed in many fine hotels. The Pavilion is the only one that remembered how I take my coffee — and the silence I needed in the afternoon."
          </blockquote>
          <div className="gold-rule w-20 mx-auto my-10" />
          <div className="text-[11px] tracking-[0.32em] uppercase text-gold">Mme. Eléonore D. — Paris</div>
        </div>
      </section>

      {/* PRESS */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-[1400px] flex flex-wrap items-center justify-center gap-x-16 gap-y-6 text-[10px] tracking-[0.32em] uppercase text-muted-foreground">
          {press.map((p) => <span key={p}>{p}</span>)}
        </div>
      </section>

      <Footer />
    </div>
  );
}
