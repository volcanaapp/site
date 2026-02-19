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
      <div className="fixed bottom-0 left-0 w-full z-50 shadow-[0_-4px_14px_rgba(0,0,0,0.05)]">
        <TrustFooter />
        <ActionSection />
      </div>
    </div>
  );
}