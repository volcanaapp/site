"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function UseCaseCarousel({ dictionary, lang }: { dictionary: any, lang: string }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };



    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container max-w-screen-xl">
        <div className="text-left max-w-3xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground uppercase">
            {dictionary.title}
          </h2>
        </div>

        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {dictionary.slides.map((slide: any, index: number) => (
              <CarouselItem key={index}>
                <div className="bg-muted/50 rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="flex flex-col justify-center space-y-6">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground uppercase">
                      {slide.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {slide.description}
                    </p>
                    <div className="flex">
                      <Button asChild size="lg" variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 font-bold">
                        <Link href={`/${lang}/waitlist`}>{slide.button_text}</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="https://www.dayos.com/assets/images-next/subpillars/accounting-accountsReceivable.webp"
                      alt={slide.title}
                      width={500}
                      height={500}
                      className="w-full max-w-sm"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center items-center gap-3 mt-8">
          {dictionary.slides.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                current === index ? "w-6 bg-secondary" : "w-2 bg-muted-foreground/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}