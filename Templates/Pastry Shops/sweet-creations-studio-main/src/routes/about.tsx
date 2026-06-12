import { createFileRoute, Link } from "@tanstack/react-router";
import aboutSandra from "@/assets/about-sandra.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sandra — Sandra's Cakes · St Andrews" },
      { name: "description", content: "Meet Sandra — wedding cake designer in St Andrews, Fife. Hand-crafting bespoke cakes since 2012." },
      { property: "og:title", content: "About Sandra — Sandra's Cakes" },
      { property: "og:description", content: "Meet the artist behind Sandra's Cakes." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 aspect-[4/5] overflow-hidden">
            <img src={aboutSandra} alt="Sandra crafting a sugar flower" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" />
          </div>
          <div className="lg:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.3em] text-deep mb-5 block">The Artist</span>
            <h1 className="text-5xl md:text-6xl font-display leading-[0.95] mb-8">
              Hello, I&rsquo;m <span className="italic">Sandra</span>
            </h1>
            <div className="space-y-6 text-ink/75 leading-relaxed text-lg">
              <p>
                For over a decade, I&rsquo;ve been lovingly handcrafting bespoke wedding cakes
                from my kitchen in St Andrews, Fife. What began as a passion has grown
                into an award-winning studio trusted by couples across Scotland.
              </p>
              <p>
                My cakes have the &ldquo;WOW&rdquo; factor &mdash; and taste just as good as they look.
                Each one is baked fresh to order using the best quality local ingredients.
                I make my jams, curds and fillings from scratch, and finish every cake with
                Swiss meringue buttercream or whipped ganache.
              </p>
              <p>
                I particularly love creating intricate sugar paste and wafer paper flowers
                &mdash; tiny botanical sculptures that turn each cake into a one-of-a-kind centerpiece.
              </p>
            </div>
            <Link to="/contact" className="inline-block mt-10 px-10 py-4 bg-ink text-canvas text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-deep transition-colors">
              Work with me
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-blush/40">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-display italic mb-12">Awards &amp; Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-ink/70">
            <div>
              <p className="font-display text-4xl text-deep mb-3">2023</p>
              <p className="text-[11px] uppercase tracking-widest">Scottish Wedding Awards · Cake Designer of the Year</p>
            </div>
            <div>
              <p className="font-display text-4xl text-deep mb-3">2021</p>
              <p className="text-[11px] uppercase tracking-widest">VOWS Awards · Highly Commended</p>
            </div>
            <div>
              <p className="font-display text-4xl text-deep mb-3">2019</p>
              <p className="text-[11px] uppercase tracking-widest">Featured · UK Wedding Magazine</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}