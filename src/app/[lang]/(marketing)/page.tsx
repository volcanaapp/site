import { Hero01 } from "@/components/hero-01";
import { Hero02 } from "@/components/hero-02";
import { FeatureSection } from "@/components/feature-section";
import { PowerOfAutonomySection } from "@/components/power-of-autonomy-section";
import { UseCaseCarousel } from "@/components/use-case-carousel";
import { OrchestratedEcosystemSection } from "@/components/orchestrated-ecosystem-section";
import { FinalCTA } from "@/components/final-cta";
import { PlanetBadge } from "@/components/planet-badge";
import { ScarcityBanner } from "@/components/scarcity-banner";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import { ProductExperience } from "@/components/product-experience";
import { HowItWorksSection } from "@/components/how-it-works-section";

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="bg-white text-gray-900">
      <ScarcityBanner phrases={dictionary.waitlist.scarcity} />
      <Hero01 dictionary={dictionary.hero} lang={lang} />
      <Hero02 dictionary={dictionary} />
      <ProductExperience dictionary={dictionary} />
      <FeatureSection dictionary={dictionary.feature_section} lang={lang} />
      <HowItWorksSection lang={lang} />
      <PowerOfAutonomySection dictionary={dictionary.power_of_autonomy} />
      <UseCaseCarousel dictionary={dictionary.use_case_carousel} lang={lang} />
      <OrchestratedEcosystemSection
        dictionary={dictionary.orchestrated_ecosystem}
      />
      <FinalCTA dictionary={dictionary.final_cta} lang={lang} />
      <PlanetBadge dictionary={dictionary.planet_badge} />
    </div>
  );
}