import { CheckCircle2, XCircle } from "lucide-react";
import { CtaButton } from "./cta-button";

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

export const HowItWorksSection = () => {
  return (
    <section id="diferenciais" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Infraestrutura tradicional vs. Operação AI-Native
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Plataformas legadas foram construídas para gestão manual. A Volcana™
            foi construída para execução autônoma por agentes inteligentes.
          </p>
        </div>

        <div className="hidden lg:grid grid-cols-[1fr_1.5fr_1.5fr] gap-4 items-center text-center font-bold text-lg mb-4 text-gray-800">
          <h3>Pilar estratégico</h3>
          <h3>Plataformas Legadas</h3>
          <h3>Volcana™</h3>
        </div>

        <div className="space-y-8">
          {comparisonData.map((item) => (
            <div
              key={item.pillar}
              className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1.5fr] gap-4 lg:gap-8 items-stretch"
            >
              <div className="flex items-center justify-center lg:justify-start p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 text-center lg:text-left">{item.pillar}</h3>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 className="font-bold text-lg text-gray-800 mb-4 lg:hidden">Plataformas Legadas</h3>
                <ul className="space-y-3">
                  {item.legacy.map((text) => (
                    <li key={text} className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-green-500 ring-4 ring-green-500/10">
                <h3 className="font-bold text-lg text-gray-800 mb-4 lg:hidden">Volcana™</h3>
                <ul className="space-y-3">
                  {item.volcana.map((text) => (
                    <li key={text} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-2xl font-bold text-gray-900">
            &quot;A diferença não está na interface. Está no modelo operacional.&quot;
          </p>
          <div className="mt-8">
            <CtaButton>Solicite uma demonstração estratégica</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
};