import { Button } from "@/components/ui/button";
import Image from "next/image";

export function FeatureSection({ dictionary }: { dictionary: any }) {
  return (
    <div className="dark">
      <section className="w-full bg-background py-20 md:py-32">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-screen-xl">
          <div className="flex flex-col items-start text-left space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
              <span className="text-muted-foreground">{dictionary.title_part1}</span>
              <br />
              <span className="text-foreground">{dictionary.title_part2}</span>
            </h2>
            <p className="text-xl text-foreground font-medium">
              {dictionary.subtitle}
            </p>
            <p className="text-lg text-muted-foreground max-w-md">
              {dictionary.description1}
            </p>
            <p className="text-lg text-foreground max-w-md font-semibold">
              {dictionary.description2}
            </p>
            <Button size="lg" className="font-bold text-lg py-6 px-8 bg-primary-foreground text-background hover:bg-primary-foreground/90 rounded-lg mt-4">
              {dictionary.cta}
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="relative aspect-[16/10] bg-[#0A0A0A] border-4 border-muted-foreground/20 rounded-t-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <div className="absolute top-0 left-0 w-full h-8 bg-card flex items-center px-4 gap-2">
                  <span className="h-3 w-3 rounded-full bg-muted-foreground/30"></span>
                  <span className="h-3 w-3 rounded-full bg-muted-foreground/30"></span>
                  <span className="h-3 w-3 rounded-full bg-muted-foreground/30"></span>
                </div>
                <div className="pt-8 h-full">
                  <Image
                    src="https://a.storyblok.com/f/314917/2532x1582/1297851299/hero.png"
                    alt="Product screenshot"
                    width={1266}
                    height={791}
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                  />
                </div>
              </div>
              <div className="h-4 bg-muted-foreground/30 rounded-b-xl relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1 bg-muted-foreground/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}