export function DesireSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-[#A3C934]">O Gatilho da Margem</h3>
            <p className="text-lg text-gray-700">
              Saia do imposto de <span className="line-through">3% sobre o faturamento</span>. Entre na era do Custo Fixo de <span className="text-gray-900 font-bold">$59</span>.
            </p>
          </div>
          <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-[#A3C934]">A Elite Agêntica</h3>
            <p className="text-lg text-gray-700">
              Você não precisa de mais funcionários de operação. Você precisa de agentes que não dormem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}