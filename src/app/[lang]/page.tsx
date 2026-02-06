import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Hero } from "@/components/hero";
import { Hero02 } from "@/components/hero-02";
import { UseCaseCarousel } from "@/components/use-case-carousel";
import { WhyVolcana } from "@/components/why-volcana";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Hero dictionary={dictionary} />
      <Hero02 dictionary={dictionary} />
      <WhyVolcana dictionary={dictionary.whyVolcana} />
      <UseCaseCarousel dictionary={dictionary.useCaseCarousel} />
      <Cta dictionary={dictionary.cta} />
      <Footer dictionary={dictionary.footer} />
    </>
  );
}