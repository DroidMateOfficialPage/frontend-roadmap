import { Link } from "@tanstack/react-router";
import type { Listing } from "@/lib/types";
import { useCurrency } from "@/lib/currency";

export function ListingCard({ listing }: { listing: Listing }) {
  const { formatBoth } = useCurrency();
  const { primary, secondary } = formatBoth(listing.priceEur);
  const isLand = listing.kind === "land";

  return (
    <Link
      to="/katalog/$slug"
      params={{ slug: listing.slug }}
      className="group block"
    >
      <div className="relative overflow-hidden mb-6">
        <img
          src={listing.images[0]}
          alt={listing.title}
          loading="lazy"
          width={800}
          height={1000}
          className="w-full aspect-[4/5] object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        {listing.badge && (
          <div
            className={`absolute top-4 left-4 px-3 py-1 text-[9px] uppercase tracking-widest font-semibold ${
              listing.badge === "Investicija"
                ? "bg-anthracite text-white italic"
                : "bg-white/95 text-anthracite"
            }`}
          >
            {listing.badge}
          </div>
        )}
      </div>
      <div className="flex justify-between items-start gap-4">
        <div className="min-w-0">
          <h3 className="font-serif text-xl group-hover:text-gold transition-colors leading-tight">
            {listing.title}
          </h3>
          <p className="text-stone-400 text-xs uppercase tracking-wider mt-1.5">
            {listing.region}
          </p>
        </div>
        <div className="text-right shrink-0">
          <div className="font-medium text-lg">{primary}</div>
          <div className="text-[10px] text-stone-400 uppercase tracking-tighter mt-0.5">
            {secondary}
          </div>
        </div>
      </div>
      <div className="mt-4 flex gap-5 border-t border-stone-line pt-4 flex-wrap">
        {isLand ? (
          <>
            <span className="text-[10px] uppercase tracking-widest">
              {(listing.areaDunum ?? listing.area / 1000).toLocaleString("sr-Latn-BA")} dunuma
            </span>
            <span className="text-[10px] uppercase tracking-widest">
              {listing.allowedFloors}
            </span>
            <span className="text-[10px] uppercase tracking-widest">
              {listing.landType.split(" ")[0]}
            </span>
          </>
        ) : (
          <>
            <span className="text-[10px] uppercase tracking-widest">{listing.rooms} soba</span>
            <span className="text-[10px] uppercase tracking-widest">{listing.area} m²</span>
            {listing.amenities[0] && (
              <span className="text-[10px] uppercase tracking-widest">
                {listing.amenities[0]}
              </span>
            )}
          </>
        )}
      </div>
    </Link>
  );
}
