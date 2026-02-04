"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export function Hero03({ dictionary }: { dictionary: any }) {
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

  return (
    <div className="dark">
      <section
        ref={sectionRef}
        className={cn(
          "bg-background py-20 md:py-32 transition-all duration-1000 ease-in-out",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="container max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div
            className={cn(
              "transition-all duration-700 ease-out",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            )}
            style={{ transitionDelay: `200ms` }}
          >
            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none uppercase mb-8" dangerouslySetInnerHTML={{ __html: dictionary.title }} />
            <p className="text-xl font-medium text-foreground/90 mb-6">{dictionary.subtitle}</p>
            <p className="text-lg text-foreground/60 mb-6">{dictionary.paragraph1}</p>
            <p className="text-lg text-foreground/60 mb-10">{dictionary.paragraph2}</p>
            <Button size="lg" className="font-bold text-lg py-6 px-8 bg-gray-50 text-gray-900 hover:bg-gray-300 rounded-full">
              {dictionary.cta}
            </Button>
          </div>
          <div
            className={cn(
              "transition-all duration-700 ease-out",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            )}
            style={{ transitionDelay: `400ms` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=2940&auto=format&fit=crop" 
              alt="Product screenshot in a laptop" 
              className="rounded-2xl shadow-2xl shadow-primary/10 w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}