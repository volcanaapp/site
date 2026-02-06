"use client";

import { createClient } from "@/lib/supabase/client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export function AuthForm() {
  const supabase = createClient();

  return (
    <Auth
      supabaseClient={supabase}
      appearance={{
        theme: ThemeSupa,
        variables: {
          default: {
            colors: {
              brand: "hsl(75, 99%, 62%)",
              brandAccent: "hsl(75, 99%, 52%)",
              defaultButtonBackground: "#1C1C1B",
              defaultButtonBackgroundHover: "#2a2a28",
              inputBackground: "#353634",
              inputBorder: "#565754",
              inputText: "white",
              inputLabelText: "#ECEFE7",
              messageText: "#ECEFE7",
              messageTextDanger: "#ff6b6b",
            },
            radii: {
              borderRadiusButton: "0.75rem",
              inputBorderRadius: "0.75rem",
            }
          },
        },
      }}
      theme="dark"
      showLinks={false}
      providers={[]}
      redirectMethod="push"
    />
  );
}