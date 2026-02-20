"use client";

import { X, Check } from 'lucide-react';
import { CtaButton } from './ui/cta-button';

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
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Infraestrutura tradicional vs. Operação AI-Native
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Plataformas legadas foram construídas para gestão manual. A Volcana™ foi construída para execução autônoma por agentes inteligentes.
          </p>
        </div>

        <div className="space-y-8">
          {comparisonData.map((item) => (
            <div key={item.pillar} className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 items-stretch">
              <div className="lg:flex lg:items-center lg:justify-end lg:text-right">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 lg:mb-0">
                  {item.pillar}
                </h3>
              </div>
              
              <div className="bg-gray-50/80 border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold text-lg text-gray-500 mb-4">Plataformas Legadas</h4>
                <ul className="space-y-3">
                  {item.legacy.map((point) => (
                    <li key={point} className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border-2 border-lime-300 rounded-2xl p-6 shadow-lg ring-4 ring-lime-50">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Volcana™</h4>
                <ul className="space-y-3">
                  {item.volcana.map((point) => (
                    <li key={point} className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-2xl font-medium text-gray-800">
            "A diferença não está na interface. Está no modelo operacional."
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton>
              Solicite uma demonstração estratégica
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}