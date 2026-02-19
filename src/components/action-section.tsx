
import { SegmentBadge } from "./segment-badge";
import { OptimizedWaitlistForm } from "./optimized-waitlist-form";

export function ActionSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-4xl text-center">
        <SegmentBadge />
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Entre para a lista de espera
        </h2>
        <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
          Seja um dos primeiros a ter acesso à Volcana™ e garanta sua posição no Lote 01. Estamos priorizando indústrias e marcas D2C que buscam a autonomia operacional.
        </p>
        <OptimizedWaitlistForm />
      </div>
    </section>
  );
}
