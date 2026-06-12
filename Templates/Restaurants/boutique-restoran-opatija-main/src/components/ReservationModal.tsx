import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function ReservationModal({ open, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setSubmitted(false);
  }, [open]);

  if (!open) return null;

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div
        className="absolute inset-0 bg-ocean/70 backdrop-blur-md"
        onClick={onClose}
        aria-hidden
      />
      <div className="reveal relative z-10 grid w-full max-w-4xl grid-cols-1 overflow-hidden bg-ivory shadow-elegant md:grid-cols-5">
        <div className="hidden bg-ocean p-10 text-ocean-foreground md:col-span-2 md:flex md:flex-col md:justify-between">
          <div>
            <p className="eyebrow text-gold">Reservation</p>
            <h3 className="mt-6 font-display text-4xl leading-tight">
              An evening, <em className="italic text-gold">composed</em> for you.
            </h3>
          </div>
          <div className="mt-10 space-y-2 text-sm text-ocean-foreground/70">
            <p>Daily · 12:00 — 23:00</p>
            <p>Opatija, Croatia</p>
            <p className="pt-4 text-gold">+385 51 000 000</p>
          </div>
        </div>

        <div className="relative p-8 md:col-span-3 md:p-12">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center text-foreground/60 transition hover:text-foreground"
          >
            ×
          </button>

          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <p className="eyebrow text-gold">Confirmed</p>
              <h4 className="mt-4 font-display text-3xl">Thank you.</h4>
              <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                Your request has been received. Our maître d' will confirm by email shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-8 border-b border-gold pb-1 text-xs uppercase tracking-[0.28em] text-foreground"
              >
                Close
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-5"
            >
              <p className="eyebrow md:hidden">Reservation</p>
              <h3 className="font-display text-3xl md:hidden">Book your table</h3>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Date">
                  <input type="date" required min={today} className={inputCls} />
                </Field>
                <Field label="Time">
                  <select required className={inputCls} defaultValue="">
                    <option value="" disabled>Select</option>
                    {["12:00","12:30","13:00","19:00","19:30","20:00","20:30","21:00"].map(t => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Guests">
                <select required className={inputCls} defaultValue="2">
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n}>{n}</option>)}
                </select>
              </Field>

              <Field label="Full Name">
                <input required type="text" placeholder="Your name" className={inputCls} />
              </Field>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Field label="Email">
                  <input required type="email" placeholder="you@email.com" className={inputCls} />
                </Field>
                <Field label="Phone">
                  <input type="tel" placeholder="+385..." className={inputCls} />
                </Field>
              </div>

              <Field label="Special requests">
                <textarea rows={2} placeholder="Allergies, occasion..." className={inputCls} />
              </Field>

              <button
                type="submit"
                className="mt-4 w-full bg-ocean py-4 text-xs uppercase tracking-[0.32em] text-ocean-foreground transition hover:bg-gold hover:text-gold-foreground"
              >
                Request Reservation
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

const inputCls =
  "w-full border-0 border-b border-border bg-transparent px-0 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none transition";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow block pb-2">{label}</span>
      {children}
    </label>
  );
}
