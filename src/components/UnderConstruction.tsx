import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/Footer";

export function UnderConstruction() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white grid place-items-center min-h-[calc(100dvh-12rem)] px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 rounded-md bg-ink/[0.04] ring-1 ring-inset ring-ink/10 px-4 py-2">
            <span
              aria-hidden
              className="block w-2 h-2 rounded-full bg-accent"
            />
            <span className="text-[11px] tracking-[.22em] uppercase font-semibold leading-none text-ink/70">
              Page en construction
            </span>
          </div>
          <p className="mt-4 text-sm text-ink/60">
            Cette page sera bientôt disponible.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
