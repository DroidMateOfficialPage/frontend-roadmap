import { createFileRoute, Link } from "@tanstack/react-router";
import flavoursImg from "@/assets/flavours.jpg";

export const Route = createFileRoute("/flavours")({
  head: () => ({
    meta: [
      { title: "Flavours — Sandra's Cakes · Gluten-Free & Vegan Options" },
      { name: "description", content: "Explore Sandra's flavour library: Sicilian lemon & raspberry, salted caramel, lavender & earl grey, and more. Gluten-free, vegan and dairy-free options available." },
      { property: "og:title", content: "Flavours — Sandra's Cakes" },
      { property: "og:description", content: "Seasonal cake flavours handmade with the finest local ingredients." },
    ],
  }),
  component: FlavoursPage,
});

type Tag = "GF" | "V" | "DF";
const tagLabel: Record<Tag, string> = { GF: "Gluten Free", V: "Vegan", DF: "Dairy Free" };

const flavours: { name: string; description: string; tags?: Tag[]; signature?: boolean }[] = [
  { name: "Madagascan Vanilla & Raspberry", description: "House-made heritage raspberry jam layered with velvety vanilla bean Swiss meringue buttercream.", tags: ["GF"], signature: true },
  { name: "Sicilian Lemon & Elderflower", description: "Zesty lemon sponge brushed with elderflower cordial, paired with tangy curd.", tags: ["V"] },
  { name: "Scottish Salted Caramel & Belgian Chocolate", description: "Rich cocoa layers filled with homemade salted caramel and dark chocolate ganache.", signature: true },
  { name: "Lavender & Earl Grey", description: "Delicate floral sponge infused with bergamot, finished with honeyed buttercream.", tags: ["GF"] },
  { name: "Pistachio & Rose", description: "Crushed Sicilian pistachios with damask rose and whipped white chocolate ganache." },
  { name: "Spiced Pear & Walnut", description: "Warm autumnal sponge with poached pears, candied walnuts and brown butter cream.", tags: ["GF", "DF"] },
  { name: "Coconut & Passion Fruit", description: "Light coconut sponge, tangy passion fruit curd, vegan whipped coconut cream.", tags: ["V", "DF", "GF"] },
  { name: "Dark Chocolate & Sea Salt", description: "70% Belgian chocolate with Maldon sea salt caramel core and ganache.", tags: ["V"] },
  { name: "Strawberry & Champagne", description: "Champagne-soaked sponge with British strawberries and crème fraîche buttercream." },
  { name: "Carrot, Walnut & Orange Blossom", description: "Traditional carrot cake with toasted walnuts and orange blossom cream cheese frosting." },
];

function FlavoursPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <span className="text-[11px] uppercase tracking-[0.3em] text-deep mb-5 block">The Flavour Library</span>
          <h1 className="text-5xl md:text-7xl font-display leading-[0.95] mb-6 max-w-3xl">
            A taste of <span className="italic">perfection</span>
          </h1>
          <p className="text-lg text-ink/70 max-w-2xl">
            Every cake is baked fresh to order using the best quality local ingredients.
            Jams, curds and fillings are made from scratch. Mix and match flavours between tiers — your design, your menu.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden sticky top-28">
              <img src={flavoursImg} alt="Cake slices on ceramic plates with lavender and raspberries" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-8">
            {flavours.map((f) => (
              <div key={f.name} className="flex justify-between items-start gap-6 pb-6 border-b border-ink/10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-xl md:text-2xl font-display">{f.name}</h3>
                    {f.signature && (
                      <span className="text-[9px] uppercase tracking-widest text-deep font-medium">· Signature</span>
                    )}
                  </div>
                  <p className="text-sm text-ink/60 leading-relaxed">{f.description}</p>
                </div>
                {f.tags && (
                  <div className="flex gap-2 shrink-0">
                    {f.tags.map((t) => (
                      <span key={t} title={tagLabel[t]} className="px-2 py-1 bg-white text-[9px] font-bold rounded-sm border border-rose/30 tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-blush/40 text-center">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-display italic mb-6">Allergies &amp; dietary requirements</h2>
          <p className="text-ink/70 mb-8">
            We can accommodate gluten-free, vegan, dairy-free and nut-free preferences across most
            flavours. All cakes are made in a kitchen that handles wheat, dairy, eggs and nuts;
            we follow strict separation protocols for allergy commissions.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-ink text-canvas text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-deep transition-colors">
            Discuss your menu
          </Link>
        </div>
      </section>
    </>
  );
}