"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { integrationLogos } from "./integration-logos";
import { AwsLogo } from "./aws-logo";
import { Badge } from "./ui/badge";

export function OrchestratedEcosystemSection({ dictionary }: { dictionary: any }) {
  const { ref, isInView } = useInView<HTMLElement>({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="w-full py-24 md:py-40 bg-white relative">
      <div className="container max-w-screen-xl relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <Badge variant="outline" className="mb-6 border-gray-200 text-gray-400 font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-1">
            ORCHESTRATED ECOSYSTEM
          </Badge>
          <h2 className={cn(
            "text-5xl md:text-7xl font-black tracking-tighter uppercase text-black leading-none transition-all duration-1000 ease-out",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            {dictionary.title}
          </h2>
          <p className={cn(
            "text-xl md:text-2xl text-gray-600 mt-8 leading-relaxed font-medium transition-all duration-1000 ease-out delay-200",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            {dictionary.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 max-w-5xl mx-auto">
          {dictionary.logos.map((logo: any, index: number) => {
            const isAwsLogo = index === 0;
            const LogoComponent = isAwsLogo ? AwsLogo : integrationLogos[logo.key];
            const logoClassName = isAwsLogo ? "h-14 w-auto text-white" : "h-10 w-auto text-white";
            
            return (
              <div
                key={index}
                className={cn(
                  "bg-black rounded-3xl flex items-center justify-center p-8 h-32 lg:h-40 transition-all duration-700 ease-out hover:bg-volcana-lime group shadow-lg hover:shadow-volcana-lime/20",
                  isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
                )}
                style={{ transitionDelay: `${100 + index * 100}ms` }}
              >
                {LogoComponent && <LogoComponent className={cn(logoClassName, "transition-colors duration-500 group-hover:text-black")} />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}