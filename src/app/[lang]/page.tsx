import { Hero01 } from "@/components/hero-01";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import { Hero02 } from "@/components/hero-02";
import { FeatureSection } from "@/components/feature-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { PowerOfAutonomySection } from "@/components/power-of-autonomy-section";
import { UseCaseCarousel } from "@/components/use-case-carousel";
import { OrchestratedEcosystemSection } from "@/components/orchestrated-ecosystem-section";
import { FinalCTA } from "@/components/final-cta";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Hero01 dictionary={dictionary.hero} />
      <Hero02 dictionary={dictionary} />
      <FeatureSection dictionary={dictionary.feature_section} />
      <TestimonialSection dictionary={dictionary.testimonial_section} />
      <PowerOfAutonomySection dictionary={dictionary.power_of_autonomy} />
      <UseCaseCarousel dictionary={dictionary.use_case_carousel} />
      <OrchestratedEcosystemSection dictionary={dictionary.orchestrated_ecosystem} />
      <FinalCTA dictionary={dictionary.final_cta} />
    </>
  );
}