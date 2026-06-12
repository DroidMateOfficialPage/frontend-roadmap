import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="py-20 px-6 lg:px-12 border-t hairline bg-background">
      <div className="mx-auto max-w-[1400px] grid md:grid-cols-4 gap-12">
        <div>
          <Link to="/" className="font-display text-3xl mb-4 inline-block">
            <span className="text-gold">P</span>avilion
          </Link>
          <p className="text-sm text-muted-foreground font-light leading-relaxed mt-3">
            An intimate five-star hotel on the Adriatic coast. Member of Leading Hotels of the World.
          </p>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.32em] uppercase text-gold mb-5">Explore</div>
          <ul className="space-y-2 text-sm text-muted-foreground font-light">
            <li><Link to="/suites" className="hover:text-gold">Suites & Residences</Link></li>
            <li><Link to="/dining" className="hover:text-gold">Dining</Link></li>
            <li><Link to="/spa" className="hover:text-gold">Spa & Wellness</Link></li>
            <li><Link to="/experiences" className="hover:text-gold">Experiences</Link></li>
            <li><Link to="/reserve" className="hover:text-gold">Reserve</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.32em] uppercase text-gold mb-5">Address</div>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Riva del Mare 17<br />
            85320 Sveti Stefan<br />
            Crna Gora
          </p>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.32em] uppercase text-gold mb-5">Contact</div>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            +382 33 000 000<br />
            concierge@thepavilion.co<br />
            press@thepavilion.co
          </p>
        </div>
      </div>
      <div className="gold-rule w-full mt-16 mb-6 opacity-40" />
      <div className="flex flex-col md:flex-row justify-between gap-4 text-[10px] tracking-[0.32em] uppercase text-muted-foreground">
        <div>© MMXXVI The Pavilion · All Rights Reserved</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-gold">Privacy</a>
          <a href="#" className="hover:text-gold">Terms</a>
          <a href="#" className="hover:text-gold">Careers</a>
        </div>
      </div>
    </footer>
  );
}
