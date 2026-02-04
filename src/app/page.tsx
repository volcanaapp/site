import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="container flex flex-col items-center justify-center text-center py-20 md:py-32">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Volcana™
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          A primeira plataforma de e-commerce autônoma da América Latina. Reduza a complexidade e impulsione suas vendas com agentes inteligentes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="font-bold text-lg py-6 px-8">
            Comece Agora
          </Button>
          <Button size="lg" variant="outline" className="font-bold text-lg py-6 px-8">
            Saiba Mais
          </Button>
        </div>
      </div>
    </section>
  );
}