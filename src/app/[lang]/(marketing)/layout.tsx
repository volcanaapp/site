import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getDictionary } from "@/lib/get-dictionary";
import { createClient } from "@/lib/supabase/server";
import { Locale } from "@/lib/i18n-config";

export default async function MarketingLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="dark bg-background">
      <Header dictionary={dictionary} session={session} />
      <main>{children}</main>
      <Footer
        dictionary={dictionary.footer}
        footerDictionary={dictionary.new_footer}
      />
    </div>
  );
}