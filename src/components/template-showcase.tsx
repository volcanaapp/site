"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const templates = [
  {
    name: "Moda Urbana",
    description: "Um design moderno e arrojado para marcas de streetwear.",
    image: "https://placehold.co/600x800/1a1a1a/d3fe3e?text=Moda%0AUrbana&font=raleway",
    tags: ["Moda", "Jovem", "Urbano"],
  },
  {
    name: "Artesanato Chic",
    description: "Elegância e simplicidade para produtos feitos à mão.",
    image: "https://placehold.co/600x800/f5f5f5/333333?text=Artesanato%0AChic&font=raleway",
    tags: ["Artesanal", "Minimalista", "Boutique"],
  },
  {
    name: "Tecnologia Futura",
    description: "Um layout futurista para lojas de eletrônicos e gadgets.",
    image: "https://placehold.co/600x800/1c2a4a/ffffff?text=Tecnologia%0AFutura&font=raleway",
    tags: ["Tecnologia", "Moderno", "Eletrônicos"],
  },
  {
    name: "Beleza Natural",
    description: "Visual limpo e orgânico para cosméticos e produtos de bem-estar.",
    image: "https://placehold.co/600x800/f0fff4/4caf50?text=Beleza%0ANatural&font=raleway",
    tags: ["Cosméticos", "Natural", "Clean"],
  },
];

export function TemplateShowcase() {
  const { ref: sectionRef, isInView } = useInView<HTMLElement>({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="dark">
      <section
        ref={sectionRef}
        id="templates"
        className={cn(
          "bg-black text-white py-24 md:py-32 transition-opacity duration-1000 ease-in-out relative overflow-hidden",
          isInView ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
             style={{ 
               backgroundImage: `linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)`,
               backgroundSize: '100px 100px' 
             }} />
             
        <div className="container max-w-screen-xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <Badge variant="outline" className="mb-6 border-volcana-lime/30 text-volcana-lime font-mono text-xs tracking-[0.2em] px-4 py-1.5">
              NOSSOS TEMPLATES
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
              Comece com um Design Vencedor
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Escolha um dos nossos templates profissionais, criados para maximizar suas vendas e encantar seus clientes. Totalmente personalizáveis para refletir a identidade da sua marca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {templates.map((template, index) => (
              <div
                key={template.name}
                className={cn(
                  "group rounded-2xl overflow-hidden bg-[#111] border border-gray-800/50 transition-all duration-700 ease-out hover:border-volcana-lime/50 hover:shadow-[0_0_40px_-10px_rgba(211,254,62,0.2)]",
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="overflow-hidden aspect-[3/4] relative">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-gray-800 text-gray-300 border-none font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-white mb-2">
                    {template.name}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {template.description}
                  </p>
                  <Button className="bg-volcana-lime text-black font-bold hover:bg-volcana-lime/90 w-full md:w-auto rounded-full px-6 py-3">
                    Ver Prévia
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}