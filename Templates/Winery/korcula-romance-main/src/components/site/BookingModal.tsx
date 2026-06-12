import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

export function BookingModal({
  open,
  onClose,
  initialExperience = 0,
}: {
  open: boolean;
  onClose: () => void;
  initialExperience?: number;
}) {
  const { t } = useI18n();
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    experience: initialExperience,
    date: "",
    time: "19:00",
    guests: 2,
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (open) {
      setData((d) => ({ ...d, experience: initialExperience }));
      setStep(1);
      setDone(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open, initialExperience]);

  if (!open) return null;

  const exp = t.experiences.items;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-burgundy-deep/70 backdrop-blur-sm"
      />
      <div className="relative bg-ivory w-full max-w-3xl max-h-[92vh] overflow-y-auto shadow-2xl">
        <div className="flex items-start justify-between p-8 md:p-12 pb-0">
          <div>
            <div className="eyebrow text-burgundy mb-2">Vinarija Tasovac</div>
            <h3 className="font-serif text-3xl md:text-4xl text-espresso italic font-light">{t.booking.title}</h3>
            <p className="mt-2 text-espresso/60 text-sm">{t.booking.sub}</p>
          </div>
          <button onClick={onClose} className="text-espresso/60 hover:text-burgundy text-3xl leading-none transition-colors duration-500" aria-label="Close">×</button>
        </div>

        {done ? (
          <div className="p-12 text-center">
            <div className="font-serif text-burgundy text-6xl mb-6">✦</div>
            <h4 className="font-serif text-3xl italic text-espresso font-light">{t.booking.sent}</h4>
            <p className="mt-4 text-espresso/60">{t.booking.sentDesc}</p>
            <button onClick={onClose} className="mt-10 inline-flex items-center gap-2 border border-burgundy text-burgundy px-6 py-3 eyebrow hover:bg-burgundy hover:text-ivory transition-all duration-700">
              ✕  Close
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); if (step < 3) setStep(step + 1); else setDone(true); }}
            className="p-8 md:p-12 space-y-8"
          >
            <div className="flex items-center gap-3 eyebrow text-muted-foreground">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-full grid place-items-center border ${step >= s ? "bg-burgundy text-ivory border-burgundy" : "border-border"}`}>{s}</span>
                  {s < 3 && <span className={`w-10 h-px ${step > s ? "bg-burgundy" : "bg-border"}`} />}
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="space-y-5 animate-fade-in">
                <Field label={t.booking.experience}>
                  <div className="grid gap-3">
                    {exp.map((e, i) => (
                      <label key={i} className={`flex items-start gap-4 p-4 border cursor-pointer transition-all duration-500 ${data.experience === i ? "border-burgundy bg-cream/60" : "border-border hover:border-burgundy/50"}`}>
                        <input type="radio" name="exp" className="mt-1 accent-burgundy" checked={data.experience === i} onChange={() => setData({ ...data, experience: i })} />
                        <div className="flex-1">
                          <div className="font-serif text-lg text-espresso">{e.name}</div>
                          <div className="text-sm text-espresso/60">{e.desc}</div>
                        </div>
                        <div className="text-burgundy font-serif">{e.price}</div>
                      </label>
                    ))}
                  </div>
                </Field>
              </div>
            )}

            {step === 2 && (
              <div className="grid md:grid-cols-3 gap-5 animate-fade-in">
                <Field label={t.booking.date}>
                  <input required type="date" value={data.date} onChange={(e) => setData({ ...data, date: e.target.value })} className={inputCls} />
                </Field>
                <Field label={t.booking.time}>
                  <select value={data.time} onChange={(e) => setData({ ...data, time: e.target.value })} className={inputCls}>
                    {["17:00", "18:00", "19:00", "20:00", "21:00"].map(x => <option key={x}>{x}</option>)}
                  </select>
                </Field>
                <Field label={t.booking.guests}>
                  <input type="number" min={1} max={20} value={data.guests} onChange={(e) => setData({ ...data, guests: +e.target.value })} className={inputCls} />
                </Field>
              </div>
            )}

            {step === 3 && (
              <div className="grid md:grid-cols-2 gap-5 animate-fade-in">
                <Field label={t.booking.name}>
                  <input required value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} className={inputCls} />
                </Field>
                <Field label={t.booking.email}>
                  <input required type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className={inputCls} />
                </Field>
                <Field label={t.booking.phone}>
                  <input value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} className={inputCls} />
                </Field>
                <Field label={t.booking.notes} className="md:col-span-2">
                  <textarea rows={3} value={data.notes} onChange={(e) => setData({ ...data, notes: e.target.value })} className={inputCls} />
                </Field>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <button
                type="button"
                onClick={() => step > 1 ? setStep(step - 1) : onClose()}
                className="eyebrow text-muted-foreground hover:text-burgundy transition-colors duration-500"
              >
                ← {step > 1 ? "Back" : "Cancel"}
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-burgundy text-ivory px-8 py-4 eyebrow hover:bg-burgundy-deep transition-all duration-700"
              >
                {step < 3 ? "Continue" : t.booking.submit} →
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

const inputCls = "w-full bg-transparent border border-border focus:border-burgundy px-4 py-3 outline-none transition-colors duration-500 text-espresso";

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block space-y-2 ${className}`}>
      <span className="eyebrow text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
