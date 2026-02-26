import { ParallaxHero } from "@/components/parallax-hero";
import { ManifestoSection } from "@/components/manifesto-section";
import { GlobalPresenceSection } from "@/components/global-presence-section";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";

export default async function AboutPage2({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="bg-black min-h-screen">
      <ParallaxHero dictionary={dictionary.about_page} />
      <ManifestoSection dictionary={dictionary.manifesto} />
      <GlobalPresenceSection />
    </main>
  );
}