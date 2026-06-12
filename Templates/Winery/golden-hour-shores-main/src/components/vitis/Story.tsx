import { motion, type Variants } from "framer-motion";
import handsImg from "@/assets/story-hands.jpg";
import cellarImg from "@/assets/story-cellar.jpg";

const reveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Story() {
  return (
    <section id="story" className="relative bg-cream py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-12">
        {/* Text */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={reveal}
          className="flex flex-col justify-center"
        >
          <span className="eyebrow mb-6">
            <span className="hairline mr-4" />
            Our Heritage
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-burgundy-deep">
            A vineyard born of <em className="italic">sand</em>,<br />
            sea, and time.
          </h2>
          <div className="mt-10 space-y-6 text-espresso/80 leading-[1.85] max-w-lg">
            <p>
              Lumbarda is the only place in the world where the rare
              indigenous <strong className="font-medium text-burgundy">Grk</strong> grape
              survives — clinging to the warm, sandy soils that the Adriatic has
              carried here for centuries.
            </p>
            <p>
              For four generations, our family has tended these vines by hand. Each
              harvest is a quiet ritual: pruning at dawn, picking at dusk, and aging
              in stone cellars cooled by the sea breeze.
            </p>
            <p className="italic font-serif text-xl text-burgundy">
              "We don't make the wine. The island does. We only listen."
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-8 max-w-md">
            {[
              { n: "1924", l: "Founded" },
              { n: "4", l: "Generations" },
              { n: "12ha", l: "Vineyards" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl text-burgundy-deep">{s.n}</div>
                <div className="eyebrow mt-1 !text-[0.6rem]">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Asymmetrical gallery */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={reveal}
          transition={{ delay: 0.2 }}
          className="relative h-[640px] md:h-[720px]"
        >
          <div className="absolute right-0 top-0 h-[60%] w-[70%] overflow-hidden shadow-2xl">
            <img
              src={handsImg}
              alt="Hands holding Grk grapes"
              width={1024}
              height={1100}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
          <div className="absolute bottom-0 left-0 h-[55%] w-[62%] overflow-hidden shadow-2xl">
            <img
              src={cellarImg}
              alt="Stone wine cellar with barrels"
              width={900}
              height={1100}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
          <div className="absolute bottom-8 right-8 flex flex-col items-end">
            <span className="font-serif italic text-burgundy-deep text-2xl">Lumbarda</span>
            <span className="eyebrow !text-burgundy/70 mt-1">42° 55′ N</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
