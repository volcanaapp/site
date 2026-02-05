"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export function ManifestoSection({ dictionary }: { dictionary: any }) {
  const { ref, isInView } = useInView<HTMLElement>({
    triggerOnce: true,
    threshold: 0.2,
  });

  const paragraphs = dictionary.paragraphs || [];

  return (
    <section
      ref={ref}
      className="w-full bg-primary text-primary-foreground py-20 md:py-32"
    >
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <h2
            className={cn(
              "text-4xl md:text-5xl font-bold tracking-tighter transition-all duration-700 ease-out",
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            )}
          >
            {dictionary.title}
          </h2>

          {paragraphs.map((p: string, index: number) => (
            <p
              key={index}
              className={cn(
                "text-xl md:text-2xl leading-relaxed font-medium transition-all duration-700 ease-out",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              )}
              style={{ transitionDelay: `${100 + index * 150}ms` }}
            >
              {p}
            </p>
          ))}

          <div
            className={cn(
              "pt-8 text-center transition-all duration-700 ease-out",
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            )}
            style={{ transitionDelay: `${100 + paragraphs.length * 150}ms` }}
          >
            <p className="text-lg font-semibold">{dictionary.signature.name}</p>
            <p className="text-base opacity-80">{dictionary.signature.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
}