import { Hero01 } from "@/components/hero-01";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import { Hero02 } from "@/components/hero-02";
import { PricingSection } from "@/components/pricing-section";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Hero01 dictionary={dictionary.hero} />
      <Hero02 dictionary={dictionary} />
      <PricingSection dictionary={dictionary.pricing} />
    </>
  );
}