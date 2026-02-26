import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import { SkillMarketplace } from "@/components/skill-marketplace";
import { FinalCTA } from "@/components/final-cta";

export default async function MarketplacePage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="bg-[#181817] min-h-screen">
      <SkillMarketplace dictionary={dictionary.marketplace} />
      <FinalCTA dictionary={dictionary.final_cta} lang={lang} />
    </div>
  );
}
