"use client";

import { OptimizedWaitlistForm } from "@/components/optimized-waitlist-form";
import dynamic from 'next/dynamic';
import { WaitlistLogoCloud } from "./waitlist-logo-cloud";
import { useEffect, useState } from "react";

const SplineAnimation = dynamic(() => import('@/components/spline-animation'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-200/50 animate-pulse rounded-lg" />,
});

const WAITLIST_SPLINE_URL = 'https://my.spline.design/untitled-9i7lZ1YB4SXBZfHKF54yqYjx/';

export function WaitlistHero({ dictionary }: { dictionary: any }) {
  const [count, setCount] = useState(1000);
  const targetCount = 1284;

  useEffect(() => {
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    const increment = (targetCount - count) / totalFrames;

    let currentFrame = 0;
    const timer = setInterval(() => {
      currentFrame++;
      const newCount = Math.round(count + increment * currentFrame);
      setCount(newCount);

      if (currentFrame === totalFrames) {
        setCount(targetCount);
        clearInterval(timer);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative pt-20 md:pt-24 min-h-[80vh] flex items-center">
        <div className="container mx-auto z-10 relative flex items-center">
          <div className="w-full md:w-1/2 lg:w-7/12 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-black">
              Sua loja virtual operando sozinha. Você focado em crescimento.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl">
              A Volcana é a primeira plataforma AI-Native da América Latina. Agentes inteligentes executam o trabalho de múltiplas áreas enquanto você escala.
            </p>
            <div className="mt-12 flex justify-center md:justify-start">
              <OptimizedWaitlistForm />
            </div>
            <p className="mt-4 text-sm text-gray-500">
              {dictionary.form_footer}
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 h-full w-full md:w-1/2 lg:w-5/12 z-0 flex items-center justify-center">
          <div className="w-full h-full hidden md:block">
            <SplineAnimation sceneUrl={WAITLIST_SPLINE_URL} />
          </div>
        </div>
      </section>
      
      <div className="py-16 bg-white relative z-10">
        <div className="container mx-auto text-center">
          <p className="text-xl font-medium text-gray-800 mb-8">
            {dictionary.counter_text.replace('{count}', count.toLocaleString('pt-BR'))}
          </p>
          <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-8">
            {dictionary.logos_title}
          </h3>
          <WaitlistLogoCloud />
        </div>
      </div>
    </>
  );
}