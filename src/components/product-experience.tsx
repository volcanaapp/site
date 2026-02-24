"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function ProductExperience({ dictionary }: { dictionary?: any }) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animações suaves baseadas no scroll
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const rotateX = useTransform(scrollYProgress, [0.1, 0.5], [20, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <section
      ref={containerRef}
      className="relative z-[60] min-h-screen w-full bg-[#050505] py-24 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-lime-500/10 blur-[120px] rounded-full pointer-events-none opacity-50" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            style={{ opacity, y }}
            className="text-3xl md:text-5xl font-bold tracking-tighter text-white"
          >
            {dictionary?.product_experience?.title_part1 || "O comando da sua operação."}
            <br />
            <span className="text-gray-500">{dictionary?.product_experience?.title_part2 || "Como você nunca viu."}</span>
          </motion.h2>
        </div>

        {/* MacBook Container */}
        <motion.div
          style={{
            scale,
            opacity,
            rotateX,
            transformPerspective: "1200px",
          }}
          className="relative w-full max-w-5xl mx-auto"
        >
          {/* Tela do MacBook */}
          <div className="relative bg-[#1a1a1a] rounded-t-2xl border-[12px] border-[#2b2b2b] border-b-0 shadow-2xl overflow-hidden aspect-[16/10]">
            {/* Câmera / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-32 bg-[#2b2b2b] rounded-b-lg z-20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0f0f0f]" />
            </div>

            {/* Conteúdo da Tela */}
            <div className="relative w-full h-full bg-black overflow-hidden group">
              <Image
                src="https://a.storyblok.com/f/314917/1634x1248/c71656cb82/mbp.png"
                alt="Volcana Dashboard"
                fill
                className="object-cover object-center"
              />
              
              {/* Overlay de brilho */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Base do MacBook */}
          <div className="relative">
            <div className="h-4 w-full bg-[#3d3d3d] rounded-b-xl shadow-lg relative z-10">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-[#2b2b2b] rounded-b-md" />
            </div>
            {/* Reflexo */}
            <div className="absolute -bottom-10 left-4 right-4 h-8 bg-black/50 blur-xl rounded-[100%]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}