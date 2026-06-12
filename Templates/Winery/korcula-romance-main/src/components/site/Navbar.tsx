import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

export function Navbar({ onBook }: { onBook: (idx?: number) => void }) {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "#story", label: t.nav.story },
    { href: "#collection", label: t.nav.collection },
    { href: "#experiences", label: t.nav.experiences },
    { href: "#reviews", label: t.nav.reviews },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled ? "glass-nav border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-serif text-2xl tracking-tight text-burgundy">Tasovac</span>
          <span className="eyebrow text-muted-foreground hidden sm:inline">Winery · Korčula</span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="eyebrow text-espresso/70 hover:text-burgundy transition-colors duration-500"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-1 text-[0.7rem] tracking-[0.25em] uppercase">
            <button
              onClick={() => setLang("hr")}
              className={`px-2 py-1 transition-colors duration-500 ${lang === "hr" ? "text-burgundy" : "text-muted-foreground hover:text-espresso"}`}
            >
              HR
            </button>
            <span className="text-muted-foreground/40">/</span>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 transition-colors duration-500 ${lang === "en" ? "text-burgundy" : "text-muted-foreground hover:text-espresso"}`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => onBook()}
            className="hidden sm:inline-flex items-center gap-2 border border-burgundy text-burgundy px-5 py-3 eyebrow hover:bg-burgundy hover:text-ivory transition-all duration-700"
          >
            {t.nav.cta}
          </button>

          <button
            className="lg:hidden p-2"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="block w-6 h-px bg-espresso mb-1.5" />
            <span className="block w-6 h-px bg-espresso mb-1.5" />
            <span className="block w-4 h-px bg-espresso ml-auto" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass-nav border-t border-border px-6 py-8 space-y-6 animate-fade-in">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-serif text-2xl text-espresso"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-4 border-t border-border eyebrow">
            <button onClick={() => setLang("hr")} className={lang === "hr" ? "text-burgundy" : "text-muted-foreground"}>HR</button>
            <span>/</span>
            <button onClick={() => setLang("en")} className={lang === "en" ? "text-burgundy" : "text-muted-foreground"}>EN</button>
          </div>
          <button
            onClick={() => { setOpen(false); onBook(); }}
            className="w-full bg-burgundy text-ivory py-4 eyebrow"
          >
            {t.nav.cta}
          </button>
        </div>
      )}
    </header>
  );
}
