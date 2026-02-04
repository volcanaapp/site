"use client";

import { useState, useEffect } from "react";
import { Logo } from "./logo";
import { Progress } from "@/components/ui/progress";

interface LoadingScreenProps {
  onFinished: () => void;
}

export function LoadingScreen({ onFinished }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinished, 500);
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
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary">
      <div className="flex flex-col items-center gap-8">
        <Logo className="h-12 text-primary-foreground animate-pulse-slow" />
        <Progress value={progress} className="w-64 h-2 bg-primary-foreground/20 [&>div]:bg-primary-foreground" />
      </div>
    </div>
  );
}