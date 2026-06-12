import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useMemo, useState } from "react";
import { z } from "zod";
import { SUITES, getSuite, type Suite } from "@/data/suites";

type SearchParams = { suite?: string };

export const Route = createFileRoute("/reserve")({
  validateSearch: (s: Record<string, unknown>): SearchParams => ({
    suite: typeof s.suite === "string" ? s.suite : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Reserve a Stay — The Pavilion" },
      { name: "description", content: "Compose your stay with our concierge. Select your dates, suite, and any private experiences — we confirm within four hours." },
      { property: "og:title", content: "Reserve a Stay — The Pavilion" },
      { property: "og:description", content: "Compose your stay with our concierge." },
    ],
  }),
  component: ReservePage,
});

const STEPS = ["Dates", "Suite", "Guests & Extras", "Details", "Confirm"] as const;

const detailsSchema = z.object({
  firstName: z.string().trim().min(2, "Required").max(50),
  lastName: z.string().trim().min(2, "Required").max(50),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(6, "Required").max(30).regex(/^[\d\s+()\-]+$/, "Digits only"),
  country: z.string().trim().min(2, "Required").max(60),
  note: z.string().trim().max(1000).optional(),
});

const today = () => new Date().toISOString().split("T")[0];
const tomorrow = () => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
};
const inDays = (n: number) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().split("T")[0];
};

const EXTRAS = [
  { id: "transfer", n: "Private Airport Transfer", p: 220, d: "Mercedes S-Class, both directions" },
  { id: "champagne", n: "Champagne & Petits Fours", p: 180, d: "Awaiting on arrival in suite" },
  { id: "breakfast", n: "Breakfast in Suite Daily", p: 90, d: "Per day, for two guests" },
  { id: "spa", n: "Welcome Spa Ritual", p: 280, d: "90-minute Adriatic Salt Ritual" },
  { id: "yacht", n: "Sunset Yacht Charter", p: 2400, d: "Three hours, chef on board" },
] as const;

function ReservePage() {
  const { suite: initialSuite } = Route.useSearch();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // form state
  const [arrival, setArrival] = useState(inDays(14));
  const [departure, setDeparture] = useState(inDays(17));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [suiteSlug, setSuiteSlug] = useState<string>(initialSuite && getSuite(initialSuite) ? initialSuite : SUITES[0].slug);
  const [extras, setExtras] = useState<Record<string, boolean>>({});
  const [details, setDetails] = useState({ firstName: "", lastName: "", email: "", phone: "", country: "", note: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const suite: Suite = getSuite(suiteSlug)!;

  const nights = useMemo(() => {
    const a = new Date(arrival).getTime();
    const d = new Date(departure).getTime();
    if (isNaN(a) || isNaN(d) || d <= a) return 0;
    return Math.round((d - a) / 86400000);
  }, [arrival, departure]);

  const extrasTotal = useMemo(
    () => EXTRAS.filter((e) => extras[e.id]).reduce((sum, e) => sum + (e.id === "breakfast" ? e.p * Math.max(nights, 1) : e.p), 0),
    [extras, nights]
  );
  const roomTotal = suite.rate * nights;
  const subtotal = roomTotal + extrasTotal;
  const tax = Math.round(subtotal * 0.07);
  const total = subtotal + tax;

  // step validators
  const canAdvance = (): boolean => {
    if (step === 0) {
      const errs: Record<string, string> = {};
      if (!arrival) errs.arrival = "Required";
      if (!departure) errs.departure = "Required";
      if (arrival && arrival < today()) errs.arrival = "Arrival must be today or later";
      if (nights <= 0) errs.departure = "Departure must be after arrival";
      if (nights > 30) errs.departure = "Maximum stay is 30 nights";
      setErrors(errs);
      return Object.keys(errs).length === 0;
    }
    if (step === 2) {
      const errs: Record<string, string> = {};
      if (adults < 1) errs.adults = "At least one guest";
      if (adults + children > 6) errs.adults = "Maximum six guests — please contact us";
      setErrors(errs);
      return Object.keys(errs).length === 0;
    }
    if (step === 3) {
      const parsed = detailsSchema.safeParse(details);
      if (!parsed.success) {
        const errs: Record<string, string> = {};
        parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
        setErrors(errs);
        return false;
      }
      setErrors({});
      return true;
    }
    return true;
  };

  const next = () => {
    if (!canAdvance()) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <section className="pt-40 pb-32 px-6 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-8">✦ Request Received ✦</p>
            <h1 className="font-display text-5xl md:text-7xl mb-8 leading-[1]">
              Thank you,<br />
              <span className="italic text-gold-soft">{details.firstName}.</span>
            </h1>
            <div className="gold-rule w-24 mx-auto mb-10" />
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
              Your request has been received. A member of our reservations team will write to{" "}
              <span className="text-gold">{details.email}</span> within four hours to confirm availability and arrange a hold.
            </p>
            <div className="border hairline p-8 bg-card text-left mb-10">
              <SummaryRow label="Confirmation" value={`PVL-${Date.now().toString().slice(-6)}`} highlight />
              <SummaryRow label="Suite" value={suite.name} />
              <SummaryRow label="Arrival" value={formatDate(arrival)} />
              <SummaryRow label="Departure" value={formatDate(departure)} />
              <SummaryRow label="Nights" value={String(nights)} />
              <SummaryRow label="Estimated total" value={`€${total.toLocaleString()}`} highlight />
            </div>
            <Link to="/" className="text-[11px] tracking-[0.32em] uppercase text-gold border-b hairline pb-1">Return home</Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-32 pb-12 px-6 lg:px-12 text-center border-b hairline">
        <p className="eyebrow mb-6">✦ Reservations ✦</p>
        <h1 className="font-display text-5xl md:text-6xl">
          Compose your <span className="italic text-gold-soft">stay.</span>
        </h1>
      </section>

      {/* Stepper */}
      <section className="py-10 px-6 border-b hairline overflow-x-auto">
        <ol className="mx-auto max-w-4xl flex items-center justify-between min-w-[640px]">
          {STEPS.map((label, i) => (
            <li key={label} className="flex items-center gap-3 flex-1">
              <div className={`w-10 h-10 rounded-full border flex items-center justify-center text-xs font-display ${i <= step ? "border-gold text-gold" : "border-border text-muted-foreground"}`}>
                {i + 1}
              </div>
              <div className={`text-[10px] tracking-[0.28em] uppercase whitespace-nowrap ${i === step ? "text-gold" : "text-muted-foreground"}`}>{label}</div>
              {i < STEPS.length - 1 && <div className={`flex-1 h-px ${i < step ? "bg-gold" : "bg-border"}`} />}
            </li>
          ))}
        </ol>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="mx-auto max-w-[1200px] grid lg:grid-cols-3 gap-12">
          {/* Form area */}
          <div className="lg:col-span-2">
            {step === 0 && (
              <div>
                <h2 className="font-display text-3xl mb-2">When will you arrive?</h2>
                <p className="text-muted-foreground font-light mb-10">Select arrival and departure dates. Minimum stay is one night.</p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <DateField label="Arrival" value={arrival} min={today()} onChange={(v) => { setArrival(v); if (v >= departure) setDeparture(inDaysFrom(v, 2)); }} error={errors.arrival} />
                  <DateField label="Departure" value={departure} min={tomorrow()} onChange={setDeparture} error={errors.departure} />
                </div>
                <div className="mt-6 p-4 border hairline bg-card flex justify-between items-center">
                  <span className="text-[10px] tracking-[0.32em] uppercase text-muted-foreground">Nights</span>
                  <span className="font-display text-2xl text-gold">{nights}</span>
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="font-display text-3xl mb-2">Choose your residence</h2>
                <p className="text-muted-foreground font-light mb-10">Each suite is hand-finished. No two are alike.</p>
                <div className="space-y-4">
                  {SUITES.map((s) => {
                    const selected = s.slug === suiteSlug;
                    return (
                      <button
                        key={s.slug}
                        type="button"
                        onClick={() => setSuiteSlug(s.slug)}
                        className={`w-full text-left grid sm:grid-cols-[140px_1fr_auto] gap-6 p-4 border transition-colors ${selected ? "border-gold bg-card" : "hairline hover:border-gold/60"}`}
                      >
                        <div className="aspect-[4/3] sm:aspect-square overflow-hidden">
                          <img src={s.img} alt={s.name} loading="lazy" width={400} height={400} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="font-display text-2xl mb-1">{s.name}</div>
                          <div className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground mb-3">{s.size} · {s.bed}</div>
                          <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.desc}</p>
                        </div>
                        <div className="flex sm:flex-col items-end justify-between sm:justify-center gap-2 sm:text-right">
                          <div className="text-gold font-display text-xl">€{s.rate}</div>
                          <div className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground">/ night</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="font-display text-3xl mb-2">Who is travelling?</h2>
                <p className="text-muted-foreground font-light mb-10">And how would you like us to prepare?</p>
                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                  <Counter label="Adults" value={adults} min={1} max={6} onChange={setAdults} />
                  <Counter label="Children" value={children} min={0} max={4} onChange={setChildren} />
                </div>
                {errors.adults && <p className="text-destructive text-xs mb-6">{errors.adults}</p>}

                <div className="text-[10px] tracking-[0.32em] uppercase text-gold mb-4">Optional Additions</div>
                <div className="space-y-3">
                  {EXTRAS.map((e) => (
                    <label key={e.id} className="flex items-start gap-4 p-5 border hairline cursor-pointer hover:border-gold/60 transition-colors">
                      <input
                        type="checkbox"
                        checked={!!extras[e.id]}
                        onChange={() => setExtras((x) => ({ ...x, [e.id]: !x[e.id] }))}
                        className="mt-1 accent-[var(--gold)]"
                      />
                      <div className="flex-1">
                        <div className="flex items-baseline justify-between mb-1">
                          <span className="font-display text-lg">{e.n}</span>
                          <span className="text-gold text-[11px] tracking-[0.24em] uppercase">€{e.p}{e.id === "breakfast" ? " / night" : ""}</span>
                        </div>
                        <span className="text-sm text-muted-foreground font-light">{e.d}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="font-display text-3xl mb-2">Your details</h2>
                <p className="text-muted-foreground font-light mb-10">So we may write to you in confidence.</p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <TextField label="First name" value={details.firstName} onChange={(v) => setDetails({ ...details, firstName: v })} error={errors.firstName} />
                  <TextField label="Last name" value={details.lastName} onChange={(v) => setDetails({ ...details, lastName: v })} error={errors.lastName} />
                  <TextField label="Email" type="email" value={details.email} onChange={(v) => setDetails({ ...details, email: v })} error={errors.email} />
                  <TextField label="Phone" type="tel" value={details.phone} onChange={(v) => setDetails({ ...details, phone: v })} error={errors.phone} />
                  <div className="sm:col-span-2">
                    <TextField label="Country of residence" value={details.country} onChange={(v) => setDetails({ ...details, country: v })} error={errors.country} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] tracking-[0.32em] uppercase text-gold mb-3">A note to your concierge (optional)</label>
                    <textarea
                      rows={4}
                      maxLength={1000}
                      value={details.note}
                      onChange={(e) => setDetails({ ...details, note: e.target.value })}
                      placeholder="Anniversary, dietary, accessibility, the intent of your stay…"
                      className="w-full bg-transparent border hairline px-4 py-3 text-foreground focus:outline-none focus:border-gold font-light resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="font-display text-3xl mb-2">Confirm your request</h2>
                <p className="text-muted-foreground font-light mb-10">Review the details below. No card is charged — we will hold the suite and write to confirm.</p>
                <div className="border hairline p-8 bg-card space-y-4">
                  <SummaryRow label="Guest" value={`${details.firstName} ${details.lastName}`} />
                  <SummaryRow label="Email" value={details.email} />
                  <SummaryRow label="Phone" value={details.phone} />
                  <div className="gold-rule w-full opacity-40 my-4" />
                  <SummaryRow label="Suite" value={suite.name} />
                  <SummaryRow label="Arrival" value={formatDate(arrival)} />
                  <SummaryRow label="Departure" value={formatDate(departure)} />
                  <SummaryRow label="Nights" value={String(nights)} />
                  <SummaryRow label="Guests" value={`${adults} adult${adults > 1 ? "s" : ""}${children > 0 ? `, ${children} child${children > 1 ? "ren" : ""}` : ""}`} />
                  {Object.entries(extras).filter(([, v]) => v).length > 0 && (
                    <>
                      <div className="gold-rule w-full opacity-40 my-4" />
                      <div className="text-[10px] tracking-[0.32em] uppercase text-gold mb-2">Additions</div>
                      {EXTRAS.filter((e) => extras[e.id]).map((e) => (
                        <SummaryRow key={e.id} label={e.n} value={`€${e.id === "breakfast" ? e.p * nights : e.p}`} />
                      ))}
                    </>
                  )}
                  {details.note && (
                    <>
                      <div className="gold-rule w-full opacity-40 my-4" />
                      <div>
                        <div className="text-[10px] tracking-[0.32em] uppercase text-gold mb-2">Note to concierge</div>
                        <p className="text-sm font-light text-muted-foreground italic">"{details.note}"</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Controls */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t hairline">
              <button type="button" onClick={back} disabled={step === 0} className="text-[11px] tracking-[0.32em] uppercase text-muted-foreground hover:text-gold disabled:opacity-30 disabled:hover:text-muted-foreground">
                ← Back
              </button>
              {step < STEPS.length - 1 ? (
                <button type="button" onClick={next} className="px-8 py-4 bg-gold text-primary-foreground text-[11px] tracking-[0.32em] uppercase hover:bg-gold-soft transition-colors">
                  Continue →
                </button>
              ) : (
                <button type="button" onClick={submit} className="px-8 py-4 bg-gold text-primary-foreground text-[11px] tracking-[0.32em] uppercase hover:bg-gold-soft transition-colors">
                  Request Availability
                </button>
              )}
            </div>
          </div>

          {/* Summary aside */}
          <aside className="lg:sticky lg:top-28 self-start">
            <div className="border hairline bg-card overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={suite.img} alt={suite.name} loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="text-[10px] tracking-[0.32em] uppercase text-gold mb-2">Your Stay</div>
                <h3 className="font-display text-2xl mb-4">{suite.name}</h3>
                <div className="gold-rule w-12 mb-4" />
                <div className="space-y-3 text-sm">
                  <SummaryRow label="Arrival" value={formatDate(arrival)} />
                  <SummaryRow label="Departure" value={formatDate(departure)} />
                  <SummaryRow label="Nights" value={String(nights)} />
                  <SummaryRow label="Guests" value={`${adults}${children > 0 ? ` + ${children}` : ""}`} />
                </div>
                <div className="gold-rule w-full opacity-40 my-5" />
                <div className="space-y-2 text-sm">
                  <SummaryRow label={`Suite (${nights} × €${suite.rate})`} value={`€${roomTotal.toLocaleString()}`} />
                  {extrasTotal > 0 && <SummaryRow label="Additions" value={`€${extrasTotal.toLocaleString()}`} />}
                  <SummaryRow label="Tourism tax (7%)" value={`€${tax.toLocaleString()}`} />
                </div>
                <div className="gold-rule w-full opacity-40 my-5" />
                <div className="flex items-baseline justify-between">
                  <span className="text-[10px] tracking-[0.32em] uppercase text-gold">Estimated total</span>
                  <span className="font-display text-3xl text-gold">€{total.toLocaleString()}</span>
                </div>
                <p className="text-xs text-muted-foreground font-light mt-4 leading-relaxed">No charge today. We will write to confirm within four hours.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* helpers */
function formatDate(iso: string) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
function inDaysFrom(iso: string, n: number) {
  const d = new Date(iso);
  d.setDate(d.getDate() + n);
  return d.toISOString().split("T")[0];
}

function DateField({ label, value, min, onChange, error }: { label: string; value: string; min?: string; onChange: (v: string) => void; error?: string }) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.32em] uppercase text-gold mb-3">{label}</label>
      <input
        type="date"
        value={value}
        min={min}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border hairline px-4 py-3 text-foreground focus:outline-none focus:border-gold font-light"
        style={{ colorScheme: "dark" }}
      />
      {error && <p className="text-destructive text-xs mt-2 font-light">{error}</p>}
    </div>
  );
}

function TextField({ label, value, onChange, type = "text", error }: { label: string; value: string; onChange: (v: string) => void; type?: string; error?: string }) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.32em] uppercase text-gold mb-3">{label}</label>
      <input
        type={type}
        value={value}
        maxLength={255}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-0 border-b hairline text-foreground py-3 focus:outline-none focus:border-gold font-light"
      />
      {error && <p className="text-destructive text-xs mt-2 font-light">{error}</p>}
    </div>
  );
}

function Counter({ label, value, min, max, onChange }: { label: string; value: number; min: number; max: number; onChange: (v: number) => void }) {
  return (
    <div className="border hairline p-5">
      <div className="text-[10px] tracking-[0.32em] uppercase text-gold mb-4">{label}</div>
      <div className="flex items-center justify-between">
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))} className="w-10 h-10 border hairline text-gold hover:bg-gold hover:text-primary-foreground transition-colors text-xl">−</button>
        <span className="font-display text-3xl">{value}</span>
        <button type="button" onClick={() => onChange(Math.min(max, value + 1))} className="w-10 h-10 border hairline text-gold hover:bg-gold hover:text-primary-foreground transition-colors text-xl">+</button>
      </div>
    </div>
  );
}

function SummaryRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground">{label}</span>
      <span className={`font-light text-right ${highlight ? "text-gold font-display text-lg" : ""}`}>{value}</span>
    </div>
  );
}
