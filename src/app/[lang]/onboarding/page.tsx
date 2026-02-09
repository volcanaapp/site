import { OnboardingFlow } from "@/components/onboarding/onboarding-flow";
import { Logo } from "@/components/logo";

export default function OnboardingPage() {
  return (
    <div className="bg-white min-h-screen text-[#181817] font-sans">
      <header className="absolute top-0 left-0 right-0 p-8">
        <Logo className="h-7" />
      </header>
      <main>
        <OnboardingFlow />
      </main>
    </div>
  );
}