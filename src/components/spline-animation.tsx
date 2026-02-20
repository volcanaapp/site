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

    let isContainerSized = false;
    // Verifica se a janela já foi carregada no momento da execução do efeito.
    let isWindowLoaded = document.readyState === 'complete';

    const checkAndSetReady = () => {
      // Só define como pronto se AMBAS as condições forem verdadeiras.
      if (isContainerSized && isWindowLoaded) {
        setIsReady(true);
      }
    };

    // Condição 1: Espera a janela inteira carregar.
    const handleWindowLoad = () => {
      isWindowLoaded = true;
      checkAndSetReady();
      window.removeEventListener('load', handleWindowLoad);
    };

    if (!isWindowLoaded) {
      window.addEventListener('load', handleWindowLoad);
    }

    // Condição 2: Espera o contêiner ter um tamanho.
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
          isContainerSized = true;
          checkAndSetReady();
          observer.disconnect(); // Só precisamos disso uma vez.
        }
      }
    });

    observer.observe(container);

    // Faz uma verificação inicial caso tudo já esteja pronto.
    checkAndSetReady();

    return () => {
      // Limpeza para evitar vazamentos de memória.
      window.removeEventListener('load', handleWindowLoad);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      {isReady ? (
        <Spline scene={sceneUrl} className="w-full h-full" />
      ) : (
        // Exibe um placeholder enquanto esperamos as condições serem atendidas.
        <div className="w-full h-full bg-muted/20 animate-pulse rounded-lg" />
      )}
    </div>
  );
}