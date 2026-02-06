"use client";

import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function TopBar({ dictionary }: { dictionary: any }) {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="bg-card border-b">
      <div className="container flex h-10 items-center justify-end max-w-screen-2xl">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-secondary" />
              <span>{dictionary.language}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href={redirectedPathName('pt')}>{dictionary.pt}</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={redirectedPathName('en')}>{dictionary.en}</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={redirectedPathName('es')}>{dictionary.es}</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}