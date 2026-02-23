"use client";

import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { CtaButton } from './ui/cta-button';
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import Link from 'next/link';

const comparisonData = [
  {
    pillar: "Arquitetura",
    legacy: [
      "Arquitetura monolítica ou parcialmente headless",
      "IA como recurso adicional (IA-enable)",
      "Dependência de múltiplos apps",
      "Customizações complexas",
    ],
    volcana: [
      "Arquitetura multi-tenant",
      "100% headless e composable",
      "Core AI-Native",
      "Integração API-first baseada em eventos",
      "Evolução contínua",
    ],
  },
  {
    pillar: "Modelo Operacional",
    legacy: [
      "Dependência de agência",
      "Especialistas internos",
      "Execução manual",
      "Crescimento aumenta estrutura",
    ],
    volcana: [
      "Agentes especialistas por função",
      "Operação 24/7",
      "Execução automática",
      "Crescimento sem inflar equipe",
    ],
  },
  {
    pillar: "Inteligência Aplicada",
    legacy: [
      "Dashboards informativos",
      "Decisão manual",
      "SEO manual",
      "CRO manual",
      "SAC operacional",
    ],
    volcana: [
      "Agente de Cadastro",
      "Agente de Promoções",
      "Agente de SEO",
      "Agente de CRO",
      "Agente de SAC",
      "Execução orientada por dados",
    ],
  },
  {
    pillar: "Estrutura de Custos",
    legacy: [
      "Taxa da plataforma",
      "Custo de agência",
      "Especialistas internos",
      "Ferramentas adicionais",
      "Retrabalho",
    ],
    volcana: [
      "Modelo previsível",
      "Redução estrutural de custo",
      "Consolidação de camadas",
      "Foco em margem",
    ],
  },
];

export function HowItWorksSection({ lang }: { lang: string }) {
  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6 border-gray-200 text-gray-400 font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-1">
            STRATEGIC COMPARISON
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black uppercase leading-none mb-6">
            Infraestrutura tradicional <br className="hidden md:block" />
            <span className="text-gray-400 text-3xl md:text-5xl inline-block align-middle mx-4 lowercase font-normal italic font-serif">vs</span> 
            Operação AI-Native
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium">
            Plataformas legadas foram construídas para gestão manual. <br className="hidden md:block" />
            A Volcana™ foi construída para execução autônoma por agentes inteligentes.
          </p>
        </div>

        <div className="relative border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 bg-white">
          {/* Header Row */}
          <div className="hidden lg:grid grid-cols-12 bg-gray-50/50 border-b border-gray-100">
            <div className="col-span-4 p-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
              Pilar Estratégico
            </div>
            <div className="col-span-4 p-8 text-lg font-bold text-gray-500 text-center border-x border-gray-100">
              Plataformas Legadas
            </div>
            <div className="col-span-4 p-8 text-xl font-black text-black text-center relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-volcana-lime" />
              Volcana™
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {comparisonData.map((item, idx) => (
              <div 
                key={item.pillar} 
                className="grid grid-cols-1 lg:grid-cols-12 group"
              >
                {/* Pillar */}
                <div className="col-span-12 lg:col-span-4 p-8 lg:p-12 flex flex-col justify-center bg-white">
                  <span className="text-volcana-lime font-mono text-[10px] mb-2 block">0{idx + 1}</span>
                  <h3 className="text-2xl font-black text-black uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {item.pillar}
                  </h3>
                </div>

                {/* Legacy */}
                <div className="col-span-12 lg:col-span-4 p-8 lg:p-12 bg-gray-50/30 border-y lg:border-y-0 lg:border-x border-gray-100">
                  <h4 className="font-bold text-gray-400 mb-6 lg:hidden uppercase text-[10px] tracking-widest">Plataformas Legadas</h4>
                  <ul className="space-y-4">
                    {item.legacy.map((point) => (
                      <li key={point} className="flex items-start text-gray-500 text-sm md:text-base font-medium">
                        <XCircle className="h-5 w-5 text-gray-200 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="leading-tight">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Volcana */}
                <div className="col-span-12 lg:col-span-4 p-8 lg:p-12 bg-white relative">
                   <div className="absolute inset-0 bg-volcana-lime/[0.02] pointer-events-none" />
                  <h4 className="font-bold text-black mb-6 lg:hidden uppercase text-[10px] tracking-widest">Volcana™</h4>
                  <ul className="space-y-4">
                    {item.volcana.map((point) => (
                      <li key={point} className="flex items-start text-black text-sm md:text-base font-bold">
                        <CheckCircle2 className="h-5 w-5 text-volcana-lime mr-3 mt-0.5 flex-shrink-0" />
                        <span className="leading-tight">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 text-center">
          <p className="text-3xl md:text-4xl font-medium text-black tracking-tight mb-12 italic">
            "A diferença não está na interface. <br className="hidden md:block" />
            <span className="text-volcana-lime font-black not-italic uppercase">Está no modelo operacional.</span>"
          </p>
          <div className="flex justify-center">
            <CtaButton className="h-16 px-12 text-lg" asChild>
              <Link href={`/${lang}/waitlist`}>
                Solicite uma demonstração estratégica
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}