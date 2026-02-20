import { WaitlistLogoCloud } from './waitlist-logo-cloud';

export function HowItWorksSection() {
  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Porque somos diferentes?</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Plataformas legadas te entregam ferramentas. A Volcana™ te entrega uma operação autônoma e inteligente.
          </p>
        </div>
      </section>
      <div className="py-16 bg-white relative z-10">
        <div className="container mx-auto text-center">
          <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-8">
            EMPRESAS QUE CONFIAM NA VOLCANA
          </h3>
          <WaitlistLogoCloud />
        </div>
      </div>
    </>
  );
}