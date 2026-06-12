import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-canvas py-20 mt-24">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        <div>
          <h5 className="font-display text-2xl mb-6 italic">Studio</h5>
          <p className="text-sm text-canvas/60 leading-relaxed">
            St Andrews, Fife<br />
            By appointment only<br />
            <a href="mailto:hello@sandrascakes.scot" className="hover:text-rose transition-colors">hello@sandrascakes.scot</a>
          </p>
        </div>
        <div className="text-center">
          <div className="text-3xl font-display font-medium mb-4">
            Sandra&rsquo;s <span className="italic">Cakes</span>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-canvas/40">
            Elevating the art of celebration · Est. 2012
          </p>
          <div className="mt-6 flex justify-center gap-6 text-[11px] uppercase tracking-[0.2em] text-canvas/60">
            <Link to="/portfolio" className="hover:text-rose">Portfolio</Link>
            <Link to="/flavours" className="hover:text-rose">Flavours</Link>
            <Link to="/contact" className="hover:text-rose">Enquire</Link>
          </div>
        </div>
        <div className="text-left md:text-right">
          <h5 className="font-display text-2xl mb-6 italic">Follow</h5>
          <div className="flex md:flex-col flex-row gap-4 md:gap-2 text-sm text-canvas/60 uppercase tracking-widest">
            <a href="#" className="hover:text-rose transition-colors">Instagram</a>
            <a href="#" className="hover:text-rose transition-colors">Pinterest</a>
            <a href="#" className="hover:text-rose transition-colors">Facebook</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-20 pt-8 border-t border-canvas/10 px-8">
        <p className="text-[10px] uppercase tracking-[0.1em] text-canvas/30">
          © {new Date().getFullYear()} Sandra&rsquo;s Cakes St Andrews. All rights reserved.
        </p>
      </div>
    </footer>
  );
}