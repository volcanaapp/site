import { Hero01 } from "@/components/hero-01";
import { ComparisonGrid } from "@/components/comparison-grid";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import { Hero02 } from "@/components/hero-02";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Hero01 dictionary={dictionary.hero} />
      <ComparisonGrid dictionary={dictionary.comparison} />
      <Hero02 dictionary={dictionary} />
    </>
  );
}