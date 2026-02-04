import { Button } from "@/components/ui/button";

export function Hero01({ dictionary }: { dictionary: any }) {
  return (
    <section className="relative w-full min-h-[calc(100vh-theme(spacing.14))] flex items-center justify-start">
      <div className="absolute inset-0 z-0">
        <video
          src="https://a.storyblok.com/f/314917/x/1fc22db7b3/1721996743-hero-latest.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col items-start text-left max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 uppercase leading-none text-white">
            {dictionary.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">
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