"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Locale } from "@/lib/i18n-config";

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
  // 20% discount on annual
  const value = yearly ? baseValue * 12 * 0.8 : baseValue;
  const rounded = Math.round(value);

  return `${currencySymbol}${rounded}`;
}

export function PricingContent({
  dictionary,
  plans,
  lang,
}: {
  dictionary: any;
  plans: Plan[];
  lang: Locale;
}) {
  const [yearly, setYearly] = useState(false);

  // Sort so featured plan is visually distinct or center (handled by grid layout order mostly, 
  // but let's ensure the data is easy to map)
  const sortedPlans = useMemo(() => {
    return plans.slice().sort((a, b) => {
      // Simple logic: keep original order but maybe we want specific sorting?
      // For now, let's respect the JSON order which usually puts the "Pro" middle.
      return 0; 
    });
  }, [plans]);

  const heroTitle = dictionary?.pricing_page?.title ?? "Flexible plans for businesses of all sizes.";
  const heroSubtitle = dictionary?.pricing_page?.subtitle ?? "Start for free and scale as you grow. No contracts, no surprises.";

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="px-4 py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 mb-4">
              <span className="text-xs font-semibold text-gray-600">PRICING</span>
              <span className="inline-block w-1 h-1 rounded-full bg-[#D3FE3E]" />
              <span className="text-xs font-semibold text-gray-600">VOLCANA™</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900">
              {heroTitle}
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              {heroSubtitle}
            </p>

            {/* Billing Toggle */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 select-none">
              <span 
                className={cn("text-sm font-semibold cursor-pointer transition-colors", yearly ? "text-gray-500" : "text-gray-900")}
                onClick={() => setYearly(false)}
              >
                Monthly
              </span>
              <Switch checked={yearly} onCheckedChange={setYearly} />
              <span 
                className={cn("text-sm font-semibold cursor-pointer transition-colors", yearly ? "text-gray-900" : "text-gray-500")}
                onClick={() => setYearly(true)}
              >
                Yearly
              </span>
              <span className="ml-2 text-xs font-bold text-gray-800 bg-[#D3FE3E] rounded-full px-2 py-0.5">
                Save 20%
              </span>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
            {sortedPlans.map((plan) => {
              const isFeatured = !!plan.featured;
              const displayPrice = formatPrice(plan.price, yearly);
              // If yearly is selected, show "/year" unless price is Custom
              let displayPeriod = plan.period;
              if (yearly && plan.period === "/month") {
                displayPeriod = "/year";
              }
              if (plan.price.toLowerCase() === "custom") {
                displayPeriod = "";
              }

              return (
                <Card
                  key={plan.name}
                  className={cn(
                    "rounded-3xl border-gray-200 transition-all duration-300 relative flex flex-col h-full",
                    isFeatured 
                      ? "shadow-2xl shadow-gray-200/50 ring-2 ring-[#D3FE3E] scale-100 md:scale-105 z-10 bg-white" 
                      : "shadow-sm hover:shadow-md bg-gray-50/50"
                  )}
                >
                  {isFeatured && plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge variant="volcana" className="font-bold px-3 py-1 rounded-full text-xs shadow-sm">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="space-y-4 pb-4">
                    <CardTitle className="text-2xl font-black text-gray-900">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-600 h-10 line-clamp-2">
                      {plan.description}
                    </CardDescription>
                    <div className="pt-2 flex items-baseline gap-1">
                      <span className="text-4xl font-black text-gray-900 tracking-tight">
                        {displayPrice}
                      </span>
                      {displayPeriod && (
                        <span className="text-sm text-gray-500 font-semibold">{displayPeriod}</span>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6 flex-1 flex flex-col">
                    <div className="h-px bg-gray-200 w-full" />
                    <ul className="space-y-4 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <div className="mt-1.5 h-2 w-2 rounded-full bg-[#D3FE3E] shrink-0" />
                          <span className="text-sm text-gray-700 font-medium leading-tight">{f}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 mt-auto">
                      <Button
                        asChild
                        variant="volcana"
                        className={cn(
                          "w-full h-12 rounded-xl font-bold text-base transition-transform active:scale-95",
                          isFeatured ? "shadow-lg shadow-[#D3FE3E]/20" : ""
                        )}
                      >
                        <Link href={plan.name.toLowerCase() === "enterprise" ? `/${lang}/waitlist` : `/${lang}/login`}>
                          {plan.cta}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Token Packages Section */}
          {dictionary?.pricing_page?.token_packages && (
            <div className="mt-20 max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-gray-900">{dictionary.pricing_page.token_packages.title}</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">{dictionary.pricing_page.token_packages.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {dictionary.pricing_page.token_packages.packages.map((pkg: any) => (
                  <div key={pkg.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{pkg.name}</h3>
                        <p className="text-sm text-gray-500 font-medium">{pkg.tokens}</p>
                      </div>
                      <div className="bg-gray-50 text-gray-900 font-bold px-3 py-1 rounded-lg text-sm border border-gray-100">
                        {pkg.price}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {pkg.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full font-bold text-xs rounded-lg h-9">
                      {dictionary.pricing_page.token_packages.add_to_plan}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Comparison Tabs */}
          <div className="mt-24 max-w-4xl mx-auto">
             <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-gray-900">Compare Plans</h2>
                <p className="text-gray-500">Detailed breakdown of what's included.</p>
             </div>

            <Tabs defaultValue="features" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray-100 p-1 rounded-2xl h-auto">
                  <TabsTrigger 
                    value="features" 
                    className="rounded-xl px-6 py-2.5 text-sm font-semibold data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
                  >
                    Feature Overview
                  </TabsTrigger>
                  <TabsTrigger 
                    value="details" 
                    className="rounded-xl px-6 py-2.5 text-sm font-semibold data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
                  >
                    Plan Details
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="features" className="mt-0 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {plans.map((plan) => (
                    <div key={`features-${plan.name}`} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        {plan.name}
                        {plan.featured && <span className="w-2 h-2 rounded-full bg-[#D3FE3E]" />}
                      </h3>
                      <ul className="space-y-3">
                        {plan.features.slice(0, 5).map((f) => (
                          <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                             <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                             </svg>
                             {f}
                          </li>
                        ))}
                         {plan.features.length > 5 && (
                            <li className="text-xs text-gray-400 pl-7 pt-1">
                               + {plan.features.length - 5} more features
                            </li>
                         )}
                      </ul>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="details" className="mt-0 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 text-center">
                   <h3 className="text-xl font-bold text-gray-900 mb-2">Need a custom comparison?</h3>
                   <p className="text-gray-600 max-w-lg mx-auto mb-6">
                     Our sales team can help you build a tailored ROI analysis for your specific operation volume and needs.
                   </p>
                   <Button asChild variant="outline" className="rounded-xl font-bold bg-white hover:bg-gray-100">
                      <Link href={`/${lang}/waitlist`}>Contact Sales Team</Link>
                   </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* FAQ Section */}
          {dictionary?.pricing_page?.faq && (
            <div className="mt-24 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                {dictionary.pricing_page.faq.title}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {dictionary.pricing_page.faq.items.map((item: any, index: number) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold text-gray-900">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          {/* Brand strip */}
          <div className="mt-24 pt-12 border-t border-gray-100">
            <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted Ecosystem</p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <Image src="/one-percent-logo.svg" alt="1% for the Planet" width={100} height={40} className="h-8 w-auto object-contain" />
              <Image src="/shop-pay-placeholder.svg" alt="Checkout" width={100} height={40} className="h-6 w-auto object-contain" />
              <div className="h-8 flex items-center gap-2 font-bold text-gray-800">
                 <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white text-xs">S</div>
                 Stripe
              </div>
               <div className="h-8 flex items-center gap-2 font-bold text-gray-800">
                 <div className="w-8 h-8 bg-[#00A1E0] rounded-lg flex items-center justify-center text-white text-xs">V</div>
                 Vercel
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 py-20 bg-[#F9FAFB] border-t border-gray-200">
        <div className="mx-auto max-w-4xl text-center">
            <h3 className="text-3xl font-black text-gray-900 mb-4">Ready to autonomous operations?</h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Join the waitlist or start with a free account to explore the dashboard.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="volcana" className="w-full sm:w-auto rounded-xl h-12 px-8 font-bold shadow-lg shadow-[#D3FE3E]/20 text-base">
                <Link href={`/${lang}/login`}>Create Free Account</Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto rounded-xl h-12 px-8 font-bold text-base bg-white">
                <Link href={`/${lang}/waitlist`}>Talk to Sales</Link>
              </Button>
            </div>
        </div>
      </section>
    </div>
  );
}