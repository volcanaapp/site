"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export function Hero02({ dictionary }: { dictionary: any }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const columns = dictionary.hero2.columns;
  const mainHeading = dictionary.hero2.main_heading;

  return (
    <section
      ref={sectionRef}
      className={cn(
        "bg-background py-20 md:py-32 transition-all duration-1000 ease-in-out",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="container max-w-screen-xl space-y-24 md:space-y-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {columns.map((column: any, index: number) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="text-5xl font-bold tracking-tighter mb-4">{column.title}</h3>
              <p className="text-lg text-muted-foreground max-w-sm">{column.text}</p>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "transition-all duration-700 ease-out",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: `${columns.length * 200}ms` }}
        >
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none uppercase">
            {mainHeading}
          </h2>
        </div>
      </div>
    </section>
  );
}