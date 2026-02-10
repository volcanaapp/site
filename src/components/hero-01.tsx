"use client";

import { Button } from "@/components/ui/button";
import dynamic from 'next/dynamic';
import Link from "next/link";

const SplineAnimation = dynamic(() => import('@/components/spline-animation'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-muted/20 animate-pulse rounded-lg" />,
});

export function Hero01({ dictionary }: { dictionary: any }) {
  return (
    <section className="w-full min-h-[calc(100vh-theme(spacing.14))] flex items-center relative overflow-hidden bg-background">
      {/* Text content on the left */}
      <div className="container z-10 relative">
        <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col items-start text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-foreground leading-tight">
            {dictionary.title_part1}
            <br />
            <span className="text-primary">{dictionary.title_part2}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
            {dictionary.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="font-bold text-lg py-6 px-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/waitlist">{dictionary.cta_primary}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Spline animation on the right, bleeding off-screen */}
      <div className="absolute top-0 right-0 h-full w-1/2 z-0 hidden md:block">
        <SplineAnimation />
      </div>
    </section>
  );
}