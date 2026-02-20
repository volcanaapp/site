"use client";

import { useState, useEffect } from 'react';

const phrases = [
  "Agende sua demo estratégica e descubra como operar com agentes autônomos",
  "Diagnóstico estratégico para marcas do Varejo e Industrias — Agende a sua demo",
  "Vagas Limitadas para o Lote 01: Apenas 12 vagas restantes para Marcas D2C",
];

export function ScarcityBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsFading(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#D3FE3E] text-black text-center py-2 text-sm font-medium relative z-20 overflow-hidden h-8 flex items-center justify-center">
      <p
        className={`transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
      >
        {phrases[currentIndex]}
      </p>
    </div>
  );
}