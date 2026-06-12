import { Link } from "@tanstack/react-router";
import { Menu, X, Mountain } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Početna" },
  { to: "/o-klubu", label: "O klubu" },
  { to: "/programi", label: "Programi" },
  { to: "/dogadjaji", label: "Događaji" },
  { to: "/galerija", label: "Galerija" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center glow-primary">
            <Mountain className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="leading-none">
            <div className="font-display text-2xl tracking-wider">SK RIS</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Banja Luka · 1969</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors relative"
              activeProps={{ className: "text-foreground" }}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-primary to-accent" />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        <Link
          to="/kontakt"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold uppercase tracking-wider hover:scale-105 transition-transform"
          style={{ boxShadow: "var(--shadow-ember)" }}
        >
          Učlani se
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Meni"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border">
          <nav className="flex flex-col p-4 gap-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm uppercase tracking-wider hover:bg-secondary rounded"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
