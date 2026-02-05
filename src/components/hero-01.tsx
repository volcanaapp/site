import { Button } from "@/components/ui/button";

export function Hero01({ dictionary }: { dictionary: any }) {
  return (
    <section className="w-full min-h-[calc(100vh-theme(spacing.14))] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/greenchips-aByj2tjzOVnSsUrDgh9ygd4o/index.html"
          frameBorder="0"
          className="w-full h-full"
        ></iframe>
        <div className="absolute inset-0 bg-background/60 md:bg-gradient-to-r from-background via-background/70 to-transparent" />
      </div>
      <div className="container z-10 relative">
        <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col items-start text-left">
          <h1 className="text-5xl md:text-[5.5rem] font-bold tracking-tighter mb-6 uppercase leading-none text-foreground">
            {dictionary.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
            {dictionary.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="font-bold text-lg py-6 px-8 bg-primary text-primary-foreground hover:bg-primary/90">
              {dictionary.cta_primary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}