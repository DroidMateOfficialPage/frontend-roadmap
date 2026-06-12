import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-terrace.jpg";
import dishImg from "@/assets/dining-dish.jpg";
import chefImg from "@/assets/chef.jpg";
import weddingImg from "@/assets/wedding.jpg";
import corporateImg from "@/assets/corporate.jpg";
import venueImg from "@/assets/venue-interior.jpg";
import coastImg from "@/assets/coast.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MOLO — A Coastal House of Dining & Celebration · Opatija" },
      {
        name: "description",
        content:
          "An editorial destination on the Adriatic. Fine dining, weddings, and private events curated on the Opatija coast.",
      },
      { property: "og:title", content: "MOLO — Opatija" },
      {
        property: "og:description",
        content: "A place where experiences become memories. Adriatic fine dining and event house.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({
  children,
  className = "",
  delay = 0,
  as: As = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <As
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`${className} ${visible ? "animate-fade-up" : "opacity-0"}`}
    >
      {children}
    </As>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12 md:py-6">
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-2xl tracking-[0.18em] text-foreground">M O L O</span>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:inline">
            Opatija · est. Adriatic
          </span>
        </div>
        <nav className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.28em] md:flex">
          <a href="#story" className="text-foreground/80 hover:text-foreground transition-colors">
            The House
          </a>
          <a href="#dining" className="text-foreground/80 hover:text-foreground transition-colors">
            Dining
          </a>
          <a href="#weddings" className="text-foreground/80 hover:text-foreground transition-colors">
            Weddings
          </a>
          <a href="#events" className="text-foreground/80 hover:text-foreground transition-colors">
            Events
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span className="hidden md:inline">EN</span>
          <span className="hidden md:inline">DE</span>
          <span className="hidden md:inline">IT</span>
          <a
            href="#contact"
            className="border border-foreground/30 px-4 py-2.5 text-foreground hover:bg-foreground hover:text-ivory transition-all duration-500"
          >
            Reserve
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-ink">
      <img
        src={heroImg}
        alt="Coastal terrace dining at golden hour over the Adriatic in Opatija"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover animate-fade-in"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/10 to-ink/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/30 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-between px-6 pb-12 pt-32 md:px-12 md:pb-20 md:pt-40">
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-ivory/70 animate-fade-in">
          <span className="h-px w-10 bg-ivory/60" />
          A House on the Adriatic
        </div>

        <div className="max-w-4xl">
          <h1 className="font-serif text-[clamp(2.75rem,7vw,6.5rem)] leading-[1.02] text-ivory animate-fade-up">
            A place where <em className="italic text-gold">experiences</em> become memories.
          </h1>
          <p
            className="mt-8 max-w-xl font-sans text-base leading-relaxed text-ivory/80 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            On the edge of Opatija's coastline, a singular house gathers fine dining, weddings, and
            quiet celebrations under one Mediterranean sky.
          </p>
          <div
            className="mt-12 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-ivory px-7 py-4 text-[11px] uppercase tracking-[0.32em] text-ink transition-all duration-500 hover:bg-gold hover:text-ivory"
            >
              Reserve an Experience
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#story"
              className="inline-flex items-center gap-3 border border-ivory/40 px-7 py-4 text-[11px] uppercase tracking-[0.32em] text-ivory transition-all duration-500 hover:border-ivory hover:bg-ivory/10"
            >
              Explore the House
            </a>
          </div>
        </div>

        <div
          className="flex items-end justify-between text-[10px] uppercase tracking-[0.32em] text-ivory/60 animate-fade-in"
          style={{ animationDelay: "700ms" }}
        >
          <div className="flex items-center gap-3">
            <span className="inline-block h-12 w-px bg-ivory/40" />
            <span>Scroll</span>
          </div>
          <div className="hidden text-right md:block">
            <div className="text-ivory/90">45.3389° N — 14.3050° E</div>
            <div className="mt-1">Opatija · Croatia</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Fine Dining",
    "Adriatic Catch",
    "Weddings",
    "Private Celebrations",
    "Corporate Retreats",
    "Congresses",
    "Seasonal Tasting",
    "Sunset Terrace",
  ];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-card py-6">
      <div className="flex w-max animate-marquee gap-16 whitespace-nowrap font-serif text-2xl italic text-foreground/70">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-16">
            {t}
            <span className="h-1 w-1 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Story() {
  return (
    <section id="story" className="relative bg-ivory py-32 md:py-48">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-12">
        <Reveal className="md:col-span-3">
          <span className="eyebrow">— Chapter I</span>
          <div className="mt-4 font-serif text-sm italic text-muted-foreground">The House</div>
        </Reveal>
        <div className="md:col-span-9">
          <Reveal>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,4.25rem)] leading-[1.08] text-foreground">
              Not a restaurant. A <em className="italic text-gold">gathering place</em> for life's
              most considered hours.
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
            <Reveal delay={150} className="space-y-5 text-foreground/75 leading-relaxed">
              <p>
                We believe a meal is never only a meal. It is the table you remember, the light over
                the water, the conversation that lingers long after the last glass is poured.
              </p>
              <p>
                MOLO was built on the Adriatic for those moments — for the proposal, the toast, the
                quiet anniversary, the closing of a deal, the beginning of a marriage.
              </p>
            </Reveal>
            <Reveal delay={300} className="space-y-5 text-foreground/75 leading-relaxed">
              <p>
                Our house brings together gastronomy, architecture, and the slow rhythm of the
                coast. A place to dine, to celebrate, to convene — held together by a single
                philosophy of hospitality.
              </p>
              <div className="hairline mt-8" />
              <p className="font-serif text-2xl italic text-foreground">
                "Living happens at the table."
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dining() {
  return (
    <section id="dining" className="relative bg-card py-32 md:py-48">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-12 md:px-12">
        <Reveal className="md:col-span-6">
          <div className="relative overflow-hidden">
            <img
              src={dishImg}
              alt="Signature Adriatic plated dish with edible florals"
              loading="lazy"
              width={1280}
              height={1600}
              className="h-[720px] w-full object-cover transition-transform duration-[2000ms] hover:scale-[1.03]"
            />
          </div>
        </Reveal>
        <div className="md:col-span-6 md:pl-12">
          <Reveal>
            <span className="eyebrow">— Chapter II · Signature Dining</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4vw,3.75rem)] leading-[1.05] text-foreground">
              Cuisine, drawn from the sea and the season.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-md text-foreground/75 leading-relaxed">
              Our kitchen follows the tide and the harvest. Every plate is a quiet conversation
              between an Adriatic ingredient, a chef's restraint, and a guest's first bite.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-12 space-y-6 border-t border-border pt-8">
              {[
                ["I.", "Crudo of line-caught sea bass", "Citrus · sea herbs · cold-pressed olive"],
                ["II.", "Adriatic langoustine", "Saffron · burnt butter · wild fennel"],
                ["III.", "Slow-cured beef of Istria", "Black truffle · aged grain · rosemary smoke"],
                ["IV.", "Almond & wild honey", "Lavender · sea salt · single-origin chocolate"],
              ].map(([no, name, sub]) => (
                <div
                  key={name}
                  className="grid grid-cols-[2rem_1fr] gap-4 border-b border-border/50 pb-5"
                >
                  <span className="font-serif text-sm italic text-gold">{no}</span>
                  <div>
                    <div className="font-serif text-xl text-foreground">{name}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={400}>
            <a
              href="#contact"
              className="mt-12 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-foreground border-b border-foreground/40 pb-1 hover:border-gold hover:text-gold transition-colors"
            >
              Reserve a Tasting
              <span>→</span>
            </a>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-32 grid max-w-[1400px] grid-cols-1 gap-8 px-6 md:grid-cols-3 md:px-12">
        <Reveal className="md:col-span-2">
          <img
            src={chefImg}
            alt="Chef plating in the MOLO kitchen"
            loading="lazy"
            width={1280}
            height={1600}
            className="h-[500px] w-full object-cover"
          />
        </Reveal>
        <Reveal delay={200} className="flex flex-col justify-end">
          <span className="eyebrow">The Kitchen</span>
          <p className="mt-6 font-serif text-2xl italic leading-snug text-foreground">
            "I do not invent. I listen — to the sea, to the soil, to the guest who sits down
            tired."
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            — Executive Chef
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Weddings() {
  return (
    <section id="weddings" className="relative overflow-hidden bg-ink py-32 md:py-48">
      <img
        src={weddingImg}
        alt="Coastal wedding ceremony at sunset"
        loading="lazy"
        width={1600}
        height={1920}
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 md:grid-cols-12 md:px-12">
        <div className="md:col-span-7">
          <Reveal>
            <span className="eyebrow text-ivory/60">— Chapter III · Weddings</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-serif text-[clamp(2.25rem,5vw,5rem)] leading-[1.02] text-ivory">
              Intimate coastal ceremonies, <em className="italic text-gold">curated to
              perfection</em>.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-10 max-w-lg text-ivory/75 leading-relaxed">
              From the first vow to the final dance under the stars, our house holds your day with
              quiet, attentive luxury — orchestrated by a team that does this rarely, and only
              well.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-3">
              {[
                ["120", "Seated guests"],
                ["1", "Ceremony per day"],
                ["∞", "Adriatic horizons"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-serif text-5xl text-gold">{n}</div>
                  <div className="mt-3 text-[10px] uppercase tracking-[0.32em] text-ivory/60">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={400}>
            <a
              href="#contact"
              className="mt-14 inline-flex items-center gap-3 border border-ivory/40 bg-transparent px-7 py-4 text-[11px] uppercase tracking-[0.32em] text-ivory hover:bg-ivory hover:text-ink transition-all duration-500"
            >
              Plan Your Wedding
              <span>→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Corporate() {
  return (
    <section id="events" className="relative bg-ivory py-32 md:py-48">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-12">
        <div className="md:col-span-6">
          <Reveal>
            <span className="eyebrow">— Chapter IV · Corporate & Congresses</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4vw,3.75rem)] leading-[1.05] text-foreground">
              A discreet stage for the gatherings that matter.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-md text-foreground/75 leading-relaxed">
              Board retreats, private congresses, and curated client dinners — held in absolute
              privacy on one of the Adriatic's most considered addresses.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-10">
              {[
                ["Privacy", "Full-house buyouts"],
                ["Capacity", "10 — 180 guests"],
                ["Setting", "Three private salons"],
                ["Service", "One concierge per gathering"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="mt-3 font-serif text-xl text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={400}>
            <a
              href="#contact"
              className="mt-12 inline-flex items-center gap-3 bg-foreground px-7 py-4 text-[11px] uppercase tracking-[0.32em] text-ivory hover:bg-gold transition-all duration-500"
            >
              Request Event Proposal
              <span>→</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={150} className="md:col-span-6">
          <div className="relative">
            <img
              src={corporateImg}
              alt="Private candlelit corporate dinner at MOLO"
              loading="lazy"
              width={1600}
              height={1100}
              className="h-[640px] w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 hidden bg-ivory px-8 py-6 md:block">
              <div className="font-serif text-sm italic text-muted-foreground">A private salon</div>
              <div className="mt-1 font-serif text-2xl text-foreground">Sala dei Venti</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Venue() {
  return (
    <section className="relative bg-card py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-4 md:pt-24">
            <span className="eyebrow">— Chapter V</span>
            <h2 className="mt-6 font-serif text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.05] text-foreground">
              The Venue.
            </h2>
            <p className="mt-6 max-w-xs text-foreground/75 leading-relaxed">
              Stone, light, water. A house built into the coastline, shaped by the architecture of
              the Riviera and the quiet of the sea.
            </p>
          </Reveal>

          <Reveal delay={150} className="md:col-span-8">
            <img
              src={venueImg}
              alt="Stone arches opening onto the Adriatic from the MOLO interior"
              loading="lazy"
              width={1600}
              height={1920}
              className="h-[700px] w-full object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-12">
          <Reveal delay={100} className="md:col-span-7">
            <img
              src={coastImg}
              alt="Aerial view of the Opatija coastline at dusk"
              loading="lazy"
              width={1920}
              height={1100}
              className="h-[460px] w-full object-cover"
            />
            <div className="mt-4 font-serif text-sm italic text-muted-foreground">
              Opatija, at last light.
            </div>
          </Reveal>
          <Reveal delay={250} className="md:col-span-5 md:pl-8 md:pt-16">
            <p className="font-serif text-3xl italic leading-snug text-foreground">
              "There are houses on the coast. And then there is the house the coast made."
            </p>
            <div className="hairline mt-10" />
            <div className="mt-10 grid grid-cols-2 gap-6 text-sm">
              <div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                  Address
                </div>
                <div className="mt-2 font-serif text-foreground">Lungomare 51410</div>
                <div className="font-serif text-foreground">Opatija, Croatia</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                  Hours
                </div>
                <div className="mt-2 font-serif text-foreground">Dinner · 18:00 – 23:30</div>
                <div className="font-serif text-foreground">Closed Mondays</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Reservation() {
  return (
    <section id="contact" className="relative bg-ivory py-32 md:py-48">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-12">
        <Reveal className="md:col-span-5">
          <span className="eyebrow">— Chapter VI · Reservations</span>
          <h2 className="mt-6 font-serif text-[clamp(2.25rem,4.5vw,4.5rem)] leading-[1.02] text-foreground">
            Begin your <em className="italic text-gold">evening</em>.
          </h2>
          <p className="mt-8 max-w-sm text-foreground/75 leading-relaxed">
            Tell us a little about the moment you wish to create. Our concierge replies personally,
            within the day.
          </p>

          <div className="mt-14 space-y-6 border-t border-border pt-10 text-sm">
            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                Reservations
              </div>
              <div className="mt-2 font-serif text-2xl text-foreground">+385 51 000 000</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                Concierge
              </div>
              <div className="mt-2 font-serif text-xl text-foreground">house@molo-opatija.com</div>
            </div>
            <div className="flex gap-4 pt-4 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              <span className="border border-border px-3 py-1.5">EN</span>
              <span className="border border-border px-3 py-1.5">DE</span>
              <span className="border border-border px-3 py-1.5">IT</span>
              <span className="border border-border px-3 py-1.5">HR</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="md:col-span-7">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="border border-border bg-card p-8 md:p-12"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-7 md:grid-cols-2">
              <Field label="Full Name" type="text" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@domain.com" />
              <Field label="Date" type="date" />
              <Field label="Guests" type="number" placeholder="2" />
              <div className="md:col-span-2">
                <label className="block text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                  Occasion
                </label>
                <select className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 font-serif text-lg text-foreground focus:border-gold focus:outline-none focus:ring-0">
                  <option>Fine Dining</option>
                  <option>Wedding Inquiry</option>
                  <option>Private Celebration</option>
                  <option>Corporate · Congress</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                  A note for the house
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about the evening you have in mind…"
                  className="mt-3 w-full resize-none border-0 border-b border-border bg-transparent py-3 font-serif text-lg text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
              <p className="text-xs text-muted-foreground">
                A member of our team will respond personally within 24 hours.
              </p>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-foreground px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-ivory transition-all duration-500 hover:bg-gold"
              >
                Send Inquiry
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 font-serif text-lg text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-0"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-ink py-16 text-ivory/70">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 md:grid-cols-4 md:px-12">
        <div className="md:col-span-2">
          <div className="font-serif text-3xl tracking-[0.18em] text-ivory">M O L O</div>
          <p className="mt-4 max-w-xs text-sm text-ivory/60">
            A coastal house of dining and celebration on the Croatian Adriatic.
          </p>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.32em] text-ivory/40">The House</div>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href="#story" className="hover:text-gold transition-colors">
                Story
              </a>
            </li>
            <li>
              <a href="#dining" className="hover:text-gold transition-colors">
                Dining
              </a>
            </li>
            <li>
              <a href="#weddings" className="hover:text-gold transition-colors">
                Weddings
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-gold transition-colors">
                Events
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.32em] text-ivory/40">Find Us</div>
          <ul className="mt-5 space-y-3 text-sm">
            <li>Lungomare, Opatija</li>
            <li>Croatia</li>
            <li>+385 51 000 000</li>
            <li>house@molo-opatija.com</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-[1400px] flex-col items-start justify-between gap-4 border-t border-ivory/10 px-6 pt-8 text-[10px] uppercase tracking-[0.32em] text-ivory/40 md:flex-row md:items-center md:px-12">
        <span>© {new Date().getFullYear()} MOLO Opatija</span>
        <span>Adriatic · Croatia · 45.3389° N</span>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Story />
      <Dining />
      <Weddings />
      <Corporate />
      <Venue />
      <Reservation />
      <Footer />
    </main>
  );
}
