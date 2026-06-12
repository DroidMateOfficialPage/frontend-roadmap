import { createFileRoute, Link } from "@tanstack/react-router";
import { lands } from "@/lib/data";
import { ListingCard } from "@/components/site/ListingCard";

export const Route = createFileRoute("/za-investitore")({
  head: () => ({
    meta: [
      { title: "Za investitore — Aura BiH" },
      { name: "description", content: "Investicione prilike u BiH: zemljišta, hoteli i poslovni kompleksi za institucionalne investitore i developere." },
    ],
  }),
  component: ZaInvestitore,
});

function ZaInvestitore() {
  return (
    <main>
      <section className="bg-anthracite text-white py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="eyebrow-wide text-gold mb-6">Investicioni portfolio</p>
          <h1 className="font-serif text-5xl md:text-7xl italic leading-[1.05] mb-10 text-balance">
            Strateška zemljišta i projekti za institucionalne investitore
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl font-light">
            Ekskluzivan pristup zemljištima sa važećim dozvolama, industrijskim zonama i greenfield projektima širom Bosne i Hercegovine. Svaki projekat prolazi kroz potpunu pravnu, urbanističku i finansijsku provjeru prije uvrštavanja u ponudu.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { n: "01", t: "Provjera vlasništva", d: "Detaljna pravna due diligence — vlasništvo 1/1, ZK izvod, tereti, prostorni plan." },
          { n: "02", t: "Urbanistička analiza", d: "Dozvoljena spratnost, koeficijent zauzetosti, regulacioni plan, lokacijski uslovi." },
          { n: "03", t: "ROI projekcija", d: "Finansijski model sa konzervativnom i agresivnom procjenom povrata investicije." },
        ].map((s) => (
          <div key={s.n} className="border-t border-anthracite pt-6">
            <p className="font-serif text-3xl italic text-gold mb-6">{s.n}</p>
            <h3 className="font-serif text-2xl mb-3">{s.t}</h3>
            <p className="text-sm text-stone-500 leading-relaxed">{s.d}</p>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div className="mb-12 flex justify-between items-end">
          <h2 className="font-serif text-4xl">Aktivne prilike</h2>
          <Link
            to="/katalog"
            search={{ kat: "zemljista" }}
            className="eyebrow border-b border-anthracite pb-1 hover:text-gold hover:border-gold"
          >
            Sva zemljišta →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {lands.map((l) => (
            <ListingCard key={l.id} listing={l} />
          ))}
        </div>
      </section>

      <section className="bg-sand-soft py-24 px-6 md:px-10 border-t border-stone-line">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow text-gold mb-6">Privatni mandat</p>
          <h2 className="font-serif text-4xl md:text-5xl italic mb-8 leading-tight">
            Tražite specifičnu lokaciju ili projekat?
          </h2>
          <p className="text-stone-500 mb-10 leading-relaxed">
            Naš Investment Advisory tim radi sa biranim brojem klijenata na privatnoj akviziciji nekretnina koje nikada ne dolaze na otvoreno tržište.
          </p>
          <a
            href="mailto:investments@aura-realestate.ba"
            className="inline-block bg-anthracite text-white px-10 py-4 eyebrow-wide hover:bg-gold transition-colors"
          >
            Zakažite konsultacije
          </a>
        </div>
      </section>
    </main>
  );
}
