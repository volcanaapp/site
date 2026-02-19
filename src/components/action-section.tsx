import { OptimizedWaitlistForm } from "./optimized-waitlist-form";

export function ActionSection() {
  return (
    <section className="w-full bg-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Junte-se ao Futuro do E-commerce Agêntico
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            Mais de 1.284 líderes já garantiram acesso prioritário. Não fique de fora.
          </p>
        </div>
        <div className="w-full md:w-auto flex-shrink-0">
          <OptimizedWaitlistForm />
        </div>
      </div>
    </section>
  );
}