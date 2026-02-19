import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import { PlanetBadge } from "@/components/planet-badge";
import { SocialImpactBar } from "@/components/social-impact-bar";
import { createClient } from "@/lib/supabase/server";

export default async function MarketingLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header dictionary={dictionary} session={session} />
      <main className="flex-1">{children}</main>
      <SocialImpactBar dictionary={dictionary.social_impact} />
      <Footer dictionary={dictionary.footer} footerDictionary={dictionary.new_footer} />
      <PlanetBadge dictionary={dictionary.planet_badge} />
    </div>
  );
}