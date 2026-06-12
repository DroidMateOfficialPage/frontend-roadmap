import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { getListingBySlug } from "@/lib/data";
import { useCurrency } from "@/lib/currency";
import { AgentPanel } from "@/components/site/AgentPanel";
import { FinanceCalculator } from "@/components/site/FinanceCalculator";
import { MapPin, Home, Ruler, Calendar, Zap, ShieldCheck, FileCheck, Mountain } from "lucide-react";

export const Route = createFileRoute("/katalog/$slug")({
  loader: ({ params }) => {
    const listing = getListingBySlug(params.slug);
    if (!listing) throw notFound();
    return { listing };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.listing.title} — Aura BiH` },
          { name: "description", content: loaderData.listing.subtitle },
          { property: "og:title", content: loaderData.listing.title },
          { property: "og:description", content: loaderData.listing.subtitle },
          { property: "og:image", content: loaderData.listing.images[0] },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="max-w-3xl mx-auto py-32 px-6 text-center">
      <p className="eyebrow text-gold mb-4">404</p>
      <h1 className="font-serif text-4xl mb-4">Nekretnina nije pronađena</h1>
      <Link to="/katalog" search={{ kat: "nekretnine" }} className="eyebrow border-b border-anthracite pb-1">
        Povratak na katalog
      </Link>
    </div>
  ),
  component: Detail,
});

function Detail() {
  const { listing } = Route.useLoaderData();
  const { formatBoth } = useCurrency();
  const [tab, setTab] = useState<"foto" | "video" | "tour">("foto");
  const { primary, secondary } = formatBoth(listing.priceEur);
  const isLand = listing.kind === "land";

  return (
    <main className="bg-white">
      {/* Media gallery */}
      <section className="bg-anthracite">
        <div className="flex border-b border-white/10 px-6 md:px-10 gap-8">
          {[
            { id: "foto", label: "Fotografije" },
            { id: "video", label: "Video tura · 4K" },
            { id: "tour", label: "360° virtualna šetnja" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id as typeof tab)}
              className={`py-5 eyebrow transition-colors ${
                tab === t.id ? "text-gold border-b-2 border-gold -mb-px" : "text-white/40 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="relative aspect-[16/9] max-h-[78vh] overflow-hidden">
          {tab === "foto" && (
            <img
              src={listing.images[0]}
              alt={listing.title}
              className="w-full h-full object-cover animate-fade-in"
            />
          )}
          {tab === "video" && (
            <div className="w-full h-full flex items-center justify-center bg-anthracite text-white/60 flex-col gap-3">
              <div className="size-20 rounded-full border border-white/20 flex items-center justify-center">
                <span className="text-2xl">▶</span>
              </div>
              <p className="eyebrow">4K cinematic tura — uskoro</p>
            </div>
          )}
          {tab === "tour" && (
            <div className="w-full h-full flex items-center justify-center bg-anthracite text-white/60 flex-col gap-3">
              <Mountain size={48} className="text-gold" />
              <p className="eyebrow">360° virtualna šetnja — zakažite pristup</p>
            </div>
          )}
        </div>
      </section>

      {/* Main info */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          <div className="lg:col-span-2 space-y-16">
            {/* Header */}
            <div>
              <div className="flex gap-3 mb-5">
                {listing.badge && (
                  <span className="bg-anthracite text-white px-3 py-1.5 text-[10px] uppercase tracking-widest">
                    {listing.badge}
                  </span>
                )}
                <span className="border border-stone-line px-3 py-1.5 text-[10px] uppercase tracking-widest text-stone-500">
                  {listing.transaction}
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-4">
                {listing.title}
              </h1>
              <p className="text-lg text-stone-500 mb-6">{listing.subtitle}</p>
              <div className="flex items-center gap-2 text-sm text-stone-500 mb-8">
                <MapPin size={14} /> {listing.region} · {listing.microLocation}
              </div>
              <div className="flex flex-wrap items-baseline gap-6 pb-8 border-b border-stone-line">
                <div>
                  <p className="font-serif text-4xl">{primary}</p>
                  <p className="text-xs text-stone-400 mt-1">{secondary}</p>
                </div>
                <div className="text-sm">
                  <span className="text-stone-400">Površina · </span>
                  <span className="font-medium">
                    {isLand
                      ? `${(listing.areaDunum ?? listing.area / 1000).toLocaleString("sr-Latn-BA")} dunuma (${listing.area.toLocaleString("sr-Latn-BA")} m²)`
                      : `${listing.area} m²`}
                  </span>
                </div>
              </div>
            </div>

            {/* Tech grid */}
            <div>
              <p className="eyebrow text-gold mb-4">Tehnička specifikacija</p>
              <h2 className="font-serif text-3xl mb-10">Detalji nekretnine</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-stone-line pt-10">
                {isLand ? (
                  <>
                    <Spec icon={<Mountain size={16} />} label="Tip zemljišta" value={listing.landType} />
                    <Spec icon={<Ruler size={16} />} label="Dozvoljena spratnost" value={listing.allowedFloors} />
                    <Spec icon={<Home size={16} />} label="Koef. zauzetosti" value={String(listing.occupancyRatio)} />
                    <Spec icon={<Mountain size={16} />} label="Nagib terena" value={listing.slope} />
                    <Spec icon={<MapPin size={16} />} label="Pogled" value={listing.view} />
                    <Spec icon={<Zap size={16} />} label="Infrastruktura" value={listing.infrastructure.join(", ")} />
                    <Spec icon={<FileCheck size={16} />} label="Status dozvole" value={listing.permitStatus} />
                    <Spec icon={<ShieldCheck size={16} />} label="Vlasništvo" value={listing.legal.vlasnistvo} />
                    <Spec icon={<FileCheck size={16} />} label="Uknjiženost" value={listing.legal.uknjizenost} />
                  </>
                ) : (
                  <>
                    <Spec icon={<Home size={16} />} label="Tip nekretnine" value={listing.propertyType} />
                    <Spec icon={<Home size={16} />} label="Broj soba" value={String(listing.rooms)} />
                    <Spec icon={<Home size={16} />} label="Kupatila" value={String(listing.bathrooms)} />
                    <Spec icon={<Calendar size={16} />} label="Godina gradnje" value={String(listing.yearBuilt)} />
                    <Spec icon={<Zap size={16} />} label="Grijanje" value={listing.heating} />
                    <Spec icon={<Ruler size={16} />} label="Spratnost" value={listing.totalFloors ? `${listing.floor ?? 0}/${listing.totalFloors}` : "—"} />
                    <Spec icon={<ShieldCheck size={16} />} label="Vlasništvo" value={listing.legal.vlasnistvo} />
                    <Spec icon={<FileCheck size={16} />} label="Energetski certifikat" value={listing.legal.energetskiCertifikat ?? "—"} />
                    <Spec icon={<Home size={16} />} label="Konstrukcija" value={listing.buildType} />
                  </>
                )}
              </div>
            </div>

            {/* Amenities for properties */}
            {!isLand && (
              <div>
                <p className="eyebrow text-gold mb-4">Premium pogodnosti</p>
                <div className="flex flex-wrap gap-3">
                  {listing.amenities.map((a: string) => (
                    <span key={a} className="border border-stone-line px-4 py-2 text-sm">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="space-y-10">
              <div>
                <p className="eyebrow text-gold mb-3">O nekretnini</p>
                <p className="text-lg leading-relaxed text-anthracite/80 font-light">
                  {listing.description.about}
                </p>
              </div>
              {listing.description.interior && (
                <div>
                  <p className="eyebrow text-gold mb-3">Enterijer i oprema</p>
                  <p className="text-lg leading-relaxed text-anthracite/80 font-light">
                    {listing.description.interior}
                  </p>
                </div>
              )}
              <div>
                <p className="eyebrow text-gold mb-3">Lokacija i okruženje</p>
                <p className="text-lg leading-relaxed text-anthracite/80 font-light">
                  {listing.description.location}
                </p>
              </div>
            </div>

            {/* Map placeholder + distances */}
            <div>
              <p className="eyebrow text-gold mb-3">Lokacija na mapi</p>
              <h3 className="font-serif text-3xl mb-8">Okruženje i pristup</h3>
              <div className="aspect-[16/9] bg-anthracite relative overflow-hidden mb-8">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 40%, oklch(0.72 0.09 75 / 0.4) 0, transparent 30%), repeating-linear-gradient(45deg, oklch(0.3 0.005 60) 0 2px, transparent 2px 40px), repeating-linear-gradient(-45deg, oklch(0.3 0.005 60) 0 2px, transparent 2px 40px)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="size-6 rounded-full bg-gold animate-pulse" />
                    <div className="absolute inset-0 size-6 rounded-full bg-gold/40 animate-ping" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white/60 text-[10px] uppercase tracking-widest">
                  {listing.coordinates.lat.toFixed(4)}° N · {listing.coordinates.lng.toFixed(4)}° E
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {listing.distances.map((d: { label: string; km: number }) => (
                  <div key={d.label} className="border-t border-stone-line pt-4">
                    <p className="font-serif text-2xl mb-1">{d.km} km</p>
                    <p className="text-[10px] uppercase tracking-widest text-stone-400">{d.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {!isLand && <FinanceCalculator priceEur={listing.priceEur} />}
          </div>

          {/* Sticky agent panel */}
          <aside>
            <AgentPanel agent={listing.agent} listingTitle={listing.title} />
          </aside>
        </div>
      </section>
    </main>
  );
}

function Spec({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-4">
      <div className="text-gold mt-1">{icon}</div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">{label}</p>
        <p className="text-sm font-medium leading-snug">{value}</p>
      </div>
    </div>
  );
}
