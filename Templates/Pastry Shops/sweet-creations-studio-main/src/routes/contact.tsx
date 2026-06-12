import { createFileRoute } from "@tanstack/react-router";
import { InquiryForm } from "@/components/InquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Enquire — Sandra's Cakes · St Andrews" },
      { name: "description", content: "Begin your commission with Sandra's Cakes. Share your wedding date, venue and vision — we'll be in touch within 48 hours." },
      { property: "og:title", content: "Enquire — Sandra's Cakes" },
      { property: "og:description", content: "Begin your bespoke cake commission." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <span className="text-[11px] uppercase tracking-[0.3em] text-deep mb-5 block">Begin the Commission</span>
          <h1 className="text-5xl md:text-7xl font-display leading-[0.95] mb-6">
            Let&rsquo;s create something <span className="italic">extraordinary</span>
          </h1>
          <p className="text-lg text-ink/70 max-w-xl mx-auto">
            Share a few details below and Sandra will reply personally within 48 hours.
            Limited availability for 2026 and 2027 weddings.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <InquiryForm />
        </div>
      </section>

      <section className="py-16 bg-blush/40">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-deep mb-3">Studio</p>
            <p className="text-ink/70">St Andrews<br />Fife, Scotland</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-deep mb-3">Email</p>
            <a href="mailto:hello@sandrascakes.scot" className="text-ink/70 hover:text-deep">hello@sandrascakes.scot</a>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-deep mb-3">Hours</p>
            <p className="text-ink/70">By appointment<br />Tue – Sat</p>
          </div>
        </div>
      </section>
    </>
  );
}