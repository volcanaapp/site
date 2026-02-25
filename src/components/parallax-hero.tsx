"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function ParallaxHero({ dictionary }: { dictionary: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Background Parallax (Volcano) - Moves slowly, scales slightly
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Text Parallax - Fades out and moves up
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Foreground (Desk) - Moves up faster (simulating camera pulling back/pan down)
  // Initial state: visible at bottom. As we scroll, it moves UP and OUT of view or INTO view depending on desired effect.
  // "Camera appears to pull back or pan" -> If camera pulls back/up, objects closer (desk) move down faster?
  // Let's interpret "Foreground (Desk) moves upwards/outwards at a faster speed" as moving UP relative to viewport.
  const deskY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const deskScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  // Opacity for smooth transition out
  const deskOpacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);

  return (
    <div ref={containerRef} className="h-[200vh] w-full relative bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Layer 1: Background (Volcano) */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: bgY, scale: bgScale }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/volcana-nature.png')` }}
          />
          {/* Atmospheric overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 opacity-80" />
        </motion.div>

        {/* Layer 2: Text Content */}
        <motion.div 
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4"
          style={{ y: textY, opacity: textOpacity }}
        >
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-6 drop-shadow-2xl">
            {dictionary?.title || "Volcana Nature"}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl font-light drop-shadow-md">
            {dictionary?.subtitle || "Where technology meets the elemental force of nature."}
          </p>
        </motion.div>

        {/* Layer 3: Foreground (Desk Scene) */}
        <motion.div
          className="absolute inset-0 z-20 flex items-end justify-center pointer-events-none"
          style={{ y: deskY, scale: deskScale, opacity: deskOpacity }}
        >
          <div className="relative w-full max-w-7xl h-[60vh] md:h-[50vh]">
            
            {/* Desk Surface Gradient/Shadow at bottom */}
            <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

            {/* Placeholder: Laptop */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] md:w-[40%] aspect-[16/10] bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-t-xl shadow-2xl flex items-center justify-center group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-volcana-lime/10 to-transparent opacity-20" />
              <span className="text-white/20 font-mono text-sm group-hover:text-volcana-lime/50 transition-colors">
                [ Laptop Placeholder ]
              </span>
              {/* Screen Glow */}
              <div className="absolute inset-0 bg-volcana-lime/5 blur-3xl rounded-full translate-y-1/2" />
            </div>

            {/* Placeholder: Coffee Cup */}
            <div className="absolute bottom-10 left-[10%] md:left-[20%] w-24 h-24 bg-gray-800/90 rounded-full shadow-xl border border-white/5 flex items-center justify-center">
               <span className="text-white/20 font-mono text-xs text-center">[ Coffee ]</span>
            </div>

            {/* Placeholder: Notebook */}
            <div className="absolute bottom-4 right-[10%] md:right-[20%] w-40 h-52 bg-gray-800/90 rounded-lg shadow-xl border border-white/5 rotate-3 flex items-center justify-center">
               <span className="text-white/20 font-mono text-xs text-center">[ Notebook ]</span>
            </div>
            
             {/* Placeholder: Plant/Nature Element */}
            <div className="absolute bottom-0 right-0 w-32 h-64 bg-green-900/20 backdrop-blur-sm rounded-tl-3xl border-l border-t border-white/5 hidden md:flex items-center justify-center">
               <span className="text-green-500/20 font-mono text-xs text-center -rotate-90">[ Plant ]</span>
            </div>

          </div>
        </motion.div>

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 z-30 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
        
      </div>
    </div>
  );
}
