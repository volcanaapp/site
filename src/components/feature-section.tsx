"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function FeatureSection({ dictionary, lang }: { dictionary: any, lang: string }) {
  const { ref, isInView } = useInView<HTMLElement>({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="dark">
      <section ref={ref} className="w-full bg-background py-20 md:py-32 overflow-hidden">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-screen-xl">
          <div
            className={cn(
              "flex flex-col items-start text-left space-y-6 transition-all duration-700 ease-out",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
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
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="font-bold text-lg py-6 px-8 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href={`/${lang}/about`}>{dictionary.learn_more}</Link>
              </Button>
            </div>
          </div>
          <div
            className={cn(
              "flex items-center justify-center transition-all duration-700 ease-out",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <Image
              src="https://a.storyblok.com/f/314917/1634x1248/c71656cb82/mbp.png"
              alt="Product screenshot on a laptop"
              width={1634}
              height={1248}
              className="w-full max-w-2xl mx-auto"
              crossOrigin="anonymous"
            />
          </div>
        </div>
      </section>
    </div>
  );
}