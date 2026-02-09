"use client";

import { Sidebar } from "./sidebar";
import type { User } from "@supabase/supabase-js";

type Profile = {
  first_name: string | null;
  last_name: string | null;
} | null;

export function DashboardLayout({
  children,
  user,
  profile,
}: {
  children: React.ReactNode;
  user: User;
  profile: Profile;
}) {
  return (
    <div className="dark bg-background min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
        <Sidebar user={user} profile={profile} />
        <main className="p-4 sm:p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}