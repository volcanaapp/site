"use client";

import { TypeAnimation } from "react-type-animation";
import React from "react";

interface TypewriterEffectProps {
  sequence: (string | number)[];
  wrapper?: React.ElementType;
  className?: string;
  speed?: number;
  repeat?: number;
  cursor?: boolean;
}

export function TypewriterEffect({
  sequence,
  wrapper = "span",
  className,
  speed = 50,
  repeat = Infinity,
  cursor = true,
}: TypewriterEffectProps) {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper={wrapper}
      speed={speed}
      className={className}
      cursor={cursor}
      repeat={repeat}
    />
  );
}