"use client";

import { motion } from "framer-motion";

export function WaitlistHero() {
  return (
    <section className="relative text-center py-20 md:py-32 overflow-hidden">
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
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-t from-gray-900 to-gray-600">
          Volcana™: A Primeira Plataforma de E-commerce Native IA da América Latina
        </h1>
      </div>
    </section>
  );
}