import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut } from "@/app/actions/auth";

export default async function DashboardPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="dark bg-background">
      <section className="container flex flex-col items-center justify-center py-20 md:py-32">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl font-bold tracking-tighter">
            Welcome to your Dashboard
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            You are logged in as {user.email}.
          </p>
          <form action={signOut} className="mt-6">
            <Button type="submit" variant="secondary">
              Sign Out
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}