
export function DesireSection() {
  return (
    <section className="py-20 bg-[#111111]">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 bg-zinc-900 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-[#D3FE3E]">O Gatilho da Margem</h3>
            <p className="text-lg text-zinc-300">
              Saia do imposto de <span className="line-through">3% sobre o faturamento</span>. Entre na era do Custo Fixo de <span className="text-white font-bold">$59</span>.
            </p>
          </div>
          <div className="p-8 bg-zinc-900 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-[#D3FE3E]">A Elite Agêntica</h3>
            <p className="text-lg text-zinc-300">
              Você não precisa de mais funcionários de operação. Você precisa de agentes que não dormem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
