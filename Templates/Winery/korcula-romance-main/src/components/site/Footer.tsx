import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer id="contact" className="bg-burgundy-deep text-ivory">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="font-serif text-4xl text-ivory">Tasovac</div>
            <div className="eyebrow text-gold mt-2">{t.footer.tagline}</div>
          </div>
          <p className="text-ivory/70 font-light max-w-md leading-relaxed">
            {t.footer.newsletterDesc}
          </p>
          <form
            onSubmit={(e) => { e.preventDefault(); if (email) { setDone(true); setEmail(""); } }}
            className="flex border-b border-ivory/30 focus-within:border-gold transition-colors duration-500 max-w-md"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.footer.newsletterPh}
              className="flex-1 bg-transparent py-4 outline-none placeholder:text-ivory/40 text-ivory"
            />
            <button type="submit" className="eyebrow text-gold hover:text-ivory transition-colors duration-500 px-4">
              {done ? "✓" : t.footer.subscribe}
            </button>
          </form>
        </div>

        <div className="lg:col-span-3 space-y-3">
          <div className="eyebrow text-gold">{t.footer.hours}</div>
          <p className="text-ivory/80 font-light whitespace-pre-line leading-relaxed">{t.footer.hoursVal}</p>
        </div>

        <div className="lg:col-span-4 space-y-3">
          <div className="eyebrow text-gold">{t.footer.visit}</div>
          <p className="text-ivory/80 font-light whitespace-pre-line leading-relaxed">{t.footer.visitVal}</p>
          <div className="overflow-hidden border border-ivory/15 mt-4">
            <iframe
              title="Map of Žrnovo, Korčula"
              src="https://www.openstreetmap.org/export/embed.html?bbox=17.10%2C42.93%2C17.18%2C42.97&layer=mapnik&marker=42.9523%2C17.1416"
              className="w-full h-44 grayscale contrast-110 opacity-80"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory/50">
          <div>© {new Date().getFullYear()} Vinarija Tasovac. {t.footer.rights}</div>
          <div className="flex items-center gap-6 eyebrow">
            <a href="https://www.instagram.com/tasovac_winery/" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors duration-500">Instagram</a>
            <a href="https://www.tripadvisor.com/Attraction_Review-g2039690-d24186480-Reviews-Tasovac_winery-Zrnovo_Korcula_Town_Korcula_Island_Dubrovnik_Neretva_County_Dalm.html" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors duration-500">TripAdvisor</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
