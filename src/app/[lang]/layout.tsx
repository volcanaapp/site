import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import { AppWrapper } from "@/components/app-wrapper";
import { PlanetBadge } from "@/components/planet-badge";
import { SocialImpactBar } from "@/components/social-impact-bar";
import { Toaster } from "@/components/ui/sonner";
// import { createClient } from "@/lib/supabase/server";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Volcana™",
  description: "A primeira plataforma de e-commerce autônoma da América Latina.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  // const supabase = createClient();
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();
  const session = null;

  return (
    <html lang={params.lang}>
      <body className={`${outfit.variable} font-sans antialiased`}>
        <AppWrapper>
          <div className="relative flex min-h-screen flex-col bg-background">
            <Header dictionary={dictionary} session={session} />
            <main className="flex-1">{children}</main>
            <SocialImpactBar dictionary={dictionary.social_impact} />
            <Footer dictionary={dictionary.footer} footerDictionary={dictionary.new_footer} />
            <PlanetBadge dictionary={dictionary.planet_badge} />
          </div>
          <Toaster richColors theme="dark" />
        </AppWrapper>
      </body>
    </html>
  );
}