import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { getSuite, SUITES } from "@/data/suites";

export const Route = createFileRoute("/suites/$slug")({
  loader: ({ params }) => {
    const suite = getSuite(params.slug);
    if (!suite) throw notFound();
    return { suite };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.suite.name} — The Pavilion` },
          { name: "description", content: loaderData.suite.longDesc },
          { property: "og:title", content: `${loaderData.suite.name} — The Pavilion` },
          { property: "og:description", content: loaderData.suite.tagline },
          { property: "og:image", content: loaderData.suite.img },
        ]
      : [],
  }),
  component: SuiteDetail,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="font-display text-6xl text-gold mb-4">Not found</h1>
        <Link to="/suites" className="text-[11px] tracking-[0.32em] uppercase text-gold">← All suites</Link>
      </div>
    </div>
  ),
});

function SuiteDetail() {
  const { suite } = Route.useLoaderData();
  const others = SUITES.filter((s) => s.slug !== suite.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero image */}
      <section className="relative h-[90svh] w-full overflow-hidden">
        <img src={suite.img} alt={suite.name} className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background" />
        <div className="relative h-full flex flex-col items-center justify-end text-center px-6 pb-20 animate-fade-up">
          <p className="eyebrow mb-6">✦ Residence ✦</p>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[1] mb-6">{suite.name}</h1>
          <p className="font-display italic text-xl md:text-2xl text-gold-soft">{suite.tagline}</p>
        </div>
      </section>

      {/* Spec band */}
      <section className="border-y hairline">
        <div className="mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-4 divide-x hairline">
          {[
            { k: suite.size, l: "Size" },
            { k: suite.occupancy, l: "Occupancy" },
            { k: suite.view, l: "View" },
            { k: `€${suite.rate}`, l: "From / night" },
          ].map((s) => (
            <div key={s.l} className="py-10 px-6 text-center">
              <div className="font-display text-2xl md:text-3xl text-gold mb-2">{s.k}</div>
              <div className="text-[10px] tracking-[0.32em] uppercase text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Description + amenities */}
      <section className="py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-[1200px] grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3">
            <p className="eyebrow mb-6">✦ The Residence ✦</p>
            <h2 className="font-display text-4xl md:text-5xl mb-8 leading-[1.1]">
              Composed for <span className="italic text-gold-soft">stillness.</span>
            </h2>
            <div className="gold-rule w-16 mb-8" />
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">{suite.longDesc}</p>
            <p className="text-muted-foreground font-light leading-relaxed">
              Each residence at The Pavilion is hand-finished and individually composed. Materials are sourced regionally; the linens are Italian, the marble Adriatic, the cypress local. No two stays are alike.
            </p>
          </div>
          <aside className="lg:col-span-2">
            <div className="border hairline p-8 bg-card">
              <div className="text-[10px] tracking-[0.32em] uppercase text-gold mb-6">In the Suite</div>
              <ul className="space-y-4">
                {suite.amenities.map((a: string) => (
                  <li key={a} className="flex gap-3 text-sm font-light leading-relaxed">
                    <span className="text-gold mt-1">✦</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
              <div className="gold-rule w-full my-8 opacity-50" />
              <Link to="/reserve" search={{ suite: suite.slug } as never} className="block text-center px-6 py-4 bg-gold text-primary-foreground text-[11px] tracking-[0.32em] uppercase hover:bg-gold-soft transition-colors">
                Reserve this Suite
              </Link>
              <p className="text-xs text-muted-foreground font-light mt-4 text-center">A member of our team will confirm within four hours.</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="mx-auto max-w-[1400px] grid md:grid-cols-3 gap-4">
          {suite.gallery.map((src: string, i: number) => (
            <div key={i} className={`relative overflow-hidden ${i === 0 ? "md:col-span-2 aspect-[16/10]" : "aspect-[4/5]"}`}>
              <img src={src} alt="" loading="lazy" width={1200} height={900} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Other residences */}
      <section className="py-24 px-6 lg:px-12 border-t hairline">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <p className="eyebrow mb-6">✦ Also Available ✦</p>
            <h2 className="font-display text-4xl md:text-5xl">Other <span className="italic text-gold-soft">residences</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {others.map((o) => (
              <Link key={o.slug} to="/suites/$slug" params={{ slug: o.slug }} className="group block">
                <div className="aspect-[4/5] overflow-hidden mb-4">
                  <img src={o.img} alt={o.name} loading="lazy" width={800} height={1000} className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
                </div>
              <h3 className="font-display text-2xl group-hover:text-gold transition-colors">{o.name}</h3>
                <p className="text-[11px] tracking-[0.28em] uppercase text-gold mt-2">from €{o.rate}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
