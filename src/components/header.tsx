"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { TopBar } from "./top-bar";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import type { Session } from "@supabase/supabase-js";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { SolutionsMegamenu } from "./solutions-megamenu";
import { ProductMegamenu } from "./product-megamenu";

export function Header({
  dictionary,
  session,
  lang,
}: {
  dictionary: any;
  session: Session | null;
  lang: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegamenuOpen, setIsMegamenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "#", label: dictionary.header.product },
    { href: "#", label: dictionary.header.solutions },
    { href: `/${lang}/pricing`, label: dictionary.header.pricing },
    { href: "#", label: dictionary.header.comparison },
    { href: "#", label: dictionary.header.use_cases },
    { href: "#", label: dictionary.header.content },
  ];

  const linkClassName = "bg-transparent hover:bg-transparent transition-all hover:text-volcana-lime text-foreground/60 font-bold data-[state=open]:text-volcana-lime";

  return (
    <>
      <TopBar dictionary={dictionary.topbar} />
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "border-b border-gray-100 bg-white/90 backdrop-blur-xl shadow-sm"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="container flex h-20 max-w-screen-2xl items-center justify-between relative">
          {/* Left Side */}
          <div className="flex items-center">
            <div className="md:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-volcana-lime/10">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Abrir menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-white border-r-gray-100 w-[300px] sm:w-[400px]">
                  <div className="flex flex-col h-full py-6">
                    <Link
                      href={`/${lang}`}
                      className="flex items-center mb-12 px-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Logo className="h-9" />
                    </Link>
                    <nav className="flex flex-col gap-2">
                      {navLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-3xl font-black text-black hover:text-volcana-lime transition-all uppercase tracking-tighter py-3 px-2 rounded-xl hover:bg-gray-50"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                    <div className="mt-auto pt-10 border-t border-gray-100">
                      <div className="flex flex-col gap-4">
                        <Button asChild variant="ghost" className="h-14 text-lg rounded-2xl font-bold">
                          <Link href={`/${lang}/login`} onClick={() => setIsMenuOpen(false)}>{dictionary.header.login}</Link>
                        </Button>
                        <Button asChild variant="volcana" className="w-full h-14 text-lg rounded-2xl font-black shadow-xl shadow-volcana-lime/20">
                          <Link href={`/${lang}/waitlist`} onClick={() => setIsMenuOpen(false)}>{dictionary.header.start_now}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="hidden md:flex">
              <Link href={`/${lang}`} className="mr-10 flex items-center transition-transform hover:scale-105">
                <Logo className="h-8" />
              </Link>
            </div>
          </div>

          {/* Center Navigation (Desktop) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 justify-center">
            {isMounted && (
              <NavigationMenu onValueChange={(value) => setIsMegamenuOpen(!!value)} className="max-w-none">
                <NavigationMenuList className="gap-2">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={linkClassName}>
                      {dictionary.header.product}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ProductMegamenu dictionary={dictionary} />
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={linkClassName}>
                      {dictionary.header.solutions}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <SolutionsMegamenu dictionary={dictionary} />
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href={`/${lang}/pricing`}
                        className={cn(navigationMenuTriggerStyle(), linkClassName, "bg-transparent")}
                      >
                        {dictionary.header.pricing}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        className={cn(navigationMenuTriggerStyle(), linkClassName, "bg-transparent")}
                      >
                        {dictionary.header.comparison}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        className={cn(navigationMenuTriggerStyle(), linkClassName, "bg-transparent")}
                      >
                        {dictionary.header.use_cases}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        className={cn(navigationMenuTriggerStyle(), linkClassName, "bg-transparent")}
                      >
                        {dictionary.header.content}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            )}
          </div>
          
          {/* Center Logo (Mobile) */}
          <div className="md:hidden">
            <Link href={`/${lang}`} className="flex items-center">
              <Logo className="h-7" />
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-3">
            {isMounted ? (
              session ? (
                <Button asChild variant="secondary" className="rounded-xl px-6 h-11 font-bold">
                  <Link href={`/${lang}/dashboard`}>Dashboard</Link>
                </Button>
              ) : (
                <>
                  <Button asChild variant="ghost" className="rounded-xl px-6 h-11 font-bold hover:text-volcana-lime hover:bg-volcana-lime/5">
                    <Link href={`/${lang}/login`}>{dictionary.header.login}</Link>
                  </Button>
                  <Button
                    asChild
                    variant="volcana"
                    className="font-bold rounded-xl px-8 h-11 shadow-lg shadow-volcana-lime/20"
                  >
                    <Link href={`/${lang}/waitlist`}>{dictionary.header.start_now}</Link>
                  </Button>
                </>
              )
            ) : (
              <div className="w-[215px] h-[44px]" />
            )}
          </div>
        </div>
      </header>
      {isMegamenuOpen && (
        <div className="fixed inset-0 top-[calc(theme(spacing.14)+theme(spacing.10))] bg-background/80 backdrop-blur-sm z-40" />
      )}
    </>
  );
}