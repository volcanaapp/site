import { Button } from "@/components/ui/button";

export function Hero01({ dictionary }: { dictionary: any }) {
  return (
    <section className="container grid lg:grid-cols-5 gap-12 items-center min-h-[calc(100vh-theme(spacing.14))] py-12 md:py-20">
      <div className="flex flex-col items-start text-left lg:col-span-2">
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
      <div className="hidden lg:flex items-center justify-center self-stretch lg:col-span-3">
        <video
          src="https://a.storyblok.com/f/314917/x/1fc22db7b3/1721996743-hero-latest.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto transform scale-125"
        />
      </div>
    </section>
  );
}