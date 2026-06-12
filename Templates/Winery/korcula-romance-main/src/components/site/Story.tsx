import { useI18n } from "@/lib/i18n";
import hands from "@/assets/story-hands.jpg";
import cellar from "@/assets/cellar.jpg";

export function Story() {
  const { t } = useI18n();
  return (
    <section id="story" className="relative py-32 md:py-44 bg-ivory">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32 reveal">
          <div className="flex items-center gap-4 text-burgundy mb-8">
            <span className="hairline" />
            <span className="eyebrow">{t.story.eyebrow}</span>
          </div>
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.05] text-espresso">
            <em className="not-italic font-light">{t.story.title}</em>
          </h2>
          <div className="mt-12 space-y-7 text-espresso/80 text-lg leading-[1.85] font-light max-w-xl">
            <p className="first-letter:font-serif first-letter:text-burgundy first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:mt-1">
              {t.story.p1}
            </p>
            <p>{t.story.p2}</p>
            <p>{t.story.p3}</p>
            <p className="font-serif italic text-burgundy text-xl pt-4">{t.story.signature}</p>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-7 reveal overflow-hidden group">
            <img
              src={hands}
              alt="Winemaker holding grapes"
              loading="lazy"
              width={1080}
              height={1500}
              className="w-full h-[520px] md:h-[640px] object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]"
            />
          </div>
          <div className="col-span-5 flex flex-col gap-4 md:gap-6 pt-16 md:pt-24">
            <div className="reveal overflow-hidden group" style={{ transitionDelay: "120ms" }}>
              <img
                src={cellar}
                alt="Old stone wine cellar"
                loading="lazy"
                width={900}
                height={1100}
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.05]"
              />
            </div>
            <div className="reveal pl-2" style={{ transitionDelay: "220ms" }}>
              <div className="border-l border-burgundy/30 pl-5 py-2">
                <div className="font-serif text-burgundy text-5xl leading-none">III</div>
                <div className="eyebrow text-muted-foreground mt-3">generacije</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
