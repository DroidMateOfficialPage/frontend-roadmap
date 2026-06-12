import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/o-nama")({
  head: () => ({
    meta: [
      { title: "O nama — Aura BiH" },
      { name: "description", content: "Aura BiH — kustoska agencija za luksuzne nekretnine u Bosni i Hercegovini. Diskrecija, profesionalizam i pravna sigurnost." },
    ],
  }),
  component: ONama,
});

function ONama() {
  return (
    <main>
      <section className="max-w-5xl mx-auto px-6 md:px-10 pt-32 pb-24">
        <p className="eyebrow text-gold mb-6">Studio osnovan 2014.</p>
        <h1 className="font-serif text-5xl md:text-7xl italic leading-[1.05] mb-12 text-balance">
          Diskrecija je naša prva valuta.
        </h1>
        <p className="text-xl leading-relaxed text-anthracite/80 font-light max-w-3xl">
          Aura BiH je kustoska agencija specijalizovana za promet najprestižnijih nekretnina i investicionih zemljišta na teritoriji Bosne i Hercegovine. Radimo sa biranim krugom klijenata — privatnim pojedincima, porodičnim uredima i institucionalnim investitorima — kojima je diskrecija jednako važna kao i sama transakcija.
        </p>
      </section>

      <section className="bg-anthracite text-white py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { n: "127", l: "Završenih transakcija" },
            { n: "€ 340M", l: "Volumen prometa" },
            { n: "1/1", l: "Vlasništvo na svakoj nekretnini" },
            { n: "12", l: "Godina iskustva" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-serif text-4xl md:text-5xl mb-3">{s.n}</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-10 py-24 space-y-16">
        <div>
          <p className="eyebrow text-gold mb-4">Pravna sigurnost</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Svaka nekretnina prolazi tripleksnu provjeru</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              { t: "Vlasništvo 1/1", d: "Provjera zemljišnoknjižnog uloška, eventualnih tereta i opterećenja." },
              { t: "Uknjiženost", d: "Sva imovina je upisana u zemljišnu knjigu i katastar." },
              { t: "Pravni status", d: "Svi planski dokumenti, dozvole i prenamjene su verifikovani od strane naših pravnih savjetnika." },
            ].map((s) => (
              <div key={s.t} className="border-t border-anthracite pt-5">
                <h3 className="font-serif text-xl mb-3">{s.t}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-soft py-24 px-6 md:px-10 border-y border-stone-line">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl italic mb-8">Kontaktirajte nas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-12">
            <div>
              <p className="eyebrow text-gold mb-3">Sarajevo</p>
              <p className="text-sm leading-relaxed">
                Fra Anđela Zvizdovića 1, UNITIC<br/>71000 Sarajevo<br/>+387 33 000 000
              </p>
            </div>
            <div>
              <p className="eyebrow text-gold mb-3">Banja Luka</p>
              <p className="text-sm leading-relaxed">
                Jevrejska BB<br/>78000 Banja Luka<br/>+387 51 000 000
              </p>
            </div>
          </div>
          <a
            href="mailto:info@aura-realestate.ba"
            className="inline-block mt-12 bg-anthracite text-white px-10 py-4 eyebrow-wide hover:bg-gold transition-colors"
          >
            info@aura-realestate.ba
          </a>
        </div>
      </section>
    </main>
  );
}
