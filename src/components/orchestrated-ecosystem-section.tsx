"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { integrationLogos } from "./integration-logos";

export function OrchestratedEcosystemSection({ dictionary }: { dictionary: any }) {
  const { ref, isInView } = useInView<HTMLElement>({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="w-full py-20 md:py-32 bg-background">
      <div className="container max-w-screen-xl">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className={cn(
            "text-4xl md:text-6xl font-bold tracking-tighter uppercase text-foreground transition-all duration-700 ease-out",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            {dictionary.title}
          </h2>
          <p className={cn(
            "text-lg md:text-xl text-muted-foreground mt-6 transition-all duration-700 ease-out delay-200",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            {dictionary.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {dictionary.logos.map((logo: any, index: number) => {
            const LogoComponent = integrationLogos[logo.key];
            return (
              <div
                key={index}
                className={cn(
                  "bg-foreground rounded-2xl flex items-center justify-center p-6 h-28 transition-all duration-500 ease-out hover:scale-105",
                  isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
                )}
                style={{ transitionDelay: `${100 + index * 100}ms` }}
              >
                {LogoComponent && <LogoComponent className="h-8 w-auto text-background" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}