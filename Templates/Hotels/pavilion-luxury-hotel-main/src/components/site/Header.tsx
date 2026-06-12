import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { label: "Suites", to: "/suites" as const },
  { label: "Dining", to: "/dining" as const },
  { label: "Spa", to: "/spa" as const },
  { label: "Experiences", to: "/experiences" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl tracking-wide">
          <span className="text-gold">P</span>avilion
        </Link>
        <nav className="hidden lg:flex items-center gap-10 text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              className="hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/reserve"
          className="hidden md:inline-flex items-center text-[11px] tracking-[0.28em] uppercase border border-gold/60 text-gold px-5 py-3 hover:bg-gold hover:text-primary-foreground transition-colors"
        >
          Reserve
        </Link>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-gold" aria-label="menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t hairline bg-background/95 px-6 py-6 flex flex-col gap-4 text-[11px] tracking-[0.28em] uppercase">
          {nav.map((n) => (
            <Link key={n.label} to={n.to} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-gold">
              {n.label}
            </Link>
          ))}
          <Link to="/reserve" onClick={() => setOpen(false)} className="text-gold">
            Reserve →
          </Link>
        </div>
      )}
    </header>
  );
}
