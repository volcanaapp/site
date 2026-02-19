import { Bot, Wand2, Rocket } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: Bot,
      title: "1. Descreva sua Loja",
      description: "Conte-nos sobre sua marca, produtos e o que torna seu negócio único. Nossa IA entende sua visão."
    },
    {
      icon: Wand2,
      title: "2. Agentes em Ação",
      description: "Nossos agentes de IA constroem, configuram e otimizam sua loja, desde o design até a logística."
    },
    {
      icon: Rocket,
      title: "3. Lance e Escale",
      description: "Sua loja está pronta para vender. Deixe os agentes cuidarem da operação enquanto você foca no crescimento."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Sua loja autônoma em 3 passos</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Do conceito ao lançamento, nosso processo é desenhado para ser simples, rápido e poderoso.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#D3FE3E]/50 text-gray-900 mb-6">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}