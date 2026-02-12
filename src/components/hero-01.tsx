"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import dynamic from 'next/dynamic';

const SplineAnimation = dynamic(() => import('@/components/spline-animation'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-muted/20 animate-pulse rounded-lg" />,
});

export function Hero01({ dictionary }: { dictionary: any }) {
  const suggestedPrompts = [
    "Loja de cosméticos veganos",
    "E-commerce de artigos esportivos",
    "Brechó online com curadoria",
  ];

  return (
    <section className="w-full min-h-[calc(100vh-theme(spacing.14))] flex items-start pt-20 md:pt-24 relative overflow-hidden bg-background">
      {/* Fundo gradiente */}
      <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/30 rounded-full blur-3xl" />
      </div>

      {/* Conteúdo centralizado */}
      <div className="container z-10 relative flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 text-foreground leading-tight">
            {dictionary.title_part1}{" "}
            <span className="text-primary">{dictionary.title_part2}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl">
            {dictionary.subtitle}
          </p>
          
          {/* Novo campo de prompt */}
          <div className="w-full max-w-2xl flex items-center gap-2 p-2 rounded-xl bg-card border shadow-sm mb-4">
            <Input 
              type="text" 
              placeholder="Ex: Uma loja de roupas com estilo minimalista..."
              className="h-14 text-lg bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button size="lg" className="h-14 px-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg">
              Criar Loja
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Prompts pré-definidos */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground mr-2">Experimente:</span>
            {suggestedPrompts.map((prompt) => (
              <Badge 
                key={prompt}
                variant="outline" 
                className="cursor-pointer hover:bg-muted/50 transition-colors"
              >
                {prompt}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Spline animation (escondido em telas pequenas) */}
      <div className="absolute top-0 right-0 h-full w-1/2 z-0 hidden md:block opacity-30">
        <SplineAnimation />
      </div>
    </section>
  );
}