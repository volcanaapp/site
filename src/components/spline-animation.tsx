"use client";

import Spline from '@splinetool/react-spline';
import { useState, useEffect } from 'react';

interface SplineAnimationProps {
  sceneUrl?: string;
}

const DEFAULT_URL = 'https://my.spline.design/untitled-8sPGLwy4MxIBJMzD9L84K60v/';

export default function SplineAnimation({ sceneUrl = DEFAULT_URL }: SplineAnimationProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // O hook useEffect com um array de dependências vazio é executado apenas uma vez,
    // após o componente ser "montado" no cliente. Isso garante que o
    // componente Spline, que depende de APIs do navegador, só seja renderizado
    // no ambiente do cliente, evitando erros de hidratação do SSR.
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Durante a renderização no servidor (SSR) e a hidratação inicial no cliente,
    // renderizamos um placeholder. Isso evita que o componente Spline
    // tente ser executado em um ambiente não-navegador.
    return <div className="w-full h-full bg-muted/20 animate-pulse rounded-lg" />;
  }

  // Uma vez que o componente está montado no cliente, renderizamos a cena do Spline.
  return (
    <div className="w-full h-full">
      <Spline scene={sceneUrl} className="w-full h-full" />
    </div>
  );
}