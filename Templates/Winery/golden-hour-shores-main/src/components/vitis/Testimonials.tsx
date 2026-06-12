import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const quotes = [
  {
    text: "An unforgettable sunset, wines that tell a story, and hosts who made us feel like family. The most romantic evening of our honeymoon.",
    author: "Sofia & Marco",
    source: "TripAdvisor",
  },
  {
    text: "The Grk was a revelation. You can taste the sand, the sea, the centuries. This is what wine is supposed to feel like.",
    author: "James W.",
    source: "TripAdvisor",
  },
  {
    text: "Tucked away in Lumbarda, Vitis offers an intimate, elegant tasting that completely redefined our trip to Croatia. Pure poetry.",
    author: "Élise D.",
    source: "TripAdvisor",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % quotes.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-secondary py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="eyebrow mb-10 inline-block">
          <span className="hairline mr-4" />
          Whispers from our guests
          <span className="hairline ml-4" />
        </span>

        <div className="relative min-h-[260px] md:min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <span className="font-serif text-7xl text-burgundy/40 leading-none block">"</span>
              <p className="font-serif text-2xl md:text-3xl italic text-burgundy-deep leading-[1.4]">
                {quotes[i].text}
              </p>
              <footer>
                <div className="eyebrow !text-burgundy">{quotes[i].author}</div>
                <div className="text-xs text-muted-foreground mt-1">{quotes[i].source}</div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center gap-2">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Quote ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-px transition-all duration-500 ${
                idx === i ? "w-12 bg-burgundy-deep" : "w-6 bg-burgundy/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
