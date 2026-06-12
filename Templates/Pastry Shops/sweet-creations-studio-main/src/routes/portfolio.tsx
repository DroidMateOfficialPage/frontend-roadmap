import { createFileRoute, Link } from "@tanstack/react-router";
import cakeFondant from "@/assets/cake-fondant.jpg";
import cakeSeminaked from "@/assets/cake-seminaked.jpg";
import cakeRustic from "@/assets/cake-rustic.jpg";
import cakeLuxury from "@/assets/cake-luxury.jpg";
import heroCake from "@/assets/hero-cake.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Sandra's Cakes · St Andrews" },
      { name: "description", content: "Browse Sandra's bespoke wedding cake portfolio: Fondant Classic, Semi-Naked, Rustic Charm, and A Little Bit of Luxury collections." },
      { property: "og:title", content: "Portfolio — Sandra's Cakes" },
      { property: "og:description", content: "Four distinct wedding cake aesthetics, handcrafted in St Andrews." },
    ],
  }),
  component: PortfolioPage,
});

const collections = [
  {
    id: "fondant",
    title: "Fondant Classic",
    tag: "Timeless Elegance",
    image: cakeFondant,
    description:
      "Smooth, sculpted fondant tiers finished with hand-piped lacework, edible gold leaf and delicate sugar roses. A timeless choice for grand venues and traditional ceremonies.",
    pieces: [
      { name: "Ivory Lace", price: "From £550", img: cakeFondant },
      { name: "Gilded Pearl", price: "From £680", img: heroCake },
      { name: "Botanical Press", price: "From £620", img: cakeLuxury },
    ],
  },
  {
    id: "seminaked",
    title: "Semi-Naked",
    tag: "Organic Texture",
    image: cakeSeminaked,
    description:
      "Exposed sponge brushed with thin Swiss meringue buttercream, dressed with fresh garden roses, foliage and seasonal berries. Romantic, soft, and unmistakably handcrafted.",
    pieces: [
      { name: "Highland Wildflower", price: "From £450", img: cakeSeminaked },
      { name: "Berry & Bloom", price: "From £480", img: cakeSeminaked },
      { name: "St Andrews Garden", price: "From £520", img: cakeSeminaked },
    ],
  },
  {
    id: "rustic",
    title: "Rustic Charm",
    tag: "Highland Heart",
    image: cakeRustic,
    description:
      "Textured buttercream painted in painterly swirls, finished with dried lavender, eucalyptus and Scottish wildflowers. Perfect for barn weddings and intimate celebrations.",
    pieces: [
      { name: "Coastal Texture", price: "From £420", img: cakeRustic },
      { name: "Lavender Field", price: "From £460", img: cakeRustic },
      { name: "Orchard Tier", price: "From £490", img: cakeRustic },
    ],
  },
  {
    id: "luxury",
    title: "A Little Bit of Luxury",
    tag: "Grand Opulence",
    image: cakeLuxury,
    description:
      "Showstopping multi-tier creations dressed in sugar peonies, hand-strung pearls and 24k gold leaf. Reserved for those who want the cake to be the moment.",
    pieces: [
      { name: "Gilded Elegance", price: "From £850", img: cakeLuxury },
      { name: "Pearl Cascade", price: "From £980", img: cakeLuxury },
      { name: "Velvet Reverie", price: "From £1,150", img: cakeLuxury },
    ],
  },
];

function PortfolioPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <span className="text-[11px] uppercase tracking-[0.3em] text-deep mb-5 block">The Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-display leading-[0.95] mb-6 max-w-3xl">
            Four collections, <span className="italic">infinite</span> possibilities
          </h1>
          <p className="text-lg text-ink/70 max-w-xl">
            Every cake is designed around you. Browse the collections for inspiration —
            then we&rsquo;ll create something entirely your own.
          </p>
        </div>
      </section>

      {collections.map((c, i) => (
        <section key={c.id} id={c.id} className={`py-20 md:py-24 ${i % 2 === 1 ? "bg-rose/10" : ""}`}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12 items-end">
              <div className="lg:col-span-5">
                <span className="text-[11px] uppercase tracking-[0.3em] text-deep mb-4 block">
                  Collection {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-4xl md:text-5xl font-display mb-2">{c.title}</h2>
                <p className="text-[11px] uppercase tracking-widest text-ink/40 mb-6">{c.tag}</p>
                <p className="text-ink/70 leading-relaxed">{c.description}</p>
              </div>
              <div className="lg:col-span-7 aspect-[4/3] overflow-hidden">
                <img src={c.image} alt={c.title} loading="lazy" width={1200} height={900} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {c.pieces.map((piece) => (
                <div key={piece.name}>
                  <div className="aspect-[4/5] overflow-hidden mb-4 bg-blush">
                    <img src={piece.img} alt={piece.name} loading="lazy" width={800} height={1000} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-display text-xl">{piece.name}</h3>
                    <span className="text-[11px] uppercase tracking-widest text-ink/50">{piece.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 md:py-24 bg-ink text-canvas text-center">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <h2 className="text-4xl md:text-5xl font-display mb-6">
            Found <span className="italic">your aesthetic?</span>
          </h2>
          <p className="text-canvas/70 mb-10">Let&rsquo;s talk about your day and design the cake that belongs in it.</p>
          <Link to="/contact" className="inline-block px-12 py-4 bg-rose text-ink text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-canvas transition-colors">
            Begin a commission
          </Link>
        </div>
      </section>
    </>
  );
}