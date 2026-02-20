"use client";

import { useState, useEffect } from "react";

export function useScrollTrigger(threshold = 10) {
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsTriggered(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    if (isTriggered) return;

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold, isTriggered]);

  return isTriggered;
}