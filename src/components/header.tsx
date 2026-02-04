"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { TopBar } from "./top-bar";
import { Logo } from "./logo";

export function Header({ dictionary }: { dictionary: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#", label: dictionary.header.features },
    { href: "#", label: dictionary.header.pricing },
    { href: "#", label: dictionary.header.blog },
  ];

  return (
    <>
      <TopBar dictionary={dictionary.topbar} />
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center">
              <Logo className="h-7" />
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
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
          
          <div className="flex flex-1 items-center justify-center md:hidden">
              <Link href="/" className="flex items-center">
                  <Logo className="h-7" />
              </Link>
          </div>

          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button variant="ghost">{dictionary.header.login}</Button>
            <Button className="font-bold bg-primary text-primary-foreground hover:bg-primary/90">{dictionary.header.start_now}</Button>
          </div>
        </div>
      </header>
    </>
  );
}