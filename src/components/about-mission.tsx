"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export function AboutMission({ dictionary }: { dictionary: any }) {
  const { ref, isInView } = useInView<HTMLElement>({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="bg-black py-24 md:py-40">
      <div className="container max-w-4xl mx-auto text-center">
        <h1
          className={cn(
            "text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none text-white transition-all duration-1000 ease-out",
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          )}
        >
          {dictionary.title}
        </h1>
        <p
          className={cn(
            "mt-8 text-xl md:text-2xl text-gray-400 font-medium leading-relaxed transition-all duration-1000 ease-out delay-200",
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          )}
        >
          {dictionary.subtitle}
        </p>
      </div>
    </section>
  );
}