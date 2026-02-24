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

type Plan = {
  name: string;
  description: string;
  price: string;     // e.g. "$59" or "Custom"
  period: string;    // e.g. "/month" or ""
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
  // Keep "Custom" untouched
  if (!original || original.toLowerCase() === "custom") return original;

  const baseValue = parsePriceToNumber(original);
  if (baseValue === null) return original;

  const currencySymbol = original.trim().charAt(0);
  const value = yearly ? baseValue * 12 * 0.8 : baseValue; // 20% discount on annual billing
  const rounded = Math.round(value);

  return `${currencySymbol}${rounded}`;
}

export default async function PricingPage() {
  const params = useParams() as { lang: Locale };
  const dictionary = await getDictionary(params.lang);
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
    // Pro featured in the middle visually
    return plans.slice().sort((a, b) => {
      const aScore = a.featured ? 1 : 0;
      const bScore = b.featured ? 1 : 0;
      return bScore - aScore;
    });
  }, [plans]);

  const heroTitle = dictionary?.pricing_page?.title ?? "Flexible plans for businesses of all sizes.";
  const heroSubtitle = dictionary?.pricing_page?.subtitle ?? "Start for free and scale as you grow. No contracts, no surprises.";

  return (
    <div className="relative">
      {/* Hero */}
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
            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              {heroSubtitle}
            </p>

            {/* Billing Toggle */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">
              <span className={cn("text-sm font-semibold", yearly ? "text-gray-500" : "text-gray-900")}>
                Monthly
              </span>
              <Switch checked={yearly} onCheckedChange={setYearly} />
              <span className={cn("text-sm font-semibold", yearly ? "text-gray-900" : "text-gray-500")}>
                Yearly
              </span>
              <span className="ml-3 text-xs font-bold text-gray-700 bg-[#D3FE3E] rounded-full px-2 py-1">
                Save 20%
              </span>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {sortedPlans.map((plan) => {
              const isFeatured = !!plan.featured;
              const displayPrice = formatPrice(plan.price, yearly);
              const displayPeriod = yearly && plan.period === "/month" ? "/year" : plan.period;

              return (
                <Card
                  key={plan.name}
                  className={cn(
                    "rounded-2xl border-gray-200",
                    isFeatured ? "shadow-xl ring-2 ring-[#D3FE3E]" : "shadow-sm"
                  )}
                >
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl font-black text-gray-900">{plan.name}</CardTitle>
                      {plan.badge && (
                        <Badge variant="volcana" className="font-bold px-3 py-1 rounded-full">
                          {plan.badge}
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                    <div className="flex items-end gap-2">
                      <span className={cn("text-3xl font-black", plan.price.toLowerCase() === "custom" ? "text-gray-900" : "text-gray-900")}>
                        {displayPrice}
                      </span>
                      <span className="text-sm text-gray-500 font-semibold">{displayPeriod}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-3">
                          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#D3FE3E]" />
                          <span className="text-sm text-gray-800 font-medium">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      variant={isFeatured ? "volcana" : "secondary"}
                      className={cn(
                        "w-full h-12 rounded-xl font-bold",
                        isFeatured ? "shadow-lg shadow-[#D3FE3E]/30" : ""
                      )}
                    >
                      <Link href={plan.name.toLowerCase() === "enterprise" ? `/${lang}/waitlist` : `/${lang}/login`}>
                        {plan.cta}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Comparison Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="bg-gray-100 rounded-xl">
                <TabsTrigger value="features" className="rounded-lg">Key Features</TabsTrigger>
                <TabsTrigger value="details" className="rounded-lg">Details</TabsTrigger>
              </TabsList>
              <TabsContent value="features" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {plans.map((plan) => (
                    <Card key={`features-${plan.name}`} className="rounded-2xl border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-lg font-bold text-gray-900">{plan.name}</CardTitle>
                        <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {plan.features.slice(0, 4).map((f) => (
                            <li key={f} className="flex items-center gap-3">
                              <span className="inline-block w-2 h-2 rounded-full bg-[#D3FE3E]" />
                              <span className="text-sm text-gray-800">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="details" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {plans.map((plan) => (
                    <Card key={`details-${plan.name}`} className="rounded-2xl border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-lg font-bold text-gray-900">{plan.name}</CardTitle>
                        <CardDescription className="text-gray-600">
                          {plan.price} {plan.period}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-700">
                          Designed for {plan.name.toLowerCase()} needs. Contact us for personalized recommendations
                          if you’re unsure which plan is best for your operation.
                        </p>
                        <Button
                          asChild
                          variant={plan.featured ? "volcana" : "outline"}
                          className="mt-4 rounded-xl"
                        >
                          <Link href={plan.name.toLowerCase() === "enterprise" ? `/${lang}/waitlist` : `/${lang}/login`}>
                            {plan.cta}
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Brand strip */}
          <div className="mt-20 flex items-center justify-center gap-6 opacity-70">
            <Image src="/one-percent-logo.svg" alt="1% for the Planet" width={120} height={30} />
            <span className="inline-block w-1 h-1 rounded-full bg-[#D3FE3E]" />
            <Image src="/shop-pay-placeholder.svg" alt="Checkout" width={120} height={30} />
            <span className="inline-block w-1 h-1 rounded-full bg-[#D3FE3E]" />
            <Image src="/sidekick-placeholder.svg" alt="AI Agent" width={120} height={30} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 py-12 bg-[#F3F4F6] border-t border-gray-200">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-gray-900">Ready to start?</h3>
              <p className="text-gray-600 mt-1">Create your account or talk to us for a tailored Enterprise setup.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="volcana" className="rounded-xl h-11 px-6 font-bold shadow-lg shadow-[#D3FE3E]/30">
                <Link href={`/${lang}/login`}>Create Account</Link>
              </Button>
              <Button asChild variant="secondary" className="rounded-xl h-11 px-6 font-bold">
                <Link href={`/${lang}/waitlist`}>Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}