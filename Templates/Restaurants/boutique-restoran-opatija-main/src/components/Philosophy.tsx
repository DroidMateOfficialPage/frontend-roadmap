import aboutImg from "@/assets/about.jpg";

export function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-ivory py-28 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <div className="lg:col-span-5">
          <p className="eyebrow">01 — Our Philosophy</p>
          <div className="mt-8 space-y-1">
            <h2 className="font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
              Where the sea
            </h2>
            <h2 className="font-display text-5xl italic leading-[1.05] tracking-tight text-gold md:text-6xl">
              meets culinary
            </h2>
            <h2 className="font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
              art.
            </h2>
          </div>

          <div className="mt-12 hidden overflow-hidden lg:block">
            <img
              src={aboutImg}
              alt="Boutique restaurant dining room overlooking the Adriatic"
              width={1280}
              height={1600}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover grayscale-[15%] transition duration-700 hover:grayscale-0"
            />
          </div>
        </div>

        <div className="lg:col-span-7 lg:pt-32">
          <div className="border-l border-gold/60 pl-8 lg:pl-12">
            <p className="text-lg leading-[1.85] text-foreground/85 md:text-xl">
              Nestled in the heart of charming Opatija, Boutique Restaurant is more
              than a dining destination — it is a sensory journey through the
              authentic flavors of <em className="italic text-ocean">Istria and Kvarner</em>.
            </p>
            <p className="mt-8 text-base leading-[1.9] text-muted-foreground md:text-lg">
              Our philosophy balances deep respect for local heritage with modern,
              creative culinary techniques. Every plate tells a story of the
              morning catch, fragrant truffles, and hand-selected seasonal
              ingredients from local estates.
            </p>

            <div className="mt-14 grid grid-cols-2 gap-10 border-t border-border pt-10">
              <div>
                <p className="font-display text-4xl text-ocean">15+</p>
                <p className="eyebrow mt-3">Years of Craft</p>
              </div>
              <div>
                <p className="font-display text-4xl text-ocean">Daily</p>
                <p className="eyebrow mt-3">Adriatic Catch</p>
              </div>
            </div>
          </div>

          <div className="mt-10 overflow-hidden lg:hidden">
            <img
              src={aboutImg}
              alt="Boutique restaurant dining room overlooking the Adriatic"
              width={1280}
              height={1600}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
