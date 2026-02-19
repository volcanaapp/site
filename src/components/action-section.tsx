import { OptimizedWaitlistForm } from "./optimized-waitlist-form";

export function ActionSection() {
  return (
    <section className="fixed bottom-0 left-0 w-full bg-[#D3FE3E] py-6 z-50 shadow-[0_-4px_14px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Garanta sua Posição no Lote 01
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            Seja um dos primeiros a ter acesso à Volcana™.
          </p>
        </div>
        <div className="w-full md:w-auto flex-shrink-0">
          <OptimizedWaitlistForm />
        </div>
      </div>
    </section>
  );
}