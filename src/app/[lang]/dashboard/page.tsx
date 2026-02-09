// import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { signOut } from "@/app/actions/auth";
// import { AccountForm } from "@/components/account-form";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  // const supabase = createClient();

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // if (!user) {
  //   return redirect("/login");
  // }

  // const { data: profile, error } = await supabase
  //   .from("profiles")
  //   .select("*")
  //   .eq("id", user.id)
  //   .single();

  // if (error && error.code !== 'PGRST116') { // PGRST116: "The result contains 0 rows"
  //   console.error("Error fetching profile:", error);
  // }

  return (
    <div className="dark bg-background">
      <section className="container flex flex-col items-center py-20 md:py-32">
        <div className="w-full max-w-4xl">
          <div className="flex justify-between items-center mb-8 px-4 sm:px-0">
            <h1 className="text-3xl font-bold tracking-tighter">
              Welcome to your Dashboard
            </h1>
            <form action={signOut}>
              <Button type="submit" variant="secondary">
                Sign Out
              </Button>
            </form>
          </div>
          <div className="bg-card p-8 rounded-lg">
            <p>Your store is ready. More features coming soon!</p>
          </div>
          {/* <AccountForm user={user} profile={profile} /> */}
        </div>
      </section>
    </div>
  );
}