"use client";

import { X, Check, XCircle, CheckCircle2 } from 'lucide-react';
import { CtaButton } from './ui/cta-button';
import React from 'react';
import { cn } from '@/lib/utils';

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

export function ComparisonSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Infraestrutura tradicional vs. Operação AI-Native
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Plataformas legadas foram construídas para gestão manual. A Volcana™ foi construída para execução autônoma por agentes inteligentes.
          </p>
        </div>

        {/* Modern Table Container */}
        <div className="relative isolate">
          {/* Sticky Header Background Backdrop - Changed top-14 to top-0 */}
          <div className="hidden lg:block sticky top-0 z-20 backdrop-blur-md bg-white/80 border-b border-gray-100 shadow-sm">
            <div className="grid grid-cols-12 max-w-6xl mx-auto">
              <div className="col-span-4 p-6 text-sm font-semibold text-gray-400 uppercase tracking-wider flex items-center">
                Pilar Estratégico
              </div>
              <div className="col-span-4 p-6 text-lg font-bold text-gray-500 text-center flex items-center justify-center">
                Plataformas Legadas
              </div>
              <div className="col-span-4 p-6 text-xl font-bold text-gray-900 text-center relative overflow-hidden flex items-center justify-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#A3C934]" />
                Volcana™
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-100 border-t border-gray-100 lg:border-none">
            {comparisonData.map((item, index) => (
              <div 
                key={item.pillar} 
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-12 max-w-6xl mx-auto group transition-colors duration-300",
                  "hover:bg-gray-50/50"
                )}
              >
                {/* Pillar Title */}
                <div className="col-span-12 lg:col-span-4 p-6 lg:py-12 flex items-center">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#A3C934] transition-colors">
                    {item.pillar}
                  </h3>
                </div>

                {/* Legacy Column */}
                <div className="col-span-12 lg:col-span-4 p-6 lg:py-12 bg-gray-50/50 lg:bg-transparent border-b lg:border-none border-gray-100">
                  <h4 className="font-bold text-gray-500 mb-6 lg:hidden uppercase text-sm tracking-wider">
                    Plataformas Legadas
                  </h4>
                  <ul className="space-y-4">
                    {item.legacy.map((point) => (
                      <li key={point} className="flex items-start text-gray-500">
                        <XCircle className="h-5 w-5 text-gray-300 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Volcana Column - Highlighted */}
                <div className="col-span-12 lg:col-span-4 p-6 lg:py-12 bg-[#F7F9F2] lg:bg-[#F7F9F2]/50 relative">
                  <div className="absolute inset-0 bg-[#A3C934]/5 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300" />
                  <h4 className="font-bold text-gray-900 mb-6 lg:hidden uppercase text-sm tracking-wider">
                    Volcana™
                  </h4>
                  <ul className="space-y-4 relative z-10">
                    {item.volcana.map((point) => (
                      <li key={point} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#A3C934] mr-3 mt-0.5 flex-shrink-0 fill-[#A3C934]/10" />
                        <span className="font-medium text-gray-900 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-24 max-w-3xl mx-auto">
          <p className="text-3xl font-medium text-gray-900 leading-tight">
            "A diferença não está na interface.<br/>Está no modelo operacional."
          </p>
          <div className="mt-10 flex justify-center">
            <CtaButton className="h-14 px-10 text-base">
              Solicite uma demonstração estratégica
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}