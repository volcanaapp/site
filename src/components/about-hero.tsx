"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function AboutHero({ dictionary }: { dictionary: any }) {
  const [isMounted, setIsMounted] = useState(false);
  const titleWords = dictionary.title.split(" ");

  useEffect(() => {
    // Garante que a animação só execute no cliente após a montagem
    setIsMounted(true);
  }, []);

  return (
    <div className="dark">
      <section className="w-full min-h-[calc(80vh-theme(spacing.14))] flex items-center relative overflow-hidden bg-background">
        <div className="container z-10">
          <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col items-start text-left">
            <h1 className="text-5xl md:text-[5.5rem] font-bold tracking-tighter mb-6 uppercase leading-none text-foreground">
              {titleWords.map((word, index) => (
                <span
                  key={index}
                  className={cn(
                    "inline-block transition-all duration-500 ease-out",
                    isMounted
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {word}{' '}
                </span>
              ))}
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}