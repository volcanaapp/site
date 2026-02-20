"use client";

import { OptimizedWaitlistForm } from "@/components/optimized-waitlist-form";
import dynamic from 'next/dynamic';

const SplineAnimation = dynamic(() => import('@/components/spline-animation'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-200/50 animate-pulse rounded-lg" />,
});

const WAITLIST_SPLINE_URL = 'https://my.spline.design/untitled-9i7lZ1YB4SXBZfHKF54yqYjx/';

export function WaitlistHero({ dictionary }: { dictionary: any }) {
  return (
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
  );
}