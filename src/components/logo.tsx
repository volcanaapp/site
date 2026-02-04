import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("w-auto", className)}>
      <svg viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <path d="M10 40L25 10L40 40H10Z" className="fill-secondary" />
        <path d="M25 10L35 30L45 10H25Z" className="fill-primary" />
        <text x="55" y="35" className="fill-foreground font-bold text-[28px] font-sans">
          Volcana<tspan className="fill-primary">™</tspan>
        </text>
      </svg>
    </div>
  );
}