import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getDictionary } from "@/lib/get-dictionary";
import { createClient } from "@/lib/supabase/server";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dictionary = await getDictionary("pt");
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