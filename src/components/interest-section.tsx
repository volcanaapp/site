import Image from 'next/image';

export function InterestSection() {
  return (
    <section className="pb-20 md:pb-24 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl relative z-10">
          <blockquote className="border-l-4 border-gray-800 pl-8">
            <p className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed italic">
              “Enquanto plataformas legadas ainda comercializam apenas ferramentas, nós entregamos agentes inteligentes que operam sobre uma arquitetura moderna, escalável e orientada a performance.”
            </p>
            <p className="mt-6 text-lg text-gray-600">
              A Volcana tem compromisso com a sustentabilidade, destinando 1% dos nossos lucros para o planeta.
            </p>
            <footer className="mt-8 flex items-center">
              <Image
                src="/pasted-image-2026-02-20T17-52-43-733Z.png"
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