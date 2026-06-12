import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-sand-soft pt-24 pb-12 px-6 md:px-10 border-t border-stone-line mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2 max-w-md">
            <div className="font-serif text-3xl italic mb-6">
              Aura <span className="not-italic">BiH</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vodeća platforma za promet luksuznih nekretnina i investicionih zemljišta u Bosni i Hercegovini. Garantujemo potpunu pravnu sigurnost, diskreciju i kustoski pristup svakoj transakciji.
            </p>
          </div>
          <div>
            <h4 className="eyebrow font-semibold mb-6">Katalog</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/katalog" search={{ kat: "nekretnine" }} className="hover:text-gold">Sve nekretnine</Link></li>
              <li><Link to="/katalog" search={{ kat: "zemljista" }} className="hover:text-gold">Građevinska zemljišta</Link></li>
              <li><Link to="/za-investitore" className="hover:text-gold">Investicione prilike</Link></li>
              <li><Link to="/o-nama" className="hover:text-gold">Pravna sigurnost</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="eyebrow font-semibold mb-6">Kontakt</h4>
            <div className="text-sm text-muted-foreground space-y-3 leading-relaxed">
              <p>Fra Anđela Zvizdovića 1<br/>71000 Sarajevo</p>
              <p>Jevrejska BB<br/>78000 Banja Luka</p>
              <p>info@aura-realestate.ba<br/>+387 33 000 000</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-stone-line pt-8 gap-4">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © 2026 Aura Luxury Real Estate BiH. Sva prava zadržana.
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-muted-foreground">
            <a href="#" className="hover:text-gold">Instagram</a>
            <a href="#" className="hover:text-gold">LinkedIn</a>
            <a href="#" className="hover:text-gold">Pravna pouka</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
