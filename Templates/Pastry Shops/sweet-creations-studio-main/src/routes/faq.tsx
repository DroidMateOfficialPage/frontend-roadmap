import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs — Sandra's Cakes" },
      { name: "description", content: "Frequently asked questions about ordering, delivery, dietary needs and bespoke cake design from Sandra's Cakes." },
      { property: "og:title", content: "FAQs — Sandra's Cakes" },
      { property: "og:description", content: "Everything you need to know about commissioning a cake." },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "How far in advance should I book?", a: "We recommend booking 6–12 months ahead, especially for peak season (May–September). We take a limited number of commissions each month to ensure quality." },
  { q: "Do you offer tastings?", a: "Yes — tasting consultations are £65 per couple and include four flavour samples plus a design discussion." },
  { q: "Can you accommodate dietary requirements?", a: "Absolutely. Most flavours are available gluten-free, vegan and dairy-free. We follow strict separation protocols for allergy commissions." },
  { q: "Do you deliver across Scotland?", a: "Yes. Delivery and on-site set-up start from £45, calculated by distance from St Andrews." },
  { q: "How much do bespoke wedding cakes cost?", a: "Intimate single-tier cakes start from £180. Three-tier signatures from £650. Grand multi-tier creations are quoted bespoke. See our Price Guide for details." },
  { q: "What's the booking process?", a: "Submit an enquiry, we'll reply within 48 hours, then book a consultation. A 30% deposit secures your date; final balance is due 4 weeks before your event." },
  { q: "Can I bring my own design inspiration?", a: "Please do! Pinterest boards, photos and venue images all help. Every cake is designed from scratch around your vision." },
];

function FAQPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <span className="text-[11px] uppercase tracking-[0.3em] text-deep mb-5 block">Frequently Asked</span>
          <h1 className="text-5xl md:text-7xl font-display leading-[0.95] mb-6">
            Your <span className="italic">questions</span>, answered
          </h1>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="max-w-3xl mx-auto px-6 md:px-10 space-y-6">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-ink/10 pb-6">
              <summary className="flex justify-between items-baseline cursor-pointer list-none">
                <h3 className="font-display text-xl md:text-2xl pr-6">{f.q}</h3>
                <span className="text-deep text-2xl shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-ink/70 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="py-20 bg-blush/40 text-center">
        <div className="max-w-2xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-display mb-6">Still have a question?</h2>
          <Link to="/contact" className="inline-block px-12 py-4 bg-ink text-canvas text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-deep transition-colors">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}