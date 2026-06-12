import { useState } from "react";
import { useCurrency } from "@/lib/currency";

export function FinanceCalculator({ priceEur }: { priceEur: number }) {
  const { format } = useCurrency();
  const [downPct, setDownPct] = useState(30);
  const [years, setYears] = useState(20);
  const rate = 0.045;

  const loan = priceEur * (1 - downPct / 100);
  const monthly = (loan * (rate / 12)) / (1 - Math.pow(1 + rate / 12, -years * 12));
  const down = priceEur * (downPct / 100);

  return (
    <div className="bg-sand-soft p-10 border border-stone-line">
      <p className="eyebrow text-gold mb-2">Finansijski kalkulator</p>
      <h3 className="font-serif text-3xl mb-8">Mjesečna rata kredita</h3>

      <div className="space-y-8">
        <div>
          <div className="flex justify-between text-sm mb-3">
            <span className="text-stone-500">Učešće</span>
            <span className="font-medium">{downPct}% · {format(down)}</span>
          </div>
          <input
            type="range"
            min={10}
            max={80}
            value={downPct}
            onChange={(e) => setDownPct(Number(e.target.value))}
            className="w-full accent-gold"
          />
        </div>
        <div>
          <div className="flex justify-between text-sm mb-3">
            <span className="text-stone-500">Rok otplate</span>
            <span className="font-medium">{years} godina</span>
          </div>
          <input
            type="range"
            min={5}
            max={30}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full accent-gold"
          />
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-stone-line grid grid-cols-2 gap-6">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-2">Iznos kredita</p>
          <p className="font-serif text-2xl">{format(loan)}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gold mb-2">Mjesečna rata</p>
          <p className="font-serif text-2xl">{format(monthly)}</p>
        </div>
      </div>
      <p className="text-[10px] text-stone-400 mt-6 leading-relaxed">
        * Kalkulacija je informativnog karaktera, fiksna kamata 4.5% godišnje. Stvarni uslovi zavise od banke i kreditne sposobnosti.
      </p>
    </div>
  );
}
