"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "./ui/button";
import { OnePercentLogo } from "./icons/one-percent-logo";

export function PlanetBadge({ dictionary }: { dictionary: any }) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full h-14 w-14 bg-card/80 backdrop-blur-sm hover:bg-card text-foreground">
            <OnePercentLogo className="h-10 w-10" />
          </Button>
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