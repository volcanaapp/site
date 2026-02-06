import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import { createClient } from "@/lib/supabase/server";
import { WaitlistForm } from "@/components/waitlist-form";
import { WaitlistLogoCloud } from "@/components/waitlist-logo-cloud";

export default async function WaitlistPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const waitlistDict = dictionary.waitlist;
  const supabase = createClient();

  const { count, error } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true });

  if (error) {
    console.error("Error fetching waitlist count:", error);
  }

  // Start with a base number for social proof
  const initialCount = (count ?? 0) + 542;

  return (
    <div className="dark bg-[#181817] text-[#ECEFE7]">
      <section className="relative overflow-hidden text-center py-20 md:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-4xl mx-auto z-10 relative">
          {/* Hero */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              {waitlistDict.hero_title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {waitlistDict.hero_subtitle}
            </p>
          </div>

          {/* Form Section */}
          <div className="mb-20">
            <WaitlistForm dictionary={waitlistDict} />
          </div>

          {/* Social Proof */}
          <div>
            <p className="text-lg font-medium mb-12">
              {waitlistDict.counter_text.replace("{count}", initialCount.toString())}
            </p>
            <div>
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-8">
                {waitlistDict.logos_title}
              </h2>
              <WaitlistLogoCloud />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}