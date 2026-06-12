import { useI18n } from "@/lib/i18n";
import dinner from "@/assets/experience-dinner.jpg";

export function Experiences({ onBook }: { onBook: (idx: number) => void }) {
  const { t } = useI18n();
  return (
    <section id="experiences" className="relative py-32 md:py-44 bg-ivory overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 reveal">
          <div className="relative overflow-hidden">
            <img
              src={dinner}
              alt="Candlelit dinner under the stars on Korčula"
              loading="lazy"
              width={1600}
              height={1100}
              className="w-full h-[520px] md:h-[680px] object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-burgundy-deep/70 to-transparent h-1/2" />
            <div className="absolute bottom-8 left-8 right-8 text-ivory">
              <div className="eyebrow text-gold mb-3">Žrnovo · Korčula</div>
              <p className="font-serif text-2xl md:text-3xl italic leading-snug font-light">
                "Pod zvijezdama, među bačvama — vrijeme staje."
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="reveal">
            <div className="flex items-center gap-4 text-burgundy mb-6">
              <span className="hairline" />
              <span className="eyebrow">{t.experiences.eyebrow}</span>
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.05] text-espresso">
              <em className="not-italic font-light">{t.experiences.title}</em>
            </h2>
            <p className="mt-6 text-espresso/70 text-lg font-light max-w-xl leading-relaxed">{t.experiences.sub}</p>
          </div>

          <div className="mt-14 divide-y divide-border">
            {t.experiences.items.map((item, i) => (
              <div
                key={i}
                className="group reveal py-8 grid grid-cols-12 gap-6 items-center hover:bg-cream/60 -mx-4 px-4 transition-colors duration-700"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="col-span-1 font-serif text-burgundy/50 text-xl">0{i + 1}</div>
                <div className="col-span-12 md:col-span-6 -mt-2 md:mt-0">
                  <h3 className="font-serif text-2xl md:text-3xl text-espresso">{item.name}</h3>
                  <p className="mt-2 text-espresso/65 font-light text-[15px] leading-relaxed">{item.desc}</p>
                  <p className="eyebrow text-muted-foreground mt-3">{item.duration}</p>
                </div>
                <div className="col-span-6 md:col-span-2 text-left md:text-right">
                  <div className="eyebrow text-muted-foreground">{t.experiences.from}</div>
                  <div className="font-serif text-2xl text-burgundy mt-1">{item.price}</div>
                  <div className="text-xs text-muted-foreground">{t.experiences.perPerson}</div>
                </div>
                <div className="col-span-6 md:col-span-3 text-right">
                  <button
                    onClick={() => onBook(i)}
                    className="inline-flex items-center gap-2 border border-burgundy text-burgundy px-5 py-3 eyebrow hover:bg-burgundy hover:text-ivory transition-all duration-700"
                  >
                    {t.experiences.book} <span className="transition-transform duration-700 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
