import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImg from "@/assets/cubo-hero.jpg";
import signatureImg from "@/assets/cubo-signature.jpg";
import wineImg from "@/assets/cubo-wine.jpg";
import chefImg from "@/assets/cubo-chef.jpg";
import crudoImg from "@/assets/cubo-crudo.jpg";
import dessertImg from "@/assets/cubo-dessert.jpg";

export const Route = createFileRoute("/")({
  component: CuboHome,
  head: () => ({
    meta: [
      { title: "Cubo — Fine Dining Opatija | Liburnia Hotels & Villas" },
      {
        name: "description",
        content:
          "Cubo, fine dining restoran u hotelu Ambasador, Opatija. Degustacijski meniji chefa Marina Šarića, vrhunski hrvatski wine pairing i pogled na Kvarnerski zaljev.",
      },
      { property: "og:title", content: "Cubo — Fine Dining Opatija" },
      {
        property: "og:description",
        content:
          "Tihi luksuz iznad Kvarnera. Degustacijski meniji, autorska jela i vinski pairing u srcu Opatije.",
      },
      { property: "og:type", content: "restaurant" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap",
      },
    ],
  }),
});

function CuboHome() {
  return (
    <main className="relative overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <Story />
      <Signature />
      <Menus />
      <WinePairing />
      <Chef />
      <Reserve />
      <Footer />
    </main>
  );
}

/* ───────── NAV ───────── */
function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-3xl tracking-wide text-gradient-gold">Cubo</span>
          <span className="hidden text-[10px] tracking-luxury text-muted-foreground sm:inline">
            OPATIJA · EST. AMBASADOR
          </span>
        </a>
        <nav className="hidden items-center gap-10 text-[11px] tracking-refined uppercase text-bone/80 md:flex">
          <a href="#story" className="transition hover:text-gold">The House</a>
          <a href="#signature" className="transition hover:text-gold">Signature</a>
          <a href="#menus" className="transition hover:text-gold">Menus</a>
          <a href="#wine" className="transition hover:text-gold">Cellar</a>
          <a href="#reserve" className="transition hover:text-gold">Reserve</a>
        </nav>
        <a
          href="#reserve"
          className="group relative hidden overflow-hidden border border-gold/60 px-5 py-2.5 text-[10px] tracking-luxury text-gold transition hover:bg-gold hover:text-ink md:inline-block"
        >
          BOOK A TABLE
        </a>
      </div>
    </header>
  );
}

/* ───────── HERO ───────── */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[720px] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Cubo restaurant view over the Kvarner bay at golden hour"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/30" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 md:px-10 md:pb-32"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-6 inline-flex items-center gap-3 text-[10px] tracking-luxury text-gold"
        >
          <span className="h-px w-10 bg-gold" />
          FINE DINING · OPATIJA · LIBURNIA HOTELS &amp; VILLAS
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(3.5rem,10vw,9.5rem)] font-light leading-[0.92] tracking-tight"
        >
          A quiet luxury<br />
          <span className="italic text-gradient-gold">above the Kvarner.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="mt-8 max-w-xl text-base font-light leading-relaxed text-bone/75"
        >
          Six courses. Five glasses. One evening that begins when the Adriatic
          turns to copper and ends with a dessert you will remember by name.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <a
            href="#reserve"
            className="group relative inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] tracking-luxury text-ink transition hover:bg-gold-soft"
          >
            RESERVE YOUR EVENING
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#menus"
            className="inline-flex items-center gap-3 text-[11px] tracking-luxury text-bone/80 transition hover:text-gold"
          >
            EXPLORE THE TASTING MENUS
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] tracking-luxury text-bone/50"
      >
        <span className="block animate-pulse">SCROLL</span>
      </motion.div>
    </section>
  );
}

/* ───────── STORY ───────── */
function Story() {
  return (
    <section id="story" className="relative px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="text-[10px] tracking-luxury text-gold">— THE HOUSE</span>
          <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] md:text-6xl">
            Built like a <em className="text-gradient-gold">cubo</em>.
            <br />Felt like a secret.
          </h2>
        </div>
        <div className="space-y-8 text-bone/75 md:col-span-7 md:col-start-6">
          <p className="font-display text-2xl font-light leading-snug text-bone md:text-3xl">
            Inside Hotel Ambasador, a single room opens to the bay. White linen,
            walnut, brass. A candle, a glass, a knife placed precisely where it
            should be.
          </p>
          <p className="text-base font-light leading-relaxed">
            Cubo is the gastronomic stage of Liburnia Hotels &amp; Villas — small
            on purpose, ambitious by design. The kitchen does not chase the
            menu; the menu chases the season. Kvarner sea bream, Istrian olive
            oil, herbs from the hills above Opatija, a few hands that have
            cooked together for years.
          </p>
          <div className="flex flex-wrap gap-x-12 gap-y-4 pt-4 text-[11px] tracking-refined uppercase text-bone/60">
            <span>· 32 seats</span>
            <span>· Open daily 12 — 23h</span>
            <span>· Sea view</span>
            <span>· Reservation only</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── SIGNATURE DISH ───────── */
function Signature() {
  return (
    <section id="signature" className="relative overflow-hidden bg-ink px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <img
            src={signatureImg}
            alt="Slow-braised octopus on white bean cream — Cubo signature dish"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1080}
            height={1600}
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <div className="text-[10px] tracking-luxury text-gold">— SIGNATURE</div>
              <div className="mt-1 font-display text-xl italic text-bone">Plate IV</div>
            </div>
            <div className="font-display text-3xl text-gradient-gold">€ 38</div>
          </div>
        </motion.div>

        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[10px] tracking-luxury text-gold"
          >
            — THE DISH WE'RE KNOWN FOR
          </motion.span>
          <h3 className="mt-6 font-display text-5xl font-light leading-[1.05] md:text-7xl">
            Krak hobotnice
            <span className="block italic text-gradient-gold">on white bean cream</span>
          </h3>
          <p className="mt-8 max-w-lg font-display text-xl font-light leading-snug text-bone/85">
            Adriatic octopus, slowly braised until it gives way to the spoon.
            Laid on a velvet of Istrian white beans, pak choi just kissed by
            heat, a single charred lemon and a stroke of green oil.
          </p>
          <p className="mt-6 max-w-lg text-sm font-light leading-relaxed text-bone/65">
            "Unusual, but unforgettable — a dish worth returning for."
            <span className="ml-2 text-bone/40">— Stilueta, 2024</span>
          </p>

          <div className="mt-10 border-l-2 border-gold/60 pl-6">
            <div className="text-[10px] tracking-luxury text-gold">PAIRED WITH</div>
            <div className="mt-2 font-display text-2xl text-bone">
              Krauthaker · Graševina Mitrovac <span className="text-bone/50">2021</span>
            </div>
            <div className="mt-1 text-xs font-light tracking-wide text-bone/55">
              Slavonia · ripe stone fruit · saline finish
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── MENUS ───────── */
function Menus() {
  const menus = [
    {
      kicker: "RIBLJI · FISH",
      title: "Mare",
      courses: 6,
      price: "92",
      img: crudoImg,
      lines: [
        "Gnud od ricotte · beetroot · pine nut",
        "Crudo of Kvarner sea bream · white aceto pearls · raspberry",
        "Bisque · langoustine · brioche · rouille",
        "Slow-braised octopus · white bean · pak choi",
        "Turbot · saffron · samphire",
        "Deconstruction of lime tart",
      ],
    },
    {
      kicker: "MESNI · LAND",
      title: "Terra",
      courses: 6,
      price: "98",
      img: dessertImg,
      lines: [
        "Veal tartare · burnt onion · trout roe",
        "Beetroot · goat cheese · walnut",
        "Hand-cut tagliolini · black truffle · aged butter",
        "Boškarin beef short rib · celeriac · bone jus",
        "Cheese · house honeycomb · sourdough",
        "Chocolate · olive oil · Maldon",
      ],
    },
  ];

  return (
    <section id="menus" className="relative px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1300px]">
        <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-[10px] tracking-luxury text-gold">— THE EVENING</span>
            <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] md:text-7xl">
              Two journeys.<br />
              <span className="italic text-gradient-gold">One sea between them.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-relaxed text-bone/65">
            Each tasting menu is composed by chef Marin Šarić in dialogue with
            the season. Wine pairing available for + € 55.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {menus.map((m, i) => (
            <motion.article
              key={m.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
              className="group relative overflow-hidden border border-bone/10 bg-card/40 backdrop-blur-sm"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={m.img}
                  alt={`${m.title} tasting menu`}
                  className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
                  loading="lazy"
                  width={1200}
                  height={750}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                  <div>
                    <div className="text-[10px] tracking-luxury text-gold">{m.kicker}</div>
                    <div className="font-display text-5xl text-bone">{m.title}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] tracking-refined text-bone/60">{m.courses} COURSES</div>
                    <div className="font-display text-4xl text-gradient-gold">€ {m.price}</div>
                  </div>
                </div>
              </div>
              <ol className="divide-y divide-bone/10 px-6 py-2">
                {m.lines.map((l, idx) => (
                  <li
                    key={l}
                    className="flex items-baseline gap-4 py-3 text-sm font-light text-bone/85"
                  >
                    <span className="font-mono text-[10px] text-gold/70">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg leading-snug">{l}</span>
                  </li>
                ))}
              </ol>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── WINE ───────── */
function WinePairing() {
  return (
    <section id="wine" className="relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[520px] md:min-h-[720px]">
          <img
            src={wineImg}
            alt="Sommelier pouring wine at Cubo"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            width={1080}
            height={1600}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink/40" />
        </div>
        <div className="flex flex-col justify-center bg-ink px-8 py-24 md:px-16 md:py-32">
          <span className="text-[10px] tracking-luxury text-gold">— THE CELLAR</span>
          <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] md:text-6xl">
            In vino<br />
            <span className="italic text-gradient-gold">veritas.</span>
          </h2>
          <p className="mt-8 max-w-md font-display text-xl font-light leading-snug text-bone/85">
            A cellar that reads like a love letter to Croatian wine. Istria,
            Slavonia, the Pelješac coast — chosen glass by glass to follow each
            course of your evening.
          </p>

          <div className="mt-12 space-y-6">
            {[
              { house: "Coronica", wine: "Malvazija Istarska", year: "2022", region: "Istria" },
              { house: "Krauthaker", wine: "Graševina Mitrovac", year: "2021", region: "Slavonia" },
              { house: "Saints Hills", wine: "Dingač Sv. Roko", year: "2019", region: "Pelješac" },
            ].map((w) => (
              <div
                key={w.wine}
                className="flex items-baseline justify-between border-b border-bone/10 pb-4"
              >
                <div>
                  <div className="font-display text-2xl text-bone">{w.wine}</div>
                  <div className="mt-1 text-[10px] tracking-luxury text-bone/55">
                    {w.house} · {w.region}
                  </div>
                </div>
                <div className="font-mono text-sm text-gold/80">{w.year}</div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-[11px] tracking-refined uppercase text-bone/40">
            Full pairing flight available with every tasting menu — + € 55
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────── CHEF ───────── */
function Chef() {
  return (
    <section className="relative px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 md:grid-cols-5">
        <div className="md:col-span-3 md:order-2">
          <span className="text-[10px] tracking-luxury text-gold">— BEHIND THE PASS</span>
          <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] md:text-6xl">
            Chef <span className="italic text-gradient-gold">Marin Šarić</span>
          </h2>
          <p className="mt-8 font-display text-xl font-light leading-snug text-bone/85">
            "Every plate is a page. I'd like the season to write it, and the
            guest to remember it."
          </p>
          <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-bone/65">
            Trained between Istria and Italy, Marin leads a small brigade that
            cooks with the patience of an old house and the curiosity of a new
            one. The team treats every reservation like the only one of the
            evening — because, in a 32-seat room, almost is.
          </p>
          <div className="mt-10 flex items-center gap-6">
            <div className="h-px w-16 bg-gold" />
            <span className="text-[10px] tracking-luxury text-bone/60">
              Executive Chef · Cubo
            </span>
          </div>
        </div>
        <div className="md:col-span-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[3/4] overflow-hidden"
          >
            <img
              src={chefImg}
              alt="Chef Marin Šarić plating at Cubo"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1080}
              height={1440}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ───────── RESERVE ───────── */
function Reserve() {
  return (
    <section id="reserve" className="relative overflow-hidden bg-ink px-6 py-32 md:px-10 md:py-44">
      <div className="absolute inset-0 opacity-30">
        <img src={heroImg} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="text-[10px] tracking-luxury text-gold">— RESERVATIONS</span>
        <h2 className="mt-6 font-display text-6xl font-light leading-[1] md:text-8xl">
          Some evenings<br />
          <span className="italic text-gradient-gold">deserve a table.</span>
        </h2>
        <p className="mx-auto mt-10 max-w-md font-light leading-relaxed text-bone/70">
          The room holds thirty-two seats. We answer the phone personally,
          every day. We'd be glad to keep one for you.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
          {[
            { k: "PHONE", v: "+385 51 743 333", href: "tel:+38551743333" },
            { k: "EMAIL", v: "cubo@liburnia.hr", href: "mailto:cubo@liburnia.hr" },
            { k: "ADDRESS", v: "Feliksa Peršića 5\nOpatija, Croatia" },
          ].map((c) => (
            <div key={c.k} className="border border-bone/10 bg-card/40 p-6 backdrop-blur-sm">
              <div className="text-[10px] tracking-luxury text-gold">{c.k}</div>
              {c.href ? (
                <a href={c.href} className="mt-3 block font-display text-xl text-bone hover:text-gold">
                  {c.v}
                </a>
              ) : (
                <div className="mt-3 whitespace-pre-line font-display text-xl text-bone">{c.v}</div>
              )}
            </div>
          ))}
        </div>

        <a
          href="tel:+38551743333"
          className="mt-14 inline-flex items-center gap-3 bg-gold px-12 py-5 text-[11px] tracking-luxury text-ink transition hover:bg-gold-soft"
        >
          RESERVE NOW
          <span>→</span>
        </a>
        <p className="mt-6 text-[10px] tracking-refined uppercase text-bone/40">
          Open daily · 12:00 — 23:00
        </p>
      </div>
    </section>
  );
}

/* ───────── FOOTER ───────── */
function Footer() {
  return (
    <footer className="border-t border-bone/10 px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-3xl text-gradient-gold">Cubo</span>
          <span className="text-[10px] tracking-luxury text-bone/50">
            HOTEL AMBASADOR · OPATIJA
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[10px] tracking-refined uppercase text-bone/50">
          <a href="https://www.instagram.com/restaurant_cubo/" className="hover:text-gold">Instagram</a>
          <a href="https://www.liburnia.hr/en/hotel-ambasador" className="hover:text-gold">Liburnia Hotels &amp; Villas</a>
          <span>© {new Date().getFullYear()} Cubo Restaurant</span>
        </div>
      </div>
    </footer>
  );
}
