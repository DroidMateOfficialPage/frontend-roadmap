import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/portfolio", label: "Portfolio" },
  { to: "/flavours", label: "Flavours" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQs" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-canvas/90 backdrop-blur-md border-b border-rose/20 px-6 md:px-10 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-6">
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium flex-1">
          {links.slice(0, 2).map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-deep transition-colors" activeProps={{ className: "text-deep" }}>
              {l.label}
            </Link>
          ))}
        </div>
        <Link to="/" className="font-display text-2xl md:text-3xl font-medium tracking-tight text-center">
          Sandra&rsquo;s <span className="italic">Cakes</span>
        </Link>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium flex-1 justify-end">
          {links.slice(2).map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-deep transition-colors" activeProps={{ className: "text-deep" }}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="hover:text-deep transition-colors">Enquire</Link>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-[11px] uppercase tracking-[0.2em] font-medium"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-3 text-sm uppercase tracking-[0.2em] font-medium border-t border-rose/20 pt-4">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="py-1" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="py-1" onClick={() => setOpen(false)}>Enquire</Link>
        </div>
      )}
    </nav>
  );
}