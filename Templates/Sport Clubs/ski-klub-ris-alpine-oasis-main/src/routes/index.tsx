import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowRight, Award, Snowflake, Mountain, Trophy, Heart } from "lucide-react";
import heroImg from "@/assets/hero-ski.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ski Klub RIS Banja Luka — Tradicija u snijegu od 1969." },
      { name: "description", content: "Škola skijanja, takmičarski tim i organizacija događaja u Banjoj Luci. Pridružite se najstarijem ski klubu u regiji." },
      { property: "og:title", content: "Ski Klub RIS — Banja Luka" },
      { property: "og:description", content: "Više od pola vijeka tradicije, strasti i šampionskog duha." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <section className="relative -mt-20 h-screen min-h-[700px] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Skijaš na zalasku sunca"
          className="absolute inset-0 w-full h-full object-cover scale-110"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 w-full">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Snowflake className="w-4 h-4 text-primary" />
              <span className="text-xs uppercase tracking-[0.3em] text-ice">Sezona 2026 · Otvoreni upisi</span>
            </div>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-6">
              GDJE POČINJU<br />
              <span className="text-gradient-aurora">ŠAMPIONI</span>
            </h1>
            <p className="text-lg md:text-xl text-ice/90 max-w-xl mb-10 leading-relaxed">
              Više od 55 godina razvijamo skijaše u Banjoj Luci — od prvih zavoja do olimpijskih staza.
              Pridružite se porodici RIS-a.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/programi"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold uppercase tracking-wider hover:scale-105 transition-transform"
                style={{ boxShadow: "var(--shadow-ember)" }}
              >
                Naši programi
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/dogadjaji"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass text-foreground font-semibold uppercase tracking-wider hover:bg-primary/20 transition-colors"
              >
                Kalendar događaja
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-border/30 glass">
          <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "55+", label: "Godina tradicije" },
              { value: "300+", label: "Aktivnih članova" },
              { value: "120+", label: "Osvojenih medalja" },
              { value: "4", label: "Generacije skijaša" },
            ].map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="font-display text-4xl md:text-5xl text-gradient-ice">{s.value}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent">O klubu</span>
              <h2 className="font-display text-5xl md:text-7xl mt-4 mb-8 leading-[0.95]">
                Snijeg je naša<br />
                <span className="text-gradient-ice">druga kuća.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Osnovan 1969. godine, Ski Klub RIS je jedna od najstarijih i najuspješnijih sportskih
                institucija u Banjoj Luci. Naša misija je jednostavna — širiti ljubav prema skijanju
                i razvijati šampione kroz disciplinu, posvećenost i radost zimskih sportova.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Treniramo na najljepšim planinama regije — Jahorini, Bjelašnici i Kupresu.
              </p>
              <Link to="/o-klubu" className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all uppercase text-sm tracking-wider">
                Naša priča <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img src={g4} alt="Skijaš u akciji" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-8 -left-8 glass rounded-2xl p-6 max-w-xs animate-float">
                <Trophy className="w-8 h-8 text-accent mb-3" />
                <div className="font-display text-3xl mb-1">Šampionski tim</div>
                <div className="text-xs text-muted-foreground">Republičko i državno prvenstvo BiH</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 relative bg-card/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Šta radimo</span>
            <h2 className="font-display text-5xl md:text-7xl mt-4">Programi za svaki nivo</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Snowflake, title: "Škola skijanja", desc: "Od prvih zavoja do samostalnog skijanja. Za djecu od 5 godina i odrasle početnike.", tag: "Početnici" },
              { icon: Award, title: "Takmičarski program", desc: "Profesionalni trening za buduće šampione. Slalom, veleslalom, super-G.", tag: "Napredni" },
              { icon: Heart, title: "Rekreacija", desc: "Vikend kampovi, izleti i druženja na planini za cijelu porodicu.", tag: "Svi uzrasti" },
            ].map((p) => (
              <div key={p.title} className="group relative p-8 rounded-2xl glass hover:border-primary/50 transition-all hover:-translate-y-2">
                <div className="absolute top-6 right-6 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-primary/20 text-primary">{p.tag}</div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-frost grid place-items-center mb-6 group-hover:scale-110 transition-transform">
                  <p.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-3xl mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/programi" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all uppercase text-sm tracking-wider">
              Svi programi <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent">Kalendar</span>
              <h2 className="font-display text-5xl md:text-7xl mt-4">Nadolazeći događaji</h2>
            </div>
            <Link to="/dogadjaji" className="text-primary uppercase text-sm tracking-wider hover:gap-3 inline-flex items-center gap-2 transition-all">
              Svi događaji <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { date: "15. DEC", title: "Otvaranje sezone na Jahorini", loc: "Jahorina · Olimpijski centar", type: "Event" },
              { date: "12. JAN", title: "RIS Kup 2026 — Veleslalom", loc: "Kupres · Adriatic snijeg", type: "Takmičenje" },
              { date: "08. FEB", title: "Dječji ski kamp", loc: "Bjelašnica · 7 dana", type: "Kamp" },
              { date: "22. FEB", title: "Republičko prvenstvo RS", loc: "Jahorina", type: "Takmičenje" },
              { date: "15. MAR", title: "Porodični vikend", loc: "Vlašić", type: "Druženje" },
              { date: "30. MAR", title: "Zatvaranje sezone & dodjela", loc: "Banja Luka", type: "Ceremonija" },
            ].map((e) => (
              <article key={e.title} className="group relative p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-20 text-center py-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20">
                    <div className="font-display text-2xl text-primary leading-none">{e.date.split(" ")[0]}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">{e.date.split(" ")[1]}</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2">{e.type}</div>
                    <h3 className="font-display text-xl leading-tight mb-2 group-hover:text-primary transition-colors">{e.title}</h3>
                    <p className="text-sm text-muted-foreground">{e.loc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-card/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Galerija</span>
            <h2 className="font-display text-5xl md:text-7xl mt-4">Trenuci u snijegu</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[g1, g2, g3, g4].map((img, i) => (
              <Link
                key={i}
                to="/galerija"
                className={`relative overflow-hidden rounded-xl group ${i === 0 || i === 3 ? "row-span-2 aspect-[3/5]" : "aspect-square"}`}
              >
                <img src={img} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-aurora)" }} />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Mountain className="w-16 h-16 mx-auto text-primary mb-8 animate-float" />
          <h2 className="font-display text-5xl md:text-7xl mb-6 leading-[0.95]">
            Spreman za <span className="text-gradient-aurora">prvi zavoj?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Pridruži se Ski Klubu RIS i postani dio porodice koja diše snijeg već 55 godina.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-accent text-accent-foreground font-semibold uppercase tracking-wider hover:scale-105 transition-transform text-lg"
            style={{ boxShadow: "var(--shadow-ember)" }}
          >
            Upiši se danas <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
