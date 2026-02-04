import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function PricingSection({ dictionary }: { dictionary: any }) {
  const features = [
    dictionary.features.ai_agents,
    dictionary.features.zero_fees,
    dictionary.features.unlimited_products,
    dictionary.features.priority_support,
  ];

  return (
    <section id="pricing" className="w-full py-20 md:py-32 bg-background">
      <div className="container max-w-screen-xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            {dictionary.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {dictionary.subtitle}
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-card rounded-2xl p-8 border border-border w-full max-w-md relative overflow-hidden shadow-2xl shadow-primary/10">
             <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-secondary" />
            <h3 className="text-2xl font-bold mb-2">{dictionary.plan_name}</h3>
            <p className="text-muted-foreground mb-6">{dictionary.plan_description}</p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-bold tracking-tight">{dictionary.price}</span>
              <span className="text-muted-foreground">{dictionary.per_month}</span>
            </div>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-card-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="w-full font-bold text-lg py-6 bg-primary text-primary-foreground hover:bg-primary/90">
              {dictionary.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}