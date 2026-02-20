import Image from 'next/image';

export function InterestSection() {
  return (
    <section className="pb-20 md:pb-24 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl relative z-10">
          <blockquote className="border-l-4 border-gray-800 pl-8">
            <p className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed italic">
              “Diferente de plataformas de ecommerce legadas que vendem apenas ferramentas, a Volcana entrega agentes inteligentes em uma arquitetura verdadeiramente moderna para operações digitais de alta performance.”
            </p>
            <p className="mt-6 text-lg text-gray-600">
              A Volcana™ tem compromisso com o impacto ambiental ao destinar 1% dos nossos lucros para à sustentabilidade do planeta.
            </p>
            <footer className="mt-8 flex items-center">
              <Image
                src="/renan-santos.png"
                alt="Foto de Renan Santos"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover mr-6 flex-shrink-0"
              />
              <div>
                <p className="text-lg font-semibold text-gray-900">Renan Santos</p>
                <p className="text-base text-gray-600">Founder e Especialista em ecommerce</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}