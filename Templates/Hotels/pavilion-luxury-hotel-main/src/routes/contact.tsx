import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { useState } from "react";
import { z } from "zod";
import lobbyImg from "@/assets/lobby.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Pavilion" },
      { name: "description", content: "Speak with our concierge. Reservations, private events, press enquiries — we respond within four hours." },
      { property: "og:title", content: "Contact — The Pavilion" },
      { property: "og:description", content: "Speak with our concierge." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(2, "Please add a subject").max(150),
  message: z.string().trim().min(10, "A few more words, please").max(2000),
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      subject: fd.get("subject"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <PageHero
        eyebrow="Contact"
        title="Speak with our"
        italic="concierge."
        subtitle="A response within four hours, day or night."
        image={lobbyImg}
      />

      <section className="py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-[1200px] grid lg:grid-cols-5 gap-16">
          <aside className="lg:col-span-2 space-y-10">
            <div>
              <div className="text-[10px] tracking-[0.32em] uppercase text-gold mb-4">Reservations</div>
              <p className="text-lg font-light">+382 33 000 000</p>
              <p className="text-sm text-muted-foreground font-light">reservations@thepavilion.co</p>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.32em] uppercase text-gold mb-4">Concierge</div>
              <p className="text-lg font-light">+382 33 000 001</p>
              <p className="text-sm text-muted-foreground font-light">concierge@thepavilion.co</p>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.32em] uppercase text-gold mb-4">Address</div>
              <p className="text-sm font-light leading-relaxed">
                Riva del Mare 17<br />
                85320 Sveti Stefan<br />
                Crna Gora
              </p>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.32em] uppercase text-gold mb-4">Press & Events</div>
              <p className="text-sm text-muted-foreground font-light">press@thepavilion.co<br />events@thepavilion.co</p>
            </div>
          </aside>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="border hairline p-12 text-center bg-card">
                <p className="eyebrow mb-6">✦ Thank You ✦</p>
                <h2 className="font-display text-3xl md:text-4xl mb-6">Your message is on its way.</h2>
                <div className="gold-rule w-16 mx-auto mb-6" />
                <p className="text-muted-foreground font-light">A member of our team will respond within four hours.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="border hairline p-10 bg-card space-y-6">
                <Field name="name" label="Your name" placeholder="Mme. Eléonore Durand" error={errors.name} />
                <Field name="email" type="email" label="Email" placeholder="you@example.com" error={errors.email} />
                <Field name="subject" label="Subject" placeholder="Reservation enquiry" error={errors.subject} />
                <div>
                  <label htmlFor="message" className="block text-[10px] tracking-[0.32em] uppercase text-gold mb-3">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    maxLength={2000}
                    placeholder="Tell us how we can help…"
                    className="w-full bg-transparent border hairline px-4 py-3 text-foreground focus:outline-none focus:border-gold font-light resize-none"
                  />
                  {errors.message && <p className="text-destructive text-xs mt-2 font-light">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full px-8 py-4 bg-gold text-primary-foreground text-[11px] tracking-[0.32em] uppercase hover:bg-gold-soft transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ name, label, placeholder, type = "text", error }: { name: string; label: string; placeholder?: string; type?: string; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[10px] tracking-[0.32em] uppercase text-gold mb-3">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        maxLength={255}
        placeholder={placeholder}
        className="w-full bg-transparent border-0 border-b hairline text-foreground py-3 focus:outline-none focus:border-gold font-light"
      />
      {error && <p className="text-destructive text-xs mt-2 font-light">{error}</p>}
    </div>
  );
}
