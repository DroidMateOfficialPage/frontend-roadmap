import { motion } from "framer-motion";
import heroImg from "@/assets/hero-vineyard.jpg";

export function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section id="top" className="relative h-screen min-h-[680px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Sunset over the vineyards of Lumbarda, Korčula"
          width={1920}
          height={1280}
          className="h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/45 via-burgundy-deep/20 to-burgundy-deep/80" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="eyebrow !text-cream/90 mb-8"
        >
          <span className="hairline mr-4 bg-gold" />
          Est. on sandy soil · Lumbarda
          <span className="hairline ml-4 bg-gold" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-cream text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] max-w-5xl italic"
        >
          Rooted in Tradition,
          <br />
          <span className="not-italic">Crafted with Passion.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="mt-8 max-w-xl text-cream/85 text-base md:text-lg font-light leading-relaxed"
        >
          A family winery on the southern shore of Korčula, where the Adriatic
          meets vines older than memory.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <button onClick={onBook} className="btn-luxury btn-luxury-hover">
            Book a Tasting
          </button>
          <a href="#wines" className="btn-ghost-luxury hover:bg-cream hover:text-burgundy-deep">
            Discover the Wines
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#story"
        aria-label="Scroll to story"
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-cream/70 hover:text-cream transition"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[0.6rem] uppercase tracking-[0.4em]">Scroll</span>
          <div className="h-12 w-px bg-cream/40 animate-scroll-indicator" />
        </div>
      </a>
    </section>
  );
}
