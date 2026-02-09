"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const niches = ["Moda", "Eletrônicos", "Casa & Decoração", "Saúde/Beleza", "Serviços"];

interface NicheSelectorProps {
  onSelect: (niche: string) => void;
}

export function NicheSelector({ onSelect }: NicheSelectorProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (niche: string) => {
    setSelected(niche);
    setTimeout(() => onSelect(niche), 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="flex flex-wrap gap-4"
    >
      {niches.map((niche) => (
        <button
          key={niche}
          onClick={() => handleSelect(niche)}
          className={cn(
            "px-6 py-3 rounded-lg border-2 border-border text-xl font-bold transition-all duration-300",
            selected === niche
              ? "bg-lime text-background"
              : "bg-transparent text-foreground hover:bg-muted"
          )}
        >
          {niche}
        </button>
      ))}
    </motion.div>
  );
}