import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mountain, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/40 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center">
              <Mountain className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <div className="font-display text-3xl tracking-wider">Ski Klub RIS</div>
              <div className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Banja Luka</div>
            </div>
          </div>
          <p className="text-muted-foreground max-w-md">
            Više od pola vijeka tradicije, strasti i šampionskog duha. Razvijamo nove generacije skijaša
            sa srcem u snijegu i pogledom prema vrhovima.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="https://www.facebook.com/risbanjaluka/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full glass grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/skiklubris/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full glass grid place-items-center hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Navigacija</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/o-klubu" className="hover:text-foreground">O klubu</Link></li>
            <li><Link to="/programi" className="hover:text-foreground">Programi</Link></li>
            <li><Link to="/dogadjaji" className="hover:text-foreground">Događaji</Link></li>
            <li><Link to="/galerija" className="hover:text-foreground">Galerija</Link></li>
            <li><Link to="/kontakt" className="hover:text-foreground">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Kontakt</h4>
          <ul className="space-y-3 text-muted-foreground text-sm">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-accent" />Banja Luka, Republika Srpska</li>
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-accent" />+387 51 000 000</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-accent" />info@skiklubris.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} Ski Klub RIS · Sve sezone vodi snijeg
      </div>
    </footer>
  );
}
