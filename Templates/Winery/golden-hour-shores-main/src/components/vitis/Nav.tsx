import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#story", label: "The Story" },
  { href: "#wines", label: "Our Wines" },
  { href: "#experience", label: "The Experience" },
];

export function Nav({ onBook }: { onBook: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        <a href="#top" className="group flex items-baseline gap-2">
          <span
            className={`font-serif text-2xl tracking-wider transition-colors duration-500 ${
              scrolled ? "text-burgundy-deep" : "text-cream"
            }`}
          >
            Vitis
          </span>
          <span
            className={`eyebrow !text-[0.6rem] transition-colors duration-500 ${
              scrolled ? "!text-burgundy" : "!text-cream/80"
            }`}
          >
            Lumbarda · Korčula
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`group relative text-[0.72rem] uppercase tracking-[0.28em] transition-colors duration-500 ${
                scrolled ? "text-espresso hover:text-burgundy-deep" : "text-cream/90 hover:text-cream"
              }`}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          onClick={onBook}
          className={`hidden md:inline-flex items-center gap-2 px-6 py-3 text-[0.7rem] uppercase tracking-[0.28em] transition-all duration-500 ${
            scrolled
              ? "bg-burgundy-deep text-cream border border-burgundy-deep hover:bg-transparent hover:text-burgundy-deep"
              : "bg-transparent text-cream border border-cream/60 hover:bg-cream hover:text-burgundy-deep"
          }`}
        >
          Book a Tasting
        </button>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className={`md:hidden ${scrolled ? "text-espresso" : "text-cream"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-nav px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-espresso text-sm uppercase tracking-[0.28em]"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              onBook();
            }}
            className="btn-luxury btn-luxury-hover"
          >
            Book a Tasting
          </button>
        </div>
      </div>
    </header>
  );
}
