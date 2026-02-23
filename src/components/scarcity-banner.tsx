"use client";

import { useState, useEffect } from 'react';

interface ScarcityBannerProps {
  phrases?: string[];
}

const defaultPhrases = [
  "Agende sua demo estratégica e descubra como operar com agentes autônomos",
  "Diagnóstico estratégico para marcas do Varejo e Industrias — Agende a sua demo",
  "Vagas Limitadas para o Lote 01: Apenas 12 vagas restantes para Marcas D2C",
];

export function ScarcityBanner({ phrases = defaultPhrases }: ScarcityBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (!phrases || phrases.length <= 1) return;

    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsFading(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [phrases]);

  const currentPhrase = phrases[currentIndex] || phrases[0] || "";

  return (
    <div className="bg-[#D3FE3E] text-black text-center py-2 text-xs md:text-sm font-medium relative z-50 overflow-hidden h-9 flex items-center justify-center px-4">
      <p
        className={`transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'} line-clamp-1`}
      >
        {currentPhrase}
      </p>
    </div>
  );
}