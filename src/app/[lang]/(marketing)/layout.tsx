import type { Metadata } from "next";
import { SimpleFooter } from "@/components/simple-footer";
import { Header } from "@/components/header";
import { getDictionary } from "@/lib/get-dictionary";
import { createClient } from "@/lib/supabase/server";
import { Locale } from "@/lib/i18n-config";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default async function MarketingLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="dark bg-background">
      <Header dictionary={dictionary} session={session} lang={lang} />
      <main>{children}</main>
      <SimpleFooter />
    </div>
  );
}