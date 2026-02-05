"use client";

import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

interface LoadingScreenProps {
  onFinished: () => void;
}

export function LoadingScreen({ onFinished }: LoadingScreenProps) {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimatingOut(true);
    }, 1500); // Minimum display time for the loader

    const finishTimer = setTimeout(() => {
      onFinished();
    }, 2000); // 1500ms display + 500ms fade-out

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [onFinished]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-primary transition-opacity duration-500",
        isAnimatingOut ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="animate-pulse">
        <Logo className="h-12 text-primary-foreground" />
      </div>
    </div>
  );
}