"use client";

import Spline from '@splinetool/react-spline';
import { useState, useEffect, useRef } from 'react';

interface SplineAnimationProps {
  sceneUrl?: string;
}

const DEFAULT_URL = 'https://my.spline.design/untitled-8sPGLwy4MxIBJMzD9L84K60v/';

export default function SplineAnimation({ sceneUrl = DEFAULT_URL }: SplineAnimationProps) {
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Este efeito garante que esperamos até que o resto da página tenha
    // concluído seus cálculos de layout antes de tentar carregar a cena
    // pesada do Spline, que é sensível às dimensões de seu contêiner.
    const handler = setTimeout(() => {
      // Usamos requestAnimationFrame para garantir que a atualização do estado
      // aconteça logo antes da próxima pintura do navegador, que é um momento mais seguro.
      requestAnimationFrame(() => {
        if (containerRef.current) {
          setIsReady(true);
        }
      });
    }, 1000); // Atraso aumentado para 1000ms para maior estabilidade

    return () => {
      clearTimeout(handler);
    };
  }, []);

  // Renderiza um placeholder com uma ref até que estejamos prontos.
  // A ref nos permite confirmar que o contêiner está no DOM.
  if (!isReady) {
    return <div ref={containerRef} className="w-full h-full bg-muted/20 animate-pulse rounded-lg" />;
  }

  // Quando estiver pronto, renderiza o componente Spline real.
  return (
    <div ref={containerRef} className="w-full h-full">
      <Spline
        scene={sceneUrl}
        className="w-full h-full"
      />
    </div>
  );
}