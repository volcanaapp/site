import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import { SkillMarketplace } from "@/components/skill-marketplace";

export default async function MarketplacePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <SkillMarketplace dictionary={dictionary} />
    </>
  );
}