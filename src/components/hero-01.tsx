import { Button } from "@/components/ui/button";

export function Hero01({ dictionary }: { dictionary: any }) {
  return (
    <section className="w-full min-h-[calc(100vh-theme(spacing.14))] flex items-center">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
        <div className="md:col-span-3 flex flex-col items-start text-left">
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
        <div className="md:col-span-1 flex items-center justify-center">
          <div className="w-full max-w-[280px] mx-auto aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
            <video
              src="https://a.storyblok.com/f/314917/x/1fc22db7b3/1721996743-hero-latest.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}