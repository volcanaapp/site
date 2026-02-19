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
      <main>
        <WaitlistHero />
        <InterestSection />
        <DesireSection />
        <ActionSection />
      </main>
      <TrustFooter />
    </div>
  );
}