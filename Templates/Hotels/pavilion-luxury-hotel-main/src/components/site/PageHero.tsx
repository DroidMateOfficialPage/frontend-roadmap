type Props = {
  eyebrow: string;
  title: string;
  italic?: string;
  subtitle?: string;
  image: string;
  height?: "tall" | "short";
};

export function PageHero({ eyebrow, title, italic, subtitle, image, height = "short" }: Props) {
  return (
    <section className={`relative w-full overflow-hidden ${height === "tall" ? "h-[85svh]" : "h-[65svh]"}`}>
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" loading="eager" width={1920} height={1200} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 pt-20 animate-fade-up">
        <p className="eyebrow mb-8">✦ {eyebrow} ✦</p>
        <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[1] tracking-tight max-w-5xl">
          {title} {italic && <span className="italic text-gold-soft">{italic}</span>}
        </h1>
        {subtitle && (
          <>
            <div className="gold-rule w-24 my-8" />
            <p className="font-display italic text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">{subtitle}</p>
          </>
        )}
      </div>
    </section>
  );
}
