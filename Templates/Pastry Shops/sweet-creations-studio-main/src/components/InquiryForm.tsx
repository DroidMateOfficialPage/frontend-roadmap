import { useState } from "react";
import { toast } from "sonner";

export function InquiryForm() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    if (!name || !email) {
      toast.error("Please share your name and email so Sandra can reply.");
      setSubmitting(false);
      return;
    }
    if (name.length > 100 || email.length > 200) {
      toast.error("Please shorten your entries.");
      setSubmitting(false);
      return;
    }
    setTimeout(() => {
      toast.success("Thank you — Sandra will be in touch within 48 hours.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 600);
  }

  const inputClass =
    "border-b border-ink/15 py-2 bg-transparent focus:outline-none focus:border-deep transition-colors text-sm placeholder:text-ink/25";
  const labelClass = "text-[11px] uppercase tracking-widest font-medium text-deep/70";

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="name">Full Name *</label>
        <input id="name" name="name" type="text" required maxLength={100} placeholder="Elizabeth Bennett" className={inputClass} />
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="email">Email *</label>
        <input id="email" name="email" type="email" required maxLength={200} placeholder="you@example.com" className={inputClass} />
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" maxLength={30} placeholder="+44 ..." className={inputClass} />
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="date">Wedding / Event Date</label>
        <input id="date" name="date" type="date" className={inputClass} />
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="guests">Guest Count</label>
        <input id="guests" name="guests" type="number" min={1} max={1000} placeholder="120" className={inputClass} />
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="venue">Venue Location</label>
        <input id="venue" name="venue" type="text" maxLength={200} placeholder="The Old Course Hotel, St Andrews" className={inputClass} />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label className={labelClass} htmlFor="style">Cake Style</label>
        <select id="style" name="style" className={inputClass}>
          <option value="">No preference yet</option>
          <option>Fondant Classic</option>
          <option>Semi-Naked</option>
          <option>Rustic Charm</option>
          <option>A Little Bit of Luxury</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label className={labelClass} htmlFor="flavour">Preferred Flavour & Dietary Needs</label>
        <input id="flavour" name="flavour" type="text" maxLength={300} placeholder="e.g. Lemon & Raspberry · Gluten-free for 6 guests" className={inputClass} />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label className={labelClass} htmlFor="budget">Approx. Budget (£)</label>
        <input id="budget" name="budget" type="text" maxLength={50} placeholder="£500 – £900" className={inputClass} />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label className={labelClass} htmlFor="message">Design Notes & Vision</label>
        <textarea id="message" name="message" rows={5} maxLength={2000} placeholder="Tell us about your day, palette, inspiration..." className={`${inputClass} resize-none`} />
      </div>
      <div className="md:col-span-2 text-center mt-8">
        <button
          type="submit"
          disabled={submitting}
          className="px-14 py-4 bg-ink text-canvas text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-deep transition-all cursor-pointer disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Submit Inquiry"}
        </button>
      </div>
    </form>
  );
}