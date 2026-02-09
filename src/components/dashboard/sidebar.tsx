"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Settings,
  Package,
  Users,
  ShoppingCart,
  LogOut,
} from "lucide-react";
import type { User } from "@supabase/supabase-js";

type Profile = {
  first_name: string | null;
  last_name: string | null;
} | null;

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/orders", label: "Pedidos", icon: ShoppingCart },
  { href: "/dashboard/products", label: "Produtos", icon: Package },
  { href: "/dashboard/customers", label: "Clientes", icon: Users },
  { href: "/dashboard/settings", label: "Configurações", icon: Settings },
];

export function Sidebar({ user, profile }: { user: User; profile: Profile }) {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const getLocalizedPath = (path: string) => `/${locale}${path}`;

  const userDisplayName = profile?.first_name || user.email;

  return (
    <aside className="hidden md:flex flex-col h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border p-6">
      <div className="mb-12">
        <Link href={getLocalizedPath("/dashboard")}>
          <Logo className="h-8" />
        </Link>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={getLocalizedPath(item.href)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors",
                  pathname.endsWith(item.href)
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
        <div className="mb-4 border-t border-sidebar-border -mx-6" />
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-sm">{userDisplayName}</p>
            <p className="text-xs text-sidebar-foreground/60 truncate max-w-[150px]">{user.email}</p>
          </div>
          <form action={signOut}>
            <Button variant="ghost" size="icon" type="submit" className="text-sidebar-foreground/70 hover:text-sidebar-accent-foreground hover:bg-sidebar-accent/50">
              <LogOut className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </aside>
  );
}