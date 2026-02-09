import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default async function PricingPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const pricingDict = dictionary.pricing_page;

  return (
    <section id="pricing" className="w-full py-20 md:py-32 bg-background">
      <div className="container max-w-screen-xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            {pricingDict.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {pricingDict.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-5xl mx-auto">
          {pricingDict.plans.map((plan: any) => (
            <div
              key={plan.name}
              className={cn(
                "bg-card rounded-2xl p-8 border w-full flex flex-col h-full relative overflow-hidden transition-all duration-300",
                plan.featured
                  ? "border-primary shadow-2xl shadow-primary/10 lg:-translate-y-4"
                  : "border-border"
              )}
            >
              {plan.featured && (
                <Badge
                  variant="default"
                  className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-sm font-bold"
                >
                  {plan.badge}
                </Badge>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6 min-h-[4rem]">{plan.description}</p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className={cn(
                  "w-full font-bold text-lg py-6",
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-foreground text-background hover:bg-foreground/80"
                )}
              >
                <Link href="/onboarding">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}