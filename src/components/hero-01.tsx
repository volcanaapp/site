"use client";

import { Button } from "@/components/ui/button";
import Spline from '@splinetool/react-spline/next';

export function Hero01({ dictionary }: { dictionary: any }) {
  return (
    <section className="w-full min-h-[calc(100vh-theme(spacing.14))] flex items-center relative overflow-hidden bg-background">
      {/* Text content on the left */}
      <div className="container z-10 relative">
        <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col items-start text-left">
          <h1 className="text-5xl md:text-[5.5rem] font-bold tracking-tighter mb-6 uppercase leading-none text-foreground">
            {dictionary.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
            {dictionary.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="font-bold text-lg py-6 px-8 bg-primary text-primary-foreground hover:bg-primary/90">
              {dictionary.cta_primary}
            </Button>
          </div>
        </div>
      </div>

      {/* Spline animation on the right, bleeding off-screen */}
      <div className="absolute top-0 right-0 h-full w-1/2 z-0 hidden md:block">
        <Spline
          scene="https://prod.spline.design/6atEI76RYKKZm-Ig/scene.splinecode" 
          className="w-full h-full scale-150 lg:scale-125"
        />
      </div>
    </section>
  );
}