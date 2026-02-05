import { Hero } from "@/components/hero";
import { Hero02 } from "@/components/hero-02";
import { PowerOfAutonomySection } from "@/components/power-of-autonomy-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main>
      <Hero dictionary={dictionary.hero} />
      <Hero02 dictionary={dictionary} />
      <TestimonialSection dictionary={dictionary.testimonial_section} />
      <PowerOfAutonomySection dictionary={dictionary.power_of_autonomy} />
    </main>
  );
}