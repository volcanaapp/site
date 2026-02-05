"use client";

import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function PlanetBadge({ dictionary }: { dictionary: any }) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="relative h-28 w-40 cursor-pointer overflow-hidden rounded-xl transition-transform duration-200 hover:scale-105">
            <Image
              src="/volcana-nature.svg"
              alt="Volcana Nature"
              fill
              sizes="160px"
              className="object-cover"
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80" side="top" align="end">
          <div className="flex flex-col space-y-2">
            <h4 className="text-sm font-semibold">{dictionary.title}</h4>
            <p className="text-sm text-muted-foreground">
              {dictionary.description}
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}