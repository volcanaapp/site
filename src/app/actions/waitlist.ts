"use server";

import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const WaitlistSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export async function addToWaitlist(prevState: any, formData: FormData) {
  const supabase = createClient();

  const validatedFields = WaitlistSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      error: "Invalid email address.",
    };
  }

  const { email } = validatedFields.data;

  const { error } = await supabase.from("waitlist").insert({ email });

  if (error) {
    if (error.code === "23505") { // Unique constraint violation
      return {
        error: "duplicate",
      };
    }
    console.error("Supabase error:", error);
    return {
      error: "generic",
    };
  }

  return {
    success: true,
  };
}