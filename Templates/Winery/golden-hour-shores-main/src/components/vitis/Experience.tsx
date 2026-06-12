import { motion } from "framer-motion";
import tastingImg from "@/assets/experience-tasting.jpg";

const packages = [
  {
    name: "The Heritage",
    price: "€45",
    duration: "75 min",
    includes: ["4 estate wines", "Local cheese & olives", "Vineyard tour"],
  },
  {
    name: "Sunset Reserve",
    price: "€85",
    duration: "2 hours",
    includes: ["6 wines incl. reserve", "Seasonal tasting menu", "Sunset terrace seating", "Private host"],
    featured: true,
  },
  {
    name: "Private Cellar",
    price: "€180",
    duration: "3 hours",
    includes: ["Full library tasting", "Five-course pairing", "Cellar dinner", "Bottle to take home"],
  },
];

export function Experience({ onBook }: { onBook: () => void }) {
  return (
    <section id="experience" className="relative bg-cream py-28 md:py-40">
      {/* Editorial banner */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative mx-auto mb-24 h-[60vh] min-h-[440px] max-w-[1600px] overflow-hidden"
      >
        <img
          src={tastingImg}
          alt="Romantic wine tasting at sunset over the Adriatic"
          width={1600}
          height={1100}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-deep/70 via-burgundy-deep/30 to-transparent" />
        <div className="absolute inset-0 flex items-center px-8 md:px-20">
          <div className="max-w-xl text-cream">
            <span className="eyebrow !text-gold mb-6 inline-block">
              <span className="hairline mr-4 !bg-gold" />
              The Experience
            </span>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
              An evening that lingers <em className="italic">long</em> after the last sip.
            </h2>
          </div>
        </div>
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className={`group relative flex flex-col p-10 transition-all duration-500 ${
                p.featured
                  ? "bg-burgundy-deep text-cream shadow-2xl md:-translate-y-4"
                  : "bg-card text-espresso border border-border hover:border-burgundy/40"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-10 bg-gold px-3 py-1 text-[0.6rem] uppercase tracking-[0.3em] text-burgundy-deep">
                  Most loved
                </span>
              )}
              <div className={`eyebrow ${p.featured ? "!text-gold" : ""}`}>{p.duration}</div>
              <h3 className={`mt-4 font-serif text-3xl ${p.featured ? "text-cream" : "text-burgundy-deep"}`}>
                {p.name}
              </h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className={`font-serif text-5xl ${p.featured ? "text-gold" : "text-burgundy-deep"}`}>
                  {p.price}
                </span>
                <span className={`text-xs ${p.featured ? "text-cream/60" : "text-muted-foreground"}`}>
                  / per guest
                </span>
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {p.includes.map((it) => (
                  <li
                    key={it}
                    className={`flex items-start gap-3 text-sm font-light leading-relaxed ${
                      p.featured ? "text-cream/85" : "text-espresso/75"
                    }`}
                  >
                    <span className={`mt-2 h-px w-3 ${p.featured ? "bg-gold" : "bg-burgundy"}`} />
                    {it}
                  </li>
                ))}
              </ul>

              <button
                onClick={onBook}
                className={`mt-10 w-full py-4 text-[0.7rem] uppercase tracking-[0.3em] transition-all duration-500 border ${
                  p.featured
                    ? "bg-gold border-gold text-burgundy-deep hover:bg-transparent hover:text-gold"
                    : "bg-transparent border-burgundy-deep text-burgundy-deep hover:bg-burgundy-deep hover:text-cream"
                }`}
              >
                Reserve
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
