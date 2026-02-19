import { WaitlistHero } from "@/components/waitlist-hero";
import { ScarcityBanner } from "@/components/scarcity-banner";
import { DesireSection } from "@/components/desire-section";
import { WaitlistHeader } from "@/components/waitlist-header";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { InterestSection } from "@/components/interest-section";
import { getDictionary } from "@/lib/get-dictionary";
import { SimpleFooter } from "@/components/simple-footer";

export default async function WaitlistPage() {
  const dictionary = await getDictionary("pt");
  const waitlistDict = dictionary.waitlist;

  return (
    <div className="bg-white text-gray-900">
      <ScarcityBanner />
      <WaitlistHeader />
      <main>
        <WaitlistHero dictionary={waitlistDict} />
        <InterestSection />
        <HowItWorksSection />
        <DesireSection />
      </main>
      <SimpleFooter />
    </div>
  );
}