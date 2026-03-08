"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function AboutMission({ dictionary }: { dictionary: any }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Animação de escala para o título
  const scale = useTransform(scrollYProgress, [0.1, 0.5, 0.8], [1, 15, 1]);
  
  // Animação de opacidade para o título
  const opacityH1 = useTransform(
    scrollYProgress,
    [0, 0.1, 0.7, 0.8],
    [0, 1, 1, 0]
  );

  // Animação de opacidade para o subtítulo, aparecendo um pouco depois
  const opacityP = useTransform(
    scrollYProgress,
    [0.55, 0.6, 0.7, 0.8],
    [0, 1, 1, 0]
  );
  
  // Animação de posição para o subtítulo
  const yP = useTransform(scrollYProgress, [0.55, 0.6], ["2rem", "0rem"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="text-center max-w-5xl mx-auto px-4">
          <motion.h1
            style={{ opacity: opacityH1, scale }}
            className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-white"
          >
            {dictionary.title}
          </motion.h1>
          <motion.p
            style={{ opacity: opacityP, y: yP }}
            className="mt-8 text-lg md:text-xl text-gray-400 font-medium leading-relaxed"
          >
            {dictionary.subtitle}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}