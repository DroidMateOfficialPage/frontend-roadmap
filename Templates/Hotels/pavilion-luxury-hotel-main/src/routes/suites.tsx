import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { SUITES } from "@/data/suites";
import lobbyImg from "@/assets/lobby.jpg";

export const Route = createFileRoute("/suites")({
  head: () => ({
    meta: [
      { title: "Suites & Residences — The Pavilion" },
      { name: "description", content: "Forty-two residences on the Adriatic, each composed by hand. From Deluxe Sea View to the Royal Pavilion signature suite." },
      { property: "og:title", content: "Suites & Residences — The Pavilion" },
      { property: "og:description", content: "Forty-two residences on the Adriatic, each composed by hand." },
    ],
  }),
  component: SuitesPage,
});

function SuitesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <PageHero
        eyebrow="Accommodations"
        title="The"
        italic="Suites"
        subtitle="Forty-two residences. No two alike. All open onto sea, garden, or sky."
        image={lobbyImg}
      />

      <section className="py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-[1400px] space-y-24">
          {SUITES.map((s, i) => (
            <article key={s.slug} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.name} loading="lazy" width={1200} height={900} className="w-full h-full object-cover" />
                <div className="absolute top-5 left-5 text-[10px] tracking-[0.32em] uppercase text-gold bg-background/60 backdrop-blur px-3 py-2">{s.size}</div>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.32em] uppercase text-gold mb-4">Residence №{String(i + 1).padStart(2, "0")}</div>
                <h2 className="font-display text-4xl md:text-5xl mb-4">{s.name}</h2>
                <p className="font-display italic text-xl text-gold-soft mb-6">{s.tagline}</p>
                <div className="gold-rule w-16 mb-6" />
                <p className="text-muted-foreground font-light leading-relaxed mb-8">{s.longDesc}</p>
                <dl className="grid grid-cols-2 gap-y-4 text-sm mb-10">
                  <dt className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground">Bed</dt>
                  <dd className="font-light">{s.bed}</dd>
                  <dt className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground">View</dt>
                  <dd className="font-light">{s.view}</dd>
                  <dt className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground">Occupancy</dt>
                  <dd className="font-light">{s.occupancy}</dd>
                  <dt className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground">From</dt>
                  <dd className="text-gold">€{s.rate} / night</dd>
                </dl>
                <div className="flex gap-4">
                  <Link to="/suites/$slug" params={{ slug: s.slug }} className="px-6 py-3 border hairline text-[11px] tracking-[0.32em] uppercase text-gold hover:bg-gold hover:text-primary-foreground transition-colors">
                    View Suite
                  </Link>
                  <Link to="/reserve" search={{ suite: s.slug } as never} className="px-6 py-3 bg-gold text-primary-foreground text-[11px] tracking-[0.32em] uppercase hover:bg-gold-soft transition-colors">
                    Reserve
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
