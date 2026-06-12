import { Link } from "@tanstack/react-router";
import { useCurrency } from "@/lib/currency";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 bg-white/85 backdrop-blur-xl border-b border-stone-line">
      <Link to="/" className="font-serif text-2xl tracking-tight italic">
        Aura <span className="not-italic font-normal">BiH</span>
      </Link>

      <div className="hidden lg:flex gap-12 eyebrow">
        <Link to="/katalog" search={{ kat: "nekretnine" }} className="hover:text-gold transition-colors">
          Nekretnine
        </Link>
        <Link to="/katalog" search={{ kat: "zemljista" }} className="hover:text-gold transition-colors">
          Zemljišta
        </Link>
        <Link to="/za-investitore" className="hover:text-gold transition-colors">
          Investicije
        </Link>
        <Link to="/o-nama" className="hover:text-gold transition-colors">
          O Nama
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex bg-sand rounded-full p-1 text-[10px] font-semibold">
          <button
            onClick={() => setCurrency("KM")}
            className={`px-3 py-1 rounded-full transition-all ${
              currency === "KM" ? "bg-white shadow-sm text-anthracite" : "text-stone-400"
            }`}
          >
            KM
          </button>
          <button
            onClick={() => setCurrency("EUR")}
            className={`px-3 py-1 rounded-full transition-all ${
              currency === "EUR" ? "bg-white shadow-sm text-anthracite" : "text-stone-400"
            }`}
          >
            €
          </button>
        </div>
        <Link
          to="/o-nama"
          className="hidden md:inline-block border border-anthracite px-5 py-2 eyebrow hover:bg-anthracite hover:text-white transition-all"
        >
          Kontakt
        </Link>
        <button
          className="lg:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Meni"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-stone-line flex flex-col p-6 gap-6 eyebrow animate-fade-in">
          <Link to="/katalog" search={{ kat: "nekretnine" }} onClick={() => setOpen(false)}>
            Nekretnine
          </Link>
          <Link to="/katalog" search={{ kat: "zemljista" }} onClick={() => setOpen(false)}>
            Zemljišta
          </Link>
          <Link to="/za-investitore" onClick={() => setOpen(false)}>
            Investicije
          </Link>
          <Link to="/o-nama" onClick={() => setOpen(false)}>
            O Nama
          </Link>
        </div>
      )}
    </nav>
  );
}
