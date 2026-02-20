import type { Metadata } from "next";
import { WaitlistHero } from "@/components/waitlist-hero";
import { ScarcityBanner } from "@/components/scarcity-banner";
import { DesireSection } from "@/components/desire-section";
import { WaitlistHeader } from "@/components/waitlist-header";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { InterestSection } from "@/components/interest-section";
import { getDictionary } from "@/lib/get-dictionary";
import { SimpleFooter } from "@/components/simple-footer";
import { Locale } from "@/lib/i18n-config";
import { ComparisonSection } from "@/components/comparison-section";
import { ProductExperience } from "@/components/product-experience";

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const waitlistDict = dictionary.waitlist;

  return {
    title: `Lista de Espera | ${waitlistDict.hero_title}`,
    description: waitlistDict.hero_subtitle,
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function WaitlistPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const waitlistDict = dictionary.waitlist;

  return (
    <div className="bg-white text-gray-900">
      <ScarcityBanner />
      <WaitlistHeader />
      <main>
        <WaitlistHero dictionary={waitlistDict} />
        <InterestSection />
        <ProductExperience />
        <HowItWorksSection />
        <ComparisonSection />
        <DesireSection />
      </main>
      <SimpleFooter />
    </div>
  );
}