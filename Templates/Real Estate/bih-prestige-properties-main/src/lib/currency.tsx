import { createContext, useContext, useState, type ReactNode } from "react";
import { EUR_TO_KM, type Currency } from "./types";

interface CurrencyCtx {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  format: (eur: number) => string;
  formatBoth: (eur: number) => { primary: string; secondary: string };
}

const Ctx = createContext<CurrencyCtx | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("EUR");

  const formatNum = (n: number) =>
    new Intl.NumberFormat("sr-Latn-BA", { maximumFractionDigits: 0 }).format(n);

  const format = (eur: number) => {
    if (currency === "EUR") return `€ ${formatNum(eur)}`;
    return `${formatNum(eur * EUR_TO_KM)} KM`;
  };

  const formatBoth = (eur: number) => {
    const primary = format(eur);
    const secondary =
      currency === "EUR"
        ? `${formatNum(eur * EUR_TO_KM)} KM`
        : `€ ${formatNum(eur)}`;
    return { primary, secondary };
  };

  return (
    <Ctx.Provider value={{ currency, setCurrency, format, formatBoth }}>
      {children}
    </Ctx.Provider>
  );
}

export function useCurrency() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCurrency must be used within CurrencyProvider");
  return v;
}
