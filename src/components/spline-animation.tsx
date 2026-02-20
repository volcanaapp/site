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
    const container = containerRef.current;
    if (!container) return;

    // O ResizeObserver irá disparar quando o elemento do contêiner for renderizado
    // e tiver um tamanho. Esta é uma maneira mais confiável de evitar condições de corrida
    // do que usar um temporizador fixo.
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
          // Assim que o contêiner tiver dimensões, podemos carregar com segurança a cena do Spline.
          setIsReady(true);
          observer.disconnect(); // Só precisamos executar isso uma vez.
        }
      }
    });

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      {isReady ? (
        <Spline scene={sceneUrl} className="w-full h-full" />
      ) : (
        // Exibe um placeholder enquanto esperamos o contêiner estar pronto.
        <div className="w-full h-full bg-muted/20 animate-pulse rounded-lg" />
      )}
    </div>
  );
}