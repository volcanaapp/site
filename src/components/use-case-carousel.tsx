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
import { CtaButton } from "./ui/cta-button";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";

const carouselImages = [
  "/volcana-nature.png",
  "/volcana.capsula.png",
];

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
    <section className="w-full py-24 md:py-40 bg-gray-50 overflow-hidden">
      <div className="container max-w-screen-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="text-left max-w-3xl">
            <Badge variant="outline" className="mb-4 border-gray-300 text-gray-500 font-mono text-[10px] tracking-widest uppercase">
              USE CASES
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-black uppercase leading-none">
              {dictionary.title}
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            {dictionary.slides.map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  current === index ? "w-10 bg-black" : "w-4 bg-gray-200"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {dictionary.slides.map((slide: any, index: number) => (
              <CarouselItem key={index}>
                <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center shadow-xl shadow-gray-200/50">
                  <div className="flex flex-col justify-center space-y-8">
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-black uppercase leading-tight">
                      {slide.title}
                    </h3>
                    <p className="text-gray-600 text-xl leading-relaxed font-medium">
                      {slide.description}
                    </p>
                    <div className="flex">
                      <CtaButton asChild className="h-14 px-8 font-bold" wrapperClassName="w-auto justify-start">
                        <Link href={`/${lang}/waitlist`}>
                          {slide.button_text}
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </CtaButton>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-volcana-lime/5 rounded-full blur-3xl" />
                    <Image
                      src={carouselImages[index % carouselImages.length]}
                      alt={slide.title}
                      width={600}
                      height={400}
                      className="w-full max-w-md relative z-10 filter drop-shadow-2xl"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}