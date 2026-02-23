"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import dynamic from 'next/dynamic';
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SplineAnimation = dynamic(() => import('@/components/spline-animation'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-muted/20 animate-pulse rounded-lg" />,
});

const HOME_SPLINE_URL = 'https://my.spline.design/untitled-9i7lZ1YB4SXBZfHKF54yqYjx/';

export function Hero01({ dictionary, lang }: { dictionary: any, lang: string }) {
  const suggestedPrompts = [
    "Loja de cosméticos veganos",
    "E-commerce de artigos esportivos",
    "Brechó online com curadoria",
  ];

  const agents = [
    { name: "Sherpa.seo", description: "Otimiza sua loja para os motores de busca." },
    { name: "Sherpa.cro", description: "Aumenta a taxa de conversão da sua loja." },
    { name: "Sherpa.crm", description: "Gerencia o relacionamento com seus clientes." },
    { name: "Sherpa.ads", description: "Cria e otimiza suas campanhas de anúncios." },
  ];

  return (
    <section className="w-full min-h-[calc(100vh-theme(spacing.14))] flex items-center pt-20 md:pt-0 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-volcana-lime/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-volcana-lime/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container z-10 relative flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 lg:w-7/12 flex flex-col items-center md:items-start text-center md:text-left">
          <Badge variant="outline" className="mb-6 py-1.5 px-4 border-volcana-lime/50 bg-volcana-lime/5 text-black flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span className="font-medium">AI-Native E-commerce Platform</span>
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-black leading-[1.1]">
            {dictionary.title_part2}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl">
            {dictionary.subtitle}. Agentes inteligentes que executam sua operação 24/7 enquanto você foca em escala.
          </p>
          
          {/* Action Area */}
          <div className="w-full max-w-xl flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm focus-within:ring-2 focus-within:ring-volcana-lime/50 transition-all">
              <Input 
                type="text" 
                placeholder="Ex: Uma loja de roupas com estilo minimalista..."
                className="h-12 md:h-14 text-base md:text-lg bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-400"
              />
              <Button asChild size="lg" variant="volcana" className="w-full sm:w-auto h-12 md:h-14 px-8 rounded-xl font-bold text-base whitespace-nowrap group">
                <Link href={`/${lang}/waitlist`}>
                  {dictionary.cta_primary}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            {/* Experimente */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="text-sm text-gray-500 mr-1">Experimente:</span>
              {suggestedPrompts.map((prompt) => (
                <button 
                  key={prompt}
                  className="text-xs md:text-sm py-1 px-3 rounded-full border border-gray-200 hover:border-volcana-lime hover:bg-volcana-lime/10 transition-colors text-gray-600"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Agents Preview */}
          <div className="mt-16 w-full">
            <h3 className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-5">
              POWERED BY VOLCANA SHERPA AGENTS
            </h3>
            <TooltipProvider>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                {agents.map((agent) => (
                  <Tooltip key={agent.name}>
                    <TooltipTrigger asChild>
                      <div className="py-2 px-5 border border-gray-100 rounded-full bg-white shadow-sm cursor-pointer hover:border-volcana-lime/50 hover:shadow-md transition-all">
                        <span className="font-mono text-xs font-bold text-gray-900">{agent.name}</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-black text-white border-none">
                      <p className="text-xs">{agent.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>
        </div>

        {/* Animation side */}
        <div className="w-full md:w-1/2 lg:w-5/12 h-[400px] md:h-[600px] relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-volcana-lime/20 to-transparent rounded-full blur-3xl opacity-30 animate-pulse" />
          <div className="w-full h-full relative z-10">
            <SplineAnimation sceneUrl={HOME_SPLINE_URL} />
          </div>
        </div>
      </div>
    </section>
  );
}