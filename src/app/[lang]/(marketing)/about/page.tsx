import { AboutVideoHero } from "@/components/about-video-hero";
import { AboutMission } from "@/components/about-mission";
import { ManifestoSection } from "@/components/manifesto-section";
import { GlobalPresenceSection } from "@/components/global-presence-section";
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
    <main className="bg-black min-h-screen">
      <AboutVideoHero />
      <AboutMission dictionary={dictionary.about_page} />
      <ManifestoSection dictionary={dictionary.manifesto} />
      <GlobalPresenceSection />
    </main>
  );
}