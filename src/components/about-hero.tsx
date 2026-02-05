"use client";

import { Button } from "@/components/ui/button";

export function AboutHero({ dictionary }: { dictionary: any }) {
  return (
    <div className="dark">
      <section className="w-full min-h-[calc(80vh-theme(spacing.14))] flex items-center relative overflow-hidden bg-background">
        <div className="container z-10">
          <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col items-start text-left">
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
      </section>
    </div>
  );
}