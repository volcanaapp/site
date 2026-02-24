"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function ManifestoSection({ dictionary }: { dictionary: any }) {
  const { ref, isInView } = useInView<HTMLElement>({
    triggerOnce: true,
    threshold: 0.1,
  });

  const paragraphs = dictionary.paragraphs || [];

  return (
    <section
      ref={ref}
      className="w-full bg-black text-white py-24 md:py-40 relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
             style={{ 
               backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
               backgroundSize: '40px 40px' 
             }} />

      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col items-start space-y-16">
          <div className="w-full flex flex-col items-center text-center mb-8">
             <Badge variant="outline" className="mb-6 border-white/20 text-white/50 font-mono text-[10px] tracking-[0.3em] uppercase px-4 py-1">
              MANIFESTO
            </Badge>
            <h2
              className={cn(
                "text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none text-white transition-all duration-1000 ease-out",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              )}
            >
              {dictionary.title}
            </h2>
          </div>

          <div className="space-y-12">
            {paragraphs.map((p: string, index: number) => (
              <p
                key={index}
                className={cn(
                  "text-xl md:text-3xl leading-relaxed font-bold transition-all duration-1000 ease-out border-l-2 border-transparent pl-6 md:pl-8 hover:border-volcana-lime hover:text-white text-gray-400 cursor-default",
                  isInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                )}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {p}
              </p>
            ))}
          </div>

          <div
            className={cn(
              "pt-16 w-full flex justify-end transition-all duration-1000 ease-out",
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            )}
            style={{ transitionDelay: `${200 + paragraphs.length * 150}ms` }}
          >
            <div className="text-right">
              <p className="text-2xl font-black text-white uppercase tracking-tight">{dictionary.signature.name}</p>
              <p className="text-sm font-bold text-volcana-lime tracking-widest uppercase mt-1">{dictionary.signature.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}