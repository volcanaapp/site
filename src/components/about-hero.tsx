"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export function AboutHero({ dictionary }: { dictionary: any }) {
  const [isMounted, setIsMounted] = useState(false);
  const titleWords = dictionary.title.split(" ");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="dark">
      <section className="w-full min-h-[70vh] flex flex-col justify-center items-center relative overflow-hidden bg-black gap-16 py-16">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/volcana-ai-engenharia-brasileira-ecommerce-autonomo.mp4"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-volcana-lime/5 rounded-full blur-[150px] pointer-events-none z-0" />
        
        <div className="container mx-auto max-w-7xl z-10 relative">
          <div className="w-full md:w-4/5 lg:w-3/4 flex flex-col items-start text-left">
            <Badge variant="outline" className="mb-8 border-volcana-lime/50 bg-volcana-lime/10 text-white flex items-center gap-2 px-4 py-1.5">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span className="font-bold tracking-tight uppercase text-[10px]">OUR MISSION</span>
            </Badge>

            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter mb-8 uppercase leading-[0.9] text-white">
              {titleWords.map((word: string, index: number) => (
                <span
                  key={index}
                  className={cn(
                    "inline-block transition-all duration-700 ease-out",
                    isMounted
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {word}{' '}
                </span>
              ))}
            </h1>
            
            <p 
              className={cn(
                "text-xl md:text-3xl text-gray-300 font-medium leading-tight max-w-3xl transition-all duration-1000 delay-500",
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              {dictionary.subtitle}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}