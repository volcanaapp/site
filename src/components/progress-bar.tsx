export function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="h-2 w-full rounded-full bg-primary-foreground/20 overflow-hidden">
      <div
        className="h-full rounded-full bg-primary-foreground transition-all duration-300 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}