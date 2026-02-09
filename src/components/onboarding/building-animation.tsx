"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const logs = [
  "Deploying Headless Instance...",
  "Generating Moda Template...",
  "Activating Sales Agents...",
  "Calibrating Checkout Flow...",
  "Finalizing DNS propagation...",
];

interface BuildingAnimationProps {
  onComplete: () => void;
}

export function BuildingAnimation({ onComplete }: BuildingAnimationProps) {
  const [currentLog, setCurrentLog] = useState(0);

  useEffect(() => {
    const logInterval = setInterval(() => {
      setCurrentLog((prev) => {
        if (prev < logs.length - 1) {
          return prev + 1;
        }
        clearInterval(logInterval);
        return prev;
      });
    }, 800);

    setTimeout(onComplete, (logs.length + 1) * 800);

    return () => clearInterval(logInterval);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-foreground mb-12"
      >
        Arquitetando sua Loja...
      </motion.h2>

      <svg width="300" height="200" viewBox="0 0 300 200" className="mb-12 text-foreground">
        <motion.rect
          x="10" y="10" width="280" height="40" rx="5"
          stroke="currentColor" strokeWidth="2" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.rect
          x="10" y="70" width="120" height="120" rx="5"
          stroke="currentColor" strokeWidth="2" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.rect
          x="150" y="70" width="140" height="50" rx="5"
          stroke="currentColor" strokeWidth="2" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
        />
         <motion.rect
          x="150" y="140" width="140" height="50" rx="5"
          stroke="currentColor" strokeWidth="2" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
        />
      </svg>

      <div className="h-8 text-lg text-muted-foreground font-mono">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentLog}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            > {logs[currentLog]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}