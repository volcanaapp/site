"use client";

import { motion } from "framer-motion";
import { OptimizedWaitlistForm } from "@/components/optimized-waitlist-form";

export function WaitlistHero({ dictionary }: { dictionary: any }) {
  return (
    <section className="relative text-center py-20 md:py-24 overflow-hidden">
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
      <div className="container max-w-4xl mx-auto z-10 relative">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-black">
          {dictionary.hero_title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          {dictionary.hero_subtitle}
        </p>
        <div className="mt-12">
          <OptimizedWaitlistForm />
        </div>
        <p className="mt-4 text-sm text-gray-500">
          {dictionary.form_footer}
        </p>
      </div>
    </section>
  );
}