import { Logo } from "./logo";
import { cn } from "@/lib/utils";

interface LoadingScreenProps {
  className?: string;
}

export function LoadingScreen({ className }: LoadingScreenProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center bg-background",
        className
      )}
    >
      <div className="animate-pulse">
        <Logo className="h-12 w-auto text-primary" />
      </div>
    </div>
  );
}