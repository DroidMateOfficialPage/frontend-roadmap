import { useState } from "react";
import { REGIONS } from "@/lib/types";
import { useCurrency } from "@/lib/currency";
import { SlidersHorizontal, X } from "lucide-react";

export type FilterState = {
  kategorija: "nekretnine" | "zemljista";
  region: string;
  tip: string;
  priceMax: string;
};

interface Props {
  value: FilterState;
  onChange: (v: FilterState) => void;
  resultCount: number;
}

export function FilterBar({ value, onChange, resultCount }: Props) {
  const { currency, setCurrency } = useCurrency();
  const [mobileOpen, setMobileOpen] = useState(false);

  const update = (patch: Partial<FilterState>) => onChange({ ...value, ...patch });

  const propertyTypes = ["Svi tipovi", "Stan", "Vila", "Kuća", "Penthaus", "Poslovni prostor"];
  const landTypes = ["Svi tipovi", "Građevinsko sa dozvolom", "Građevinsko u zoni", "Poljoprivredno", "Industrijska zona"];

  const FiltersInner = (
    <div className="space-y-8">
      {/* Category toggle */}
      <div>
        <label className="eyebrow font-semibold block mb-3">Kategorija</label>
        <div className="flex gap-6 border-b border-stone-line">
          {(["nekretnine", "zemljista"] as const).map((k) => (
            <button
              key={k}
              onClick={() => update({ kategorija: k, tip: "Svi tipovi" })}
              className={`pb-3 text-sm font-medium transition-colors ${
                value.kategorija === k
                  ? "text-anthracite border-b-2 border-gold -mb-px"
                  : "text-stone-400 hover:text-anthracite"
              }`}
            >
              {k === "nekretnine" ? "Nekretnine" : "Zemljišta"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="space-y-2">
          <span className="text-[9px] text-stone-400 uppercase tracking-widest">Lokacija</span>
          <select
            value={value.region}
            onChange={(e) => update({ region: e.target.value })}
            className="w-full bg-transparent border-b border-stone-line py-1.5 text-sm outline-none focus:border-gold transition-colors"
          >
            <option>Sve lokacije</option>
            {REGIONS.map((r) => <option key={r}>{r}</option>)}
          </select>
        </div>
        <div className="space-y-2">
          <span className="text-[9px] text-stone-400 uppercase tracking-widest">
            {value.kategorija === "nekretnine" ? "Tip objekta" : "Tip zemljišta"}
          </span>
          <select
            value={value.tip}
            onChange={(e) => update({ tip: e.target.value })}
            className="w-full bg-transparent border-b border-stone-line py-1.5 text-sm outline-none focus:border-gold transition-colors"
          >
            {(value.kategorija === "nekretnine" ? propertyTypes : landTypes).map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-[9px] text-stone-400 uppercase tracking-widest">Maks. cijena</span>
            <div className="flex gap-1.5 text-[9px] font-semibold">
              <button
                onClick={() => setCurrency("KM")}
                className={currency === "KM" ? "text-gold underline underline-offset-2" : "text-stone-400"}
              >KM</button>
              <span className="text-stone-300">/</span>
              <button
                onClick={() => setCurrency("EUR")}
                className={currency === "EUR" ? "text-gold underline underline-offset-2" : "text-stone-400"}
              >€</button>
            </div>
          </div>
          <input
            type="text"
            value={value.priceMax}
            onChange={(e) => update({ priceMax: e.target.value })}
            placeholder="bez ograničenja"
            className="w-full bg-transparent border-b border-stone-line py-1.5 text-sm outline-none focus:border-gold transition-colors placeholder:text-stone-300"
          />
        </div>
        <div className="space-y-2 flex flex-col">
          <span className="text-[9px] text-stone-400 uppercase tracking-widest">Rezultati</span>
          <div className="font-serif text-2xl">{resultCount}</div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block bg-sand-soft py-10 px-6 md:px-10 border-b border-stone-line">
        <div className="max-w-7xl mx-auto">{FiltersInner}</div>
      </section>

      {/* Mobile trigger */}
      <div className="md:hidden sticky top-[68px] z-40 bg-white border-b border-stone-line px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => setMobileOpen(true)}
          className="flex items-center gap-3 eyebrow"
        >
          <SlidersHorizontal size={14} /> Filteri ({resultCount})
        </button>
        <div className="flex bg-sand rounded-full p-0.5 text-[10px] font-semibold">
          <button
            onClick={() => setCurrency("KM")}
            className={`px-2.5 py-1 rounded-full ${currency === "KM" ? "bg-white shadow-sm" : "text-stone-400"}`}
          >KM</button>
          <button
            onClick={() => setCurrency("EUR")}
            className={`px-2.5 py-1 rounded-full ${currency === "EUR" ? "bg-white shadow-sm" : "text-stone-400"}`}
          >€</button>
        </div>
      </div>

      {/* Mobile slide-up sheet */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col justify-end animate-fade-in">
          <div className="absolute inset-0 bg-anthracite/40" onClick={() => setMobileOpen(false)} />
          <div className="relative bg-white p-6 rounded-t-xl max-h-[85vh] overflow-y-auto animate-slide-up-mobile">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-serif text-2xl">Filteri</h3>
              <button onClick={() => setMobileOpen(false)} className="p-2"><X size={20} /></button>
            </div>
            {FiltersInner}
            <button
              onClick={() => setMobileOpen(false)}
              className="mt-10 w-full bg-anthracite text-white py-4 eyebrow"
            >
              Prikaži {resultCount} rezultata
            </button>
          </div>
        </div>
      )}
    </>
  );
}
