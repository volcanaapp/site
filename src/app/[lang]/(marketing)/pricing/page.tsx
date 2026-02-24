"use client";

import React, { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import { CtaButton } from "@/components/ui/cta-button";
import { Check, ArrowRight, Sparkles } from "lucide-react";

type Plan = {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
};

function parsePriceToNumber(price: string) {
  const numeric = price.replace(/[^0-9.]/g, "");
  const value = parseFloat(numeric);
  return Number.isFinite(value) ? value : null;
}

function formatPrice(original: string, yearly: boolean) {
  if (!original || original.toLowerCase() === "custom") return original;
  const baseValue = parsePriceToNumber(original);
  if (baseValue === null) return original;
  const currencySymbol = original.trim().charAt(0);
  const value = yearly ? baseValue * 12 * 0.8 : baseValue;
  const rounded = Math.round(value);
  return `${currencySymbol}${rounded}`;
}

export default function PricingPage() {
  const params = useParams() as { lang: Locale };
  const [dictionary, setDictionary] = useState<any>(null);

  React.useEffect(() => {
    getDictionary(params.lang).then(setDictionary);
  }, [params.lang]);

  if (!dictionary) return null;

  const plans: Plan[] = dictionary?.pricing_page?.plans ?? [];

  return <PricingContent dictionary={dictionary} plans={plans} lang={params.lang} />;
}

function PricingContent({
  dictionary,
  plans,
  lang,
}: {
  dictionary: any;
  plans: Plan[];
  lang: Locale;
}) {
  const [yearly, setYearly] = useState(false);

  const sortedPlans = useMemo(() => {
    return plans.slice().sort((a, b) => {
      const aScore = a.featured ? 1 : 0;
      const bScore = b.featured ? 1 : 0;
      return bScore - aScore;
    });
  }, [plans]);

  const heroTitle = dictionary?.pricing_page?.title ?? "Flexible plans for businesses of all sizes.";
  const heroSubtitle = dictionary?.pricing_page?.subtitle ?? "Start for free and scale as you grow. No contracts, no surprises.";

  return (
    <div className="relative bg-white text-black min-h-screen">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-volcana-lime/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero */}
      <section className="px-4 pt-24 pb-16 relative z-10">
        <div className="container mx-auto max-w-7xl text-center">
          <Badge variant="outline" className="mb-6 border-volcana-lime/50 bg-volcana-lime/5 text-black flex items-center gap-2 mx-auto w-fit px-4 py-1.5">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span className="font-bold tracking-tight uppercase text-[10px]">TRANSPARENT PRICING</span>
          </Badge>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-6">
            {heroTitle}
          </h1>
          <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            {heroSubtitle}
          </p>

          {/* Billing Toggle */}
          <div className="mt-12 inline-flex items-center gap-4 rounded-full border border-gray-200 bg-white p-2 pr-6 shadow-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
               <span className={cn("text-sm font-bold uppercase tracking-wide transition-colors", !yearly ? "text-black" : "text-gray-400")}>
                Monthly
              </span>
              <Switch 
                checked={yearly} 
                onCheckedChange={setYearly} 
                className="data-[state=checked]:bg-volcana-lime data-[state=unchecked]:bg-gray-300"
              />
               <span className={cn("text-sm font-bold uppercase tracking-wide transition-colors", yearly ? "text-black" : "text-gray-400")}>
                Yearly
              </span>
            </div>
            
            {yearly && (
               <span className="text-[10px] font-black text-volcana-lime bg-black px-2 py-1 rounded-md uppercase tracking-wider animate-in fade-in zoom-in duration-300">
                Save 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="px-4 pb-24 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {sortedPlans.map((plan) => {
              const isFeatured = !!plan.featured;
              const displayPrice = formatPrice(plan.price, yearly);
              const displayPeriod = yearly && plan.period === "/month" ? "/year" : plan.period;

              return (
                <div
                  key={plan.name}
                  className={cn(
                    "relative flex flex-col p-8 md:p-10 rounded-[2.5rem] transition-all duration-300",
                    isFeatured 
                      ? "bg-black text-white shadow-2xl shadow-volcana-lime/20 border border-volcana-lime/20 scale-105 z-20" 
                      : "bg-white text-black border border-gray-100 hover:border-gray-200 hover:shadow-xl z-10"
                  )}
                >
                  {isFeatured && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                       <Badge className="bg-volcana-lime text-black font-black text-xs uppercase tracking-widest px-4 py-1.5 border-none shadow-lg">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className={cn("text-2xl font-black uppercase tracking-tight mb-2", isFeatured ? "text-white" : "text-black")}>
                      {plan.name}
                    </h3>
                    <p className={cn("text-sm font-medium leading-relaxed min-h-[40px]", isFeatured ? "text-gray-400" : "text-gray-500")}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-10 flex items-baseline gap-1">
                     <span className={cn("text-5xl md:text-6xl font-black tracking-tighter", isFeatured ? "text-volcana-lime" : "text-black")}>
                      {displayPrice}
                    </span>
                    <span className={cn("text-sm font-bold uppercase tracking-wide", isFeatured ? "text-gray-500" : "text-gray-400")}>
                      {displayPeriod}
                    </span>
                  </div>

                  <ul className="space-y-5 mb-10 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <div className={cn("mt-0.5 rounded-full p-0.5 flex-shrink-0", isFeatured ? "bg-volcana-lime text-black" : "bg-black text-white")}>
                          <Check className="w-3 h-3" strokeWidth={4} />
                        </div>
                        <span className={cn("text-sm font-bold", isFeatured ? "text-gray-300" : "text-gray-700")}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <CtaButton 
                    asChild 
                    className={cn(
                      "w-full h-14 text-base font-bold", 
                      !isFeatured && "bg-gray-100 text-black hover:bg-gray-200 hover:text-black border-transparent"
                    )}
                    variant={isFeatured ? "default" : "secondary"}
                  >
                    <Link href={plan.name.toLowerCase() === "enterprise" ? `/${lang}/waitlist` : `/${lang}/login`}>
                      {plan.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </CtaButton>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
       {/* Comparison Table Section */}
       <section className="px-4 py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Detailed Comparison</h2>
            <p className="text-gray-500">Compare features across all plans to find the right fit.</p>
          </div>
          
           <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm">
             <div className="grid grid-cols-4 bg-gray-50/50 border-b border-gray-100 p-6">
               <div className="col-span-1 text-xs font-bold text-gray-400 uppercase tracking-widest pt-2">Features</div>
                {sortedPlans.map(plan => (
                  <div key={plan.name} className="col-span-1 text-center font-black uppercase text-sm">{plan.name}</div>
                ))}
             </div>
             
             {/* Example rows - normally this would come from a structured data source */}
             {[
               "AI Agents Limit", 
               "Transaction Fee", 
               "API Access", 
               "Support Level",
               "Custom Domain",
               "Analytics"
             ].map((feature, idx) => (
               <div key={feature} className={cn("grid grid-cols-4 p-6 border-b border-gray-50 hover:bg-gray-50/30 transition-colors", idx === 5 && "border-none")}>
                  <div className="col-span-1 text-sm font-bold text-gray-700">{feature}</div>
                  <div className="col-span-1 text-center text-sm text-gray-500 font-medium">Limited</div>
                  <div className="col-span-1 text-center text-sm font-bold text-black">Unlimited</div>
                  <div className="col-span-1 text-center text-sm font-bold text-black">Custom</div>
               </div>
             ))}
           </div>
        </div>
       </section>

      {/* Trust Strip */}
      <section className="py-20 border-t border-gray-200 bg-white">
        <div className="container mx-auto max-w-7xl text-center">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-10">Trusted by innovative brands</p>
             <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Reusing placeholders for now */}
                <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
                <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
                <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
                <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
                <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
             </div>
        </div>
      </section>
    </div>
  );
}