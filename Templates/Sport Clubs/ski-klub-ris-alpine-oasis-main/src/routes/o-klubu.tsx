import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Award, Users, Mountain, Calendar } from "lucide-react";
import img from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/o-klubu")({
  head: () => ({
    meta: [
      { title: "O klubu — Ski Klub RIS Banja Luka" },
      { name: "description", content: "Historija, misija i vrijednosti Ski Kluba RIS — više od 55 godina tradicije u zimskim sportovima." },
      { property: "og:title", content: "O klubu — Ski Klub RIS" },
      { property: "og:description", content: "Tradicija od 1969. godine u Banjoj Luci." },
      { property: "og:url", content: "/o-klubu" },
    ],
    links: [{ rel: "canonical", href: "/o-klubu" }],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden -mt-20">
        <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Ko smo</span>
          <h1 className="font-display text-6xl md:text-8xl mt-4">O <span className="text-gradient-ice">Klubu</span></h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-2xl text-foreground/90 leading-relaxed mb-8">
            Ski Klub RIS osnovan je davne <strong className="text-primary">1969. godine</strong> u Banjoj Luci,
            sa idejom da se gradi sportska kultura zimskih sportova u regiji. Pet i po decenija kasnije,
            ostajemo vjerni istoj viziji — strastveni, posvećeni i ponosni nosioci tradicije.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Naš klub okuplja preko <strong className="text-foreground">300 aktivnih članova</strong> svih
            uzrasta — od mališana koji prvi put obuvaju skije, preko takmičara koji brane boje kluba na
            državnim i međunarodnim takmičenjima, do rekreativaca koji jednostavno vole bijele staze.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Treniramo na <strong className="text-foreground">Jahorini, Bjelašnici, Kupresu i Vlašiću</strong>,
            organizujemo kampove, izlete i takmičenja, i radimo na razvoju zimskih sportova u BiH.
          </p>
        </div>
      </section>

      <section className="py-24 bg-card/30">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-5xl md:text-6xl text-center mb-16">Naše <span className="text-gradient-ice">vrijednosti</span></h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Award, t: "Izvrsnost", d: "Težimo najvišim standardima u svemu što radimo." },
              { icon: Users, t: "Zajednica", d: "Klub je porodica — generacije skijaša rastu zajedno." },
              { icon: Mountain, t: "Strast", d: "Ljubav prema planini i snijegu pokreće sve." },
              { icon: Calendar, t: "Tradicija", d: "Pola vijeka iskustva utkano u svaki zavoj." },
            ].map((v) => (
              <div key={v.t} className="text-center p-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center mb-4">
                  <v.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl mb-2">{v.t}</h3>
                <p className="text-muted-foreground text-sm">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-5xl md:text-6xl mb-12">Historija u <span className="text-gradient-ice">trenucima</span></h2>
          <div className="space-y-8 relative pl-8 border-l-2 border-primary/30">
            {[
              { y: "1969", t: "Osnivanje kluba", d: "Grupa entuzijasta u Banjoj Luci osniva ski klub." },
              { y: "1985", t: "Prva republička medalja", d: "Naš takmičar osvaja prvu zlatnu medalju na republičkom nivou." },
              { y: "1995", t: "Otvaranje škole skijanja", d: "Pokrećemo organizovanu školu za djecu i početnike." },
              { y: "2010", t: "Međunarodna takmičenja", d: "Članovi kluba nastupaju na FIS takmičenjima." },
              { y: "2024", t: "55 godina tradicije", d: "Slavimo veliki jubilej sa novom generacijom." },
            ].map((e) => (
              <div key={e.y} className="relative">
                <div className="absolute -left-[42px] top-0 w-6 h-6 rounded-full bg-accent border-4 border-background" />
                <div className="font-display text-3xl text-primary">{e.y}</div>
                <h3 className="font-display text-2xl mt-1">{e.t}</h3>
                <p className="text-muted-foreground mt-1">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
