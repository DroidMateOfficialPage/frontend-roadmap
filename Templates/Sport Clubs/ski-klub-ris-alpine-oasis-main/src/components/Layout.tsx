import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Snowfall } from "./Snowfall";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <Snowfall count={40} />
      <Header />
      <main className="relative z-10 pt-20">{children}</main>
      <Footer />
    </div>
  );
}
