import { useEffect, useState } from "react";

interface NavbarProps {
  onReserve: () => void;
}

const links = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#experience", label: "The Experience" },
  { href: "#reservations", label: "Reservations" },
];

export function Navbar({ onReserve }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/60 py-3" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#home" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight">Boutique</span>
          <span className="eyebrow hidden sm:inline">Opatija</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onReserve}
            className="hidden bg-ocean px-5 py-3 text-xs uppercase tracking-[0.28em] text-ocean-foreground transition hover:bg-gold hover:text-gold-foreground md:inline-flex"
          >
            Reserve a Table
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className={`h-px w-6 bg-foreground transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-6 bg-foreground transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="glass absolute inset-x-0 top-full border-t border-border/60 md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-4 text-sm tracking-wide"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onReserve();
              }}
              className="mt-4 bg-ocean px-5 py-4 text-xs uppercase tracking-[0.28em] text-ocean-foreground"
            >
              Reserve a Table
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
