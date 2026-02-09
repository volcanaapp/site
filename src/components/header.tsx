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
}: {
  dictionary: any;
  session: Session | null;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegamenuOpen, setIsMegamenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    { href: "#", label: dictionary.header.comparison },
    { href: "#", label: dictionary.header.use_cases },
    { href: "/pricing", label: dictionary.header.pricing },
    { href: "#", label: dictionary.header.content },
  ];

  const linkClassName = "bg-transparent hover:bg-transparent transition-colors hover:text-foreground/80 text-foreground/60";

  return (
    <>
      <TopBar dictionary={dictionary.topbar} />
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            : "border-b border-transparent"
        )}
      >
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between relative">
          {/* Left Side */}
          <div className="flex items-center">
            <div className="md:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Abrir menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <Link
                    href="/"
                    className="flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Logo className="h-7" />
                  </Link>
                  <div className="flex flex-col gap-4 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-lg font-medium text-foreground/80 hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="hidden md:flex">
              <Link href="/" className="mr-6 flex items-center">
                <Logo className="h-7" />
              </Link>
            </div>
          </div>

          {/* Center Navigation (Desktop) */}
          <div className="hidden md:flex absolute left-0 right-0 top-1/2 -translate-y-1/2 justify-center">
            <NavigationMenu onValueChange={(value) => setIsMegamenuOpen(!!value)}>
              <NavigationMenuList>
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
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), linkClassName)}>
                      {dictionary.header.comparison}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), linkClassName)}>
                      {dictionary.header.use_cases}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), linkClassName)}>
                      {dictionary.header.pricing}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), linkClassName)}>
                      {dictionary.header.content}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Center Logo (Mobile) */}
          <div className="md:hidden">
            <Link href="/" className="flex items-center">
              <Logo className="h-7" />
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-2">
            {session ? (
              <Button asChild variant="secondary">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <Button asChild variant="ghost">
                <Link href="/login">{dictionary.header.login}</Link>
              </Button>
            )}
            <Button
              asChild
              className="font-bold bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/onboarding">{dictionary.header.start_now}</Link>
            </Button>
          </div>
        </div>
      </header>
      {isMegamenuOpen && (
        <div className="fixed inset-0 top-[calc(theme(spacing.14)+theme(spacing.10))] bg-background/80 backdrop-blur-sm z-40" />
      )}
    </>
  );
}