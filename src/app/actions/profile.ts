"use server";

import { createClient } from "@/lib/supabase/server";
import { z } from "zod";

const ProfileSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

export async function updateProfile(prevState: any, formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "You must be logged in to update your profile." };
  }

  const validatedFields = ProfileSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
  });

  if (!validatedFields.success) {
    return {
      error: "Invalid data provided.",
    };
  }

  const { firstName, lastName } = validatedFields.data;

  const { error } = await supabase
    .from("profiles")
    .update({
      first_name: firstName,
      last_name: lastName,
      updated_at: new Date().toISOString(),
    })
    .eq("id", user.id);

  if (error) {
    console.error("Error updating profile:", error);
    return { error: "Failed to update profile." };
  }

  return { success: true };
}