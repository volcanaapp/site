"use client";

import { useState, useEffect } from "react";
import { Logo } from "./logo";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface LoadingScreenProps {
  onFinished: () => void;
}

export function LoadingScreen({ onFinished }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsRevealing(true);
          // Aguarda a animação de revelação terminar antes de desmontar o componente
          setTimeout(onFinished, 1000); // Duração da animação clip-reveal
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => {
      clearInterval(timer);
    };
  }, [onFinished]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary transition-colors duration-1000",
        isRevealing && "bg-transparent animate-clip-reveal"
      )}
    >
      <div
        className={cn(
          "flex flex-col items-center gap-8 transition-opacity duration-300",
          isRevealing && "opacity-0"
        )}
      >
        <Logo className="h-12 text-primary-foreground animate-pulse-slow" />
        <Progress
          value={progress}
          className="w-64 h-2 bg-primary-foreground/20 [&>div]:bg-primary-foreground"
        />
      </div>
    </div>
  );
}