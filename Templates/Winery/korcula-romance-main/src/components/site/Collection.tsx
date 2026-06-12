import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import plavac from "@/assets/bottle-plavac.jpg";
import posip from "@/assets/bottle-posip.jpg";
import pagvan from "@/assets/bottle-pagvan.jpg";

const images = [posip, plavac, pagvan];
const numerals = ["I", "II", "III"];

export function Collection() {
  const { t } = useI18n();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="collection" className="relative py-32 md:py-44 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-20 reveal">
          <div className="md:col-span-7">
            <div className="flex items-center gap-4 text-burgundy mb-6">
              <span className="hairline" />
              <span className="eyebrow">{t.collection.eyebrow}</span>
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.05] text-espresso">
              <em className="not-italic font-light">{t.collection.title}</em>
            </h2>
          </div>
          <p className="md:col-span-5 text-espresso/70 text-lg font-light leading-relaxed">
            {t.collection.sub}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-14">
          {t.collection.items.map((item, i) => (
            <article
              key={i}
              className="reveal group cursor-pointer"
              style={{ transitionDelay: `${i * 120}ms` }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="relative overflow-hidden bg-ivory aspect-[3/4]">
                <img
                  src={images[i]}
                  alt={item.name}
                  loading="lazy"
                  width={900}
                  height={1200}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute top-5 left-5 font-serif text-3xl text-burgundy/70">{numerals[i]}</div>
                <div
                  className={`absolute inset-0 bg-burgundy-deep/90 text-ivory p-8 md:p-10 flex flex-col justify-end transition-opacity duration-700 ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="space-y-5 text-sm leading-relaxed">
                    <div>
                      <div className="eyebrow text-gold mb-2">{t.collection.tasting}</div>
                      <p className="font-light text-base">{item.tasting}</p>
                    </div>
                    <div>
                      <div className="eyebrow text-gold mb-2">{t.collection.pairing}</div>
                      <p className="font-light">{item.pairing}</p>
                    </div>
                    <div className="pt-2 border-t border-ivory/15 flex items-center justify-between">
                      <span className="eyebrow text-gold">{t.collection.vintage}</span>
                      <span className="font-serif text-xl">{item.vintage}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-2xl md:text-3xl text-espresso">{item.name}</h3>
                <span className="eyebrow text-muted-foreground text-right">{item.vintage}</span>
              </div>
              <p className="eyebrow text-burgundy/80 mt-2">{item.kind}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
