import { AboutHero } from "@/components/about-hero";
import { MissionSection } from "@/components/mission-section";
import { ManifestoSection } from "@/components/manifesto-section";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <>
      <AboutHero />
      <MissionSection dictionary={dictionary.about_page} />
      <ManifestoSection dictionary={dictionary.manifesto} />
    </>
  );
}