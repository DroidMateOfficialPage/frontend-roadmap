import { useI18n } from "@/lib/i18n";
import hero from "@/assets/hero-vineyard.jpg";

export function Hero({ onBook }: { onBook: () => void }) {
  const { t } = useI18n();
  return (
    <section id="top" className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Sunset over the Tasovac vineyards in Žrnovo, Korčula"
          width={1920}
          height={1280}
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/30 via-burgundy-deep/10 to-ivory/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-deep/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-4xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-4 text-ivory/85 mb-8">
            <span className="hairline" />
            <span className="eyebrow">{t.hero.eyebrow}</span>
          </div>
          <h1 className="font-serif text-ivory text-[clamp(2.6rem,7vw,6.5rem)] leading-[1.02] tracking-[-0.015em] whitespace-pre-line">
            <em className="not-italic font-light">{t.hero.title}</em>
          </h1>
          <p className="mt-8 max-w-xl text-ivory/85 text-lg md:text-xl font-light leading-relaxed">
            {t.hero.sub}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <button
              onClick={onBook}
              className="group inline-flex items-center gap-3 bg-ivory text-burgundy px-8 py-4 eyebrow hover:bg-gold hover:text-espresso transition-all duration-700"
            >
              {t.nav.cta}
              <span className="inline-block transition-transform duration-700 group-hover:translate-x-1">→</span>
            </button>
            <a href="#story" className="text-ivory/85 eyebrow flex items-center gap-3 hover:text-gold transition-colors duration-500">
              {t.hero.scroll} <span className="hairline opacity-60" />
            </a>
          </div>
        </div>
      </div>

      <a href="#story" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-ivory/70 flex flex-col items-center gap-3 animate-scroll-hint">
        <span className="text-[0.65rem] tracking-[0.3em] uppercase">scroll</span>
        <span className="block w-px h-12 bg-ivory/50" />
      </a>
    </section>
  );
}
