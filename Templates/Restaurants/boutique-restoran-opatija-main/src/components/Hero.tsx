import heroImg from "@/assets/hero.jpg";

interface HeroProps {
  onReserve: () => void;
}

export function Hero({ onReserve }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-ocean text-ocean-foreground">
      <img
        src={heroImg}
        alt="Mediterranean fine dining at Boutique Restaurant in Opatija"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean/40 via-ocean/30 to-ocean/85" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-24 pt-40 lg:px-10 lg:pb-32">
        <div className="max-w-3xl">
          <p className="eyebrow reveal text-ocean-foreground/70">Boutique Restaurant · Opatija, Croatia</p>
          <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.02] tracking-[-0.02em] text-balance sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Taste the tradition.
            <br />
            <em className="font-light italic text-gold">Experience</em> the elegance.
          </h1>
          <p className="reveal reveal-delay-2 mt-8 max-w-xl text-base leading-relaxed text-ocean-foreground/80 sm:text-lg">
            An exclusive Mediterranean fine-dining journey on the shores of Opatija,
            where culinary artistry meets breathtaking Adriatic views.
          </p>

          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={onReserve}
              className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs uppercase tracking-[0.28em] text-gold-foreground transition hover:bg-ivory"
            >
              Book a Table
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <a
              href="#menu"
              className="inline-flex items-center gap-3 border border-ocean-foreground/40 px-8 py-4 text-xs uppercase tracking-[0.28em] text-ocean-foreground transition hover:border-gold hover:text-gold"
            >
              Explore Menu
            </a>
          </div>
        </div>

        <a
          href="#philosophy"
          aria-label="Scroll down"
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-ocean-foreground/70 md:flex"
        >
          <span className="eyebrow text-ocean-foreground/60">Scroll</span>
          <span className="shimmer-down h-12 w-px bg-gradient-to-b from-gold to-transparent" />
        </a>
      </div>
    </section>
  );
}
