import { Button } from "@/components/ui/button";

export function Hero01({ dictionary }: { dictionary: any }) {
  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-theme(spacing.14))] py-12 md:py-20">
      <div className="flex flex-col items-start text-left">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 uppercase leading-none">
          {dictionary.title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
          {dictionary.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="font-bold text-lg py-6 px-8 bg-primary text-primary-foreground hover:bg-primary/90">
            {dictionary.cta_primary}
          </Button>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center self-stretch">
        {/* Placeholder para o visual */}
        <div className="w-full h-full min-h-[400px] bg-card rounded-lg border flex items-center justify-center">
          <p className="text-muted-foreground">Visual Placeholder</p>
        </div>
      </div>
    </section>
  );
}