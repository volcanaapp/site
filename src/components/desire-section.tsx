"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StickyCTA } from "@/components/sticky-cta";
import { useScrollTrigger } from "@/hooks/use-scroll-trigger";

const features = [
  {
    title: "Margem Estrutural",
    description: "Saia do imposto de % das plataformas tradicionais sobre o seu faturamento. Entre na era do custo previsível e efetivo dos nossos agentes.",
  },
  {
    title: "A Elite Agêntica",
    description: "Você não precisa de mais funcionários e ferramentas na sua operação. Você precisa de agentes que não dormem.",
  },
  {
    title: "Inteligência Preditiva",
    description: "Nossos agentes analisam tendências e otimizam seu estoque antes mesmo de você pensar nisso.",
  },
  {
    title: "Atendimento Autônomo 24/7",
    description: "Agentes de suporte que resolvem 95% das solicitações dos clientes, a qualquer hora do dia.",
  },
  {
    title: "Marketing Hiper-Personalizado",
    description: "Crie campanhas que falam diretamente com cada cliente, de forma automática e escalável.",
  },
];

export function DesireSection() {
  const isScrolled = useScrollTrigger(100);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">O novo padrão operacional do E-commerce.</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          A Volcana não é apenas uma plataforma. É um novo paradigma onde agentes de IA trabalham para escalar seu negócio de forma autônoma e inteligente.
        </p>
        
        {/* Mobile View: Carousel */}
        <div className="lg:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1 h-full">
                    <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm h-full flex flex-col text-left">
                      <h3 className="text-2xl font-bold mb-4 text-[#A3C934]">{feature.title}</h3>
                      <p className="text-lg text-gray-700 flex-grow">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden lg:flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <div key={index} className="w-[calc(33.333%-16px)]">
              <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm h-full flex flex-col text-left hover:border-[#A3C934] transition-colors duration-300">
                <h3 className="text-2xl font-bold mb-4 text-[#A3C934]">{feature.title}</h3>
                <p className="text-lg text-gray-700 flex-grow">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
      <StickyCTA isVisible={isScrolled} />
    </section>
  );
}