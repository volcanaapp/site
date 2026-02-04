import { CheckCircle, XCircle } from "lucide-react";

export function ComparisonGrid() {
  return (
    <section className="bg-card border-y">
      <div className="container py-20 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Chega de taxas abusivas</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Na Volcana™, você paga um preço fixo e justo. O lucro das suas vendas é 100% seu.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-background rounded-lg p-8 border">
            <h3 className="text-2xl font-bold mb-4">Plataformas Tradicionais</h3>
            <div className="flex items-center justify-center gap-4 text-destructive text-xl font-semibold">
              <XCircle className="h-8 w-8" />
              <span>3-5% de taxa por venda</span>
            </div>
            <p className="text-muted-foreground mt-4">
              Taxas que punem o seu crescimento e comem uma parte significativa do seu lucro.
            </p>
          </div>
          <div className="bg-background rounded-lg p-8 border-2 border-primary">
            <h3 className="text-2xl font-bold mb-4">Volcana™</h3>
            <div className="flex items-center justify-center gap-4 text-primary text-xl font-semibold">
              <CheckCircle className="h-8 w-8" />
              <span>0% de taxa por venda</span>
            </div>
            <p className="text-muted-foreground mt-4">
              Um preço mensal fixo, não importa o quanto você venda. Previsibilidade para o seu negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}