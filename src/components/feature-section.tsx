"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function FeatureSection({ dictionary, lang }: { dictionary: any, lang: string }) {
  const { ref, isInView } = useInView<HTMLElement>({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="dark">
      <section ref={ref} className="w-full bg-background py-24 md:py-40 overflow-hidden relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-volcana-lime/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center max-w-screen-xl relative z-10">
          <div
            className={cn(
              "flex flex-col items-start text-left space-y-8 transition-all duration-1000 ease-out",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}
          >
            <Badge variant="outline" className="border-volcana-lime/30 text-volcana-lime bg-volcana-lime/5 px-4 py-1">
              THE FUTURE OF COMMERCE
            </Badge>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
              <span className="text-gray-500">{dictionary.title_part1}</span>
              <br />
              <span className="text-white drop-shadow-[0_0_15px_rgba(211,254,62,0.3)]">{dictionary.title_part2}</span>
            </h2>
            
            <div className="space-y-4 max-w-lg">
              <p className="text-xl md:text-2xl text-white font-bold leading-tight">
                {dictionary.subtitle}
              </p>
              <p className="text-lg text-gray-400">
                {dictionary.description1}
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Button asChild size="lg" variant="volcana" className="font-bold text-lg h-14 px-10 rounded-xl group">
                <Link href={`/${lang}/about`}>
                  {dictionary.learn_more}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                </Link>
              </Button>
            </div>
          </div>
          
          <div
            className={cn(
              "flex items-center justify-center transition-all duration-1000 ease-out relative",
              isInView ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-12 scale-95"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="absolute inset-0 bg-volcana-lime/10 rounded-full blur-[100px] scale-75 animate-pulse" />
            <Image
              src="https://a.storyblok.com/f/314917/1634x1248/c71656cb82/mbp.png"
              alt="Product screenshot on a laptop"
              width={1634}
              height={1248}
              className="w-full max-w-2xl mx-auto relative z-10 filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              crossOrigin="anonymous"
            />
          </div>
        </div>
      </section>
    </div>
  );
}