import { Hero01 } from "@/components/hero-01";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import { Hero02 } from "@/components/hero-02";
import { PricingSection } from "@/components/pricing-section";
import { Hero03 } from "@/components/hero-03";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Hero01 dictionary={dictionary.hero} />
      <Hero02 dictionary={dictionary.hero2} />
      <Hero03 dictionary={dictionary.hero3} />
      <PricingSection dictionary={dictionary.pricing} />
    </>
  );
}