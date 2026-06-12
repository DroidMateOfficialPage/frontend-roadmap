import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Check, Snowflake, Award, Heart, Users } from "lucide-react";

export const Route = createFileRoute("/programi")({
  head: () => ({
    meta: [
      { title: "Programi — Ski Klub RIS" },
      { name: "description", content: "Škola skijanja, takmičarski program, rekreacija i kampovi za sve uzraste." },
      { property: "og:title", content: "Programi — Ski Klub RIS" },
      { property: "og:description", content: "Programi i škola skijanja za sve nivoe." },
      { property: "og:url", content: "/programi" },
    ],
    links: [{ rel: "canonical", href: "/programi" }],
  }),
  component: Programs,
});

const programs = [
  { icon: Snowflake, title: "Mini RIS — Predškolci", age: "5–7 godina", price: "od 80 KM / mjesec",
    desc: "Prvi susret sa snijegom kroz igru. Osnove ravnoteže, sigurnosti i radost na padini.",
    features: ["Mali grupni rad (do 6 djece)", "Atestirani instruktori", "Sva oprema u najmu", "Vikend treninzi"] },
  { icon: Heart, title: "Škola skijanja", age: "8–14 godina", price: "od 120 KM / mjesec",
    desc: "Sistematski razvoj tehnike kroz cijelu sezonu. Od pluga do paralelnih zavoja.",
    features: ["Po nivoima napretka", "Tehnička i kondiciona priprema", "Vikend kampovi", "Završni nastup"] },
  { icon: Award, title: "Takmičarski tim", age: "10+ godina", price: "po dogovoru",
    desc: "Profesionalni trening za buduće šampione. Slalom, veleslalom i super-G.",
    features: ["6 treninga sedmično", "Trener — bivši reprezentativac", "Učešće na FIS takmičenjima", "Stipendije za najbolje"],
    featured: true },
  { icon: Users, title: "Adult & Rekreacija", age: "Odrasli", price: "od 150 KM / mjesec",
    desc: "Naučite skijati u zrelim godinama ili usavršite tehniku. Vikend grupe i privatni časovi.",
    features: ["Fleksibilan raspored", "Početni i napredni nivo", "Vikend izleti", "Klub porodica"] },
];

function Programs() {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Šta nudimo</span>
          <h1 className="font-display text-6xl md:text-8xl mt-4 mb-6">Naši <span className="text-gradient-ice">Programi</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bez obzira na uzrast i nivo, kod nas ima mjesta za svakoga ko voli snijeg.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-6">
          {programs.map((p) => (
            <div
              key={p.title}
              className={`relative p-8 rounded-3xl border transition-all hover:-translate-y-1 ${
                p.featured
                  ? "bg-gradient-to-br from-primary/20 to-accent/10 border-primary glow-primary"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-accent text-accent-foreground text-[10px] uppercase tracking-[0.2em] font-bold">
                  Naš ponos
                </div>
              )}
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-frost grid place-items-center">
                  <p.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-right">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{p.age}</div>
                  <div className="font-display text-xl text-primary mt-1">{p.price}</div>
                </div>
              </div>
              <h3 className="font-display text-3xl mb-3">{p.title}</h3>
              <p className="text-muted-foreground mb-6">{p.desc}</p>
              <ul className="space-y-2 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/kontakt"
                className="inline-flex items-center justify-center w-full py-3 rounded-full border border-primary/40 hover:bg-primary hover:text-primary-foreground transition-all uppercase text-sm tracking-wider">
                Upiši se
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
