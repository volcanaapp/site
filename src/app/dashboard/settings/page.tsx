import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { AccountForm } from "@/components/account-form";

export default async function SettingsPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error && error.code !== 'PGRST116') {
    console.error("Error fetching profile:", error);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tighter mb-8">
        Configurações da Conta
      </h1>
      <div className="max-w-2xl">
        <AccountForm user={user} profile={profile} />
      </div>
    </div>
  );
}