import { AuthForm } from "@/components/auth-form";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return redirect("/dashboard");
  }

  return (
    <div className="dark bg-background">
      <section className="container flex items-center justify-center py-20 md:py-32">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold tracking-tighter text-center mb-8">
            Sign In to Volcana™
          </h1>
          <AuthForm />
        </div>
      </section>
    </div>
  );
}