"use client";

import { motion } from "framer-motion";
import { OptimizedWaitlistForm } from "@/components/optimized-waitlist-form";
import dynamic from 'next/dynamic';

const SplineAnimation = dynamic(() => import('@/components/spline-animation'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-200/50 animate-pulse rounded-lg" />,
});

export function WaitlistHero({ dictionary }: { dictionary: any }) {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D3FE3E]/30 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <div className="container mx-auto z-10 relative grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-black">
            {dictionary.hero_title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl">
            {dictionary.hero_subtitle}
          </p>
          <div className="mt-12 flex justify-center md:justify-start">
            <OptimizedWaitlistForm />
          </div>
          <p className="mt-4 text-sm text-gray-500">
            {dictionary.form_footer}
          </p>
        </div>
        <div className="relative h-[400px] lg:h-[500px] w-full hidden md:block">
          <SplineAnimation />
        </div>
      </div>
    </section>
  );
}