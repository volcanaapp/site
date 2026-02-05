import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function TestimonialSection({ dictionary }: { dictionary: any }) {
  return (
    <div className="dark">
      <section className="w-full bg-background py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
              TURBINE SUA OPERAÇÃO COM IA AGÊNTICA
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Transforme a maneira como seu time trabalha com automação movida a IA, inteligência operacional instantânea e suporte especializado de agentes.
            </p>
            <div className="pt-2">
              <Button size="lg">
                Ver detalhes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}