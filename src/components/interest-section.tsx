
const LogoPlaceholder = ({ name }: { name: string }) => (
  <div className="w-32 h-16 bg-zinc-800 rounded-lg flex items-center justify-center">
    <span className="text-zinc-400 text-sm">{name}</span>
  </div>
);

export function InterestSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-12">
          Não somos uma ferramenta de gestão. Somos uma camada de inteligência nativa que executa o seu back-office enquanto você foca na marca.
        </p>
        <div className="relative">
          <div className="flex space-x-8 overflow-x-auto py-4">
            <LogoPlaceholder name="SAP" />
            <LogoPlaceholder name="TOTVS" />
            <LogoPlaceholder name="RD Station" />
            <LogoPlaceholder name="SAP" />
            <LogoPlaceholder name="TOTVS" />
            <LogoPlaceholder name="RD Station" />
            <LogoPlaceholder name="SAP" />
            <LogoPlaceholder name="TOTVS" />
            <LogoPlaceholder name="RD Station" />
          </div>
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[#0A0A0A] to-transparent" />
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#0A0A0A] to-transparent" />
        </div>
      </div>
    </section>
  );
}
