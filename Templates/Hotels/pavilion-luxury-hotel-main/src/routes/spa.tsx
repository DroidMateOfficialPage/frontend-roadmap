import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import spaImg from "@/assets/spa.jpg";
import bathImg from "@/assets/bath.jpg";

export const Route = createFileRoute("/spa")({
  head: () => ({
    meta: [
      { title: "Spa & Wellness — The Pavilion" },
      { name: "description", content: "An 1,800 m² subterranean sanctuary — marble hammam, vitality pool, salt cave, and eight treatment suites." },
      { property: "og:title", content: "Spa & Wellness — The Pavilion" },
      { property: "og:description", content: "A ritual of stillness on the Adriatic coast." },
      { property: "og:image", content: spaImg },
    ],
  }),
  component: SpaPage,
});

const rituals = [
  { d: "90 min", n: "Adriatic Salt Ritual", p: "€280", desc: "Coastal salt scrub, warm marble lounge, deep-tissue massage with native cypress oil." },
  { d: "120 min", n: "Hammam & Argan", p: "€340", desc: "Steam, black soap exfoliation, full-body argan massage, mint tea in the cooling room." },
  { d: "60 min", n: "The Sommelier's Massage", p: "€220", desc: "A four-hand massage choreographed to a personal playlist and a glass of vintage port." },
  { d: "150 min", n: "Two-Person Pavilion", p: "€620", desc: "Couples treatment in a private suite — bath ritual, side-by-side massage, candlelit dinner for two to follow." },
  { d: "45 min", n: "Visage · La Mer", p: "€190", desc: "A bespoke facial composed for your skin's response to travel and climate." },
  { d: "Full day", n: "Day of Stillness", p: "€780", desc: "Private use of a treatment suite, three rituals, lunch in the spa garden, no clocks." },
];

function SpaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <PageHero
        eyebrow="Spa & Wellness"
        title="A ritual"
        italic="of stillness."
        subtitle="1,800 m² beneath the cypress. Marble, candlelight, water, time."
        image={spaImg}
        height="tall"
      />

      <section className="py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-[1200px] grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="eyebrow mb-6">✦ The Sanctuary ✦</p>
            <h2 className="font-display text-4xl md:text-5xl mb-8 leading-[1.1]">
              Drawn from the<br />
              <span className="italic text-gold-soft">Adriatic and the Levant.</span>
            </h2>
            <div className="gold-rule w-16 mb-8" />
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
              The Pavilion Spa is a subterranean sanctuary of marble and water — a hammam, a vitality pool, a salt cave, and eight treatment suites, each one designed for a single guest at a time.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              Our rituals are composed in dialogue with Adriatic herbalists and Levantine bath masters. Products are formulated in small batches at the spa pharmacy, never sold elsewhere.
            </p>
          </div>
          <div className="aspect-[4/5] overflow-hidden">
            <img src={bathImg} alt="The marble bath" loading="lazy" width={1200} height={1500} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="border-y hairline py-16 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 text-center">
            {["Marble Hammam", "Vitality Pool", "Salt Cave", "Cold Plunge", "Eight Suites", "Spa Pharmacy", "Garden Lounge", "Tea Library"].map((f) => (
              <div key={f} className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">{f}</div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <p className="eyebrow mb-6">✦ Rituals & Treatments ✦</p>
            <h2 className="font-display text-4xl md:text-5xl">
              The <span className="italic text-gold-soft">menu.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {rituals.map((r) => (
              <div key={r.n} className="bg-background p-8 hover:bg-card transition-colors">
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-display text-2xl">{r.n}</h3>
                  <div className="text-gold text-[11px] tracking-[0.28em] uppercase">{r.p}</div>
                </div>
                <div className="text-[10px] tracking-[0.32em] uppercase text-muted-foreground mb-4">{r.d}</div>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/contact" className="px-8 py-4 bg-gold text-primary-foreground text-[11px] tracking-[0.32em] uppercase hover:bg-gold-soft transition-colors inline-block">
              Book a Treatment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
