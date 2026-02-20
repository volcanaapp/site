import { CheckCircle2, XCircle, Users, Bot } from 'lucide-react';

const legacyFeatures = [
  { text: "Taxa da plataforma", included: false },
  { text: "Custo de agência", included: false },
  { text: "Especialistas internos", included: false },
  { text: "Ferramentas adicionais", included: false },
  { text: "Retrabalho e desalinhamento", included: false },
];

const volcanaFeatures = [
  { text: "Arquitetura baseada em Agentes", included: true },
  { text: "Custo operacional reduzido", included: true },
  { text: "Operação autônoma 24/7", included: true },
  { text: "Evolução e deploy contínuos", included: true },
  { text: "Hiper-personalização com IA", included: true },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Porque somos diferentes?</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Plataformas legadas te entregam ferramentas. A Volcana™ te entrega uma operação autônoma e inteligente.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative">
          {/* Coluna Plataformas Legadas */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-left h-full">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-gray-100 mr-4">
                <Users className="h-6 w-6 text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Plataformas Legadas</h3>
            </div>
            <ul className="space-y-4">
              {legacyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna Volcana™ */}
          <div className="bg-white p-8 rounded-xl border-2 border-[#A3C934] shadow-lg text-left h-full">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-lime-100 mr-4">
                <Bot className="h-6 w-6 text-[#A3C934]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Volcana™</h3>
            </div>
            <ul className="space-y-4">
              {volcanaFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-800">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Elemento "VS" no meio */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">VS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}