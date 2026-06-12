import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroCake from "@/assets/hero-cake.jpg";
import cakeFondant from "@/assets/cake-fondant.jpg";
import cakeSeminaked from "@/assets/cake-seminaked.jpg";
import cakeRustic from "@/assets/cake-rustic.jpg";
import cakeLuxury from "@/assets/cake-luxury.jpg";
import flavoursImg from "@/assets/flavours.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sandra's Cakes — Bespoke Wedding Cakes · St Andrews, Scotland" },
      { name: "description", content: "Handcrafted luxury wedding cakes by Sandra in St Andrews, Fife. Bespoke designs, seasonal flavours, gluten-free and vegan options. Est. 2012." },
      { property: "og:title", content: "Sandra's Cakes — Bespoke Wedding Cakes" },
      { property: "og:description", content: "Luxury bespoke wedding cakes handcrafted in St Andrews, Scotland." },
      { property: "og:image", content: heroCake },
      { name: "twitter:image", content: heroCake },
    ],
  }),
  component: Index,
});

function Index() {
  const portfolios = [
    { img: cakeFondant, title: "Fondant Classic", tag: "Timeless Elegance" },
    { img: cakeSeminaked, title: "Semi-Naked", tag: "Organic Texture" },
    { img: cakeRustic, title: "Rustic Charm", tag: "Highland Heart" },
    { img: cakeLuxury, title: "A Little Bit of Luxury", tag: "Grand Opulence" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-16 md:pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-deep mb-5 block">
              St Andrews · Scotland · Est. 2012
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[0.95] mb-8">
              Artistry in every <span className="italic font-medium">bespoke</span> layer
            </h1>
            <p className="text-lg text-ink/70 max-w-xl leading-relaxed">
              Crafting high-end, handmade wedding cakes that serve as the breathtaking
              centerpiece of your St Andrews celebration. Awarded · Lovingly made · Tasted to perfection.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-ink text-canvas text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-deep transition-colors">
                Begin a commission
              </Link>
              <Link to="/portfolio" className="px-8 py-4 border border-ink/20 text-[11px] uppercase tracking-[0.3em] font-medium hover:border-deep hover:text-deep transition-colors">
                View the portfolio
              </Link>
            </div>
          </div>
          <div className="w-full aspect-[21/9] overflow-hidden rounded-sm">
            <img
              src={heroCake}
              alt="Four-tier white wedding cake with cascading blush peonies in a Scottish stone ballroom"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <h2 className="text-4xl md:text-5xl font-display tracking-tight">
              Portfolio <span className="italic">Curations</span>
            </h2>
            <p className="text-sm text-ink/60 max-w-xs md:text-right">
              Four distinct aesthetics, tailored to the unique spirit of your wedding venue.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolios.map((p) => (
              <Link key={p.title} to="/portfolio" className="group block">
                <div className="w-full aspect-[4/5] overflow-hidden bg-blush mb-4">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
                <h3 className="font-display text-xl mb-1">{p.title}</h3>
                <p className="text-[11px] uppercase tracking-widest text-ink/40">{p.tag}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Flavours preview */}
      <section className="py-20 md:py-24 bg-rose/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-deep block mb-4">The Menu</span>
            <h2 className="text-4xl md:text-5xl font-display italic mb-8">A Flavour Library</h2>
            <p className="text-ink/70 leading-relaxed mb-10 max-w-md">
              All cakes are baked fresh to order with the finest local ingredients. Jams,
              curds and fillings are made from scratch — finished with Swiss meringue
              buttercream or whipped ganache.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="px-4 py-2 bg-white text-[10px] uppercase tracking-widest border border-rose/30">Gluten Free</span>
              <span className="px-4 py-2 bg-white text-[10px] uppercase tracking-widest border border-rose/30">Vegan</span>
              <span className="px-4 py-2 bg-white text-[10px] uppercase tracking-widest border border-rose/30">Dairy Free</span>
            </div>
            <Link to="/flavours" className="text-[11px] uppercase tracking-[0.3em] text-deep border-b border-deep/40 pb-1 hover:border-deep transition-colors">
              Explore all flavours →
            </Link>
          </div>
          <div className="aspect-[4/5] overflow-hidden">
            <img src={flavoursImg} alt="Cake slices with raspberries and lavender" width={1024} height={1280} loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-deep mb-8">Kind Words</p>
          <blockquote className="text-3xl md:text-5xl font-display italic leading-[1.15] text-balance">
            “The most exquisite cake we have ever tasted. It wasn&rsquo;t just dessert &mdash; it was
            the centerpiece of our day.”
          </blockquote>
          <p className="mt-10 text-[11px] uppercase tracking-[0.3em] text-ink/50">
            Elena &amp; Thomas · Fairmont St Andrews
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-ink text-canvas">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display mb-6">
            Begin the <span className="italic">Commission</span>
          </h2>
          <p className="text-canvas/70 mb-10 max-w-xl mx-auto">
            Limited availability for 2026 and 2027 wedding seasons. Each cake is
            handcrafted in Sandra&rsquo;s kitchen — we take only a handful per month.
          </p>
          <Link to="/contact" className="inline-block px-12 py-4 bg-rose text-ink text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-canvas transition-colors">
            Send an enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
