"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useInView } from "@/hooks/use-in-view";
import { StickyCTA } from "@/components/sticky-cta";

const features = [
  {
    title: "O Gatilho da Margem",
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
  const { ref, isInView } = useInView<HTMLElement>({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">A Revolução do E-commerce Agêntico</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          A Volcana não é apenas uma plataforma. É um novo paradigma onde agentes de IA trabalham para escalar seu negócio de forma autônoma e inteligente.
        </p>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {features.map((feature, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
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
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
      <StickyCTA isVisible={isInView} />
    </section>
  );
}