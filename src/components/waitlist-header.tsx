import { Logo } from "@/components/logo";

export function WaitlistHeader() {
  return (
    <header className="py-6 relative z-20">
      <div className="container mx-auto flex justify-center">
        <Logo className="h-8" />
      </div>
    </header>
  );
}