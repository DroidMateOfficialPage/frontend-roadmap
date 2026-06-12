import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-vineyard.jpg";
import wineReserve from "@/assets/wine-reserve.jpg";
import wineWhite from "@/assets/wine-white.jpg";
import wineRose from "@/assets/wine-rose.jpg";
import cellarImg from "@/assets/cellar.jpg";
import tastingImg from "@/assets/tasting.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vinarija Crveni Breg — Vino, priča i tišina vinograda" },
      { name: "description", content: "Porodična vinarija sa stoljetnom tradicijom. Otkrijte naša vina, posjetite podrum i rezervišite romantičnu turu kroz vinograde." },
      { property: "og:title", content: "Vinarija Crveni Breg" },
      { property: "og:description", content: "Vino, priča i tišina vinograda. Rezervišite turu." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const wines = [
  {
    name: "Crveni Breg Reserve",
    type: "Cabernet Sauvignon",
    year: "2018",
    notes: "Tamno voće, duvan, ljubičica. Pet godina u francuskom hrastu.",
    medal: "Zlatna medalja · Decanter 2023",
    img: wineReserve,
  },
  {
    name: "Bjelina Selection",
    type: "Chardonnay Barrique",
    year: "2021",
    notes: "Maslac, vanila, pečena jabuka. Otvorena, ali suzdržana.",
    medal: "92 boda · Wine Spectator",
    img: wineWhite,
  },
  {
    name: "Zora",
    type: "Rosé d'Été",
    year: "2023",
    notes: "Jagoda, ružina latica, mineralna svežina. Vino za sutone.",
    medal: "Limitirana berba · 4.200 boca",
    img: wineRose,
  },
];

const tours = [
  {
    title: "Šetnja vinogradom",
    duration: "90 min",
    price: "€25",
    desc: "Lagana šetnja kroz redove vinove loze sa pričom o terroir-u i berbi.",
  },
  {
    title: "Degustacija u podrumu",
    duration: "2 h",
    price: "€55",
    desc: "Pet vina uz domaće sireve, suhomesnate proizvode i kruh iz krušne peći.",
  },
  {
    title: "Romantična večera među lozama",
    duration: "3 h",
    price: "€140",
    desc: "Četvoroslijedni meni pri svjetlosti svijeća, među redovima vinograda.",
  },
];

function Index() {
  const [booked, setBooked] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-50 px-6 md:px-16 py-8 flex items-center justify-between">
        <a href="#" className="font-serif text-xl tracking-wider text-cream">
          Crveni <span className="text-gold italic">Breg</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.25em] text-cream/80">
          <a href="#prica" className="hover:text-gold transition">Priča</a>
          <a href="#vina" className="hover:text-gold transition">Vina</a>
          <a href="#podrum" className="hover:text-gold transition">Podrum</a>
          <a href="#ture" className="hover:text-gold transition">Ture</a>
          <a href="#posjeta" className="hover:text-gold transition">Posjeta</a>
        </nav>
        <a href="#posjeta" className="hidden md:inline-block btn-outline">Rezerviši</a>
      </header>

      {/* HERO */}
      <section className="relative h-screen min-h-[720px] w-full flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Vinograd u zlatnim časovima"
            width={1920}
            height={1080}
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 px-6 md:px-16 pb-24 md:pb-32 max-w-5xl animate-fade-up">
          <span className="kicker mb-6 block">Porodična vinarija · od 1897.</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-cream mb-8">
            Vino koje pamti<br />
            <span className="italic text-gold">svaki zalazak</span> sunca.
          </h1>
          <p className="max-w-xl text-base md:text-lg text-cream/80 font-light leading-relaxed mb-10">
            Sto dvadeset i sedam berbi, jedan brijeg, tri generacije ruku.
            Otkrijte vina rođena tamo gdje magla susreće lozu.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#vina" className="btn-gold btn-gold-hover">Naša vina</a>
            <a href="#posjeta" className="btn-outline">Rezerviši turu</a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/50 text-[10px] tracking-[0.4em] uppercase">
          ↓ Pomjeri se
        </div>
      </section>

      {/* STORY */}
      <section id="prica" className="py-32 md:py-44 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          <div className="md:col-span-5">
            <span className="kicker mb-6 block">Naša priča</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-8">
              Ono što loza šapuće, mi zapisujemo u <span className="italic text-gold">boci</span>.
            </h2>
            <span className="gold-divider mb-8" />
          </div>
          <div className="md:col-span-7 space-y-6 text-cream/75 leading-relaxed text-lg">
            <p>
              Davne 1897. moj pradjed Ilija posadio je prvi red loze na južnoj
              padini Crvenog Brega. Nije znao da pravi vino — znao je da pravi
              uspomenu koja će putovati kroz vrijeme.
            </p>
            <p>
              Danas, gotovo stoljeće i četvrt kasnije, mi nastavljamo taj razgovor.
              Bez kompromisa. Bez žurbe. Sa istom strašću sa kojom je on tog ljutog
              proljeća lopatom razdvojio kamenu zemlju.
            </p>
            <p className="font-serif italic text-gold text-xl">
              — Marko Petrović, treća generacija vinara
            </p>
          </div>
        </div>
      </section>

      {/* WINES */}
      <section id="vina" className="py-32 md:py-44 px-6 md:px-16 bg-wine/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="kicker mb-6 block">Selekcija kuće</span>
            <h2 className="font-serif text-4xl md:text-6xl text-cream mb-4">
              Tri vina, <span className="italic text-gold">tri sezone duše</span>
            </h2>
            <span className="gold-divider" />
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-14">
            {wines.map((w) => (
              <article
                key={w.name}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden mb-8 bg-card">
                  <img
                    src={w.img}
                    alt={w.name}
                    loading="lazy"
                    width={900}
                    height={1200}
                    className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
                </div>
                <span className="kicker mb-3">{w.year} · {w.type}</span>
                <h3 className="font-serif text-3xl text-cream mb-4">{w.name}</h3>
                <p className="text-cream/70 text-sm leading-relaxed mb-5 max-w-xs">
                  {w.notes}
                </p>
                <p className="text-gold text-xs uppercase tracking-[0.2em]">
                  {w.medal}
                </p>
              </article>
            ))}
          </div>

          <div className="text-center mt-20">
            <a href="#posjeta" className="btn-outline">Cijeli katalog</a>
          </div>
        </div>
      </section>

      {/* CELLAR */}
      <section id="podrum" className="relative py-32 md:py-44 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden order-2 md:order-1">
            <img
              src={cellarImg}
              alt="Podrum sa hrastovim buradima"
              loading="lazy"
              width={1400}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </div>
          <div className="order-1 md:order-2">
            <span className="kicker mb-6 block">Podrum iz 1923.</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-8">
              Ispod brijega, gdje <span className="italic text-gold">vrijeme spava</span>.
            </h2>
            <p className="text-cream/75 leading-relaxed text-lg mb-6">
              Devet metara ispod površine, u podrumu zidanom od kamena iz
              obližnje rijeke, naša vina odmaraju u 64 hrastova bureta.
              Temperatura ovdje ne mijenja se već 100 godina.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              <Stat n="64" l="Burića" />
              <Stat n="9 m" l="Dubina" />
              <Stat n="127" l="Berbi" />
            </div>
          </div>
        </div>
      </section>

      {/* TOURS */}
      <section id="ture" className="py-32 md:py-44 px-6 md:px-16 relative">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${tastingImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-background/70" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="kicker mb-6 block">Iskustva</span>
            <h2 className="font-serif text-4xl md:text-6xl text-cream mb-4">
              Posjetite nas <span className="italic text-gold">na brijegu</span>
            </h2>
            <span className="gold-divider" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tours.map((t, i) => (
              <article
                key={t.title}
                className="group relative p-10 bg-card/80 backdrop-blur border border-border hover:border-gold/60 transition-all duration-500"
              >
                <div className="text-gold/40 font-serif text-6xl mb-6">
                  0{i + 1}
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-cream mb-4">
                  {t.title}
                </h3>
                <p className="text-cream/70 text-sm leading-relaxed mb-8">
                  {t.desc}
                </p>
                <div className="flex items-end justify-between pt-6 border-t border-border">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-cream/50 mb-1">Trajanje</p>
                    <p className="text-cream font-serif text-lg">{t.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-cream/50 mb-1">Od osobe</p>
                    <p className="text-gold font-serif text-2xl">{t.price}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATION */}
      <section id="posjeta" className="py-32 md:py-44 px-6 md:px-16 bg-wine/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="kicker mb-6 block">Rezervacija</span>
            <h2 className="font-serif text-4xl md:text-6xl text-cream mb-6">
              Sačuvajte svoje <span className="italic text-gold">veče</span>
            </h2>
            <span className="gold-divider" />
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            {/* LEFT — image + practical info */}
            <aside className="lg:col-span-5 flex flex-col gap-8">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={tastingImg}
                  alt="Sto pripremljen za degustaciju"
                  loading="lazy"
                  width={1400}
                  height={1000}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-background via-background/70 to-transparent">
                  <p className="font-serif italic text-cream text-lg leading-relaxed">
                    „Najljepše veče našeg medenog mjeseca. Marko je nazdravljao
                    s nama kao da smo porodica."
                  </p>
                  <p className="text-gold text-[10px] uppercase tracking-[0.3em] mt-3">
                    — Ana &amp; Stefan, Beograd
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-px bg-border">
                <InfoCell label="Adresa" value="Crveni Breg bb" sub="71000, BiH" />
                <InfoCell label="Otvoreno" value="10h — 20h" sub="Svaki dan" />
                <InfoCell label="Telefon" value="+387 33 123 456" sub="Pozovite nas" />
                <InfoCell label="E-mail" value="dobrodosli@" sub="crvenibreg.ba" />
              </div>

              <div className="border border-gold/30 p-6 bg-card/40">
                <p className="kicker mb-4 text-xs">Uključeno u svaku posjetu</p>
                <ul className="space-y-2 text-cream/75 text-sm">
                  <li className="flex gap-3"><span className="text-gold">✦</span> Domaćin iz porodice Petrović</li>
                  <li className="flex gap-3"><span className="text-gold">✦</span> Šetnja vinogradom i podrumom</li>
                  <li className="flex gap-3"><span className="text-gold">✦</span> Mali tanjir lokalnih delicija</li>
                  <li className="flex gap-3"><span className="text-gold">✦</span> Suvenir — staklena čaša s grbom kuće</li>
                </ul>
              </div>
            </aside>

            {/* RIGHT — form */}
            <div className="lg:col-span-7 bg-card/60 backdrop-blur border border-border p-8 md:p-12">
              <p className="text-cream/70 mb-10 leading-relaxed">
                Broj mjesta je ograničen. Javite nam kada dolazite — pripremićemo
                stol, vino i tišinu vinograda samo za vas.
              </p>

              {booked ? (
                <div className="border border-gold/60 p-12 bg-background/40 text-center">
                  <p className="font-serif text-3xl text-gold mb-3">Hvala vam.</p>
                  <p className="text-cream/70">
                    Javićemo se u roku od 24 sata da potvrdimo vašu rezervaciju.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setBooked(true); }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
                >
                  <Field label="Ime i prezime" type="text" required />
                  <Field label="E-mail" type="email" required />
                  <Field label="Datum posjete" type="date" required />
                  <Field label="Broj osoba" type="number" required min={1} max={20} defaultValue={2} />
                  <div className="md:col-span-2">
                    <label className="block text-[10px] uppercase tracking-[0.3em] text-cream/60 mb-2">
                      Vrsta ture
                    </label>
                    <select className="w-full bg-transparent border-b border-border focus:border-gold focus:outline-none py-3 text-cream font-light">
                      {tours.map(t => <option key={t.title} className="bg-card">{t.title}</option>)}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[10px] uppercase tracking-[0.3em] text-cream/60 mb-2">
                      Poruka (opciono)
                    </label>
                    <textarea
                      rows={3}
                      className="w-full bg-transparent border-b border-border focus:border-gold focus:outline-none py-3 text-cream font-light resize-none"
                      placeholder="Posebne želje, godišnjica, alergije..."
                    />
                  </div>
                  <div className="md:col-span-2 mt-6">
                    <button type="submit" className="btn-gold btn-gold-hover w-full md:w-auto">
                      Pošalji rezervaciju
                    </button>
                    <p className="text-cream/50 text-xs mt-4">
                      Potvrda u roku od 24 sata · Otkazivanje besplatno do 48h prije termina
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 md:px-16 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-sm text-cream/60">
          <div>
            <p className="font-serif text-xl text-cream mb-4">
              Crveni <span className="text-gold italic">Breg</span>
            </p>
            <p className="leading-relaxed">
              Porodična vinarija na južnoj padini Crvenog Brega.
              Od 1897. godine.
            </p>
          </div>
          <div>
            <p className="kicker mb-4 text-xs">Posjeta</p>
            <p>Crveni Breg bb</p>
            <p>71000, Bosna i Hercegovina</p>
            <p className="mt-2">Pon–Ned · 10h–20h</p>
          </div>
          <div>
            <p className="kicker mb-4 text-xs">Kontakt</p>
            <p>+387 33 123 456</p>
            <p>dobrodosli@crvenibreg.ba</p>
          </div>
          <div>
            <p className="kicker mb-4 text-xs">Pratite nas</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gold transition">Instagram</a>
              <a href="#" className="hover:text-gold transition">Facebook</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border text-[11px] uppercase tracking-[0.25em] text-cream/40 text-center">
          © {new Date().getFullYear()} Vinarija Crveni Breg · Pijte odgovorno
        </div>
      </footer>
    </main>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="text-center">
      <p className="font-serif text-4xl text-gold mb-1">{n}</p>
      <p className="text-[10px] uppercase tracking-[0.25em] text-cream/60">{l}</p>
    </div>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.3em] text-cream/60 mb-2">{label}</label>
      <input
        {...props}
        className="w-full bg-transparent border-b border-border focus:border-gold focus:outline-none py-3 text-cream font-light"
      />
    </div>
  );
}

function InfoCell({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="bg-card/60 p-5">
      <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">{label}</p>
      <p className="font-serif text-cream text-lg leading-tight">{value}</p>
      <p className="text-cream/50 text-xs mt-1">{sub}</p>
    </div>
  );
}
