import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

export function Reviews() {
  const { t } = useI18n();
  const [idx, setIdx] = useState(0);
  const items = t.reviews.items;

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % items.length), 7000);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <section id="reviews" className="relative py-32 md:py-44 bg-burgundy-deep text-ivory overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-10 left-10 font-serif text-[40rem] leading-none text-gold">"</div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
        <div className="flex items-center justify-center gap-4 text-gold mb-8 reveal">
          <span className="hairline" />
          <span className="eyebrow">{t.reviews.eyebrow}</span>
          <span className="hairline" />
        </div>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight font-light reveal max-w-3xl mx-auto">
          <em className="not-italic">{t.reviews.title}</em>
        </h2>

        <div className="mt-20 relative min-h-[260px] md:min-h-[220px]">
          {items.map((it, i) => (
            <blockquote
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
              <p className="font-serif text-2xl md:text-4xl italic leading-relaxed font-light text-ivory/95">
                "{it.quote}"
              </p>
              <footer className="mt-10 eyebrow text-gold">
                {it.author} <span className="text-ivory/40 mx-2">·</span> {it.source}
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center gap-3">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Review ${i + 1}`}
              className={`h-px transition-all duration-700 ${i === idx ? "w-12 bg-gold" : "w-6 bg-ivory/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
