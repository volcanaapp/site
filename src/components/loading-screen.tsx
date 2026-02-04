import { Logo } from "./logo";
import { ProgressBar } from "./progress-bar";

export function LoadingScreen({ progress }: { progress: number }) {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary">
      <div className="w-64 animate-pulsate">
        <Logo pathClassName="fill-primary-foreground" />
      </div>
      <div className="mt-8 w-64">
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
}