import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const packages = ["The Heritage · €45", "Sunset Reserve · €85", "Private Cellar · €180"];
const times = ["12:00", "15:00", "17:30", "19:30"];

export function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [pkg, setPkg] = useState(packages[1]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState(times[2]);
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const reset = () => {
    onClose();
    setTimeout(() => {
      setStep(0);
      setDone(false);
    }, 500);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-burgundy-deep/70 backdrop-blur-md p-4"
          onClick={reset}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-cream shadow-2xl"
          >
            <button
              onClick={reset}
              aria-label="Close"
              className="absolute top-5 right-5 text-espresso/60 hover:text-burgundy-deep transition z-10"
            >
              <X size={20} />
            </button>

            <div className="p-10 md:p-14">
              {!done ? (
                <>
                  <div className="text-center mb-10">
                    <span className="eyebrow">
                      <span className="hairline mr-4" />
                      Reserve · Step {step + 1} of 4
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl text-burgundy-deep mt-4">
                      {["Choose your experience", "Select a date", "Pick a time & party", "Your details"][step]}
                    </h3>
                  </div>

                  <div className="min-h-[220px]">
                    {step === 0 && (
                      <div className="space-y-3">
                        {packages.map((p) => (
                          <button
                            key={p}
                            onClick={() => setPkg(p)}
                            className={`w-full text-left p-5 border transition-all ${
                              pkg === p
                                ? "border-burgundy-deep bg-burgundy-deep text-cream"
                                : "border-border hover:border-burgundy/50"
                            }`}
                          >
                            <span className="font-serif text-lg">{p}</span>
                          </button>
                        ))}
                      </div>
                    )}

                    {step === 1 && (
                      <div className="flex justify-center">
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full max-w-sm bg-transparent border-b border-burgundy-deep/30 py-4 font-serif text-2xl text-burgundy-deep text-center outline-none focus:border-burgundy-deep transition"
                        />
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-8">
                        <div>
                          <div className="eyebrow mb-4">Time</div>
                          <div className="grid grid-cols-4 gap-2">
                            {times.map((t) => (
                              <button
                                key={t}
                                onClick={() => setTime(t)}
                                className={`py-3 border text-sm transition ${
                                  time === t
                                    ? "border-burgundy-deep bg-burgundy-deep text-cream"
                                    : "border-border hover:border-burgundy/50"
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="eyebrow mb-4">Guests</div>
                          <div className="flex items-center gap-6">
                            <button
                              onClick={() => setGuests(Math.max(1, guests - 1))}
                              className="h-10 w-10 border border-border hover:border-burgundy transition"
                            >−</button>
                            <span className="font-serif text-3xl text-burgundy-deep w-12 text-center">{guests}</span>
                            <button
                              onClick={() => setGuests(Math.min(12, guests + 1))}
                              className="h-10 w-10 border border-border hover:border-burgundy transition"
                            >+</button>
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-6">
                        <div>
                          <label className="eyebrow block mb-2">Name</label>
                          <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-transparent border-b border-burgundy-deep/30 py-3 text-lg outline-none focus:border-burgundy-deep transition"
                          />
                        </div>
                        <div>
                          <label className="eyebrow block mb-2">Email</label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-transparent border-b border-burgundy-deep/30 py-3 text-lg outline-none focus:border-burgundy-deep transition"
                          />
                        </div>
                        <div className="mt-8 p-5 bg-secondary text-sm text-espresso/80 space-y-1 font-light">
                          <div><span className="eyebrow !text-[0.6rem]">Experience</span> · {pkg}</div>
                          <div><span className="eyebrow !text-[0.6rem]">When</span> · {date || "—"} at {time}</div>
                          <div><span className="eyebrow !text-[0.6rem]">Guests</span> · {guests}</div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-10 flex justify-between items-center pt-6 border-t border-border">
                    <button
                      onClick={back}
                      disabled={step === 0}
                      className="inline-flex items-center gap-1 text-[0.7rem] uppercase tracking-[0.28em] text-espresso/60 hover:text-burgundy-deep disabled:opacity-30 transition"
                    >
                      <ChevronLeft size={14} /> Back
                    </button>
                    {step < 3 ? (
                      <button onClick={next} className="btn-luxury btn-luxury-hover">
                        Continue <ChevronRight size={14} />
                      </button>
                    ) : (
                      <button
                        onClick={() => setDone(true)}
                        disabled={!name || !email}
                        className="btn-luxury btn-luxury-hover disabled:opacity-40 disabled:pointer-events-none"
                      >
                        Confirm Reservation
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-10"
                >
                  <div className="font-serif text-6xl text-gold mb-4">✦</div>
                  <h3 className="font-serif text-4xl text-burgundy-deep">Thank you, {name.split(" ")[0]}.</h3>
                  <p className="mt-4 text-espresso/70 max-w-md mx-auto font-light leading-relaxed">
                    Your table awaits. A confirmation is on its way to {email}. We can't wait
                    to welcome you to Lumbarda.
                  </p>
                  <button onClick={reset} className="btn-luxury btn-luxury-hover mt-10">
                    Close
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
