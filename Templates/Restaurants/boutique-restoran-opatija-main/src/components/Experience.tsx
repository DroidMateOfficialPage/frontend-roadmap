import { useState } from "react";

const reviews = [
  {
    quote:
      "A perfect symphony of impeccable service, an otherworldly sea view, and unforgettable flavors. A true boutique gem in Opatija.",
    author: "Elena R.",
    detail: "Conde Nast Traveler",
  },
  {
    quote:
      "Every course felt composed with intention. The scampi was the finest I've had on the Adriatic — luminous and pure.",
    author: "Marco V.",
    detail: "Guest, Milan",
  },
  {
    quote:
      "An evening of quiet luxury. The wine pairing turned dinner into a slow, deliberate ceremony.",
    author: "Sophie L.",
    detail: "Guest, Paris",
  },
];

export function Experience() {
  const [idx, setIdx] = useState(0);
  const current = reviews[idx];

  return (
    <section id="experience" className="relative bg-ivory py-28 lg:py-40">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <p className="eyebrow">03 — The Experience</p>
        <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
          Voices from our <em className="italic text-gold">guests</em>.
        </h2>

        <div className="relative mt-20">
          <span className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 font-display text-[12rem] leading-none text-gold/20">
            “
          </span>
          <blockquote
            key={idx}
            className="reveal mx-auto max-w-3xl font-display text-2xl italic leading-[1.5] text-foreground md:text-4xl"
          >
            {current.quote}
          </blockquote>
          <div className="mt-10">
            <p className="text-sm tracking-wide text-foreground">{current.author}</p>
            <p className="eyebrow mt-2">{current.detail}</p>
          </div>
        </div>

        <div className="mt-14 flex justify-center gap-3">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Review ${i + 1}`}
              className={`h-px transition-all duration-500 ${
                i === idx ? "w-16 bg-gold" : "w-8 bg-border hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
