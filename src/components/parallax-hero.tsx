"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxHero({ dictionary }: { dictionary: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax do vídeo: move-se para baixo mais devagar que o scroll e aplica um leve zoom
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Animação do texto: aparece e sobe conforme o scroll
  const textY = useTransform(scrollYProgress, [0, 0.7], ["25%", "0%"]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  return (
    <div ref={containerRef} className="h-[200vh] w-full relative bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Camada 1: Vídeo de Fundo */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: videoY, scale: videoScale }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/volcana-ai-engenharia-brasileira-ecommerce-autonomo.mp4"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        {/* Camada 2: Conteúdo de Texto */}
        <motion.div 
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4"
          style={{ y: textY, opacity: textOpacity }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter mb-8 uppercase leading-[0.9] text-white drop-shadow-lg">
            {dictionary.title}
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 font-medium leading-tight max-w-3xl drop-shadow-md">
            {dictionary.subtitle}
          </p>
        </motion.div>

        {/* Vinheta para focar o centro */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_60%,black)]" />
      </div>
    </div>
  );
}