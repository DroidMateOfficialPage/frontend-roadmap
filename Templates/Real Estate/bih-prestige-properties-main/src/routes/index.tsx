import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-villa.jpg";
import { properties, lands } from "@/lib/data";
import { ListingCard } from "@/components/site/ListingCard";
import { HeroSearch } from "@/components/site/HeroSearch";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aura BiH — Ekskluzivne nekretnine u Bosni i Hercegovini" },
      { name: "description", content: "Kustoska zbirka luksuznih nekretnina, vila i investicionih zemljišta u BiH — Sarajevo, Banja Luka, Jahorina, Trebinje, Neum." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = properties.filter((p) => p.featured).slice(0, 3);
  const focus = lands.find((l) => l.slug === "posjed-una-bihac");

  return (
    <main>
      {/* Hero */}
      <header className="relative h-[88vh] min-h-[640px] flex items-center justify-center overflow-hidden -mt-[81px] pt-[81px]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Luksuzna vila u Poljinama, Sarajevo"
            className="w-full h-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-anthracite/40" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center text-white px-6 max-w-5xl"
        >
          <p className="eyebrow-wide text-white/70 mb-6">Ekskluzivni portfolio · BiH</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl italic mb-12 leading-[1.05] text-balance">
            Najprestižnije adrese<br/>u Bosni i Hercegovini
          </h1>
          <HeroSearch />
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/70">
          <span className="text-[10px] uppercase tracking-[0.4em]">Istražite</span>
          <div className="w-px h-12 bg-white/30" />
        </div>
      </header>

      {/* Collection */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-32">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <p className="eyebrow text-gold mb-4">Kustoski izbor</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-4 leading-tight">
              Zbirka unikatnih nekretnina
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ručno birani objekti koji redefinišu luksuz na prostorima Bosne i Hercegovine — od Sarajevskih visova do hercegovačkih vinograda.
            </p>
          </div>
          <Link
            to="/katalog"
            search={{ kat: "nekretnine" }}
            className="eyebrow border-b border-anthracite pb-1 self-start md:self-end hover:text-gold hover:border-gold transition-colors"
          >
            Pogledaj sve nekretnine →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {featured.map((p) => (
            <ListingCard key={p.id} listing={p} />
          ))}
        </div>
      </section>

      {/* Focus of the month — investment land */}
      {focus && (
        <section className="bg-anthracite text-white py-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8">
              <p className="eyebrow-wide text-gold">Fokus mjeseca</p>
              <h2 className="font-serif text-4xl md:text-5xl italic leading-tight">
                {focus.title} — privatni posjed na obali Une
              </h2>
              <p className="text-white/60 leading-relaxed font-light text-lg max-w-xl">
                {focus.description.about}
              </p>
              <div className="grid grid-cols-2 gap-8 border-y border-white/10 py-10">
                <div>
                  <div className="font-serif text-3xl mb-1">{focus.area.toLocaleString("sr-Latn-BA")} m²</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Ukupna površina</div>
                </div>
                <div>
                  <div className="font-serif text-3xl mb-1">{focus.legal.vlasnistvo}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Vlasništvo</div>
                </div>
                <div>
                  <div className="font-serif text-3xl mb-1">{focus.allowedFloors}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Dozvoljena gradnja</div>
                </div>
                <div>
                  <div className="font-serif text-3xl mb-1">12%</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Potencijalni ROI</div>
                </div>
              </div>
              <Link
                to="/katalog/$slug"
                params={{ slug: focus.slug }}
                className="inline-block border-b border-gold text-gold py-2 eyebrow-wide hover:text-white hover:border-white transition-all"
              >
                Pogledajte digitalnu brošuru →
              </Link>
            </div>
            <div className="relative">
              <img
                src={focus.images[0]}
                alt={focus.title}
                className="aspect-[3/2] w-full object-cover shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-8 -left-8 bg-gold p-10 hidden md:block">
                <p className="font-serif text-2xl italic text-white">€ 1.200.000</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Investments band */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-32">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="eyebrow text-gold mb-4">Investicione prilike u BiH</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Zemljišta za developere i institucionalne investitore
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lands.map((l) => (
            <ListingCard key={l.id} listing={l} />
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-sand-soft py-32 px-6 border-y border-stone-line">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-10">
            <div className="w-px h-16 bg-gold" />
          </div>
          <blockquote className="font-serif text-3xl md:text-4xl italic leading-snug text-balance mb-8">
            "Aura tim mi nije samo prodao kuću — pronašli su rezidenciju koja odražava ko sam. Diskrecija i posvećenost detaljima su besprijekorni."
          </blockquote>
          <cite className="eyebrow text-stone-400 not-italic">— Edin K., klijent · Sarajevo</cite>
        </div>
      </section>
    </main>
  );
}
