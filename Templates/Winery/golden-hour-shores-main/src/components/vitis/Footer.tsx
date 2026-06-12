import { Instagram } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="bg-burgundy-deep text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-12">
          {/* Brand + newsletter */}
          <div className="md:col-span-5 space-y-8">
            <div>
              <div className="font-serif text-4xl tracking-wider">Vitis</div>
              <div className="eyebrow !text-gold mt-2 !text-[0.65rem]">Lumbarda · Korčula</div>
            </div>
            <p className="font-serif italic text-2xl text-cream/90 leading-snug max-w-sm">
              Letters from the vineyard, a few times a year.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSent(true);
              }}
              className="flex border-b border-cream/30 max-w-sm focus-within:border-gold transition-colors"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-transparent py-3 text-sm text-cream placeholder:text-cream/40 outline-none"
              />
              <button type="submit" className="text-[0.7rem] uppercase tracking-[0.28em] text-gold hover:text-cream transition">
                {sent ? "Merci ✦" : "Subscribe"}
              </button>
            </form>
          </div>

          {/* Visit */}
          <div className="md:col-span-3 space-y-4">
            <div className="eyebrow !text-gold">Visit</div>
            <address className="not-italic text-sm text-cream/80 leading-relaxed font-light">
              Put Vela Postrana 1<br />
              20263 Lumbarda<br />
              Korčula, Croatia
            </address>
            <div className="text-sm text-cream/60 pt-2 leading-relaxed">
              <div>Apr – Oct · 11:00 – 22:00</div>
              <div>By reservation only</div>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-2 space-y-4">
            <div className="eyebrow !text-gold">Contact</div>
            <div className="text-sm text-cream/80 font-light space-y-2">
              <a href="mailto:hello@vitis-winery.hr" className="block hover:text-gold transition">
                hello@vitis-winery.hr
              </a>
              <a href="tel:+38520000000" className="block hover:text-gold transition">
                +385 20 000 000
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="md:col-span-2 space-y-4">
            <div className="eyebrow !text-gold">Follow</div>
            <div className="flex flex-col gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-cream/80 hover:text-gold transition">
                <Instagram size={14} /> Instagram
              </a>
              <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-cream/80 hover:text-gold transition">
                ◎ TripAdvisor
              </a>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-20 h-48 w-full border border-cream/15 bg-burgundy/40 flex items-center justify-center text-cream/40 text-xs uppercase tracking-[0.3em]">
          ⌖ &nbsp; Map · Lumbarda, Korčula
        </div>

        <div className="mt-16 pt-8 border-t border-cream/15 flex flex-col md:flex-row justify-between gap-4 text-[0.7rem] uppercase tracking-[0.28em] text-cream/50">
          <div>© {new Date().getFullYear()} Vitis Winery</div>
          <div>Crafted on the sandy shores of Lumbarda</div>
        </div>
      </div>
    </footer>
  );
}
