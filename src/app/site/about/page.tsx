import { AboutHero } from "@/components/about-hero";
import { ManifestoSection } from "@/components/manifesto-section";
import { getDictionary } from "@/lib/get-dictionary";

export default async function AboutPage() {
  const dictionary = await getDictionary("pt");
  return (
    <>
      <AboutHero dictionary={dictionary.about_page} />
      <ManifestoSection dictionary={dictionary.manifesto} />
    </>
  );
}