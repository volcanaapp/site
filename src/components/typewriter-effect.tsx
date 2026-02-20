"use client";

import { TypeAnimation } from "react-type-animation";

export function TypewriterEffect({ className }: { className?: string }) {
  return (
    <TypeAnimation
      sequence={[
        'Sua loja virtual operando sozinha. Você focado em crescimento.',
        5000,
      ]}
      wrapper="h1"
      speed={50}
      className={className}
      cursor={true}
      repeat={Infinity}
    />
  );
}