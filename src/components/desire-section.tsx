"use client";

import { StickyCTA } from "@/components/sticky-cta";
import { useScrollTrigger } from "@/hooks/use-scroll-trigger";

export function DesireSection() {
  const isScrolled = useScrollTrigger(100);

  return (
    <>
      <StickyCTA isVisible={isScrolled} />
    </>
  );
}