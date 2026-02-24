"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export function AboutHero({ dictionary }: { dictionary: any }) {
  const [isMounted, setIsMounted] = useState(false);
  const titleWords = dictionary.title.split(" ");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="dark">
      <section className="w-full min-h-[70vh] flex items-center relative overflow-hidden bg-white">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-volcana-lime/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl z-10 relative">
          <div className="w-full md:w-4/5 lg:w-3/4 flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-8">
              <Badge variant="outline" className="border-volcana-lime/50 bg-volcana-lime/5 text-black flex items-center gap-2 px-4 py-1.5">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span className="font-bold tracking-tight uppercase text-[10px]">OUR MISSION</span>
              </Badge>
              <div className="relative w-8 h-6 shadow-sm rounded-sm overflow-hidden border border-gray-100">
                <Image 
                  src="https://flagcdn.com/br.svg" 
                  alt="Brazil Flag" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter mb-8 uppercase leading-[0.9] text-black">
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
                "text-xl md:text-3xl text-gray-500 font-medium leading-tight max-w-3xl transition-all duration-1000 delay-500",
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