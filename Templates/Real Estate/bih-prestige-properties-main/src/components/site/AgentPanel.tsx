import type { Agent } from "@/lib/types";
import { Download, MessageCircle, Phone } from "lucide-react";

export function AgentPanel({ agent, listingTitle }: { agent: Agent; listingTitle: string }) {
  return (
    <div className="bg-white border border-stone-line p-8 shadow-soft sticky top-28">
      <div className="flex items-center gap-4 mb-6 pb-6 border-b border-stone-line">
        <img
          src={agent.image}
          alt={agent.name}
          className="size-14 rounded-full object-cover"
        />
        <div>
          <p className="text-[10px] uppercase tracking-widest text-stone-400">{agent.role}</p>
          <p className="font-serif text-lg">{agent.name}</p>
          <p className="text-[10px] text-stone-400">Licenca: {agent.license}</p>
        </div>
      </div>

      <a
        href={`https://wa.me/${agent.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(`Pozdrav, zanima me ${listingTitle}.`)}`}
        target="_blank"
        rel="noopener"
        className="w-full bg-anthracite text-white py-4 eyebrow flex items-center justify-center gap-3 hover:bg-gold transition-colors mb-3"
      >
        <MessageCircle size={14} /> Zakažite privatan obilazak
      </a>

      <a
        href={`tel:${agent.phone.replace(/\s/g, "")}`}
        className="w-full border border-anthracite text-anthracite py-4 eyebrow flex items-center justify-center gap-3 hover:bg-anthracite hover:text-white transition-colors mb-3"
      >
        <Phone size={14} /> {agent.phone}
      </a>

      <form className="space-y-3 mt-6 pt-6 border-t border-stone-line">
        <p className="eyebrow text-gold mb-3">Pošaljite upit</p>
        <input
          type="text"
          placeholder="Ime i prezime"
          className="w-full border border-stone-line px-4 py-3 text-sm focus:outline-none focus:border-gold"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-stone-line px-4 py-3 text-sm focus:outline-none focus:border-gold"
        />
        <textarea
          rows={3}
          placeholder="Vaša poruka"
          defaultValue={`Pozdrav, zanima me više informacija o ${listingTitle}.`}
          className="w-full border border-stone-line px-4 py-3 text-sm focus:outline-none focus:border-gold resize-none"
        />
        <button
          type="button"
          className="w-full bg-sand text-anthracite py-3 eyebrow hover:bg-gold hover:text-white transition-colors"
        >
          Pošalji upit
        </button>
      </form>

      <button className="w-full mt-4 text-[10px] uppercase tracking-widest text-stone-400 hover:text-gold flex items-center justify-center gap-2 py-2">
        <Download size={12} /> Preuzmi PDF brošuru
      </button>
    </div>
  );
}
