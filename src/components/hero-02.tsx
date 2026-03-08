"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import { useTypewriter } from "@/hooks/use-typewriter";
import { Badge } from "@/components/ui/badge";

export function Hero02({ dictionary }: { dictionary: any }) {
  const { ref: sectionRef, isInView } = useInView<HTMLElement>({
    triggerOnce: true,
    threshold: 0.1,
  });

  const columns = dictionary.hero2.columns;
  const fullText = dictionary.hero2.main_statement;
  const { displayText: typedText, isDone } = useTypewriter(
    fullText,
    50,
    isInView
  );

  return (
    <div className="dark">
      <section
        ref={sectionRef}
        className={cn(
          "bg-black py-24 md:py-48 transition-all duration-1000 ease-in-out relative overflow-hidden",
          isInView ? "opacity-100" : "opacity-0"
        )}
      >
        {/* Background mesh/grid */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
             style={{ 
               backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
               backgroundSize: '80px 80px' 
             }} />
             
        <div className="container max-w-screen-xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-24 mb-32">
            {columns.map((column: any, index: number) => (
              <div
                key={index}
                className={cn(
                  "transition-all duration-1000 ease-out flex flex-col items-start",
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                )}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[2px] bg-volcana-lime" />
                  <span className="text-volcana-lime font-mono text-xs tracking-widest uppercase">0{index + 1}</span>
                </div>
                
                <h3 className="text-5xl lg:text-6xl font-black tracking-tighter mb-6 text-white leading-none">
                  {column.title}
                </h3>
                
                <p className="text-lg lg:text-xl text-gray-400 leading-relaxed font-medium">
                  {column.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center md:text-left">
            <Badge variant="outline" className="mb-8 border-volcana-lime/20 text-volcana-lime/60 font-mono text-[10px] tracking-[0.3em] px-4 py-1">
              MANIFESTO.EXE
            </Badge>
            <h2 className="text-5xl md:text-[5.5rem] lg:text-[7rem] leading-[0.9] font-black tracking-tighter text-white max-w-5xl min-h-[12rem] md:min-h-[15rem] lg:min-h-[20rem]">
              <span className="text-volcana-lime drop-shadow-[0_0_20px_rgba(211,254,62,0.5)]">{typedText}</span>
              {!isDone && (
                <span className="animate-pulse text-volcana-lime relative -top-1 md:-top-2">
                  _
                </span>
              )}
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}