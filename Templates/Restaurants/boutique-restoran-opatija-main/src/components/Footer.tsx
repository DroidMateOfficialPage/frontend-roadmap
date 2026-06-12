interface FooterProps {
  onReserve: () => void;
}

export function Footer({ onReserve }: FooterProps) {
  return (
    <footer id="reservations" className="relative bg-ocean text-ocean-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-14 border-b border-ocean-foreground/15 pb-16 md:grid-cols-3">
          <div>
            <p className="eyebrow text-gold">Hours</p>
            <p className="mt-5 font-display text-2xl">Open Daily</p>
            <p className="mt-2 text-ocean-foreground/70">12:00 — 23:00</p>
            <p className="mt-1 text-ocean-foreground/70">Last seating 21:30</p>
          </div>
          <div>
            <p className="eyebrow text-gold">Location</p>
            <p className="mt-5 font-display text-2xl">Opatija</p>
            <p className="mt-2 text-ocean-foreground/70">Primorje-Gorski Kotar</p>
            <p className="mt-1 text-ocean-foreground/70">Croatia</p>
          </div>
          <div>
            <p className="eyebrow text-gold">Contact</p>
            <p className="mt-5 font-display text-2xl">Reservations</p>
            <a
              href="mailto:hello@boutique-opatija.com"
              className="mt-2 block text-ocean-foreground/70 transition hover:text-gold"
            >
              hello@boutique-opatija.com
            </a>
            <a
              href="https://www.instagram.com/restoranboutique1/"
              target="_blank"
              rel="noreferrer"
              className="mt-1 block text-ocean-foreground/70 transition hover:text-gold"
            >
              @restoranboutique1
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <p className="font-display text-4xl md:text-5xl">Reserve your evening.</p>
            <p className="mt-3 max-w-md text-ocean-foreground/70">
              Intimate seating fills quickly. Secure your table for an unhurried Adriatic dinner.
            </p>
          </div>
          <button
            onClick={onReserve}
            className="inline-flex items-center gap-4 bg-gold px-10 py-5 text-xs uppercase tracking-[0.32em] text-gold-foreground transition hover:bg-ivory"
          >
            Reserve a Table
            <span>→</span>
          </button>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-ocean-foreground/15 pt-8 text-xs text-ocean-foreground/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Boutique Restaurant Opatija</p>
          <p className="eyebrow text-ocean-foreground/40">Crafted with quiet care</p>
        </div>
      </div>
    </footer>
  );
}
