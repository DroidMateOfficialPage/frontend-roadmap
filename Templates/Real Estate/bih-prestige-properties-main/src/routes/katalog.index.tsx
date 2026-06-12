import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import { allListings } from "@/lib/data";
import { ListingCard } from "@/components/site/ListingCard";
import { FilterBar, type FilterState } from "@/components/site/FilterBar";
import { EUR_TO_KM } from "@/lib/types";
import { useCurrency } from "@/lib/currency";

const searchSchema = z.object({
  kat: z.enum(["nekretnine", "zemljista"]).optional().default("nekretnine"),
  region: z.string().optional(),
});

export const Route = createFileRoute("/katalog/")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Katalog — Aura BiH" },
      { name: "description", content: "Kompletan katalog luksuznih nekretnina i investicionih zemljišta u Bosni i Hercegovini." },
    ],
  }),
  component: Katalog,
});

function Katalog() {
  const { kat, region } = Route.useSearch();
  const { currency } = useCurrency();
  const [sort, setSort] = useState<"new" | "priceAsc" | "priceDesc">("new");

  const [filters, setFilters] = useState<FilterState>({
    kategorija: kat,
    region: region ?? "Sve lokacije",
    tip: "Svi tipovi",
    priceMax: "",
  });

  const filtered = useMemo(() => {
    let list = allListings.filter((l) =>
      filters.kategorija === "nekretnine" ? l.kind === "property" : l.kind === "land"
    );
    if (filters.region !== "Sve lokacije") {
      list = list.filter((l) => l.region === filters.region);
    }
    if (filters.tip !== "Svi tipovi") {
      list = list.filter((l) =>
        l.kind === "property"
          ? l.propertyType === filters.tip
          : l.landType === filters.tip
      );
    }
    const maxNum = parseFloat(filters.priceMax.replace(/[^\d.]/g, ""));
    if (!isNaN(maxNum) && maxNum > 0) {
      const maxEur = currency === "EUR" ? maxNum : maxNum / EUR_TO_KM;
      list = list.filter((l) => l.priceEur <= maxEur);
    }
    if (sort === "priceAsc") list = [...list].sort((a, b) => a.priceEur - b.priceEur);
    if (sort === "priceDesc") list = [...list].sort((a, b) => b.priceEur - a.priceEur);
    return list;
  }, [filters, sort, currency]);

  return (
    <main>
      <section className="px-6 md:px-10 pt-20 pb-12 max-w-7xl mx-auto">
        <p className="eyebrow text-gold mb-3">Kompletan katalog</p>
        <h1 className="font-serif text-4xl md:text-6xl leading-tight">
          {filters.kategorija === "nekretnine" ? "Nekretnine" : "Zemljišta"} u BiH
        </h1>
      </section>

      <FilterBar value={filters} onChange={setFilters} resultCount={filtered.length} />

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="flex justify-between items-center mb-12">
          <p className="text-sm text-stone-500">
            Prikazano <span className="text-anthracite font-medium">{filtered.length}</span> rezultata
          </p>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="text-sm border-b border-stone-line bg-transparent pb-1 focus:outline-none focus:border-gold cursor-pointer"
          >
            <option value="new">Najnovije</option>
            <option value="priceDesc">Cijena: opadajuće</option>
            <option value="priceAsc">Cijena: rastuće</option>
          </select>
        </div>

        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-serif text-2xl italic mb-3">Nema rezultata</p>
            <p className="text-sm text-stone-500">Prilagodite filtere kako biste pronašli željenu nekretninu.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {filtered.map((l) => (
              <ListingCard key={l.id} listing={l} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
