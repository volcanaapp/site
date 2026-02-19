import { WaitlistHero } from "@/components/waitlist-hero";
import { ScarcityBanner } from "@/components/scarcity-banner";
import { InterestSection } from "@/components/interest-section";
import { DesireSection } from "@/components/desire-section";
import { ActionSection } from "@/components/action-section";
import { TrustFooter } from "@/components/trust-footer";
import { WaitlistHeader } from "@/components/waitlist-header";

export default function WaitlistPage() {
  return (
    <div className="bg-white text-gray-900">
      <ScarcityBanner />
      <WaitlistHeader />
      <main className="pb-56">
        <WaitlistHero />
        <InterestSection />
        <DesireSection />
      </main>
      <div className="fixed bottom-0 left-0 w-full z-50">
        <TrustFooter />
        <ActionSection />
      </div>
    </div>
  );
}