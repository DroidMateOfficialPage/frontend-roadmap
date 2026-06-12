import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { REGIONS } from "@/lib/types";
import { useCurrency } from "@/lib/currency";

export function HeroSearch() {
  const navigate = useNavigate();
  const { currency, setCurrency } = useCurrency();
  const [region, setRegion] = useState("Sve lokacije");
  const [tip, setTip] = useState("Sve nekretnine");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    const kat = tip === "Građevinska zemljišta" ? "zemljista" : "nekretnine";
    navigate({
      to: "/katalog",
      search: { kat, region: region !== "Sve lokacije" ? region : undefined },
    });
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl p-2 border border-white/20 max-w-4xl mx-auto flex flex-col md:flex-row gap-px shadow-elegant">
      <div className="flex-1 px-6 py-4 md:border-r border-white/20 text-left">
        <label className="block text-[9px] uppercase tracking-widest text-white/60 mb-1">Lokacija</label>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="bg-transparent text-sm font-medium w-full focus:outline-none appearance-none text-white"
        >
          <option className="text-anthracite">Sve lokacije</option>
          {REGIONS.map((r) => <option key={r} className="text-anthracite">{r}</option>)}
        </select>
      </div>
      <div className="flex-1 px-6 py-4 md:border-r border-white/20 text-left">
        <label className="block text-[9px] uppercase tracking-widest text-white/60 mb-1">Tip</label>
        <select
          value={tip}
          onChange={(e) => setTip(e.target.value)}
          className="bg-transparent text-sm font-medium w-full focus:outline-none appearance-none text-white"
        >
          <option className="text-anthracite">Sve nekretnine</option>
          <option className="text-anthracite">Luksuzne vile</option>
          <option className="text-anthracite">Penthaus</option>
          <option className="text-anthracite">Građevinska zemljišta</option>
        </select>
      </div>
      <div className="flex-1 px-6 py-4 text-left">
        <div className="flex justify-between items-center mb-1">
          <label className="block text-[9px] uppercase tracking-widest text-white/60">Budžet</label>
          <div className="flex gap-1.5 text-[9px] font-semibold">
            <button
              onClick={() => setCurrency("KM")}
              className={currency === "KM" ? "text-gold underline underline-offset-2" : "text-white/50"}
            >KM</button>
            <span className="text-white/30">/</span>
            <button
              onClick={() => setCurrency("EUR")}
              className={currency === "EUR" ? "text-gold underline underline-offset-2" : "text-white/50"}
            >€</button>
          </div>
        </div>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="bez ograničenja"
          className="bg-transparent text-sm font-medium w-full focus:outline-none text-white placeholder:text-white/40"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-gold hover:bg-gold-muted text-white px-10 py-4 text-[11px] uppercase tracking-[0.2em] transition-colors font-medium"
      >
        Pretraži
      </button>
    </div>
  );
}
