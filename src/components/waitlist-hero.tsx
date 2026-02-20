"use client";

import { useState, useEffect } from "react";
import { OptimizedWaitlistForm } from "@/components/optimized-waitlist-form";
import dynamic from 'next/dynamic';
import { TypewriterEffect } from "@/components/typewriter-effect";
import { cn } from "@/lib/utils";

const SplineAnimation = dynamic(() => import('@/components/spline-animation'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-200/50 animate-pulse rounded-lg" />,
});

const WAITLIST_SPLINE_URL = 'https://my.spline.design/untitled-9i7lZ1YB4SXBZfHKF54yqYjx/';

export function WaitlistHero({ dictionary }: { dictionary: any }) {
  const [isScaled, setIsScaled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScaled(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const titleText = 'Sua loja virtual operando sozinha. Você focado em crescimento.';
  const paragraphText = 'A Volcana é a primeira plataforma AI-Native da América Latina. Agentes inteligentes executam o trabalho de múltiplas áreas enquanto você escala.';
  
  // Calculate typing duration: (number of chars * speed in ms)
  const titleTypingDuration = titleText.length * 50;

  return (
    <section className="relative py-20 md:py-24 min-h-[80vh] flex items-center">
      <div className="container mx-auto z-10 relative flex items-center">
        <div className="w-full md:w-1/2 lg:w-7/12 text-center md:text-left">
          <TypewriterEffect
            wrapper="h1"
            sequence={[titleText, 5000]}
            repeat={Infinity}
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-black h-[180px] md:h-[240px]"
          />
          {/* Wrapper div to prevent layout shift while paragraph types out */}
          <div className="mt-6 h-[120px] md:h-[100px]">
            <TypewriterEffect
              wrapper="p"
              sequence={[
                titleTypingDuration + 500, // Wait for title to finish + 0.5s delay
                paragraphText,
              ]}
              speed={65}
              repeat={0}
              cursor={false}
              className="text-lg md:text-xl text-gray-600 max-w-xl"
            />
          </div>
          <div className="mt-12 flex justify-center md:justify-start">
            <OptimizedWaitlistForm />
          </div>
          <p className="mt-4 text-sm text-gray-500">
            {dictionary.form_footer}
          </p>
        </div>
      </div>
      <div className="absolute top-0 right-0 h-full w-full md:w-1/2 lg:w-5/12 z-0 flex items-center justify-center">
        <div className={cn(
          "w-full h-full hidden md:block transition-transform duration-1000 ease-out",
          isScaled ? "scale-[1.5] lg:scale-[1.75]" : "scale-100"
        )}>
          <SplineAnimation sceneUrl={WAITLIST_SPLINE_URL} />
        </div>
      </div>
    </section>
  );
}