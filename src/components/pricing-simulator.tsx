"use client";

import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PricingSimulator() {
  const [products, setProducts] = useState([50]);
  const [support, setSupport] = useState([100]);
  const [marketing, setMarketing] = useState([5]);

  const costs = useMemo(() => {
    const productCost = products[0] * 0.5;
    const supportCost = support[0] * 0.2;
    const marketingCost = marketing[0] * 1.5;
    const total = productCost + supportCost + marketingCost;
    const agencyComparison = 2500;
    const savings = Math.max(0, agencyComparison - total);
    return {
      total,
      savings,
      agencyComparison,
    };
  }, [products, support, marketing]);

  const formatCurrency = (value: number) => {
    return `R$ ${value.toFixed(2).replace(".", ",")}`;
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Pague pelo trabalho, não pela ferramenta.
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Sem mensalidades fixas abusivas. Sem taxas sobre suas vendas. Você
            carrega créditos e seus Agentes trabalham.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna da Calculadora */}
          <div className="space-y-8">
            <div>
              <label htmlFor="products" className="block text-lg font-medium text-black mb-2">
                Quantos produtos novos/atualizados por mês?
              </label>
              <div className="flex items-center gap-4">
                <Slider
                  id="products"
                  min={0}
                  max={500}
                  step={1}
                  value={products}
                  onValueChange={setProducts}
                  className="w-full"
                />
                <span className="font-semibold text-black w-16 text-center">{products[0]}</span>
              </div>
            </div>
            <div>
              <label htmlFor="support" className="block text-lg font-medium text-black mb-2">
                Atendimentos ao cliente estimados?
              </label>
              <div className="flex items-center gap-4">
                <Slider
                  id="support"
                  min={0}
                  max={1000}
                  step={10}
                  value={support}
                  onValueChange={setSupport}
                  className="w-full"
                />
                <span className="font-semibold text-black w-16 text-center">{support[0]}</span>
              </div>
            </div>
            <div>
              <label htmlFor="marketing" className="block text-lg font-medium text-black mb-2">
                Posts de Blog e Campanhas de E-mail?
              </label>
              <div className="flex items-center gap-4">
                <Slider
                  id="marketing"
                  min={0}
                  max={50}
                  step={1}
                  value={marketing}
                  onValueChange={setMarketing}
                  className="w-full"
                />
                <span className="font-semibold text-black w-16 text-center">{marketing[0]}</span>
              </div>
            </div>
          </div>

          {/* Coluna do Resultado */}
          <div className="flex flex-col items-center">
            <Card className="w-full max-w-md bg-gray-50 border border-gray-200 rounded-lg shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-gray-700">Investimento Estimado</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-5xl font-bold text-black">
                  {formatCurrency(costs.total)}
                  <span className="text-2xl font-medium text-gray-500"> /mês</span>
                </p>
                <div className="text-left p-4 bg-white rounded-md border">
                    <p className="text-sm text-gray-600">
                        Custo médio de uma Agência para fazer o mesmo:{" "}
                        <span className="font-bold">{formatCurrency(costs.agencyComparison)}/mês</span>
                    </p>
                    <p className="text-lg font-bold text-green-600 mt-2">
                        Sua Economia:{" "}
                        <span className="bg-volcana-lime text-black px-2 py-1 rounded">
                            {formatCurrency(costs.savings)}
                        </span>
                    </p>
                </div>
              </CardContent>
            </Card>
            <div className="mt-8 text-center w-full max-w-md">
                <Button size="lg" className="w-full bg-black text-white hover:bg-gray-800 text-lg font-bold py-6">
                    COMEÇAR COM PLANO FREE
                </Button>
                <p className="mt-3 text-sm text-gray-600">
                    Ganhe R$ 50,00 em créditos ao criar sua conta.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
