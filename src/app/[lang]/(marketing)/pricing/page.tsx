import React from "react";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import { PricingContent } from "@/components/pricing-content";

export default async function PricingPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const plans = dictionary?.pricing_page?.plans ?? [];

  return <PricingContent dictionary={dictionary} plans={plans} lang={lang} />;
}