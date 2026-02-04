import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero01() {
  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
      <div className="flex flex-col items-start text-left">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          A primeira Plataforma de E-commerce Autônoma da América Latina.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Engenharia brasileira. Custo fixo. Operação agentica.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="font-bold text-lg py-6 px-8 bg-primary text-primary-foreground hover:bg-primary/90">
            Criar minha loja
          </Button>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center">
        {/* Placeholder para o visual */}
        <div className="w-full h-[400px] bg-card rounded-lg border flex items-center justify-center">
          <p className="text-muted-foreground">Visual Placeholder</p>
        </div>
      </div>
    </section>
  );
}