import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import poolImg from "@/assets/pool.jpg";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Curated Experiences — The Pavilion" },
      { name: "description", content: "Private yacht sunsets, cellar tastings, truffle forages, helicopter transfers. Each experience composed in advance, for you." },
      { property: "og:title", content: "Curated Experiences — The Pavilion" },
      { property: "og:description", content: "Composed quietly, in advance. Only for you." },
      { property: "og:image", content: poolImg },
    ],
  }),
  component: ExperiencesPage,
});

const experiences = [
  { t: "Private Yacht Sunset", d: "A chartered evening along the coastline with a chef-prepared tasting menu aboard. Three hours, two guests, one unforgettable horizon.", p: "from €2,400" },
  { t: "Cellar Tasting", d: "A guided journey through native varietals with our head sommelier in the vaulted wine cellar. Eight wines, paired bites, two hours.", p: "from €280 / person" },
  { t: "Truffle Forage", d: "Dawn excursion into the inland forests with master trifulau and trained Lagotto. Lunch with your harvest follows at a hilltop konoba.", p: "from €620 / person" },
  { t: "Bespoke Concierge", d: "Helicopter transfers, after-hours museum access, a Maserati on the morning of your departure. Composed quietly, in advance.", p: "by request" },
  { t: "Olive Harvest", d: "Walk the centuries-old grove with our gardener, press your own oil at the family mill, and label a bottle to take home.", p: "from €340 / person" },
  { t: "Adriatic Sailing", d: "A two-day sail to the outer islands aboard a restored 1962 wooden ketch, captained, provisioned, and quiet.", p: "from €6,800" },
];

function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <PageHero
        eyebrow="Curated Experiences"
        title="Composed for"
        italic="you."
        subtitle="From private yachts to dawn forages — every experience is arranged in advance, for one party only."
        image={poolImg}
        height="tall"
      />

      <section className="py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {experiences.map((e, i) => (
              <article key={e.t} className="bg-background p-10 md:p-14 hover:bg-card transition-colors group">
                <div className="flex items-baseline justify-between mb-6">
                  <div className="text-gold font-display text-2xl">{String(i + 1).padStart(2, "0")}</div>
                  <div className="text-[11px] tracking-[0.28em] uppercase text-gold">{e.p}</div>
                </div>
                <h3 className="font-display text-3xl mb-5 group-hover:text-gold transition-colors">{e.t}</h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-8">{e.d}</p>
                <Link to="/contact" className="text-[11px] tracking-[0.28em] uppercase text-gold border-b hairline pb-1">
                  Enquire →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 border-t hairline">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-6">✦ Your Concierge ✦</p>
          <h2 className="font-display text-4xl md:text-5xl mb-8">
            Anything,<br /><span className="italic text-gold-soft">composed in advance.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
            If you do not see what you are looking for, ask. Our concierge composes journeys with quiet precision — for the request you have, and the one you have not yet thought of.
          </p>
          <Link to="/contact" className="px-8 py-4 bg-gold text-primary-foreground text-[11px] tracking-[0.32em] uppercase hover:bg-gold-soft transition-colors inline-block">
            Write to the Concierge
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
