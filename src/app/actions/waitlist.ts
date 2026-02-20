"use server";

import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const WaitlistSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type WaitlistState = {
  error?: string;
  success?: boolean;
};

export async function addToWaitlist(
  prevState: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const supabase = await createClient();

  const validatedFields = WaitlistSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      error: "Invalid email address.",
    };
  }

  const { email } = validatedFields.data;

  const genericDomains = ["gmail.com", "outlook.com", "yahoo.com", "hotmail.com", "aol.com", "icloud.com"];
  const domain = email.split("@")[1];

  if (genericDomains.includes(domain)) {
    return {
      error: "generic_domain",
    };
  }

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