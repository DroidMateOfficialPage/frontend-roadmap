import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Price Guide — Sandra's Cakes" },
      { name: "description", content: "Transparent pricing for bespoke wedding cakes from Sandra's Cakes, St Andrews. Intimate, signature and grand tier guides." },
      { property: "og:title", content: "Price Guide — Sandra's Cakes" },
      { property: "og:description", content: "Transparent pricing for bespoke wedding cakes in St Andrews." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  { name: "Intimate", title: "Single Tier", serves: "Up to 25 guests", price: "From £180", note: "Ideal for micro-weddings, elopements and editorial shoots." },
  { name: "Signature", title: "Three Tier", serves: "80 – 120 guests", price: "From £650", note: "Our most requested size — perfect for classic weddings.", featured: true },
  { name: "Grand", title: "Four+ Tiers & Dessert Tables", serves: "150+ guests", price: "Bespoke Quote", note: "Sculptural centerpieces and full dessert landscapes." },
];

const addOns = [
  { name: "Sugar flowers (per stem)", price: "£15 – £45" },
  { name: "24k gold leaf detailing", price: "From £65" },
  { name: "Hand-painted illustration", price: "From £120" },
  { name: "Delivery & on-site set-up", price: "From £45" },
  { name: "Tasting consultation (4 flavours)", price: "£65 per couple" },
  { name: "Cake stand hire", price: "£30 (refundable deposit)" },
];

function PricingPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <span className="text-[11px] uppercase tracking-[0.3em] text-deep mb-5 block">The Investment</span>
          <h1 className="text-5xl md:text-7xl font-display leading-[0.95] mb-6 max-w-3xl">
            Transparent <span className="italic">pricing</span>, bespoke results
          </h1>
          <p className="text-lg text-ink/70 max-w-2xl">
            Each commission is uniquely tailored to your day. The guide below reflects starting prices.
            We&rsquo;ll provide a detailed quote after your consultation.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`p-10 border ${t.featured ? "border-deep bg-blush/40" : "border-ink/10 bg-white"}`}>
              <span className="text-[10px] uppercase tracking-[0.3em] text-deep mb-6 block">{t.name}</span>
              <h3 className="font-display text-3xl mb-2">{t.title}</h3>
              <p className="text-[11px] uppercase tracking-widest text-ink/40 mb-6">{t.serves}</p>
              <p className="text-2xl font-display mb-6">{t.price}</p>
              <p className="text-sm text-ink/60">{t.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24 bg-rose/10">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-display italic mb-12">Bespoke add-ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {addOns.map((a) => (
              <div key={a.name} className="flex justify-between items-baseline pb-3 border-b border-ink/10">
                <span className="text-sm">{a.name}</span>
                <span className="text-sm font-medium text-deep">{a.price}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-ink/50 mt-10 italic">
            A 30% non-refundable deposit secures your date. Final balance due 4 weeks before your event.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-display mb-6">Ready for a personalised quote?</h2>
          <Link to="/contact" className="inline-block px-12 py-4 bg-ink text-canvas text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-deep transition-colors">
            Request your quote
          </Link>
        </div>
      </section>
    </>
  );
}