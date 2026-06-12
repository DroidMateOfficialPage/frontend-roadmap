import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CurrencyProvider } from "@/lib/currency";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl">404</h1>
        <p className="mt-4 eyebrow text-gold">Stranica nije pronađena</p>
        <p className="mt-4 text-sm text-muted-foreground">
          Tražena stranica ne postoji ili je premještena.
        </p>
        <a
          href="/"
          className="mt-8 inline-block border border-anthracite px-6 py-3 eyebrow hover:bg-anthracite hover:text-white transition-colors"
        >
          Povratak na početnu
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl">Greška u učitavanju</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Pokušajte ponovo ili se vratite na početnu stranicu.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="border border-anthracite px-6 py-3 eyebrow hover:bg-anthracite hover:text-white transition-colors"
          >
            Pokušaj ponovo
          </button>
          <a
            href="/"
            className="border border-stone-line px-6 py-3 eyebrow hover:bg-sand transition-colors"
          >
            Početna
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aura BiH — Luksuzne nekretnine i zemljišta" },
      { name: "description", content: "Vodeća platforma za promet ekskluzivnih nekretnina i investicionih zemljišta u Bosni i Hercegovini." },
      { name: "author", content: "Aura BiH" },
      { property: "og:title", content: "Aura BiH — Luksuzne nekretnine" },
      { property: "og:description", content: "Najprestižnije adrese u Bosni i Hercegovini." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="sr-Latn">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CurrencyProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </CurrencyProvider>
    </QueryClientProvider>
  );
}
