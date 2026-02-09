import { AboutHero } from "@/components/about-hero";
import { ManifestoSection } from "@/components/manifesto-section";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";

export default async function AboutPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <AboutHero dictionary={dictionary.about_page} />
      <ManifestoSection dictionary={dictionary.manifesto} />
    </>
  );
}