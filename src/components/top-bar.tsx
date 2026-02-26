"use client";

import { Globe, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const flags: Record<string, string> = {
  pt: "🇧🇷",
  en: "🇺🇸",
  es: "🇪🇸",
};

export function TopBar({ dictionary }: { dictionary: any }) {
  const pathName = usePathname();
  const currentLang = (pathName?.split("/")[1] || "pt") as string;
  
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="bg-white border-b">
      <div className="container flex h-10 items-center justify-end max-w-screen-2xl">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center gap-2 px-3 hover:bg-gray-100 rounded-full transition-all duration-300"
            >
              <span className="text-base leading-none">{flags[currentLang] || flags.pt}</span>
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">{currentLang}</span>
              <ChevronDown className="h-3 w-3 text-gray-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-[150px] p-1">
            <DropdownMenuItem asChild className="rounded-md focus:bg-gray-50 cursor-pointer">
              <Link href={redirectedPathName('pt')} className="flex items-center gap-3 w-full py-2">
                <span className="text-lg leading-none">🇧🇷</span>
                <span className="text-sm font-medium text-gray-700">{dictionary.pt}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="rounded-md focus:bg-gray-50 cursor-pointer">
              <Link href={redirectedPathName('en')} className="flex items-center gap-3 w-full py-2">
                <span className="text-lg leading-none">🇺🇸</span>
                <span className="text-sm font-medium text-gray-700">{dictionary.en}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="rounded-md focus:bg-gray-50 cursor-pointer">
              <Link href={redirectedPathName('es')} className="flex items-center gap-3 w-full py-2">
                <span className="text-lg leading-none">🇪🇸</span>
                <span className="text-sm font-medium text-gray-700">{dictionary.es}</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}