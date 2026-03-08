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
          <div className="relative h-28 w-40 cursor-pointer overflow-hidden rounded-xl transition-transform duration-200 hover:scale-105 bg-black/5 flex items-center justify-center p-2">
            <Image
              src="/volcana.capsula.png"
              alt="Volcana Capsula"
              width={160}
              height={112}
              className="object-contain w-full h-full"
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