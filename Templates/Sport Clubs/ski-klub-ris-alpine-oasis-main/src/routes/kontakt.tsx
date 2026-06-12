import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Mail, Phone, MapPin, Facebook, Instagram, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt i upis — Ski Klub RIS" },
      { name: "description", content: "Kontaktirajte Ski Klub RIS u Banjoj Luci za upis, informacije i saradnju." },
      { property: "og:title", content: "Kontakt — Ski Klub RIS" },
      { property: "og:description", content: "Upišite se i postanite dio porodice RIS." },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Pridruži se</span>
          <h1 className="font-display text-6xl md:text-8xl mt-4 mb-6">Kontakt & <span className="text-gradient-ice">Upis</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Imate pitanje ili želite da se učlanite? Javite nam se — vrata kluba su uvijek otvorena.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <div className="space-y-6">
            <div className="p-8 rounded-2xl glass">
              <h3 className="font-display text-2xl mb-6">Kontakt informacije</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 grid place-items-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Adresa</div>
                    <div>Banja Luka, Republika Srpska, BiH</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 grid place-items-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Telefon</div>
                    <div>+387 51 000 000</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 grid place-items-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">E-mail</div>
                    <div>info@skiklubris.com</div>
                  </div>
                </li>
              </ul>
              <div className="border-t border-border mt-6 pt-6">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Pratite nas</div>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/risbanjaluka/" target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition">
                    <Facebook className="w-4 h-4" /> Facebook
                  </a>
                  <a href="https://www.instagram.com/skiklubris/" target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-accent hover:text-accent-foreground transition">
                    <Instagram className="w-4 h-4" /> Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30">
              <h3 className="font-display text-2xl mb-3">Radno vrijeme</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex justify-between"><span>Pon — Pet</span><span className="text-foreground">17:00 — 20:00</span></li>
                <li className="flex justify-between"><span>Subota</span><span className="text-foreground">09:00 — 14:00</span></li>
                <li className="flex justify-between"><span>Nedjelja</span><span className="text-foreground">Treninzi na planini</span></li>
              </ul>
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="p-8 rounded-2xl bg-card border border-border space-y-5">
            <h3 className="font-display text-3xl mb-2">Pošalji poruku</h3>
            <p className="text-muted-foreground text-sm mb-4">Odgovorimo u roku od 24 sata.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Ime</label>
                <input required className="mt-2 w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary outline-none transition" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Prezime</label>
                <input required className="mt-2 w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary outline-none transition" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">E-mail</label>
              <input type="email" required className="mt-2 w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary outline-none transition" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Program</label>
              <select className="mt-2 w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary outline-none transition">
                <option>Mini RIS (5–7 god)</option>
                <option>Škola skijanja (8–14 god)</option>
                <option>Takmičarski tim</option>
                <option>Adult & Rekreacija</option>
                <option>Samo informacije</option>
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Poruka</label>
              <textarea rows={5} className="mt-2 w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary outline-none transition resize-none" />
            </div>
            <button type="submit" disabled={sent}
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold uppercase tracking-wider hover:scale-[1.02] transition-transform disabled:opacity-60"
              style={{ boxShadow: "var(--shadow-ember)" }}>
              {sent ? "Hvala! Javljamo se uskoro ❄" : <>Pošalji <Send className="w-4 h-4" /></>}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
