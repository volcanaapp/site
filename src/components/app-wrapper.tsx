"use client";

import { useState, useEffect } from "react";
import { LoadingScreen } from "./loading-screen";

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // No servidor e na primeira renderização do cliente, isMounted é falso.
  // Renderizamos o conteúdo de forma invisível para evitar o erro de hidratação
  // e também um "flash" do conteúdo antes da tela de carregamento.
  if (!isMounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  // Após a montagem no cliente, renderizamos a lógica do loader.
  return (
    <>
      {loading && <LoadingScreen onFinished={() => setLoading(false)} />}
      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        {children}
      </div>
    </>
  );
}