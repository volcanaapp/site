import { OnboardingFlow } from "@/components/onboarding/onboarding-flow";
import Image from "next/image";

export default function OnboardingPage() {
  return (
    <div className="dark bg-background min-h-screen text-foreground font-sans">
      <main className="grid md:grid-cols-2 min-h-screen">
        <div className="flex items-center justify-center p-8">
          <OnboardingFlow />
        </div>
        <div className="hidden md:block relative">
          <Image
            src="/volcana-nature.png"
            alt="Natureza Volcana"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
      </main>
    </div>
  );
}